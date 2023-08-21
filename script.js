function getElement(id) {
  const element = document.getElementById(id);
  const elementValue = element.value;
  const elementValueNum = parseFloat(elementValue);
  return elementValueNum;
}
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", function () {
  const income = getElement("income-input");
  const food = getElement("food-input");
  const rent = getElement("rent-input");
  const clothes = getElement("clothes-input");
  const totalExpenses = document.getElementById("total-ex");
  const balance = document.getElementById("balance");
  let totalBal;
  let exp;

  //Validation
  if ((isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes))) {
    alert("please input value");
    return;
  } else if (isNaN(income)) {
    alert("please input your income");
    return;
  }else if(isNaN(food) && isNaN(rent) && isNaN(clothes)){
    balance.innerText = income;

  }else if( income< 0 ||food < 0 || rent <0 || clothes<0){
    alert('Please isert Positive Value')
    return;
  }
  else if(food > income || rent > income || clothes> income || food + rent > income || rent + clothes > income || clothes + food > income || food + rent + clothes > income){
    alert('your expense is grather than your income')

  }
  else if (food && rent && clothes){
    const totalExClac = food + rent + clothes;
    const result = income - totalExClac;
    totalExpenses.innerText = totalExClac;
    balance.innerText = result;
  }
  else if(food && rent ){
    totalBal = income - (food + rent);
    balance.innerText = totalBal;
     exp = food + rent;
    totalExpenses.innerText = exp;
  }else if(clothes && food ){
    totalBal = income - (clothes + food);
    balance.innerText = totalBal;
     exp = clothes + food;
    totalExpenses.innerText = exp;
  }else if(clothes && rent ){
    totalBal = income - (clothes + rent);
    balance.innerText = totalBal;
     exp = clothes + rent;
    totalExpenses.innerText = exp;
  }
  else if(food){
    totalBal = income - food;
    balance.innerText = totalBal;
    totalExpenses.innerText = food;
  }else if(rent){
    totalBal = income - rent;
    balance.innerText = totalBal;
    totalExpenses.innerText = rent
  }else if(clothes){
    totalBal = income - clothes;
    balance.innerText = totalBal;
    totalExpenses.innerText = clothes
  }
  else if (totalExClac > income) {
    alert("your income is less the expenses");
    return;
  }  
});

//save btn
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  const save = getElement("save-input");
  const saveAmountValue = document.getElementById("saving-amount");
  const remainingBal = document.getElementById('reaming-bal');  

  //geting element id
  const income = getElement("income-input");
  const food = getElement("food-input");
  const rent = getElement("rent-input");
  const clothes = getElement("clothes-input");
  const totalExpenses = document.getElementById("total-ex");
  const balance = document.getElementById("balance");
  let totalBal;
  let exp;
  let currentBal;
  let saveAmount;
  //Validation
  if ((isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes))) {
    alert("please input value");
    return;
  } else if (isNaN(income)) {
    alert("please input your income");
    return;
  }else if(isNaN(food) && isNaN(rent) && isNaN(clothes)){
    currentBal = balance.innerText = income;
    saveAmount = currentBal * (save / 100);
    remainingBal.innerText = currentBal - saveAmount;

    saveAmountValue.innerText = saveAmount;

  }else if (food && rent && clothes){
    const totalExClac = food + rent + clothes;
    const result = income - totalExClac;
    totalExpenses.innerText = totalExClac;
    balance.innerText = result;
    saveAmount = result * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = result - saveAmount;
  }
  else if(food && rent ){
    totalBal = income - (food + rent);
    balance.innerText = totalBal;
     exp = food + rent;
    totalExpenses.innerText = exp;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }else if(clothes && food ){
    totalBal = income - (clothes + food);
    balance.innerText = totalBal;
     exp = clothes + food;
    totalExpenses.innerText = exp;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }else if(clothes && rent ){
    totalBal = income - (clothes + rent);
    balance.innerText = totalBal;
     exp = clothes + rent;
    totalExpenses.innerText = exp;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }
  else if(food){
    totalBal = income - food;
    balance.innerText = totalBal;
    totalExpenses.innerText = food;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }else if(rent){
    totalBal = income - rent;
    balance.innerText = totalBal;
    totalExpenses.innerText = rent;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }else if(clothes){
    totalBal = income - clothes;
    balance.innerText = totalBal;
    totalExpenses.innerText = clothes;
    saveAmount = totalBal * (save / 100);
    saveAmountValue.innerText = saveAmount;
    remainingBal.innerText = totalBal - saveAmount;
  }
  else if (totalExClac > income) {
    alert("your income is less the expenses");
    return;
  }   if ((isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes))) {
    alert("please input value");
    return;
  } else if (isNaN(income)) {
    alert("please input your income");
    return;
  }

});
