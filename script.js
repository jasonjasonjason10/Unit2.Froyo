const userInput = prompt(
  "Please enter the flavors of Froyo you would like, seperated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//turn string into an array
const flavors = userInput.split(",");

//this is creating a function that all the logic is in (obj,loop,return)
const order = (flavors) => {

//   console.log(flavors);


//creating an empty (blank) object
  const obj = {};

  //creating a loop 
  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    console.log(flavor);

    //loop is going through array and finding the flavors. First time creates the index and then adding 1 everytime it is repeated until the end of the array
    if (obj[flavor]) {
      obj[flavor] = obj[flavor] + 1;
    } else {
      obj[flavor] = 1;
      
    }
  }
  return obj;
};


// printing the function 
console.table(order(flavors));




