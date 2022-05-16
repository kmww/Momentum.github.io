const API_KEY = "cbb838aef6d2083e73ec0f8733c2d076";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        city.innerText = data.name;
    });
    // fetch(url); // JS가 대신 url 부름 /개발자도구 newwork에서 확인 가능
    //fetch 는 promise = 당장 일어나지 않고 시간이 걸린 뒤에 일어남
    //따라서 fetch(url).then(response => respone.json()); 사용해야함
}

function onGeoError(){
    alert("Can't find you. No weather for you")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)  // 브라우저에서 위치정보줌 : wifi, 위치, GPS
//getCurrentPosition(정상 실행시 함수,에러 발생시 함수)
//success 함수는 Geolocationposition object 하나를 입력 받는다(input parametere)

//openweathermap.org  (API:다른 서버와 이야기훌 수 있는 방법)