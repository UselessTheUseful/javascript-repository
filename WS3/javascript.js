// exercise 1

function alertOnClick(){
    let date = new Date();
    let output = "You clicked me!\n" + date;
    alert(output);
};

document.getElementById("tableButton").onclick = function() {
    document.write("<table><tr><th>Name</th><th>Position</th><th>Salary</th></tr>");
    document.write("<tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>");
    document.write("<tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>");
    document.write("<tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>");
    document.write("<tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>");
    document.write("<tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr><table/>");
};

function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    window.open(`https://www.google.com/maps?q=${lat},${lon}`)
};

function error() {
    console.log("Unable to get location")
}

document.getElementById("locationButton").onclick = function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("geolocation not available");
    };  

};

// exercise 2

function onMouseOver() {
    document.getElementById("heading2").innerHTML = "Stepped over by the mouse";
};

function onMouseOut() {
    document.getElementById("heading2").innerHTML = "Bye bye mouse";
};

document.getElementById("heading2").addEventListener("mouseover", onMouseOver);
document.getElementById("heading2").addEventListener("mouseout", onMouseOut);

let textdata = document.querySelector("#textdata");

// exercise 3

function onFocus() {
    textdata.value = "Please fill in the form with proper data.";
    textdata.style.backgroundColor = "yellow";
};

textdata.addEventListener("focus", onFocus);

let keypresses = 0

textdata.onkeydown = function() {
    keypresses ++;
    document.getElementById("charcount").innerHTML = keypresses;
};

function formValidation() {
    let x = document.getElementById("textdata").value
    if (x == "") {
        alert("please fill in the form");
        return false;
    }
};

// exercise 4

document.getElementById("coordinates").onmousemove = function() {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y)
    document.getElementById("coordinates").innerHTML = `<h2 id="coords">${x} ${y}</h2>`;
};

