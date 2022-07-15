# Array

## Methods

### join()

`arr.join()` method creates and returns a new string concatenating all elements in an array. It accepts as a parameter a separator, like a comma or a specified separator.

```js
const arr = ["Ana", "Lucas", "Mateus", "Sarah"];

console.log(arr.join()); // => Ana,Lucas,Mateus,Sarah
console.log(arr.join("-")); // => Ana-Lucas-Mateus-Sarah
```

If an **empty array** is given it returns an **empty string**!
