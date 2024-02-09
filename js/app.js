const endDate = "09 Feb 2024 11:40 PM"

document.getElementById("end-date").innerText = endDate;

let audio = document.getElementById("myAudio")

const inputs = document.querySelectorAll("input")


function playAudio() {
    audio.play();
}

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);

    if(diff < 0) {
        clearInterval(intervalId)
        playAudio();
        return;
    }

     //convert into days
    inputs[0].value = Math.floor(diff/3600/24);


     //convert into hours
    inputs[1].value = Math.floor((diff/3600)%24);


     //convert into minutes

     inputs[2].value = Math.floor(diff/60)%60

     //convert into seconds

     inputs[3].value = Math.floor(diff)%60;



}
clock();


/*

1 days = 24 hrs
1 hr = 60 mins
60 min = 3600 sec

*/

const intervalId = setInterval(
    () => {
        clock()
    },1000
)