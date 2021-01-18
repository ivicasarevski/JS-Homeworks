function AtmGiveCash(amountWithdrawn){
    let accountMoney = (1000);
    let moneyLeftOnAccount = accountMoney - amountWithdrawn;
    if (amountWithdrawn > 1000) {
        alert(`Not enough money`);
    } else {
        alert(`Amount withdrawn = ${amountWithdrawn}`);
        alert(`Amount left on the account = ${moneyLeftOnAccount}`);
    }
}

AtmGiveCash(800);

// ---------------- Bonus ------------------

// function AtmGiveCash(){
//     let amountWithdrawn = prompt(`How much money would You like to withdraw?`);
//     let accountMoney = (1000);
//     let moneyLeftOnAccount = accountMoney - amountWithdrawn;
//     if (amountWithdrawn > 1000) {
//         alert(`Not enough money`);
//     } else {
//         alert(`Amount withdrawn = ${amountWithdrawn}`);
//         alert(`Amount left on the account = ${moneyLeftOnAccount}`);
//     }
// }

// AtmGiveCash();
