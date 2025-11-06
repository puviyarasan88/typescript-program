let greet = (name4: string, callback: (message: string) => void): void => {
  callback(`Hello, ${name4}`);
};

greet("Puvi", (message) => console.log(message));

//second method
let greet1 = (): void => {
  console.log("Puvi");
};

let helloName2 = (callback2: () => void): void => {
  callback2();
};
helloName2(greet1);
