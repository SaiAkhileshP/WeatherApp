const cityName = document.getElementById("input");
const display = document.getElementById("displayinfo");
const displayicon = document.getElementById("icon");
const description = document.getElementById("discription");
const responce = document.getElementById("responceHeading");
const responcecontent = document.getElementById("responcecontent");
const showlocation = document.getElementById("location");



async function getresponse(city){
        let api = "YOUR_APIKEY";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

try {
        responce.innerText = "searching the weather report....";
        responce.style.color = "rgb(60, 60, 239)";

        //fetching result from url
        let result = await fetch(url).then((r) => r.json());
        
        responce.innerText = `weather report of the city [${city}]`;
        responce.style.color = "green";

        //removing hide
        responcecontent.classList.remove('hide');

        //display location
        showlocation.innerText = city;

        //access temperature
        let temperature = result.main.temp - 273.15;
        

        //display temperature with 1 decimal
        display.innerText=`${temperature.toFixed(1)}°c`;

        //display icon
        const icon = result.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
        displayicon.setAttribute('src',iconUrl);

        //showing discription
        const showDescription = result.weather[0].description;
        description.innerText = showDescription; 

} catch (error) {

        responce.innerText = `Sorry we cant find the city [${city}]`;
        responce.style.color = "red";
        //adding hide
        responcecontent.classList.add('hide');
        console.log(error);
        
}

}



cityName.addEventListener('keyup', (e) => {
        e.preventDefault();
    let city = cityName.value;
            if(city!='' && e.key==='Enter'){
           //console.log(word);
            getresponse(city);
            }
    })