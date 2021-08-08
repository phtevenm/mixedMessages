const randomSign = () => {
	const randomNum = Math.floor(Math.random() * 12) + 1;

	let signs = {
		1: 'Aquarius',
		2: 'Pisces',
		3: 'Aries',
		4: 'Taurus',
		5: 'Gemini',
		6: 'Cancer',
		7: 'Leo',
		8: 'Virgo',
		9: 'Libra',
		10: 'Scorpio',
		11: 'Sagittarius',
		12: 'Capricorn',
	};

	return signs[randomNum];
};

const randomMessage = () => {
	const randomNum = Math.floor(Math.random() * 12) + 1;

	let messages = {
		1: 'Take an adventurous approach.',
		2: 'Love is coming your way.',
		3: 'The fast actions of the day may confuse you.',
		4: 'Your dreamy nature is going to be sparked today and you may take an idealistic view of the world.',
		5: 'Be more optimistic than usual today.',
		6: 'You may be in quite the party mode today.',
		7: 'Searching for the hidden meaning in things may be a waste of time.',
		8: 'Your creative nature is at a peak today.',
		9: "You're likely to feel a burst of energy encouraging you to engage with others in fun, creative projects.",
		10: 'Issues regarding love and romance are likely to improve quite a bit over the next couple weeks.',
		11: 'When it comes to situations regarding love and romance, it might not be a bad idea to lighten up a bit now.',
		12: 'This should be a fun day for you.',
	};

	return messages[randomNum];
};

const mixedMessages = () => {
	return `${randomSign()}: ${randomMessage()}`;
};

console.log(mixedMessages());
