export {};

class VisaCard {
  constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('JR');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Paul';
