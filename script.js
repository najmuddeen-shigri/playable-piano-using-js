const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheckbox = document.querySelector(".keys-checkbox input")
let allKeys =[], audio = new Audio("tunes/a.wav")
const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
    clickedKey.classList.remove("active")
        
    }, 150);

}
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});
const showHidekey = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const handleVolume= (e)=>{ 
    audio.volume = e.target.value;

}
const pressedKey = (e)=>{
   if(allKeys.includes(e.key)) playTune(e.key);
}
volumeSlider.addEventListener("input", handleVolume  );
keyCheckbox.addEventListener("click", showHidekey);
document.addEventListener("keydown", pressedKey  );