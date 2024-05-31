var index = 2;

function calper(evt) {

    for (var i = 1; i < index; i++) {

        var numerator = document.getElementById("num"+i).value;
        var denominator = document.getElementById("denom"+i).value;
        var percent = (numerator/denominator*100).toFixed(2);

        if(isFinite(percent) == false || percent < 0 || numerator == "") {

            document.getElementById("per"+i).innerHTML = " ";
            continue;

        } else {

            document.getElementById("per"+i).innerHTML = percent + "%";

        }

    }

}

function addrow(evt) {
    
    var namerow = document.getElementById("name1");
    var nameclone = namerow.cloneNode(true);
    nameclone.id = "name"+index;
    nameclone.classList.add = "entry";
    nameclone.innerHTML = "Activity "+index;

    var snamerow = document.getElementById("sname1");
    var snameclone = snamerow.cloneNode(true);
    snameclone.id = "sname"+index;
    snameclone.classList.add = "entry";
    snameclone.innerHTML = "A"+index;

    var weightrow = document.createElement("td");
    weightrow.classList.add = "entry";
    var weightinput = document.createElement("input");
    weightinput.id = "weight"+index;
    weightinput.classList.add = "entry";
    weightinput.type = "number";
    weightinput.style = "width:25%; height: 30px";
    weightrow.appendChild(weightinput);

    var graderow = document.createElement("td");
    graderow.id = "grade"+index;
    graderow.classList.add = "entry";
    var gradeinput1 = document.createElement("input");
    var gradeinput2 = document.createElement("input");
    gradeinput1.id = "num"+index;
    gradeinput2.id = "denom"+index;
    gradeinput1.classList.add = "entrybox";
    gradeinput2.classList.add = "entrybox";
    gradeinput1.type = "number";
    gradeinput2.type = "number";
    gradeinput1.style = "width:25%; height: 30px";
    gradeinput2.style = "width:25%; height: 30px";
    gradeinput2.style.margin = "0px 0px 0px 3px";
    gradeinput1.oninput = calper;
    gradeinput2.oninput = calper;
    gradeinput1.onkeydown = calper;
    gradeinput2.onkeydown = calper;
    gradeinput1.onkeyup = calper;
    gradeinput2.onkeyup = calper;     
    graderow.appendChild(gradeinput1);
    graderow.appendChild(document.createTextNode(" / "));
    graderow.appendChild(gradeinput2);

    var percentrow = document.getElementById("per1");
    var percentclone = percentrow.cloneNode(true);
    percentclone.id = "per"+index;
    percentclone.innerHTML = "";

    var row = document.createElement("tr");
    row.appendChild(nameclone);
    row.appendChild(snameclone);
    row.appendChild(weightrow);
    row.appendChild(graderow);
    row.appendChild(percentclone);

    var table = document.getElementById("table");

    table.appendChild(row);

    index++;

}

function calmean(evt) {

    var mtotal = 0;
    var invalidindex = 1;
    var mresults = 0;

    for (var m = 1; m < index; m++) {

        var mnumerator = document.getElementById("num"+m).value;
        var mdenominator = document.getElementById("denom"+m).value;
        var mpercent = (mnumerator/mdenominator*100).toFixed(2);

        if(isFinite(mpercent) == false || mpercent < 0 || mnumerator == "") {

            invalidindex++;
            continue;

        } else {

            mtotal += parseFloat(mpercent);

        }

    }

    mresults = parseFloat(mtotal/(index - invalidindex)).toFixed(2);

    if (parseFloat(invalidindex) == parseFloat(index)) {

        document.getElementById("results").innerHTML = "Error - Invalid Input";

    } else {

        document.getElementById("results").innerHTML = mresults + "%";

    }

}

function calweighted(evt) {

    var wtotal = 0;
    var wcount = 0;
    var wresults = 0;

    for (var w = 1; w < index; w++) {

        var wnumerator = document.getElementById("num"+w).value;
        var wdenominator = document.getElementById("denom"+w).value;

        var weights = document.getElementById("weight"+w).value;

        var wpercent = parseFloat(wnumerator/wdenominator*weights*100).toFixed(2);

        if(isFinite(wpercent) ==  false || wpercent < 0 || wnumerator == "" || parseFloat(weights) <= 0 || weights == "") {

            continue;

        } else {

            wcount += parseFloat(weights);

            wtotal += parseFloat(wpercent);

        }

    }

    wresults = parseFloat((wtotal/wcount)).toFixed(2);

    if(parseFloat(wcount) == 0) {

        document.getElementById("results").innerHTML = "Error - Invalid Input";

    } else {

        document.getElementById("results").innerHTML = wresults + "%";

    }

}