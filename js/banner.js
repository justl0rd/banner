let bannerNum = 0;
const firstSlide = document.querySelector(".slide-1");
const firstSlideText = document.querySelector(".slide-1__text");
const firstSlideSmallText = document.querySelector(".slide-1__small-text");
const firstLines = document.querySelector(".slide-1__lines");
const firstClock = document.querySelector(".slide-1__clock");
const firstBigClock = document.querySelector(".slide-1__big-clock");

const secondSlide = document.querySelector(".slide-2");
const secondSlideText = document.querySelector(".slide-2__text");
const secondSlideSmallText = document.querySelector(".slide-2__small-text");
const secondLines = document.querySelector(".slide-2__lines");
const secondClock = document.querySelector(".slide-2__clock");
const secondBigClock = document.querySelector(".slide-2__big-clock");

const thirdSlide = document.querySelector(".slide-3");
const thirdLogo = document.querySelector(".slide-3__logo-wrapp");
const thirdSlideText = document.querySelector(".slide-3__text");
const thirdLink = document.querySelector(".slide-3__link");
const thirdLines = document.querySelector(".slide-3__lines");

function startBanner() {
    if (bannerNum === 0) {
        setTimeout(() => {
            firstSlide.style.display = "block";
        }, 200);
        setTimeout(() => {
            firstSlideText.style.transform = "translate(220px, -50%)";
        }, 1000);
        setTimeout(() => {
            firstSlideSmallText.style.opacity = "1";
        }, 2000);
        setTimeout(() => {
            firstClock.style.transform = "translate(0, -167px) scale(1)";
        }, 2000);
        setTimeout(() => {
            firstLines.style.border = "1px solid #6d8eaa";
            firstBigClock.style.transform = "translate(-57%, -40%) scale(1)";
        }, 3000);
        setTimeout(() => {
            firstLines.style.border = "1px solid #ffffff";
        }, 13000);
        setTimeout(() => {
            bannerNum = 1;
            firstSlideText.style.transform = "translate(0, -50%)";
            firstClock.style.transform = "translate(0, 0) scale(0.3)";
            firstBigClock.style.transform = "translate(0, -50%) scale(0.3)";
            firstSlideSmallText.style.opacity = "0";
        }, 13500);
        setTimeout(() => {
            firstSlide.style.display = "none";
        }, 14800);
        } else if (bannerNum === 1) {
            setTimeout(() => {
                secondSlide.style.display = "block";
            }, 200);
            setTimeout(() => {
                secondSlideText.style.transform = "translate(220px, -50%)";
            }, 1000);
            setTimeout(() => {
                secondSlideSmallText.style.opacity = "1";
            }, 2000);
            setTimeout(() => {
                secondClock.style.transform = "translate(0, -167px) scale(1)";
            }, 2000);
            setTimeout(() => {
                secondLines.style.border = "1px solid #9d5b52";
                secondBigClock.style.transform = "translate(-57%, -40%) scale(1)";
            }, 3000);
            setTimeout(() => {
                secondLines.style.border = "1px solid #ffffff";
            }, 13000);
            setTimeout(() => {
                bannerNum = 2;
                secondSlideText.style.transform = "translate(0, -50%)";
                secondClock.style.transform = "translate(0, 0) scale(0.3)";
                secondBigClock.style.transform = "translate(0, -50%) scale(0.3)";
                secondSlideSmallText.style.opacity = "0";
            }, 13500);
            setTimeout(() => {
                secondSlide.style.display = "none";
            }, 14800);
        }
        else if (bannerNum === 2) {
            setTimeout(() => {
                thirdSlide.style.display = "block";
            }, 200);
            setTimeout(() => {
                thirdLogo.style.opacity = "1";
            }, 1000);
            setTimeout(() => {
                thirdSlideText.style.opacity = "1";
            }, 2000);
            setTimeout(() => {
                thirdLink.style.opacity = "1";
            }, 3000);
            setTimeout(() => {
                thirdLines.style.border = "1px solid #c7c7c7";
            }, 3600);
            setTimeout(() => {
                thirdLines.style.border = "1px solid #ffffff";
            }, 13000);
            setTimeout(() => {
                bannerNum = 0;
                thirdLink.style.opacity = "0";
                thirdSlideText.style.opacity = "0";
                thirdLogo.style.opacity = "0";
            }, 13500);
            setTimeout(() => {
                thirdSlide.style.display = "none";
            }, 14800);
        }
    }
startBanner();
setInterval(startBanner, 15000);