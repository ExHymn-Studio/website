const PASSWORD = "hallo123";

if (checkDgpsLock()) {
    const page = document.getElementById("main") as HTMLDivElement;

    page.classList.add("hidden");
    lockInit(page);
} else {
    makeDgpsHash()
}

function checkDgpsLock(): boolean {
    const isUnlocked = localStorage.getItem("unlocked");
    return (location.hash === "#d" || !isUnlocked);
}

function lockInit(page: HTMLDivElement) {
    const lock = document.getElementById("dgpslock") as HTMLDivElement;
    lock.classList.remove("hidden");

    const submitFakePwBtn = document.getElementById("submitfake") as HTMLDivElement;
    submitFakePwBtn.addEventListener("click", () => {
        const fakePw = (document.getElementById("pw") as HTMLInputElement).value;

        if (fakePw == PASSWORD) {
            lock.classList.add("hidden");
            page.classList.remove("hidden");
            localStorage.setItem("unlocked", "yes");
        } else {
            const wrongPw = document.getElementById("wrong-pw") as HTMLParagraphElement;

            wrongPw.classList.remove("hidden");
        }
    });
}

function makeDgpsHash() {
    if (localStorage.getItem("unlocked")) location.hash = "#d";
}