
let searchbar = document.querySelector("#search-input");
let searchbtn = document.querySelector("#search-btn");

searchbtn.addEventListener("click", fetchData);
function gotloc(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d7e7a2b6b6f
    // 1b8f4b2f8d9f0a5d&units
    // =metric`
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     })
    console.log(lat);
    console.log(lon);
}
function failloc(){
    alert("Please allow location access to use this feature");
}

window.addEventListener("load",async function getloc(){
    this.navigator.geolocation.getCurrentPosition(gotloc,failloc)
});
  

async function fetchData() {
    try {
        let search = searchbar.value;
        let apikey = "95bb18ecd2248785544329ee48dc032a";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const data = await response.json();
        console.log(data);
        console.log(data.name);
        let mainTemp=document.querySelector("#temperature")
        mainTemp.innerText=Math.floor(data.main.temp)+"\u00B0";
        let mainCity=document.querySelector("#city-name")
        mainCity.innerText=data.name;
        let humidity=document.querySelector("#humidity-percent");
        humidity.innerText=data.main.humidity+"%";
        let windSpeed=document.querySelector("#wind-speed");
        windSpeed.innerText=data.wind.speed+"km/h";
        let mainImg=document.querySelector("#main-img");
       let weather=data.weather[0].main.toLowerCase();
       if(weather=="clouds"){
        mainImg.src="images/clouds.png";
       }
       else if(weather=="snow"){
        mainImg.src="images/snow.png";
       }
       else if(weather=="drizzle"){
        mainImg.src="images/drizzle.png";
       }
       else if(weather=="clear"){
        mainImg.src="images/clear.png";
       }
       else if(weather=="mist"){
        mainImg.src="images/mist.png";
       }
       else{
        mainImg.src="images/rain.png";
       }
       let details=document.querySelector(".details");
       details.style.display = "block";


    } catch (error) {
        console.log("Error:", error);
        document.querySelector('#weather-result').innerText = `Error: ${error.message}`;
    }
}

