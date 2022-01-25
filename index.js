// function addFruit(fruits, fruit) {
//     fruits.push(fruit);
//    // console.log(fruits);
//     return fruits;
//   }
  
//   const fruits = ["🍓", "🍐", "🍎"];
//   addFruit(fruits, "🥝");
//  // process.stdout.write("this should log")
//  console.log(process.argv);
 function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }
  
  const fruits = ["🍓", "🍐", "🍎"];
  console.log(process.argv);
  const input = process.argv[2];
  if (input) {
    let result = addFruit(fruits, input);
    console.log(result);
  } else {
    console.log("No fruit added...");
  }