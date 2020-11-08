var button = document.querySelector('.button')
var inputValue =  document.querySelector('.inputValue')
var name = document.querySelector('.name');
var description = document.querySelector ('.description');
var temp = document.querySelector('.temp');


button.addEventListener('click,function()'{
fetch('https://api.openweathermap.org/data/2.5/weather?q=+inputvalue.value&.appid=45ebbd33aab5c77a18994061b0a6ee6a')
.then(response => response.json())
.then(data => console.log data))
var namevalue= data['name']
var tempvalue= data ['main']['temp'];
var description= data['wheather'][0]['description'];

name.innerHTML= namevalue;
temp.innerHTML=tempvalue;

.catch (error = alert ("wrong city name")
})