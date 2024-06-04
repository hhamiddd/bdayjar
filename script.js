const messages = [
    "The way you talk about things that interest you (books, watches, etc)",
    "Your smile",
    "How you really listen, you're an amazing listener",
    "The way you empathize and understand, you're very caring",
    "How kind you are",
    "How much you love your parents and family",
    "How you light up everyone who knows you's life",
    "How nerdy you are (you're still an idiot)",
    "How thoughtful you are",
    "How you inspire other people to be kind just by being bahaa bruh",
    "There's factually and metaphorically no one like you in beauty, inside and out",
    "How creative you are even though you dont really admit it",
    "Great taste in music (cause its just like mine duh)",
    "Youre dependable / very easy to trust because you're genuine innit",
    "Your heart",
    "How generous you are",
    "You're a chef",
    "Your compassion towards the world",
    "Your laugh makes me laugh, its contagious",
    "How you make life more colorful fr, even when you dont think you do, you do",
    "This is more than 22 but, how talented you are",
    "Youre insanely caring",
    "Youre kind of funny i guess",
    "How intelligent you are and observant",
    "How much knowing you is a blessing that I hope no one takes for granted",
    "How deserving you are of good, because you are the best person I know",
    "I could list 100000 of these but, your sense of trust and patience in everything, it motivates me",
];

function shuffleMessages() {
    console.log('Shuffling messages');
    for (let i = messages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [messages[i], messages[j]] = [messages[j], messages[i]];
    }
    document.getElementById('message').innerText = 'shuffled! Click "Reveal" to see one!';
}

function revealMessage() {
    console.log('Revealing message');
    const message = messages.shift();
    if (!message) {
        document.getElementById('message').innerText = 'No more messages left! Happy Birthday ILY!';
    } else {
        document.getElementById('message').innerText = message;
    }
}
