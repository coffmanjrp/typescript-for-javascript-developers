export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }

  return bmi;
};

bmi(1.7, 80, true);

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.7, 80, true);
// bmi(1.7, 80, false);
// bmi(1.7, 80);
