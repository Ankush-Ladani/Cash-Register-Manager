let BillAmount = document.querySelector('#bill-amount');
let CashAmount = document.querySelector('#cash-given');

let CheckBtn = document.querySelector('#check-btn').addEventListener('click',checking);
let message = document.querySelector('.message');

notes = [2000, 500, 100, 20, 10, 5, 1];


function checking(){
    if(BillAmount.value == 'none'){
        CashAmount.ariaDisabled;
    }
    if(BillAmount.value > 0 && CashAmount.value > 0){
        if(CashAmount.value >= BillAmount.value){
            let amountToreturn = CashAmount.value - BillAmount.value;
            calculaterAmountToReturn(amountToreturn);
        }
        else{
            message.innerHTML = 'Do You Wanna Wash the Plates?';
        }
    }
    else{
        message.innerHTML = 'Amount Should Be positive';
    }
}
let Currency  = document.querySelectorAll('.note');
function calculaterAmountToReturn(amt){
    for(var i=0;i<notes.length;i++){
        
        let no_of_notes = Math.trunc(amt / notes[i]);
        Currency[i].innerHTML = no_of_notes;
        amt  = amt % notes[i]; 
    }
}
