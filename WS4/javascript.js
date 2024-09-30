let h1 = document.querySelector('h1');

function changeHeading() {
    h1.innerHTML = 'Modified Heading!';
}

function secondButton() {
    h1.style.backgroundColor = "red";
    h1.style.color = "blue";
    h1.style.fontSize = "50px";
    h1.style.fontStyle = "italic";
}

function thirdButton() {
    let lorem = document.querySelector('#lorem').innerHTML;
    let ipsum = document.querySelectorAll('em')[1].innerHTML;
    let loremIpsum = lorem + '<em>' + ipsum + '</em>' + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsUlEQVR42u2WbWwUVRSGnzsz22132+0ntQVaSrcSSLGAElSQCDFETIhRo0YpUYMRCBhQEjQkmGjQxF8ilWBACUETEGICwSqk+AMSxRgQPxH5WCmFQgtll3a3+z1z/LG36yKtCP7tSU4yc+fOed97znvvuTBswzZst2kiuIb81umfIfvLXumV9cskXuP/tzjqloEvMBubTT21XN4Lsf2grgBhyBsB7mZIneKxSeM5H57f/YMXG4tWWtRiVv9vArKUN6iue3za2bNdR/6ghAQKC0EwGEFIXm7qJvjrRE7iIU6cCCZ/MoZyfBTSrDax4/ZTDneJBxHW7gZx7kBkPiKFiKA9iawTLyIjEalEpAqRckSaEHkTkbXcUA7rpsi7xGwpxGJl6Xqmz/ruBXONlzSqcCwkyuHVdbDlDFwEFiiadtbgUIpBVOdXZerDMcDHKmDJ4AS2Sgl5+DFwkxHYUmACNhXLQ+Qtfy1UTgVQnQkauAYBF+RbGXCAgDCSbhSGjpwAUkA/0Aps5Aqf0rgIgpsVlzIa2C5bgPuBGqAQ0axFuw0UQMOdBGbX8+093XREd1KUtw/fssPY28A6CKVhyP+c5CFwr6QSh9GksXBRhEkxMSoIvrOJziKoX36AYq4xWT1Nl2KHCPY/5OgA0AaceXsB8Zd411/ZunoeNknSOHRh0midbp31bLAYzJl7do7haLKCCdiU0UkSRQEGLvIQiigmRQU2p6imB3ABffyoXuRuxWeyG2EqgiJKiAQ/mwUcsBeqbXJkXD3dp9pw8OMAhUAt8A3Q60uxrOEcadNmw+91VPa7eRi4CoSAZE4G09qVLosge5768EhzYskxpU8VhVJyneq/LxrH2fBJVKYEeDWBfuAj4DSQp4H8wGI9J6bnJHOAJZtZwY2z4sl97S3M9ZMmlhFhLrhIDTDXa/PcjGnHuzeyOdCwr2U6Lr2Ca4APuFcHDgHjNbkoYGrhRREm1l2INN137gRj3L9Rl9/OaGsvU8t+oqqeflA257O7wBD5QOLMpp9GHIi64IDZKEep7GtApzIClAEL9U92Vi8ZcEeveNzYjiUTtqa2ph+sTdqMxgCUVlkKiGvJmaT1oDykYnydez6KC6a4L145dmhUOWBg6BWrHAcwcoA1kRWPfNHRwrxaYprkYEduJtYvBoCR4tHsLKVLlofs4q1z9GDgaOZ2jqhSOc+OTr3e/yfxW6RB2ddzvaEPWJywdCo92RUOHAMKdYhJBQ2XgUtacAPRLL2VUhrU0OMO4MFJYqmbdhkFjnDYAMBFKJuWAUvCGp6vw0eKLmy6ES4BHcBlDd4DdAGd2gNAGCONeLLaGKKxYHKVArZbAE6UDcpiVS5rlYQu8XoXNR9sn0z71XwwikiYJrbxRPpMGx+/52MsRcQpwMKFUEACHw6eSuIeTIqHJGCAODyDUj1/D0bkdRUVUWER1SeiIiL0iZASQbIeRuT9m/WvKol+QlzHGtwDg/8ZlzmqT4IqLKJiIqo/Q0T1i9AnXxKRqv94XZqSBevV3qffIyIE5YGhLyRBKaaUao7jpgQPo8inFxclqu1W7g9GWNaLYma23zp4cChR8JVTqBYOX2qHbdgG7C8K8R4gD/S4hQAAAABJRU5ErkJggg==">';
    let p = document.querySelectorAll('p');
    console.log(loremIpsum);
    p[4].innerHTML += loremIpsum;
    document.querySelector('body').style.backgroundColor = 'grey';
}

function hide() {
    document.querySelector('#me').style.display = 'none';
}

function show() {
    document.querySelector('#me').style.display = '';
}

document.querySelector('#CheckboxGroup1_2').addEventListener('change', surprise);

function surprise() {
    document.querySelector('.surprise').style.fontSize = '20px';
}

let cars = {
    BMW:'https://upload.wikimedia.org/wikipedia/commons/2/27/AMX-50_at_Mus%C3%A9e_des_Blind%C3%A9s%2C_Saumur%2C_France_%2853334525706%29.jpg',
    Audi:'https://upload.wikimedia.org/wikipedia/commons/0/04/AMX-30.JPG',
    Mercedes:'https://upload.wikimedia.org/wikipedia/commons/9/93/AMX_13%2C_Stonne_%28France%29.JPG',
    Volvo:'https://upload.wikimedia.org/wikipedia/commons/f/f3/AMX-10RC.jpg',
}

function itemChange() {
    let choise = document.querySelector('#mySelect').value;
    alert(choise);
    document.querySelector('#carimage').src = cars[choise];
}

function imageMouseOver() {
    document.querySelector('#carimage').style.border = "thick solid #0000FF";
}

function imageMouseOut() {
    document.querySelector('#carimage').style.border = "none";
}

function changePosition() {
    document.querySelector('#carimage').style.position = 'relative';
    document.querySelector('#carimage').style.left = '200px';
    document.querySelector('#carimage').style.down = '500px';
}

let position = 0;
let multiplier = 50;

function doMove() {
    if (position > 500) {
        multiplier = multiplier*-1
    } else if (position < 0) {
        multiplier = multiplier*-1
    }

    position += multiplier
    document.querySelector('#carimage').style.position = 'relative';
    document.querySelector('#carimage').style.left = position + 'px';
}

let opa = 1;

function fadeOut() {
    if (opa > 0) {
        opa -= 0.1
    }
    document.querySelector('#carimage').style.opacity = opa;
}

function remove() {
    document.querySelector('#carimage').remove()
}

function insertRows() {
    let name = document.querySelector("#textfield").value;
    name = document.createTextNode(name);
    let pos = document.querySelector("#textfield2").value;
    pos = document.createTextNode(pos);
    let sal = document.querySelector("#textfield3").value;
    sal = document.createTextNode(sal);

    let rowName = document.createElement('td');
    let rowPos = document.createElement('td');
    let rowSal = document.createElement('td');

    let titem = document.createElement('tr');

    rowName.appendChild(name);
    rowPos.appendChild(pos);
    rowSal.appendChild(sal);

    titem.appendChild(rowName);
    titem.appendChild(rowPos);
    titem.appendChild(rowSal);

    document.querySelector("#data").appendChild(titem);
}
