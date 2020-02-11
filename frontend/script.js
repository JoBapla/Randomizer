
 function image(){    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(data=> {
        document.getElementById("fill").src=data.message;
    
    });
   
    
    
    // .then(function(x) {
        


    // });
    // console.log(xy);
}


function weather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=5170da73e7f7ead1bd772ee6717cfb47")
    .then(res=> res.json())
    .then(stats=> {
        document.getElementById("temp").innerHTML=Math.round(stats.main.temp)+"°C"
        document.getElementById("weatherIcon").src="weather/" + stats.weather[0].main + ".png";
        
            
    });

}
    
    


