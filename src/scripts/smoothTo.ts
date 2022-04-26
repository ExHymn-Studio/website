smoothTo("idea");
smoothTo("about");
function smoothTo(target: string): void {
    const navBtn = document.getElementById(`${target}-link`) as HTMLAnchorElement;
    const el = document.getElementById(target) as HTMLElement;
    navBtn.addEventListener("click", e => {
        e.preventDefault();
        el.scrollIntoView({
            block: "start",
            behavior: "smooth",
            inline: "start"
        });
    })
}