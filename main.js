var minutes = 25;
var seconds = "00";
var count = 1;
var no_of_session = 0;
var session_completed = 0;
var brake = 0;


var click = new Audio("click.mp3");
var reset = new Audio("reset.wav");
var bell_short = new Audio("bell short.wav");
var bell_long = new Audio("bell long.wav");
var brake_over = new Audio("brake over.wav");

// function x() {
    // no_of_session = document.getElementById("session_count").value;
    // document.getElementById("no_of_session_count").innerHTML = no_of_session;

// }

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
    no_of_session = document.getElementById("session_count").value;
    // document.getElementById("no_of_session_count").innerHTML = no_of_session;
    if(no_of_session <= 0 || no_of_session == NaN)
    {
        document.getElementById("done").innerHTML = "Enter Numer of Sessions First!!";
        //
        return;
    }

    if(no_of_session == session_completed)
    {
        document.getElementById("done").innerHTML = session_completed + " Session Over!!";
        document.getElementById("comp").innerHTML = "Click on <i class='fas fa-redo-alt fa-2x'></i> to Enter Number of Session";
        return;
    }
    // while(no_of_session--)
    // {
            click.play();
            
            if(brake == 0)
            {
                document.getElementById("done").innerHTML = "Session Started!!";
                //
                minutes = 24;
                seconds = 59;
                // count = 1;

                document.getElementById("minutes").innerHTML = minutes;
                document.getElementById("seconds").innerHTML = seconds;
                // document.getElementById("count").innerHTML = count;


                var minutes_interval = setInterval(minutesTimer, 60000);
                var seconds_interval = setInterval(secondsTimer, 1000);

                function minutesTimer() {
                    minutes = minutes - 1;
                    document.getElementById("minutes").innerHTML = minutes;
                }

                function secondsTimer() {
                    seconds = seconds - 1;
                    document.getElementById("seconds").innerHTML = seconds;
                    
                    if(seconds <= 57){
                        if(minutes <= 24){
                            session_completed = session_completed + 1;
                            brake = 1;
                            //count = count + 1;
                            clearInterval(minutes_interval);
                            clearInterval(seconds_interval);

                            // document.getElementById("done").innerHTML = "Session Complete Take a  Short Break";
                            if(count < 4)
                            {
                                document.getElementById("done").innerHTML = "Congrats!! Session Complete Take a  Short Break!!!";
                                document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Short Break";
                                bell_short.play();
                                count = count + 1;
                            }
                            else
                            {
                                document.getElementById("done").innerHTML = "Congrats!! Session Complete Take a  Long Break!!";
                                document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Long Break";
                                count = 0;
                                bell_long.play();
                            }
                            //document.getElementById("done").classList.add("show_message");
                            // document.getElementById("comp").classList.add("show_message");
                            
                        }

                        seconds = 60;
                    }
                }
            }
            else
            {
                if(count == 0)
                {
                    minutes = 14;
                    seconds = 59;
                    // count = 1;

                    document.getElementById("done").innerHTML = "Long Brake Started!!";

                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                    // document.getElementById("count").innerHTML = count;


                    var minutes_interval = setInterval(minutesTimer, 60000);
                    var seconds_interval = setInterval(secondsTimer, 1000);

                    function minutesTimer() {
                        minutes = minutes - 1;
                        document.getElementById("minutes").innerHTML = minutes;
                    }

                    function secondsTimer() {
                        seconds = seconds - 1;
                        document.getElementById("seconds").innerHTML = seconds;
                        
                        if(seconds <= 57){
                            if(minutes <= 14){
                                clearInterval(minutes_interval);
                                clearInterval(seconds_interval);
                                document.getElementById("done").innerHTML = "Break Over!! Get Back to Work!!";
                                document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Next Session";
                                brake = 0;
                                brake_over.play();
                            }
                        }
                        
                    }
                }
                else
                {
                    minutes = 4;
                    seconds = 59;
                    // count = 1;

                    document.getElementById("done").innerHTML = "Short Brake Started!!";

                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;
                    // document.getElementById("count").innerHTML = count;


                    var minutes_interval = setInterval(minutesTimer, 60000);
                    var seconds_interval = setInterval(secondsTimer, 1000);

                    function minutesTimer() {
                        minutes = minutes - 1;
                        document.getElementById("minutes").innerHTML = minutes;
                    }

                    function secondsTimer() {
                        seconds = seconds - 1;
                        document.getElementById("seconds").innerHTML = seconds;
                        
                        if(seconds <= 57){
                            if(minutes <= 4){
                                clearInterval(minutes_interval);
                                clearInterval(seconds_interval);
                                document.getElementById("done").innerHTML = "Break Over!! Get Back to Work!!";
                                document.getElementById("comp").innerHTML = "Click on <button class='btn'><i class='fas fa-play fa-2x'></i></button> to Start Next Session";
                                brake = 0;
                                brake_over.play();
                            }
                        }
                        
                    }
                }
            }
    // }
    // document.getElementById("done").innerHTML = session_completed + " Session Over!!";
    // document.getElementById("comp").innerHTML = "Click on <i class='fas fa-redo-alt fa-2x'></i> to Enter Number of Session";
}

