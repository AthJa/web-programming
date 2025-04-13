function calc(){
    const adult=parseInt(document.getElementById("adult").value);
    const child=parseInt(document.getElementById("child").value);
    
    const total=adult*10+child*5;
    document.getElementById("result").value=total;
}