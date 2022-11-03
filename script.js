const sidebar = document.querySelector(".sidebar");
const sidebarSpan = document.querySelectorAll(".sidebarSpan");
const sideBarSectionOneToggleOnOff = document.querySelector(".sidebarSectionOne");
const sidebarHoverStyle = document.querySelectorAll(".sidebarHoverStyle");

const lightThemeBtn = document.querySelector(".lightThemeBtn");
const darkThemeBtn = document.querySelector(".darkThemeBtn");
const logoLight = document.querySelectorAll(".logoLight");
const logoDark = document.querySelectorAll(".logoDark");

let clicked = false;
const element = document.body;

sidebarToggle();
LightAndDarkThemeBtn();

function sidebarToggle() {
    sideBarSectionOneToggleOnOff.addEventListener("click", e => {
        if (clicked === false) {
            clicked = true;
            sidebar.classList.add("sidebarTransition");
            sidebarSpan.forEach(e => {
                e.classList.add("sidebarSpanTransition");
            });
            sidebarHoverStyle.forEach(e => {
                e.classList.add("sidebarHoverStyleMargin");
            });
        }
        else if (clicked === true) {
            clicked = false;
            sidebar.classList.remove("sidebarTransition");
            sidebarSpan.forEach(e => {
                e.classList.remove("sidebarSpanTransition");
            });
            sidebarHoverStyle.forEach(e => {
                e.classList.remove("sidebarHoverStyleMargin");
            });
        }
    });
}

function LightAndDarkThemeBtn() {
    lightThemeBtn.addEventListener("click", e => {
        element.classList.add("darkThemeRootChange");
        darkThemeBtn.style.display = "block";
        lightThemeBtn.style.display = "none";

        logoDark.forEach(e => {
            e.style.display = "block";
        })
        logoLight.forEach(e => {
            e.style.display = "none";
        })
    })

    darkThemeBtn.addEventListener("click", e => {
        element.classList.remove("darkThemeRootChange");
        darkThemeBtn.style.display = "none";
        lightThemeBtn.style.display = "block";

        logoDark.forEach(e => {
            e.style.display = "none";
        })
        logoLight.forEach(e => {
            e.style.display = "block";
        })
    })
}

