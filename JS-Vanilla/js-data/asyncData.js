async function* asyncDataGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const asyncIterable = asyncDataGenerator;
console.log(asyncIterable);

async function consumeAsyncIterable() {
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  let result = await asyncIterator.next();
  for await (const value of asyncIterable) {
    console.log(value);
  }

  while (!result.done) {
    console.log("Resultat : " + result.value);
    result = await asyncIterator.next();
  }
}

consumeAsyncIterable();

async function fetchUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  async function* asyncDataGenerator() {
    for (const user of data) {
      yield user;
    }
  }

  for await (const user of asyncDataGenerator()) {
    console.log(user.name);
  }
}

fetchUserData();
