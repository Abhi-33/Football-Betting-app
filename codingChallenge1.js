const game = {
    team1 : 'Bayern Munich',
    team2 : 'Borrussia Dortmund',
    players : [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski' , 'Gnarby' , 'Lewandowski' , 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1 : 1.33,
        x : 3.25,
        team2 : 6.5,
    },
};
// 1.Creating one player array for each team using de-structuring 
const [players1 , players2] = game.players;
// 2.make a variable named 'gk'containig the name of first player of any array as goalkeeper
const gk = players1[0];
// 3.make a variable and store rest of the 10 players in it 
const fieldPlayers = players1.slice(1);
// const[gk , ...fieldPlayers] = players1; //one-line code for both above lines of code in 46 & 44 !!
// console.log(fieldPlayers); output : 'Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',
// console.log(gk); output : Neuer
// 4.make a variable containig all the players from both the teams 
const allPlayers = [...players1 , players2];
// console.log(allPlayers); Output : All players from both teams 
// 5.add 3 subsequent players in players1 variable team1 
const players1Final = [...players1 , 'Thiago','coutinho','perisic'];
// console.log(players1Final);
// 6. based on game.odds Object create three variables 
const {odds:{team1 , x:draw , team2}} = game; //use of nested-destructuring here
console.log(team1 , draw , team2);
//  function 
const printGoals = (...players) => {
console.log(`${players.length} goals were scored !! `);
}
printGoals('Lewandowski' , 'Gnarby' , 'Lewandowski' , 'Hummels') //Output : 4 goals were scored

team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');

console.log('Coding challenge 2 Started'.padStart(30 , '*').padEnd(34,'*'));
