// Your code here:
const singSong = () => {
    for(let i = 99; i >= 1; i--) {
        let currentBottleWord = i === 1 ? 'bottle' : 'bottles';
        let remainingPhrase;

        if (i === 1){
            remainingPhrase='no more bottles'
        } else {
            let nextWord = (i-1) === 1 ? 'bottle' : 'bottles';
            remainingPhrase = `${i - 1} ${nextWord}`;
        }
        console.log(`${i} ${currentBottleWord} of milk on the wall, ${i} ${currentBottleWord} of milk. ` + `Take one down and pass it around, ${remainingPhrase} of milk on the wall.`)
    }
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
}

singSong()