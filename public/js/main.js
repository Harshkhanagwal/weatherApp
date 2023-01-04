const submitBT = document.getElementById('submitBT');
const searchVal = document.getElementById('searchVal');
const cityName = document.getElementById('city');
const temp = document.getElementById('temp');
const tempStatus = document.getElementById('tempStatus');
const dayVal = document.getElementById('day');
const dateVal = document.getElementById('date');
const tempArea = document.getElementById("temp-area");
const weatherMod = document.getElementById('weatherMod');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
const month = months[d.getMonth()]
const date = d.getDate();
const dayNum = d.getDay();

day.innerText = days[dayNum];
dateVal.innerText = month + " " + date;

tempArea.style.opacity = '0';


const getInfo = async (event) => {
    event.preventDefault();

    if (searchVal === '') {
        cityName.innerText = "Please Enter the Name, without searching";
    }

    else {
        let searchData = searchVal.value;
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=ad8300df27420798bcf5004c184de162`;
            const response = await fetch(url);
            const data = await response.json();

            const arrData = [data];
            const tempK = arrData[0].main.temp;
            const tempC = tempK - 273.15;
            const tempDecimalFix = tempC.toFixed(2);

            tempArea.style.opacity = '1';


            temp.innerText = tempDecimalFix;
            cityName.innerHTML = arrData[0].name + ", " + arrData[0].sys.country;

            const tempMod = arrData[0].weather[0].main;

            weatherMod.innerText = "weather : "+ tempMod;
            // if (tempMod === 'Clear') {
            //     tempStatus.innerHTML = '<i class="fa-duotone fa-cloud-sun"></i>';
            // }
            // else if (tempMod === 'Clouds') {
            //     tempStatus.innerHTML = '<i class="fa-duotone fa-clouds"></i>';
            // }
            // else if (tempMod === 'Mist') {
            //     tempStatus.innerHTML = '<i class="fa-duotone fa-cloud-fog"></i>';
            // }
            // else if (tempMod === 'Haze') {
            //     tempStatus.innerHTML = '<i class="fa-duotone fa-sun-haze"></i>';
            // }
            // else {
            //     tempStatus.innerHTML = '<i class="fa-duotone fa-cloud-sun"></i>';
            // }

        } catch {
            cityName.innerText = "Please Enter the valid City Name";
        }
    }
}
submitBT.addEventListener('click', getInfo);