const dialogFullScreen = document.querySelector<HTMLDialogElement>("#dialogFullScreen")!;
dialogFullScreen.addEventListener("transitionend", (event) => {
    if (dialogFullScreen.getAttribute("open") == undefined && event.propertyName == "width") {
        dialogFullScreen.style.display = "none";
        document.body.style.overflow = "scroll";
        document.documentElement.style.overflow = "scroll";
    }
});
export function showModal() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    dialogFullScreen.style.display = "flex";
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => dialogFullScreen.show()));
}

document.onkeydown = function (evt) {
    let isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
    }
    //  else {
    //     isEscape = (evt.keyCode === 27);
    // }
    if (isEscape) {
        if (dialogFullScreen.getAttribute("open") !== null) dialogFullScreen.close();
    }
};