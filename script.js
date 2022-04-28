function compute()
{
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // user cannot enter 0 or -ve values
    if(principal==0 || principal<0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else{
    
    // calculatring interest
    var interest = principal * years * rate /100;
    // var interest_amount=parseInt(interest)+parseInt(principal);
    var y = new Date()
    var year=y.getFullYear()+parseInt(years);

    // p = document.getElementById("principal").value;
    // resulting text
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"   
    }     
}
// function for showing rate value 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;


}

     