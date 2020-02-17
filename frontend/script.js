
 function image(){    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(data=> {
        document.getElementById("fill").src=data.message;
    
    });



}

let bank=new Array();

function weather(){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=5170da73e7f7ead1bd772ee6717cfb47")
    .then(res=> res.json())
    .then(stats=> {
        document.getElementById("temp").innerHTML=Math.round(stats.main.temp)+"°C"
        document.getElementById("weatherIcon").src="weather/" + stats.weather[0].main + ".png";
        
    });

    for(let i=0; i<sessionStorage.length; i++){
        let key=sessionStorage.key(i);
        bank.push(sessionStorage.getItem(key));
        console.log(bank[i]);
        
        var link= document.createElement("A");
        link.setAttribute("onClick","remove(this.id)");
        link.setAttribute('id',bank.length);
        link.innerHTML="x";

        var link2= document.createElement("LI");
        link2.setAttribute('id',"word"+bank.length);
        link2.innerHTML=bank[bank.length-1];

        document.getElementById("bank").appendChild(link);
        document.getElementById("bank").appendChild(link2);

        let line= document.createElement("BR");
        line.setAttribute('id',"line"+bank.length);
        document.getElementById("bank").appendChild(line);
    }   
    
}


function item(){
    if(document.getElementById("bar").value != ""){
        let x=document.getElementById("bar").value;
        document.getElementById("bar").value="";
        
        bank.push(x);
        
        var link= document.createElement("A");
        link.setAttribute("onClick","remove(this.id)");
        link.setAttribute('id',bank.length);
        link.innerHTML="x";

        var link2= document.createElement("LI");
        link2.setAttribute('id',"word"+bank.length);
        link2.innerHTML=bank[bank.length-1];

        document.getElementById("bank").appendChild(link);
        document.getElementById("bank").appendChild(link2);

        let line= document.createElement("BR");
        line.setAttribute('id',"line"+bank.length);
        document.getElementById("bank").appendChild(line);

        sessionStorage.setItem(bank.length.toString(),x.toString());
        
    }

    else{
        document.getElementById("bar").placeholder= "ENTER VALUE!";
        
    }
    
}

function remove(elementId){
    document.getElementById("word"+elementId).remove();
    document.getElementById("line"+elementId).remove();
    document.getElementById(elementId).remove();
    console.log(elementId.toString());
    sessionStorage.removeItem(elementId.toString());
  

    }   
    
    

    
    


