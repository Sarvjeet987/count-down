const endDate = "13 May 2025 10:00 PM";


document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate) //uss tym pr kya tym ho rha hoga
    const now = new Date()
    const diff =  (end-now) / 1000;
    //convert into days
    if(diff < 0) return; // not count in negative
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600) % 24;  
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff % 60);                     
}
clock()


/**
 * 1day = 24h
 * 1hr = 60m
 * 60min = 3600sec
*/

setInterval(
    ()=>{
        clock()
    },
    1000
)
