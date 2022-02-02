// weatherAPIUrl: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
// weatherURL: 'https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid={API key}';


// function apiCall<T>(url: string, e: string): Promise<T> {
//     // e.preventDefault();
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
// console.log(apiCall('http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid={API key}'));



let main = document.getElementById('sub-btn') as HTMLButtonElement;
main.addEventListener('click', function(): HTMLDivElement{
    const card = document.createElement('div') as HTMLDivElement;
    card.setAttribute("class", "card-div");
    card.setAttribute("id", "card");
   
    const cardInfo1 = document.createElement('div') as HTMLDivElement;
    cardInfo1.setAttribute('class', 'info1');
    cardInfo1.setAttribute('id', 'card-info1');
    card.appendChild(cardInfo1);
    const cardInfo2 = document.createElement('div') as HTMLDivElement;
    cardInfo2.setAttribute('class', 'info2');
    cardInfo2.setAttribute('id', 'card-info2');
    card.appendChild(cardInfo2);
    let final = document.getElementById('main').appendChild(card);
    return final;
})

function handleChange(e){
    console.log(e.target.value);
}

const myForm = document.getElementById('form') as HTMLFormElement;
myForm.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault();
    // let apiKey: string = ${apiKey};
    let city= (document.getElementById('city-input') as HTMLInputElement).value;
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    // return fetching;

})
