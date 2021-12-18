var buyPrice = document.querySelector("#initial-price");

var qty = document.querySelector("#stock-quantity");

var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);


function submitHandler()
{
    var quantity= qty.value;
    var buyP= buyPrice.value*quantity;
    var currentP= currentPrice.value*quantity;


    if(currentP<buyP && Validate(quantity,buyP,currentP))
    {
       
        var loss= buyP-currentP;
        var lossPercent= (loss/buyP)*100;
        ShowMessage(`Your loss is ${loss} & loss Percentage is ${lossPercent}%`);
    }
    else if(buyP<currentP && Validate(quantity,buyP,currentP))
    
    
    {
      
        var profit=currentP-buyP;
        var ProfitPercent= (profit/buyP)*100;
        ShowMessage(`Your profit is ${profit} & profit Percentage is ${ProfitPercent}%`);
    }
    else
    {
  
        if( Validate(quantity,buyP,currentP)===false){

        }
        
        else{
            ShowMessage(`You didn't face any Loss or Profit`);
        }
        
    }
}

function Validate(quantity,buyP,currentP){

    if(quantity>0 && buyP >0 && currentP >0){
        return true;
    }
    else{
        ShowMessage(`
        
        
        
        Enter valid number`);
        return false;   
    }
}

function ShowMessage(message){
    outputBox.innerText=message;
}
    


    
   








