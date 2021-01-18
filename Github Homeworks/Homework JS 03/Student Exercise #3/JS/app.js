function calculateAge(currentYear, birthYear){
    let age = currentYear - birthYear;
    alert(`You are ${age} years old`);
}

calculateAge(2021, 1990);

calculateAge(2021, 1999);

calculateAge(2021, 1975);

// ----------- Bonus -----------

function calculateAgeBonus(birthYearBonus){
    let currentYearBonus = new Date().getFullYear()
    let ageBonus = currentYearBonus - birthYearBonus;
    alert(`You are ${ageBonus} years old`);
}

calculateAgeBonus(1990);

calculateAgeBonus(1968);

calculateAgeBonus(2001);