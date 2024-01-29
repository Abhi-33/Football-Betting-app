const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁SUBSTITUTION'],
    [47, ' GOAL'],
    [61, '🔁SUBSTITUTION'],
    [64, '🟨YELLOW CARD'],
    [69, '🔴RED CARD'],
    [70, '🔁SUBSTITUTION'],
    [72, '🔁SUBSTITUTION'],
    [76, '⚽GOAL'],
    [80, '⚽GOAL'],
    [92, '🟨YELLOW CARD'],
]);
//1
const events = ['⚽GOAL' , '🔁SUBSTITUTION' , '🟨YELLOW CARD' , '🔴RED CARD'];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
