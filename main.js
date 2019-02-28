'use strict'
// Design guessing game about yourself that involves five YES/NO questions. Be creative and fun.

// My guessing game ask 5 questions and provides an affirmative or declined response. Some responses are case sensitive... read the instructions carefully!!

let question1 = prompt('How do you write your nickname?');
if (question1 === question1.toUpperCase('PABLO')){
  confirm ('Yessir!' .toUpperCase())
 }

else {
   confirm ('Please take a walk!!' .toUpperCase())
 }

let question2 = prompt('Where are you from my friend \(In caps\)?');
if (question2 === question2.toUpperCase('JAMAICA')){
  confirm ('Excellent!!')
}

else {
  confirm ('No you are an imposter!' .toLowerCase())
}

let question3 = prompt('What is your favorite hobby?');
if (question3 === ('Basketball')){
  confirm ('Now we\'re getting somewhere' .toUpperCase())
}

else {
  confirm ('Why are you trying to trick us?' .toUpperCase())
}

let question4 = prompt('How would you describe yourself professionally \(all lower case\)?')
if (question4 === question4.toLowerCase('a developing developer')){
  confirm ('Sounds like someone I know' .toLowerCase())
}

else {
  confirm ('That\'s it, I\'m calling the cops!' .toUpperCase())
}

 let question5 = prompt ('Finally, what is your favorite movie \(in all caps\)?')
 if (question5 === question5.toUpperCase ('THE LION KING')){
   confirm ('Welcome, nice to see you again Pablo')
 }

 else {
   confirm ('I don\'t know who you are. I don\'t know what you want. If you\'re looking to get access, I can tell you, it cannot be found here!!' .toUpperCase())
 }



