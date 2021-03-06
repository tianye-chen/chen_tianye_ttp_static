function update(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    document.getElementById("hour").firstChild.nodeValue = ("0"+((hour <= 12) ? `${hour}` : `${hour-12}`)).slice(-2)+" :";
    document.getElementById("min").firstChild.nodeValue = ("0"+min).slice(-2)+" :";
    document.getElementById("sec").firstChild.nodeValue = ("0"+sec).slice(-2);
    document.getElementById("AMPM").firstChild.nodeValue = (hour <= 12) ? "AM" : "PM";
}

function init(){
    window.setInterval("update()", 1);
}

// downArrow will only be visible at the top of the page
window.addEventListener('scroll', () =>{
    if (window.scrollY > 0){
        document.getElementById("downArrow").style.opacity = "0";
    } 
    else
        document.getElementById("downArrow").style.opacity = "1";
})