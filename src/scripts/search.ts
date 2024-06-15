import { GetPlayerInformation } from "../stores/destinyPlayerData";
import { navigate } from "astro:transitions/client";

window.addEventListener("DOMContentLoaded", () => {
    const inputUsername = document.querySelector<HTMLInputElement>(`#searchInputUsername`);
    const buttonUsernname = document.querySelector<HTMLInputElement>(`#searchButtontUsername`);
    const listUsernames = document.querySelector<HTMLInputElement>(`#players`);

    // Check if the current URL has any query params
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const queryParamName = "user";
    const query = params.get(queryParamName);

    inputUsername?.addEventListener("keyup", (e) => {
        if (e.key === "Enter") buttonUsernname?.dispatchEvent(new Event("click", { bubbles: true }));
    });
    inputUsername?.addEventListener("input", (e) => {
        var inputSelection = document.querySelector<HTMLOptionElement>(`#players option[value='${inputUsername.value}']`)?.value;
        if (inputSelection != undefined) buttonUsernname?.dispatchEvent(new Event("click", { bubbles: true }));
    });
    buttonUsernname?.addEventListener("click", async (e) => {
        let users = await GetPlayerInformation(inputUsername?.value || "");
        //console.log(JSON.stringify(users));
        if (users.length == 1) {
            const params = new URLSearchParams();
            params.set("id", users[0].bungieNetMembershipId);
            params.set("type", users[0].membershipType.toString());
            navigate(`${import.meta.env.BASE_URL}/player?${params}`);
        } else {
            if (listUsernames?.hasChildNodes()) listUsernames.replaceChildren();
            users.forEach(function (item) {
                let option = document.createElement("option");
                option.text = item.name;
                option.value = item.name
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