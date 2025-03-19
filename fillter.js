const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const num = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = num.filter((num)=> num > 3 =0);
// console.log(oddNumbers);


const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Mike', age: 18 },
    { name: 'Sara', age: 22 }
  ];
  const adults = people.filter(person => person.age >= 21);
  console.log(adults);
  // Output: [
  //   { name: 'Jane', age: 30 },
  //   { name: 'Sara', age: 22 }
  // ]
  
