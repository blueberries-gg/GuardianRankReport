import { searchDestinyPlayerByBungieName, BungieMembershipType, HttpClientConfig, ServerResponse } from "bungie-api-ts/destiny2";
import { ExactSearchRequest, searchByGlobalNamePost, UserSearchPrefixRequest } from "bungie-api-ts/user";
import { atom } from "nanostores";
import { IsDestinyResponseValid } from "../utils/destinyExtensions/APIExtensions";
import { getCommonSettings, getGlobalAlerts } from "bungie-api-ts/core";


export const healthStatus = atom(true);
export const DestinyEnabled = atom(true);
export const healthStatusReason = atom("No alert for the moment, you should not be seeing this");
export const healthStatusTitle = atom("Error");

export async function $http(config: HttpClientConfig) {
	const url = new URL(config.url);
	url.search = new URLSearchParams(config.params).toString();

	const headers: HeadersInit = {};
	headers["X-API-Key"] = import.meta.env.PUBLIC_BUNGIE_API_KEY;

	return await fetch(url, {
		method: config.method,
		body: config.body == undefined ? undefined : JSON.stringify(config.body),
		headers: headers,
		credentials: "include",
		mode: "cors",
		referrerPolicy: "origin",
	})
		.then(FetchSuccess, FetchErrorProcess)
		.catch(FetchErrorProcess);
}

export function GetBungieErrorMessage<T>(response: ServerResponse<T>) {
	if ((response.ErrorCode as number) === -1) healthStatusTitle.set(`Internal Error(${response.ErrorStatus})`);
	else healthStatusTitle.set(`Bungie(${response.ErrorStatus})`);

	healthStatusReason.set(`${response.Message}`);
	healthStatus.set(false);
}

async function FetchSuccess<T>(r: Response | undefined): Promise<T> {
	if (DestinyEnabled.get()) {
		healthStatusReason.set("");
		healthStatusTitle.set("");
		healthStatus.set(true);
	}
	return await r?.json();
}

export const GetHealthStatus = async () => {
	const destinySettings = await getCommonSettings($http);
	let destinyEnabled = false;
	if (IsDestinyResponseValid(destinySettings, GetBungieErrorMessage)) destinyEnabled = destinySettings.Response.systems["Destiny2"].enabled;
	if (!destinyEnabled) {
		healthStatusReason.set("Destiny is offline");
		const globalAlert = getGlobalAlerts($http, {});
		if (IsDestinyResponseValid(destinySettings, GetBungieErrorMessage)) healthStatusReason.set((await globalAlert).Response[0].AlertHtml);
		healthStatus.set(false);
	}
	DestinyEnabled.set(destinyEnabled);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FetchErrorProcess(e: Error): Promise<any> {
	return new Promise((resolve) => {
		resolve({ ErrorCode: -1, Message: e.message, ErrorStatus: "FetchError" });
	});
}

async function GetPlayerMembershipByFullName(name: string, code: number) {
	const usersResponse = await searchDestinyPlayerByBungieName($http, { membershipType: BungieMembershipType.All }, {
		displayName: name,
		displayNameCode: code,
	} as ExactSearchRequest);
	if (IsDestinyResponseValid(usersResponse, GetBungieErrorMessage)) {
		return [
			{
				bungieNetMembershipId: usersResponse.Response[0]?.membershipId,
				membershipType: usersResponse.Response[0]?.membershipType,
				name: `${usersResponse.Response[0].bungieGlobalDisplayName}#${("000" + usersResponse.Response[0].bungieGlobalDisplayNameCode).slice(-4)}`,
				membershipTypes: usersResponse.Response[0]?.applicableMembershipTypes[0],
			},
		];
	}
	return [];
}

async function GetPlayerMembershipsByPrefix(name: string) {
	let pageNumber = 0;
	let hasMore = true;
	let users: {
		bungieNetMembershipId: string;
		membershipType: BungieMembershipType;
		name: string;
		membershipTypes: BungieMembershipType[];
	}[] = [];

	while (hasMore) {
		const usersResponse = await searchByGlobalNamePost($http, { page: pageNumber }, {
			displayNamePrefix: name,
		} as UserSearchPrefixRequest);

		if (IsDestinyResponseValid(usersResponse, GetBungieErrorMessage)) {
			hasMore = usersResponse.Response.hasMore;
			pageNumber++;
			users = users.concat(
				usersResponse.Response.searchResults
					.map((x) => {
						return {
							bungieNetMembershipId: x.destinyMemberships[0]?.membershipId,
							membershipType: x.destinyMemberships[0]?.membershipType,
							name: `${x.bungieGlobalDisplayName}#${("000" + x.bungieGlobalDisplayNameCode).slice(-4)}`,
							membershipTypes: x.destinyMemberships.map((x) => x.membershipType),
						};
					})
					.filter((x) => x.bungieNetMembershipId != undefined && x.membershipType != undefined)
			);
		} else hasMore = false;
	}
	return users;
}

export const GetMembershipPlayerInformation = async (query: string) => {
	const nameSplit = query.split("#");
	if (nameSplit.length === 1) {
		return await GetPlayerMembershipsByPrefix(query);
	} else return await GetPlayerMembershipByFullName(nameSplit[0], parseInt(nameSplit[1], 10));
};
