export const animalData = {
    Clownfish: {
      writeUp: [
        'the life of the party',
        '*pokes you for fun and then pretends nothing happened*',
        'accidentally double-books their time',
        'fluent in yappanese'
      ],
      bulletPoints: [
        'Creative & energetic',
        'Highly social',
        'Loves attention',
        'A clown'
      ],
      compatible: ['Axolotl', 'Whale'],
      incompatible: ['Turtle', 'Pufferfish'],
      image: '/static/characters/feesh.png'
    },
    Turtle: {
      writeUp: [
        '\"i can do it !!!….???\"',
        'dislikes tension and conflict',
        '\"“when life gives me lemons try ur best to eat the lemon\”',
        '*overstimulated after 1 night out*'
      ],
      bulletPoints: [
        'Soft but mighty',
        'Dependable',
        'Rich inner world',
        'Prone to stress'
      ],
      compatible: ['Jellyfish', 'Whale'],
      incompatible: ['Clownfish', 'Octopus'],
      image: '/static/characters/tortoise.png'
    },
    Jellyfish: {
      writeUp: [
        '\"life is a journey n i am d destination ~\"',
        'very supportive friends',
        '\"anything u choose\"',
        '*spends 20 mins flipping the menu*'
      ],
      bulletPoints: [
        'Easygoing & creative',
        'Empathetic',
        'Highly tolerant',
        'Indecisive'
      ],
      compatible: ['Turtle', 'Axolotl'],
      incompatible: ['Shark', 'Pufferfish'],
      image: '/static/characters/jellyfish.png'
    },
    Octopus: {
      writeUp: [
        'always one step ahead',
        '\"“let\'s bet $5 on this heh heh\”',
        '\“sure but—\”',
        'likes a good challenge'
      ],
      bulletPoints: [
        'Intelligent & curious',
        'Quick-witted',
        'Likes intellectual stimulation',
        'Argumentative'
      ],
      compatible: ['Shark', 'Pufferfish'],
      incompatible: ['Turtle', 'Whale'],
      image: '/static/characters/octopuz.png'
    },
    Shark: {
      writeUp: [
        'has an excellent productivity system',
        '*takes charge of the vacation planning*',
        'my way or the highway',
        '\“ok everyone lez do this\”'
      ],
      bulletPoints: [
        'Assertive and driven',
        'Committed',
        'Strong-willed',
        'A natural leader'
      ],
      compatible: ['Octopus', 'Pufferfish'],
      incompatible: ['Jellyfish', 'Axolotl'],
      image: '/static/characters/shark.png'
    },
    Axolotl: {
      writeUp: [
        '*comes up with the most out-of-the-box ideas that still makes sense*',
        'has 10000 hobbies and/or interests',
        'constantly seeking to grow',
        '(is it self-reflection or overthinking?)'
      ],
      bulletPoints: [
        'Enthusiastic & friendly',
        'Has intriguing views',
        'Deep thinker',
        'Prone to perfectionism'
      ],
      compatible: ['Clownfish', 'Jellyfish'],
      incompatible: ['Shark', 'Whale'],
      image: '/static/characters/axolotl.png'
    },
    Whale: {
      writeUp: [
        'may be 20 but has the mental age of 50',
        '\“back in my day...\”',
        'gives the best advice',
        '\"guys what is rizz\”'
      ],
      bulletPoints: [
        'Steady & reliable',
        'An old soul',
        'Methodical',
        'Resistant to change'
      ],
      compatible: ['Clownfish', 'Turtle'],
      incompatible: ['Axolotl', 'Octopus'],
      image: '/static/characters/whale.png'
    },
    Pufferfish: {
      writeUp: [
        '\“help i\'m so busy...\” *signs up for a new commitment*',
        'chugs 4 coffees/day, sleeps at 3am',
        '\“wtf is wrong with this?!\”',
        '\“im bored\” (has a full-time job and 3 coffee chats and a side hustle lined up the next day)'
      ],
      bulletPoints: [
        'Creative & spontaneous ',
        'Risk-taker',
        'Always busy',
        'Defensive'
      ],
      compatible: ['Octopus', 'Shark'],
      incompatible: ['Clownfish', 'Jellyfish'],
      image: '/static/characters/pufferfish.png'
    }
  };
  
  export const getAnimalInfo = (animal) => {
    return animalData[animal] || { writeUp: [], bulletPoints: [], compatible: [], incompatible: [], image: '/static/images/default.png' };
  };
  