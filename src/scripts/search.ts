import { navigate } from "astro:transitions/client";
import { GetMembershipPlayerInformation } from "../stores/destinyService";

window.addEventListener("DOMContentLoaded", () => {
	const inputUsername = document.querySelector<HTMLInputElement>(`#searchInputUsername`);
	const buttonUsername = document.querySelector<HTMLInputElement>(`#searchButtonUsername`);
	const listUsernames = document.querySelector<HTMLInputElement>(`#players`);
	const playerSearchLoading = document.querySelector<HTMLElement>(`#playerSearchLoading`);

	// Check if the current URL has any query params
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const queryParamName = "user";
	const query = params.get(queryParamName);

	inputUsername?.addEventListener("keyup", (e) => {
		if (e.key === "Enter") buttonUsername?.dispatchEvent(new Event("click", { bubbles: true }));
	});
	inputUsername?.addEventListener("input", () => {
		const inputSelection = document.querySelector<HTMLOptionElement>(`#players option[value='${inputUsername.value}']`)?.text;
		if (inputSelection != undefined) {
			navigate(inputSelection);
		}
	});
	buttonUsername?.addEventListener("click", async () => {
		playerSearchLoading!.style.display = "flex";
		const users = await GetMembershipPlayerInformation(inputUsername?.value || "");
		playerSearchLoading!.style.display = "none";
		users.sort((x, y) => x.name.localeCompare(y.name));
		if (users.length === 1) {
			const params = new URLSearchParams();
			params.set("id", users[0].bungieNetMembershipId);
			params.set("type", users[0].membershipType.toString());
			navigate(`${import.meta.env.BASE_URL}player?${params}`);
		} else {
			if (listUsernames?.hasChildNodes()) listUsernames.replaceChildren();
			users.forEach(function (item) {
				const option = document.createElement("option");

				const params = new URLSearchParams();
				params.set("id", item.bungieNetMembershipId);
				params.set("type", item.membershipType.toString());

				option.text = `${import.meta.env.BASE_URL}player?${params}`;
				option.value = item.name;
				option.label = item.name;
				listUsernames?.appendChild(option);
				inputUsername?.focus();
			});
		}
	});

	// If query exists on page load
	if (query && inputUsername) {
		inputUsername.value = query;
		inputUsername.dispatchEvent(new Event("input", { bubbles: true }));
	}
});
