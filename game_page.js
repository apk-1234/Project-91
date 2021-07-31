function send()
{
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    product=parseInt(number1)*parseInt(number2);
    q_no="<center><h4>"+number1+" X "+number2+"</h4>";
    input="<br>Answer :  <input type='text' placeholder='Answer' id='ans'>";
    check_btn="<br><br><button type='button' onclick='check()' class='btn btn-info'>Check</button></center>";
    row=q_no+input+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").innerHTML="";
    document.getElementById("number_2").innerHTML="";
}