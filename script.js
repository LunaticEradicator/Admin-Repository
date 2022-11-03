const sideBarSectionOneToggleOnOff = document.querySelector(".sidebarSectionOne");

const sidebar = document.querySelector(".sidebar");
const sidebarSpan = document.querySelectorAll(".sidebarSpan");

const sidebarHoverStyle = document.querySelectorAll(".sidebarHoverStyle");

const lightThemeBtn = document.querySelector(".lightThemeBtn");
const darkThemeBtn = document.querySelector(".darkThemeBtn");

const logoLight = document.querySelectorAll(".logoLight");
const logoDark = document.querySelectorAll(".logoDark");

const element = document.body;
let clicked = false;

sideBarSectionOneToggleOnOff.addEventListener("click", e => {
    if (clicked === false) {
        clicked = true;
        sidebar.classList.add("sidebarTransition");
        sidebarSpan.forEach(span => {
            span.classList.add("sidebarSpanTransition");
        });
        sidebarHoverStyle.forEach(span => {
            span.classList.add("hoverStyleMargin");
        });
    }
    else if (clicked === true) {
        clicked = false;
        sidebar.classList.remove("sidebarTransition");
        sidebarSpan.forEach(span => {
            span.classList.remove("sidebarSpanTransition");
        });
        sidebarHoverStyle.forEach(span => {
            span.classList.remove("hoverStyleMargin");
        });
    }
});

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