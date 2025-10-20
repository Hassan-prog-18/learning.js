// For Loop..

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is best number");
        
    }
    // console.log(element);
    
    
}

for (let i = 1; i <= 10 ; i++) {
    // console.log(`Outer Loop value: ${i} `);
    
   for (let d = 1; d <= 10; d++) {
    // console.log(`Inner Loop value: ${d} and inner loop ${i} `);
    // console.log(i + '*' + d + '=' + i*d);

    
   }
    
}

const myArray = ["Superman", "Batman", "Flash"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// Break amd continue..

// for (let index = 1; index <= 20; index++){
//     if (index == 7) {
//         console.log("Number 7 is detected");
//         break
//     }
//     console.log(`Value of index is ${index}`);
      
// }

for (let index = 1; index <= 20; index++){
    if (index == 7) {
        console.log("Number 7 is detected");
       continue
    }
    console.log(`Value of index is ${index}`);
      
}