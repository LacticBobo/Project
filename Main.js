//setup End Date for countdown (getTime == Time in Milleseconds)
let launchDate = new Date("mar 11, 2024 11:30:00").getTime();

//setup timer tick to tic every 1 seond
let counter = setInterval(tick, 1000);

function tick () {
    // get current time
    let now = new Date().getTime();

    // get the difference in time to get the time left
    let t = launchDate - now;

    // check if time is above 0
    if (t > 0) {
        //setup Days, Hours, Minutes and Seconds
        // code to calculate days
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //prefix days less that 10 eg 9 to be 09
        if (days < 10) {days = "0" + days;}

        //code to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {hours = "0" + hours;}

        //code to calculate mins
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) {mins = "0" + mins;}

        //code to calculate secs
        let secs = Math.floor((t % (1000 * 60)) / (1000));
        if (secs < 10) {secs = "0" + secs;}

        //set time string
        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        //set time on project
        document.querySelector('.countdown').innerHTML = time;
        }
}


function getButtonText() {
    let button = document.getElementById('btn');
    let text = button.innerText;
    alert(text);
}
