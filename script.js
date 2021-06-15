const counter = "1 Jan 2023";

const c = setInterval(() => {

    const endDate = new Date(counter);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hrs = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    const countDown = document.getElementById("counter");
    countDown.textContent = `${days}dias ${hrs}hrs : ${format(min)}min : ${format(sec)}s` */

}, 1000)

function format(t){
    return t < 10 ? `0${t}` : t;
}