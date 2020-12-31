
// random messages
const messages = {
    messagesIntro: [
    'Welcome home',
    'I am your master now',
    'We will be best buds'
    ],
    messagesInter: [
    'Will you give me endless belly rubs?',
    'How many treats will I get per day?',
    'What is my name?',
    'Can we live at the dog park?',
    'Do I have any brothers or sistes?'
    ],
    messagesEnd: [
    'Looking forward to the rest of our lives together!',
    'You are my bestfriend',
    'I love you'
    ],
}

// random index number generator
function randomIndex (num) {
    return Math.floor(Math.random() * num)
}

// message generator
const message1 = 'You have a special message from your future dog: ${messages.messagesIntro[randomIndex(messages.messagesIntro.length)]}'
const message2 = 'He/she wants to ask you: ${messages.messagesInter[randomIndex(messages.messagesInter.length)]}'
const message3 = 'He/she says: ${messages.messagesEnd[randomIndex(messages.messagesEnd.length)]}'