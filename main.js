function myfunction() {
    var table = document.getElementById("mytable");
    // var row = table.insertRow();
    // row.insertCell(0);
    // row.insertCell(1);
    // row.insertCell(2);
    // row.setAttribute("class", "bg-primary");

    let row = document.createElement('tr');
    row.setAttribute("class", "table-warning")
    let html = '<td>' + "" + '</td><td>' + "" + '</td><td>' + "" + '</td>';
    row.innerHTML = html;
    table.appendChild(row);
}

function cntDsp() {
    var list = document.getElementsByTagName("option");
    var listText = [""];
    var count = 0;
    for (let i = 0; i < list.length; i++) {
        listText.push(list[i].innerHTML);
        count++
    }
    alert("There are " + count + " cars namely " + listText);
}

function createNew() {
    function newElement(element, id, text) {
        element = document.createElement("h1");
        id = element.setAttribute("id", "newID");
        text = element.innerText = "This a new element";
        return element;
        return id;

    }

    document.body.appendChild(newElement());
}
var ctr = parseInt(document.getElementById("countBtn").innerHTML);
var printer = document.getElementById("printer");


function fizzBuzz() {

    ctr++;
    if (ctr % 3 == 0 && ctr % 5 == 0) {
        printer.innerHTML = "FIZZBUZZ";
        printer.style.backgroundColor = "#4B0082"
        printer.style.color = "white"
    } else if (ctr % 3 == 0) {
        printer.innerHTML = "FIZZ";
        printer.style.backgroundColor = "#B22222"
        printer.style.color = "white";
    } else if (ctr % 5 == 0) {
        printer.innerHTML = "BUZZ";
        printer.style.backgroundColor = "#1E90FF"
        printer.style.color = "white";
    } else if (ctr % 3 != 0 && ctr % 5 != 0) {
        printer.innerHTML = "NEUTRAL"
        printer.style.backgroundColor = "#FFE4C4"
        printer.style.color = "black";
    }


    document.getElementById("countBtn").innerHTML = ctr;

}
var radio = document.getElementsByTagName("input");

function check() {
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = true;
    }

}

function uncheck() {
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;



    }

}