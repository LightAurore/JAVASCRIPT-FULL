export default function (obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
  }

  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });
}

export const sum = (items) => items.reduce((acc, item) => acc + item, 0);

export const hello1 = () => console.log("hello");

export function hello() {
  console.log("hello world !");
}
export const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
