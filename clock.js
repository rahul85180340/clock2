// const options = { weekday: 'long', year: 'numeric', month:'numeric' , day:'numeric'}

setInterval(showtime,1000);

function showtime() {
   
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM"


    if (hour >= 12){
        if ( hour > 12 )hour -=12;
        am_pm ="PM"
    }
    else if(hour == 0) {
        hr=12;
        am_pm ="AM"    }


        hour = 
        hour < 10 ? "0" + hour : hour; 
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? + "0" +sec : sec;


        let currentTime = 
        hour+
        ":"+
        min+
        ":"+
        sec+
        am_pm;


        document.getElementById(
            "clock"
        ).innerHTML = currentTime;
}

showtime();


function day(){

    let day = new Date();
    let da = day.getDay();



    if(da == 0){
        da = "SUNDAY";
    }
    else if(da == 1){
        da = "MONDAY";
    }
    else if(da == 2){
        da = "TUESDAY";
    }
    else if (da == 3){
        da = "WEDNESDAY";
    }
    else if (da == 4){
        da = "THURSDAY";
    }
    else if (da == 5){
        da = "FRIDAY";
    }
    else if (da == 6){
        da = "SATURDAY";
    }


    document.getElementById('day').innerHTML = da;
}

setInterval(day,0.0)


function date(){

    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();


    if(m == 0){
        m = 1;
    }
    else if(m == 1){
        m = 2;
    }
    else if(m == 2){
        m = 3;
    }
    else if(m == 3){
        m = 4;
    }
    else if(m == 4){
        m = 5;
    }
    else if(m == 5){
        m = 6;
    }
    else if(m == 6){
        m = 7;
    }
    else if(m == 7){
        m = 8;
    }
    else if(m == 8){
        m = 9;
    }
    else if(m == 9){
        m = 10;
    }
    else if(m == 10){
        m = 11;
    }
    else if(m == 11){
        m = 12;
    }


    document.getElementById('pra').innerHTML = d + "-" + m + "-" + y;

}

setInterval(date,1000)