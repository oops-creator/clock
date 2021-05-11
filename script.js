const deg = 6;
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


setInterval(() => {
    
    let day = new Date();
    let hr = day.getHours() * 30;
    let mn = day.getMinutes() * deg;
    let sc = day.getSeconds() * deg;

    hrs.style.transform = `rotateZ(${(hr) + (mn / 12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${sc}deg)`;
})