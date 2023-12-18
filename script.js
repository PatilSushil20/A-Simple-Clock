const showDate = document.getElementById("date")
const showTime = document.getElementById("time")

let date
let time


setInterval(() => {
    const getDate = new Date()
    const hours = getDate.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours
    const AMPM = hours >= 12 ? "PM" : "AM"

    time = `${hoursForClock} : ${getDate.getMinutes()} : ${getDate.getSeconds()}${AMPM}`
    date = getDate.toDateString()

    showDate.innerHTML = date
    showTime.innerHTML = time
}, 1000);

