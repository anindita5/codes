function validate(){
    
    var number=document.getElementById("num").value;  
    
    var charge;
    
    if(number >=0 && number <=100)
        charge = number*2.80;
    else if(number >=101 && number <=200)
        charge = number*3.90;
    else 
        charge = number*4.50;
        
    var cnumber=document.getElementById("cno").value;  
    var ccname=document.getElementById("fname").value;
    var ccemail=document.getElementById("cemail").value;
    
    alert("The details entered by you are:-\n" + "Customer Number:-" + " " + cnumber + "\nCustomer Name:-" + " " + ccname + "\nCustomer Email:-" + " " + ccemail + "\nCharges:-" + " " + charge);  

    

    return true;
    
      
      
}
    
    

    