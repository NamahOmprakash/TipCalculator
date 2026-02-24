function func(){
    let amt=document.getElementById("amount").value
    let tip=document.getElementById("tip").value
    let output=document.getElementById("output")
    let btn=document.getElementById("btn")
    let tipper=amt*(tip/100)
    let total= parseInt(tipper)+parseInt(amt);
    output.innerText = total.toFixed(2)
}