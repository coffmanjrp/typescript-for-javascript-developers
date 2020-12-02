export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = { name: 'JR', age: 34 };

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Tomo',
  age: 20,
};

// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
