// exercise 1

function parseData() {
    let data = document.getElementsByTagName("quotes");
    console.log(data);
    let txt = "";
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        txt = txt + data[i].querySelector("quote").innerHTML + "<br>";
        txt = txt + data[i].querySelector("author").innerHTML + "<br>";
    }
    document.querySelector("pre").innerHTML = txt;
}

// exercise 2

function loadXMLFile() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://quotes.rest/qod.xml?api_key=TEcLv86GSY3LRelaDpw0yurVsjXQrBlKw7xp1o2s7c3fdeb4", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.querySelector("#quotes").innerHTML = xmlhttp.responseText;
        }
    }
}

// exercise 3

function loadAndParseXML() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://quotes.rest/qod.xml?api_key=TEcLv86GSY3LRelaDpw0yurVsjXQrBlKw7xp1o2s7c3fdeb4", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let quote = xmlhttp.responseXML.querySelector("quote").innerHTML;
            let author = xmlhttp.responseXML.querySelector("author").innerHTML;

            const table = document.querySelector("tbody");
            let table_row = document.createElement("tr");
            let table_quote = document.createElement("td");
            table_quote.innerHTML = quote;
            let table_author = document.createElement("td");
            table_author.innerHTML = author;

            table_row.appendChild(table_quote)
            table_row.appendChild(table_author)
            table.appendChild(table_row)
        }
    }
}

// exercise 4

function loadAndParseNews() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://www.iltalehti.fi/rss/uutiset.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            const newsfeed = document.querySelector("#newsfeed")
            const list = document.createElement("ul")
            newsfeed.appendChild(list)

            let news = xmlhttp.responseXML.querySelectorAll("item")
            
            for (let i = 0; i < news.length; i++) {
                const list_item = document.createElement("li")

                let title = news[i].querySelector("title").innerHTML
                let link = news[i].querySelector("link").innerHTML

                list_item.innerHTML = `<a href="${link}">${title}</a>`;
                list.appendChild(list_item)
            }
        }
    }
}