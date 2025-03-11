const apikey = "b235b9545d39cde361d6f0c4100a09f3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   
const searchbox=document.querySelector(".mainform input");
const searchbtn=document.querySelector(".mainform button");
const weathericon=document.querySelector(".weather-icon");
async function apifetch(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".speed").innerHTML=data.wind.speed +" km/h";
    document.querySelector(".humi").innerHTML=data.main.humidity+" %Humidity";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="clouds.png"

    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="clear.png"

    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="rain.png"

    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="drizzle.png"

    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="mist.png"

    }

}
searchbtn.addEventListener("click",()=>{
    if(searchbox.value.trim()===""){
        alert("Enter the location")
    }
    else{

        apifetch(searchbox.value);
    }
    
})
searchbox.addEventListener("keypress",(e)=>{
if(e.key==="Enter"){
    apifetch(searchbox.value);
}
})