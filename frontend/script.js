
 function image(){    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(data=> {
        document.getElementById("fill").src=data.message;
    
    });

}


function weather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=5170da73e7f7ead1bd772ee6717cfb47")
    .then(res=> res.json())
    .then(stats=> {
        document.getElementById("temp").innerHTML=Math.round(stats.main.temp)+"°C"
        document.getElementById("weatherIcon").src="weather/" + stats.weather[0].main + ".png";
        
    });

}

let bank=new Array();
function item(){
    if(document.getElementById("bar").value != ""){
        let x=document.getElementById("bar").value;
        document.getElementById("bar").value="";
        bank.push(x);
        
        var link= document.createElement("A");
        link.setAttribute("href",href="index.html");
        link.setAttribute('id',bank.length);
        link.innerHTML="<li>"+bank.length+". "+bank[bank.length-1]+"</li>";
        document.getElementById("bank").appendChild(link);
        
        // var node = document.createElement("LI");  
        // node.setAttribute('id',bank.length);               
        // var textnode = document.createTextNode(bank.length+". "+bank[bank.length-1]);         
        // node.appendChild(textnode);                              
        // document.getElementById("bank").appendChild(node);
        
        // document.getElementById("bar").placeholder= "add item";
        // console.log(document.getElementById("2"));  
    }
    else{
        document.getElementById("bar").placeholder= "ENTER VALUE!";
        
    }
    
}
    
    


