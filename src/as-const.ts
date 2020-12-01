export {};

let name = 'Paul';

name = 'JR';

let nickname = 'JR' as const;
// nickname = 'JR-san';
nickname = 'JR';

let profile = {
  name: 'Paul',
  height: 170,
} as const;

// profile.name = 'JR';
// profile.height = 180;
