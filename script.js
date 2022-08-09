fetch('info.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    appendData(data);
})
.catch(function(err){
    console.log(err);
});

function appendData(data){
   document.getElementById("d").addEventListener('click',  function (){
    document.getElementById("workCurrent").innerHTML = data[0].timeframes.daily.current;
    document.getElementById("playCurrent").innerHTML = data[1].timeframes.daily.current;
    document.getElementById("studyCurrent").innerHTML = data[2].timeframes.daily.current;
    document.getElementById("exerciseCurrent").innerHTML = data[3].timeframes.daily.current;
    document.getElementById("socialCurrent").innerHTML = data[4].timeframes.daily.current;
    document.getElementById("selfCurrent").innerHTML = data[5].timeframes.daily.current;

    document.getElementById("workPrevious").innerHTML = data[0].timeframes.daily.previous;
    document.getElementById("playPrevious").innerHTML = data[1].timeframes.daily.previous;
    document.getElementById("studyPrevious").innerHTML = data[2].timeframes.daily.previous;
    document.getElementById("exercisePrevious").innerHTML = data[3].timeframes.daily.previous;
    document.getElementById("socialPrevious").innerHTML = data[4].timeframes.daily.previous;
    document.getElementById("selfPrevious").innerHTML = data[5].timeframes.daily.previous;
    }
   )

    document.getElementById("w").addEventListener('click', function (){
        document.getElementById("workCurrent").innerHTML = data[0].timeframes.weekly.current;
        document.getElementById("playCurrent").innerHTML = data[1].timeframes.weekly.current;
        document.getElementById("studyCurrent").innerHTML = data[2].timeframes.weekly.current;
        document.getElementById("exerciseCurrent").innerHTML = data[3].timeframes.weekly.current;
        document.getElementById("socialCurrent").innerHTML = data[4].timeframes.weekly.current;
        document.getElementById("selfCurrent").innerHTML = data[5].timeframes.weekly.current;

        document.getElementById("workPrevious").innerHTML = data[0].timeframes.weekly.previous;
        document.getElementById("playPrevious").innerHTML = data[1].timeframes.weekly.previous;
        document.getElementById("studyPrevious").innerHTML = data[2].timeframes.weekly.previous;
        document.getElementById("exercisePrevious").innerHTML = data[3].timeframes.weekly.previous;
        document.getElementById("socialPrevious").innerHTML = data[4].timeframes.weekly.previous;
        document.getElementById("selfPrevious").innerHTML = data[5].timeframes.weekly.previous;
    }
    )

    document.getElementById("m").addEventListener('click', function (){
        document.getElementById("workCurrent").innerHTML = data[0].timeframes.monthly.current;
        document.getElementById("playCurrent").innerHTML = data[1].timeframes.monthly.current;
        document.getElementById("studyCurrent").innerHTML = data[2].timeframes.monthly.current;
        document.getElementById("exerciseCurrent").innerHTML = data[3].timeframes.monthly.current;
        document.getElementById("socialCurrent").innerHTML = data[4].timeframes.monthly.current;
        document.getElementById("selfCurrent").innerHTML = data[5].timeframes.monthly.current;

        document.getElementById("workPrevious").innerHTML = data[0].timeframes.monthly.previous;
        document.getElementById("playPrevious").innerHTML = data[1].timeframes.monthly.previous;
        document.getElementById("studyPrevious").innerHTML = data[2].timeframes.monthly.previous;
        document.getElementById("exercisePrevious").innerHTML = data[3].timeframes.monthly.previous;
        document.getElementById("socialPrevious").innerHTML = data[4].timeframes.monthly.previous;
        document.getElementById("selfPrevious").innerHTML = data[5].timeframes.monthly.previous;
    }
    )

document.getElementById("work").innerHTML = data[0].title;
document.getElementById("play").innerHTML =data[1].title;
document.getElementById("study").innerHTML = data[2].title;
document.getElementById("exercise").innerHTML = data[3].title;
document.getElementById("social").innerHTML = data[4].title;
document.getElementById("self").innerHTML = data[5].title;
}

