//EX 1

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const jsondata = document.querySelector("#jsondata");

const display_full_name = document.querySelector("#display_full_name");
display_full_name.addEventListener("click", write_full_names);

const display_all = document.querySelector("#display_all");
display_all.addEventListener("click", write_all);

function write_full_names() {
    var employees = JSON.parse(text).employees;
    let html = "<p>";
    for (let i in employees) {
        html += `${employees[i].firstName} ${employees[i].lastName}`;
        html += "<br>";
    }
    html += "</p>";
    jsondata.innerHTML = html;
}

function write_all() {
    var employees = JSON.parse(text).employees;
    let html = "<p>";
    for (let i in employees) {
        html += `${JSON.stringify(employees[i])}`;
        html += "<br>";
    }
    html += "</p>";
    jsondata.innerHTML = html;
}

//EX 2

const load_raw = document.querySelector("#load_raw");
load_raw.addEventListener("click", () => {
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    .then(response => response.json())
    .then(data => load_raw_data(data))
});
const load_parse = document.querySelector("#load_parse");
load_parse.addEventListener("click", () => {
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    .then(response => response.json())
    .then(data => load_parse_data(data))
});

function load_raw_data(data) {
    let data_field = document.querySelector("#rawdata");
    data_field.innerHTML = JSON.stringify(data);
}

function load_parse_data(data) {
    let data_field = document.querySelector("#rawdata");
    data_field.innerHTML = "";
    let table = document.createElement("table");
    for (let movie in data.Search) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${data.Search[movie].Title}</td>
            <td>${data.Search[movie].Year}</td>
            <td>${data.Search[movie].imdbID}</td>
            <td>${data.Search[movie].Type}</td>
            <td><img src="${data.Search[movie].Poster}"></img></td>
        `

        table.appendChild(row);
    }

    data_field.appendChild(table);
}

//EX 3

const city = document.querySelector("#city");
city.addEventListener("change", load_weather_data);

const citysearch = document.querySelector("#citysearch");
const search_button = document.querySelector("#search");

search_button.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citysearch.value}&appid=d77023c2afdf0dcec2db09c3eef2b8bb&units=metric`)
    .then(response => response.json())
    .then(data => display_weather_data(data))
});

const get_weather_data = document.querySelector("#get_weather_data");
get_weather_data.addEventListener("click", load_weather_data);

function load_weather_data() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=d77023c2afdf0dcec2db09c3eef2b8bb&units=metric`)
    .then(response => response.json())
    .then(data => display_weather_data(data))
}

function display_weather_data(data) {
    let data_field = document.querySelector("#weatherdata")

    data_field.innerHTML = `
        <p>Temperature (C): ${(data.main.temp)} Humidity: ${data.main.humidity}% Clouds: ${data.clouds.all}%</p>
    `;
}