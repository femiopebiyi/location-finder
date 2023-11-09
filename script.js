const button = document.querySelector("button");

button.addEventListener ("click",function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    } else {
        button.innerText = 'Browser doesnt not support'}
})

function onSuccess (position){
    let {latitude, longitude} = position.coords
    console.log(latitude, longitude)
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