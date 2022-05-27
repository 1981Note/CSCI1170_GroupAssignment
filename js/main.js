/*
### Siyuan Chen's part (B00831463)

What features you implemented:
    I wrote the code for javascript and modify the html file according to javascript

What do you learned:
    I learned how to make multiple choice questions and fill in a blank questions in webwage and know some basic knowledge of the javascript. 
    Also, my group members are very friendly to discuss the topic and agree to the division, I think our group is very efficient. 
 */

function Preview() {

    /*
        1. Helps about how to make a fill in blank question from youtube.com
            Author: Muhanad Hasan
            Date accessed: 14 Oct. 2020
            URL: https://www.youtube.com/watch?v=1SxMWhqYQ4k
    */

    var q2 = document.getElementsByName("question2");
    var a2="";
    for (var a = 0; a<q2.length; a++) {
        if (q2[a].checked) {
            a2 = q2[a].value;
        }
    }

    if (a2 == "Miss.") {               
        document.getElementById("female").innerHTML = "<img src='img/female.jpg' width='200px' height='200px'>";
    } else if (a2 == "Mr.") {
        document.getElementById("male").innerHTML = "<img src='img/male.jpg' width='200px' height='200px'>";
    }


    var q3 = document.getElementsByName("question3");
    var a3="";
    for (var b = 0; b<q3.length; b++) {
        if (q3[b].checked) {
            a3 = q3[b].value;
        }
    }

    if (a3 == "you prefer to check plan in the morning.") {               
        document.getElementById("morning").innerHTML = "<img src='img/morning.png' width='200px' height='200px'>";
    } else if (a3 == "you prefer to check plan in the afternoon.") {
        document.getElementById("afternoon").innerHTML = "<img src='img/afternoon.png' width='200px' height='200px'>";
    }

    
    var q4 = document.getElementsByName("question4");
    var a4="";
    for (var c = 0; c<q3.length; c++) {
        if (q4[c].checked) {
            a4 = q4[c].value;
        }
    }

    if (a4 == "flat.") {               
        document.getElementById("flat").innerHTML = "<img src='img/flat.png' width='200px' height='200px'>";
    } else if (a4 == "house.") {
        document.getElementById("house").innerHTML = "<img src='img/house.jpg' width='200px' height='200px'>";
    }


    var q5 = document.getElementsByName("question5");
    var a5="";
    for (var d = 0; d<q5.length; d++) {
        if (q5[d].checked) {
            a5 = q5[d].value;
        }
    }

    if (a5 == "fast.") {               
        document.getElementById("fast").innerHTML = "<img src='img/fast.png' width='200px' height='200px'>";
    } else if (a5 == "slow.") {
        document.getElementById("slow").innerHTML = "<img src='img/slow.png' width='200px' height='200px'>";
    }


    var q6 = document.getElementsByName("question6");
    var a6="";
    for (var e = 0; e<q6.length; e++) {
        if (q6[e].checked) {
            a6 = q6[e].value;
        }
    }

    if (a6 == "nervous and want to stop the talk as soon as possible.") {               
        document.getElementById("nervous").innerHTML = "<img src='img/nervous.png' width='200px' height='200px'>";
    } else if (a6 == "relax and want to talk more about your holiday.") {
        document.getElementById("relax").innerHTML = "<img src='img/relax.png' width='200px' height='200px'>";
    }


    var q7 = document.getElementsByName("question7");
    var a7="";
    for (var f = 0; f<q7.length; f++) {
        if (q7[f].checked) {
            a7 = q7[f].value;
        }
    }

    if (a7 == "bread.") {               
        document.getElementById("bread").innerHTML = "<img src='img/bread.jpg' width='200px' height='200px'>";
    } else if (a7 == "oatmeal.") {
        document.getElementById("oatmeal").innerHTML = "<img src='img/oatmeal.jpg' width='200px' height='200px'>";
    }


    var q8 = document.getElementsByName("question8");
    var a8="";
    for (var g = 0; g<q8.length; g++) {
        if (q8[g].checked) {
            a8 = q8[g].value;
        }
    }

    if (a8 == "piano music.") {               
        document.getElementById("piano").innerHTML = "<img src='img/piano.jpg' width='200px' height='200px'>";
    } else if (a8 == "violin music.") {
        document.getElementById("violin").innerHTML = "<img src='img/violin.jpg' width='200px' height='200px'>";
    }


    var q9 = document.getElementsByName("question9");
    var a9="";
    for (var h = 0; h<q9.length; h++) {
        if (q9[h].checked) {
            a9 = q9[h].value;
        }
    }

    if (a9 == "the restaurant in the hotel.") {               
        document.getElementById("hotel").innerHTML = "<img src='img/hotel.jpg' width='200px' height='200px'>";
    } else if (a9 == "the local restaurant with high rate on the map.") {
        document.getElementById("local").innerHTML = "<img src='img/local.jpg' width='200px' height='200px'>";
    }


    var q10 = document.getElementsByName("question10");
    var a10="";
    for (var i = 0; i<q10.length; i++) {
        if (q10[i].checked) {
            a10 = q10[i].value;
        }
    }

    if (a10 == "sea.") {               
        document.getElementById("sea").innerHTML = "<img src='img/sea.jpg' width='200px' height='200px'>";
    } else if (a10 == "local performances.") {
        document.getElementById("performances").innerHTML = "<img src='img/performances.jpg' width='200px' height='200px'>";
    }


    var q11 = document.getElementsByName("question11");
    var a11="";
    for (var j = 0; j<q11.length; j++) {
        if (q11[j].checked) {
            a11 = q11[j].value;
        }
    }

    if (a11 == "say hello to him.") {               
        document.getElementById("hello").innerHTML = "<img src='img/hello.jpg' width='200px' height='200px'>";
    } else if (a11 == "ignore him.") {
        document.getElementById("ignore").innerHTML = "<img src='img/ignore.jpg' width='200px' height='200px'>";
    }


    var q12 = document.getElementsByName("question12");
    var a12="";
    for (var k = 0; k<q12.length; k++) {
        if (q12[k].checked) {
            a12 = q12[k].value;
        }
    }

    if (a12 == "ask what's his plan, decide to enjoy your holiday with he.") {               
        document.getElementById("he").innerHTML = "<img src='img/he.jpg' width='200px' height='200px'>";
    } else if (a12 == "enjoy your holiday on you own.") {
        document.getElementById("own").innerHTML = "<img src='img/own.jpg' width='200px' height='200px'>";
    }


    var q13 = document.getElementsByName("question13");
    var a13="";
    for (var l = 0; l<q13.length; l++) {
        if (q13[l].checked) {
            a13 = q13[l].value;
        }
    }

    if (a13 == "regret.") {               
        document.getElementById("regret").innerHTML = "<img src='img/regret.png' width='200px' height='200px'>";
    } else if (a13 == "nothing") {
        document.getElementById("nothing").innerHTML = "<img src='img/nothing.png' width='200px' height='200px'>";
    }


    var q14 = document.getElementsByName("question14");
    var a14="";
    for (var m = 0; m<q14.length; m++) {
        if (q14[m].checked) {
            a14 = q14[m].value;
        }
    }

    if (a14 == "have dinner later.") {               
        document.getElementById("later").innerHTML = "<img src='img/later.png' width='200px' height='200px'>";
    } else if (a14 == "leave and have dinner immediately.") {
        document.getElementById("immediately").innerHTML = "<img src='img/immediately.png' width='200px' height='200px'>";
    }


    var q15 = document.getElementsByName("question15");
    var a15="";
    for (var n = 0; n<q15.length; n++) {
        if (q15[n].checked) {
            a15 = q15[n].value;
        }
    }

    if (a15 == "you feel tired, back to the hotel for rest.") {               
        document.getElementById("rest").innerHTML = "<img src='img/rest.png' width='200px' height='200px'>";
    } else if (a15 == "you ask locals if there is any interesting night life event on the island.") {
        document.getElementById("event").innerHTML = "<img src='img/event.png' width='200px' height='200px'>";
    }


    var q16 = document.getElementsByName("question16");
    var a16="";
    for (var o = 0; o<q16.length; o++) {
        if (q16[o].checked) {
            a16 = q16[o].value;
        }
    }

    if (a16 == "red wine.") {               
        document.getElementById("red").innerHTML = "<img src='img/red.png' width='200px' height='200px'>";
    } else if (a16 == "white wine.") {
        document.getElementById("white").innerHTML = "<img src='img/white.png' width='200px' height='200px'>";
    }

    /*
        This function represents how the preview button works

        Find the option selected by the player through for loop, and add a corresponding picture under that option
    */






    /*
        2. Helps about how to creating a multiple choice option in javascript from stackoverflow.com
            structure of for loop (for loop)
            Date accessed: 14 Oct. 2020
            URL: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript

        3. Helps about how to make a multiple choice quiz from youtube.com
            Date accessed: 14 Oct. 2020
            URL: https://www.youtube.com/watch?v=H1DUszPZakQ&t=579s
    */
}



