// Homework

// 1.
function concat(word1: string, word2: string): string {
  return word1 + word2;
}

concat('Hello ', 'World');

// 2.

interface MyHomeTaskInterface {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData: Array<object>;
}

const MyHometask: MyHomeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// 3.

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(callbackFn: (previousValue: U, currentValue: T) => U, initialValue: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3, 4];
tsArr.reduce((a, b) => a + b, 0);
