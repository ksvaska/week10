function calculateTotalPrice(quantity = 2, price = 15000000){
    return quantity * price;
    
}
const result = calculateTotalPrice();
console.log(result.toLocaleString('ru-Ru'));
 
const button = document.querySelector("button");

const showTotalPrice =()=>{
    alert (`Стоимость покупки: ${result.toLocaleString('ru-Ru')} рублей.`);
}

// код вывода сообщения на страницу
function showMessage(){

let a = document.getElementById("message").value = `Стоимость покупки: ${result.toLocaleString('ru-Ru')} рублей.`

document.getElementById("message").innerHTML = a;
}