function Botton() {
    var name = document.getElementById("name").value;
    /*
        1. Helps about how to make a fill in blank question from youtube.com
            Date accessed: 14 Oct. 2020
            URL: https://www.youtube.com/watch?v=1SxMWhqYQ4k
    */

    var q2 = document.getElementsByName("question2");
    var a2="";
    for (var a = 0; a<q2.length; a++) {
        if (q2[a].checked) {
            a2 = q2[a].value;
        }
    }

    var q3 = document.getElementsByName("question3");
    var a3="";
    for (var b = 0; b<q3.length; b++) {
        if (q3[b].checked) {
            a3 = q3[b].value;
        }
    }

    var q4 = document.getElementsByName("question4");
    var a4="";
    for (var c = 0; c<q3.length; c++) {
        if (q4[c].checked) {
            a4 = q4[c].value;
        }
    }

    var q5 = document.getElementsByName("question5");
    var a5="";
    for (var d = 0; d<q5.length; d++) {
        if (q5[d].checked) {
            a5 = q5[d].value;
        }
    }

    var q6 = document.getElementsByName("question6");
    var a6="";
    for (var e = 0; e<q6.length; e++) {
        if (q6[e].checked) {
            a6 = q6[e].value;
        }
    }

    var q7 = document.getElementsByName("question7");
    var a7="";
    for (var f = 0; f<q7.length; f++) {
        if (q7[f].checked) {
            a7 = q7[f].value;
        }
    }

    var q8 = document.getElementsByName("question8");
    var a8="";
    for (var g = 0; g<q8.length; g++) {
        if (q8[g].checked) {
            a8 = q8[g].value;
        }
    }

    var q9 = document.getElementsByName("question9");
    var a9="";
    for (var h = 0; h<q9.length; h++) {
        if (q9[h].checked) {
            a9 = q9[h].value;
        }
    }

    var q10 = document.getElementsByName("question10");
    var a10="";
    for (var i = 0; i<q10.length; i++) {
        if (q10[i].checked) {
            a10 = q10[i].value;
        }
    }

    var q11 = document.getElementsByName("question11");
    var a11="";
    for (var j = 0; j<q11.length; j++) {
        if (q11[j].checked) {
            a11 = q11[j].value;
        }
    }

    var q12 = document.getElementsByName("question12");
    var a12="";
    for (var k = 0; k<q12.length; k++) {
        if (q12[k].checked) {
            a12 = q12[k].value;
        }
    }

    var q13 = document.getElementsByName("question13");
    var a13="";
    for (var l = 0; l<q13.length; l++) {
        if (q13[l].checked) {
            a13 = q13[l].value;
        }
    }

    var q14 = document.getElementsByName("question14");
    var a14="";
    for (var m = 0; m<q14.length; m++) {
        if (q14[m].checked) {
            a14 = q14[m].value;
        }
    }

    var q15 = document.getElementsByName("question15");
    var a15="";
    for (var n = 0; n<q15.length; n++) {
        if (q15[n].checked) {
            a15 = q15[n].value;
        }
    }

    var q16 = document.getElementsByName("question16");
    var a16="";
    for (var o = 0; o<q16.length; o++) {
        if (q16[o].checked) {
            a16 = q16[o].value;
        }
    }


    /*
        2. Helps about how to creating a multiple choice option in javascript from stackoverflow.com
            Author: Ray
            Date accessed: 14 Oct. 2020
            URL: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript

        3. Helps about how to make a multiple choice quiz from youtube.com
            Author: David
            Date accessed: 14 Oct. 2020
            URL: https://www.youtube.com/watch?v=H1DUszPZakQ&t=579s
    */

    document.getElementById("answer").innerHTML= "Hello, " + a2 + name + "!" + " " + "On the day before the flight, " + a3 + " " + "You live in a " + a4 + " " + "Your speed to the hotel is " + a5 + " " + "When the waiter talk with you, you feel " + a6 + " " + "For the breakfast, you prefer to eat " + a7 + " " + "After get into your room, you want to play " + a8 + " " + "When you feel hungry because of long-time flight, you want to go " + a9 + " " + "After you finish the lunch, you want to go to the " + a10 + " " + "When you get there, you find a man seems like your friend, but not sure. You choose to " + a11 + " " +"Before you decide, that man comes to you. He also notices you, luckily, he is your friend. You choose " + a12 + " " + "He gets there with someone else. He simply stops your talk, and then leave to find his accompany. You feel " + a13 + " " + "With time goes, it's time for the dinner, you feel some hungry.  However, you still want to stay here for enjoy. You decide " + a14 + " " + "You find a nearest restaurant to solve your dinner. It's about 7 p.m. now. Then, " + a15 + " " + "After back to the hotel, you find that the hotel offer the free nightcap, you choose to drink " + a16 + "To sum up, you are a good person.";

    /*
        This function used to find the unswer that players checked and print the result.
    */


    /*
        4. Helps about how to use innerhtml and onclick
            Date accessed: 14 Oct. 2020
            URL: https://www.runoob.com/try/try.php?filename=tryjs_whereto_head
    */
}








function Again() {
    location.reload();
}

    /*
        This function is used to do the test again 
     */


    /*
        1. Helps about how to make a fill in blank question from youtube.com
            Author: Muhanad Hasan
            Date accessed: 14 Oct. 2020
            URL: https://www.youtube.com/watch?v=1SxMWhqYQ4k
    */


