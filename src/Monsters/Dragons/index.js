export const fireDragon = {
  type: 'Dragon',
  element: 'Fire',
  moves: [
    { name: 'Fire Ball', low: 5, high: 10, aoe: true, autoMiss: false },
    { name: 'Fire Claw', low: 2, high: 5, aoe: false, autoMiss: false },
    { name: 'Fly', low: 5, high: 10, aoe: false, autoMiss: true },
    { name: 'Growl', low: 1, high: 3, aoe: false, autoMiss: true }
  ]
};
