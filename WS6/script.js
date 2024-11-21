const destination = document.querySelector("#destination");
const arrival = document.querySelector("#arrival");
const checkboxes = {
    "internet": document.querySelector("#CheckboxGroup1_0"),
    "ac": document.querySelector("#CheckboxGroup1_1"),
    "minibar": document.querySelector("#CheckboxGroup1_2"),
    "car": document.querySelector("#CheckboxGroup1_3"),
    "sauna": document.querySelector("#CheckboxGroup1_4")};

destination.value = localStorage.getItem("destination");
arrival.value = localStorage.getItem("arrival");

function getData() {
    localStorage.setItem("destination", destination.value);
    localStorage.setItem("arrival", arrival.value);

    for (let x in checkboxes) {
        let ischecked
        if (checkboxes[x].checked) {
            ischecked = "yes"
        } else {
            ischecked = "no"
        }
        localStorage.setItem(x, ischecked);
    }

    sessionStorage.setItem("destination", destination.value);
    sessionStorage.setItem("arrival", arrival.value);

    for (let x in checkboxes) {
        let ischecked
        if (checkboxes[x].checked) {
            ischecked = "yes"
        } else {
            ischecked = "no"
        }
        sessionStorage.setItem(x, ischecked);
    }
}

const session_data_field = document.querySelector("#sessiondata")

function load_storage() {
    let storage = ""
    if (localStorage.length > 0) {
        storage += "local storage<br>"
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            storage += key  + " " + localStorage.getItem(key)
            storage += "<br>"
        }
    }
    if (sessionStorage.length > 0) {
        storage += "session storage<br>"
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i)
            storage += key  + " " + sessionStorage.getItem(key)
            storage += "<br>"
        }
    }
    if (!storage == "") {
        session_data_field.innerHTML = storage;
    }
}

// to-do listassa käytetään localstoragee https://github.com/UselessTheUseful/todo-lista