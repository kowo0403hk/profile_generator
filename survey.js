const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)  ', (answer1) => {
  console.log(`Hi ${answer1}! Nice to meet you!`);
  rl.question('What\'s an activity you like doing?', (answer2) => {
    console.log(`${answer2} is a very cool one!`);
    rl.question('What do you listen to while doing that?', (answer3) => {
      console.log(`${answer3} seems like a good choice.`);
      rl.question('What kinda food do you like most?', (answer4) => {
        console.log(`I like ${answer4} too!`);
        rl.question('What is your superpower?', () => {
          console.log(`Wish I have that too! Thank you very much for your time ${answer1}!`);
          rl.close();
        })
      });
    });
  });
});
