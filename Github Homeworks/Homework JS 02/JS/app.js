let wouldLikeClculateChineseZodiac = prompt(`Hi, would yoy like me to calculate what your Chinese Zodiac is?`);



if (wouldLikeClculateChineseZodiac === `yes`) {
    let year = prompt(`What year were yoy born?`);

    let chineseZodiacSignCalculation = ((year - 4) % 12);

    if (chineseZodiacSignCalculation === 0) {
        alert(`Your Chinese Zodiac sign is Rat!`);
    } else if (chineseZodiacSignCalculation === 1) {
        alert(`Your Chinese Zodiac sin is Ox! `);
    } else if (chineseZodiacSignCalculation === 2) {
        alert(`Your Chinese Zodiac sign is Tiger!`);
    } else if (chineseZodiacSignCalculation === 3) {
        alert(`Your Chinese Zodiac sign is Rabbit!`);
    } else if (chineseZodiacSignCalculation === 4) {
        alert(`Your Chinese Zodiac sign is Dragon!`);
    } else if(chineseZodiacSignCalculation === 5) {
        alert(`Your Chinese Zodiac sign is Snake!`);
    } else if(chineseZodiacSignCalculation === 6) {
        alert(`Your Chinese Zodiac sign is Horse!`);
    } else if (chineseZodiacSignCalculation === 7) {
        alert(`Your Chinese Zodiac sign is Goat!`);
    } else if (chineseZodiacSignCalculation === 8) {
        alert(`Your Chinese Zodiac sign is Monkey!`);
    } else if (chineseZodiacSignCalculation === 9) {
        alert(`Your Chinese Zodiac sign is Rooster!`);
    } else if (chineseZodiacSignCalculation === 10) {
        alert(`Your Chinese Zodiac sign is Dog!`);
    } else if (chineseZodiacSignCalculation === 11) {
        alert(`Your Chinese Zodiac sign is Pig!`);
    }else {
        alert(`Sorry, there's something wrong with your calculation`);
    }
} else {
    alert(`OK,have a good day!`)
}



// Class exercise

// let wouldLikeSomething = prompt(`Hi, would yoy like something`);

// if (wouldLikeSomething === `yes`) {
//     let money = prompt(`How much money do You have?`);   
//     if (money >= 1000) {
//         alert(`You can get a table with ${money}`);
//     } else if (money > 700) {
//         alert(`You can get a chair with ${money}`);
//     } else if (money > 400) {
//         alert(`You can get a pillow with ${money}`);
//     } else {
//         alert(`Sorry, you don't have enough money to get anything`);
//     }
// } else {
//     alert(`Sorry, You don't have enough money to buy anything.`);   
// }

