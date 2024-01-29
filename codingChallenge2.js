// const game = {
//     team1 : 'Bayern Munich',
//     team2 : 'Borrussia Dortmund',
//     players : [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski' , 'Gnarby' , 'Lewandowski' , 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1 : 11.33,
//         x : 3.25,
//         team2 : 6.5,
//     },
// };
// Coding challenge 2 
// 1.
const Scored = game.scored;
// for(const g of Scored) console.log(g);
// console.log([...Scored.entries()]);
for(const [i,player] of Scored.entries()){
    console.log(`Goal ${i + 1} : ${player}`);
}
// 2.
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds){
    average+=odd;
    average/=odds.length;
  
}
console.log(average);
// 3.
for(const [team ,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}:${odd}`);
}