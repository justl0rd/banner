let bannerNum = 0;
const firstSlideText = document.querySelector(".slide-1__text");
const firstSlideSmallText = document.querySelector(".slide-1__small-text");
const firstLines = document.querySelector(".slide-1__lines");
const firstClock = document.querySelector(".slide-1__clock");
const firstBigClock = document.querySelector(".slide-1__big-clock");

const secondSlideText = document.querySelector(".slide-2__text");
const secondSlideSmallText = document.querySelector(".slide-2__small-text");
const secondLines = document.querySelector(".slide-2__lines");
const secondClock = document.querySelector(".slide-2__clock");

function startBanner() {
    if (bannerNum === 0) {
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
            firstBigClock.style.transform = "translate(-55%, -45%) scale(1)";
        }, 3000);
        setTimeout(() => {
            bannerNum = 1;
            firstSlideText.style.transform = "translate(0, -50%)";
            firstLines.style.border = "1px solid #ffffff";
            firstClock.style.transform = "translate(0, 0) scale(0.6)";
            firstBigClock.style.transform = "scale(0.6)";
            firstSlideSmallText.style.opacity = "0";
        }, 9000);
        } else if (bannerNum === 1) {
        setTimeout(() => {
            secondSlideText.style.transform = "translate(0, -50%)";
        }, 1000);
        setTimeout(() => {
            secondClock.style.transform = "translate(0, 0)";
        }, 2000);
        setTimeout(() => {
            secondLines.style.opacity = "1";
        }, 2500);
        setTimeout(() => {
            secondLines.style.opacity = "0";
        }, 8000);
        setTimeout(() => {
            bannerNum = 0;
            secondSlideText.style.transform = "translate(-120%, -50%)";
            secondClock.style.transform = "translate(0, -150%)";
        }, 9000);
    }
}
startBanner();
setInterval(startBanner, 10000);