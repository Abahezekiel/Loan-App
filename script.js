let loan_section = document.getElementById("loansection");
let amount_error = document.getElementById("amount_Err");
let point = 0;
let first = document.getElementById("first");
// let username = prompt("what is your name");
// first.innerHTML = `welcome ${username}, Fill in correct details in the form below`;
let congrt = document.getElementById('congrt');


function getloan() {
let surname = document.getElementById('surname');
let name = document.getElementById('name');
  
  let collect = document.getElementById("amount_to_collect").value;
  let balance = document.getElementById("current_balance").value;
  let history = document.getElementById("credit_history").value;
  let prevdep = document.getElementById("Last_Deposit").value;
  let prevloan = document.getElementById("Last_Loan").value;
  let Loan_Repay = document.getElementById("Loan_Repay").value;
  let current = document.getElementById("Account Type").value;
  let congrt = document.getElementById("Account Type").value;

  // e.preventDefault()
  // if(current_balance.value === ""){
  //   amount_error.innerHTML = "Field Required"
  // }

  if (balance > collect) {
    point = +10;
    console.log(point);
  } else {
    point = -10;
    console.log(point);
  }

  if (history === "high") {
    point = point + 10;
    console.log(point);
  }

  if (prevdep === "high") {
    point = point + 5;
    console.log(point);
  }

  if (prevloan === "high") {
    point = point + 10;
    console.log(point);
  }

  if (Loan_Repay === "high") {
    point = point + 5;
    console.log(point);
  }

  if (current === "current") {
    point = point + 10;
    console.log(point);
  } else {
    point = point + 5;
    console.log(point);
  }

  if (point >= 30) {
    console.log(point);

    // congrt.innerHTML `Thank you , for contacting EazyMoney about your credit needs. Unfortunately, after careful review of your application, we must decline your loan request at this time. However, we would gladly reconsider your request, Kindly reachout to our customer care agent.`;

    alert("Congratulations! You meet all our criteria for our EazyMoney Loan");
  } else {
    console.log(point);

    alert(
      "Thank you for contacting EazyMoney about your credit needs. Unfortunately, after careful review of your application, we must decline your loan request at this time. However, we would gladly reconsider your request, Kindly reachout to our customer care agent."
    );
  }


}
