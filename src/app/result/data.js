export const animalData = {
    Clownfish: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Octopus', 'Tortoise'],
      incompatible: ['Shark', 'Axolotl'],
      image: '/static/characters/feesh.png'
    },
    Tortoise: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Axolotl', 'Whale'],
      incompatible: ['Clownfish', 'Octopus'],
      image: '/static/characters/tortoise.png'
    },
    Jellyfish: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Shark', 'Whale'],
      incompatible: ['Clownfish', 'Octopus'],
      image: '/static/characters/jellyfish.png'
    },
    Octopus: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Clownfish', 'Jellyfish'],
      incompatible: ['Tortoise', 'Axolotl'],
      image: '/static/characters/octopuz.png'
    },
    Shark: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Jellyfish', 'Whale'],
      incompatible: ['Clownfish', 'Axolotl'],
      image: '/static/characters/shark.png'
    },
    Axolotl: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Tortoise', 'Jellyfish'],
      incompatible: ['Shark', 'Octopus'],
      image: '/static/characters/axolotl.png'
    },
    Whale: {
      writeUp: [
        'writeuppoint1',
        'writeuppoint2',
        'writeuppoint3',
        'writeuppoint4'
      ],
      bulletPoints: [
        'bulletpoint1',
        'bulletpoint2',
        'bulletpoint3',
        'bulletpoint4',
        'bulletpoint5'
      ],
      compatible: ['Tortoise', 'Jellyfish'],
      incompatible: ['Axolotl', 'Clownfish'],
      image: '/static/characters/whale.png'
    }
  };
  
  export const getAnimalInfo = (animal) => {
    return animalData[animal] || { writeUp: [], bulletPoints: [], compatible: [], incompatible: [], image: '/static/images/default.png' };
  };
  