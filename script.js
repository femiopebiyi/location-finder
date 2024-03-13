const button = document.querySelector("button");

button.addEventListener ("click",function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    } else {
        button.innerText = 'Browser doesnt not support'}
})

function onSuccess (position){
    button.innerText = 'new location....'
    let {latitude, longitude} = position.coords
    fetch (`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cf0dc14f31ee426696058a39d5812a46`)
        .then ((res)=>{
            return res.json()
        })
        .then((result)=>{
            let Location = result.results[0].formatted

            

            button.innerText = Location;
        })
}

function onError (error){
    if(error.code === 1){
        button.innerText = "You denied the request";
    }else if(error.code === 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }

    button.setAttribute("disabled", "true")
}