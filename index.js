// apiKey = 'ea97938a5ef66faa48c939d30a08769e';
// weatherAPIUrl: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
// weatherURL: 'https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=ea97938a5ef66faa48c939d30a08769e';
// function apiCall<T>(url: string, e: string): Promise<T> {
//     // e.preventDefault();
//     let apiKey: string = 'ea97938a5ef66faa48c939d30a08769e';
//     let city = (document.getElementById('city-input') as HTMLInputElement).value;
//     console.log(city);
//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error (response.statusText);
//         } else {
//             return response.json() as Promise<T>;
//         }
//     })
//     .then(data => data);
// }
// console.log(apiCall('http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=ea97938a5ef66faa48c939d30a08769e'));
var main = document.getElementById('sub-btn');
main.addEventListener('click', function () {
    var card = document.createElement('div');
    card.setAttribute("class", "card-div");
    card.setAttribute("id", "card");
    var cardInfo1 = document.createElement('div');
    cardInfo1.setAttribute('class', 'info1');
    cardInfo1.setAttribute('id', 'card-info1');
    card.appendChild(cardInfo1);
    var cardInfo2 = document.createElement('div');
    cardInfo2.setAttribute('class', 'info2');
    cardInfo2.setAttribute('id', 'card-info2');
    card.appendChild(cardInfo2);
    var final = document.getElementById('main').appendChild(card);
    return final;
});
function handleChange(e) {
    console.log(e.target.value);
}
var myForm = document.getElementById('form');
myForm.addEventListener('submit', function (e) {
    console.log(e);
    e.preventDefault();
    var apiKey = 'ea97938a5ef66faa48c939d30a08769e';
    var city = document.getElementById('city-input').value;
    console.log(city);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey))
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); })["catch"](function (error) { return console.log(error); });
    // return fetching;
});
