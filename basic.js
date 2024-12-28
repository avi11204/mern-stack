// // var a =5;
// // console.log(a);
// // ======================================================================//
// // const aa =5;
// // console.log(aa);
// // ======================================================================//
// // function a(){
// //     if(true)
// //     {
// //         let a=5;
// //         console.log(a);
// //     }
// // }
// // a();
// // ======================================================================//
// // function a() {
// //     if (true) {
// //         var a = 5;

// //         console.log(a);
// //     }
// //     console.log(a);
// // }
// // a();
// // ======================================================================//
// // function a() {
// //     if (true) {
// //      let a = 5;

// //         console.log(a);
// //     }
// //     console.log(a);
// // }
// // a();
//   // ======================================================================//    
// // console.log(a);
// // var a = 5;

//  // ======================================================================//       
// // console.log(a);
// // let a = 5;
// // ======================================================================//

// // console.log(l);
// // const l = 5;
// // ======================================================================//
// //let a=5;
// //let a=3;
// //console.log(a);
// //op=3
// // ======================================================================//
// // const a=5;
// // a=3;
// // console.log(a);
// // ======================================================================//
// // if(true){
// //     console.log("hi");
// // }
// // ======================================================================//
// // if(false){
// //     console.log("hi");
// // }

// // ======================================================================//
// // number
// // boolean
// // string
// // 
// // 
// // ======================================================================//
// // let a=8;
// // let b="avi";
// // let c=true;

// // console.log(typeof(a))
// // console.log(typeof(b))
// // console.log(typeof(c))
// // // ======================================================================//
// // // bigint

// // let d=156464654644n;
// // let e=BigInt(156464654644);
// // console.log(typeof(d))
// // console.log(typeof(e))
// // ======================================================================//
// // objects

//     // let s1={
//     //     name:"avi",
//     //     age:20,
//     //     isStudent : true
//     // }
//     // console.log(s1);
// // ======================================================================//

//     // let s1={
//     //     name:["avi","harsa"],
//     //     age:20,
//     //     isStudent : true,
//     //     address:{
//     //         state: "tn",
//     //         city: "erode"
//     //     },
//     //     hello:function()
//     //     {
//     //         console.log("hi");
//     //         console.log("hello");
//     //     }
//     // }
//     // // console.log(s1);

//     // // console.log(s1.name)
//     // // console.log(s1.address.state)
//     // // console.log(s1.hello())//undefined
//     // // // console.log({s1.hello})
//     // s1.hello()
//     // ========================================================================


//     // let s1={
//     //     name:["avi","harsa"],
//     //     age:20,
//     //     isStudent : true,
//     //     address:{
//     //         state: "tn",
//     //         city: "erode"
//     //     },
//     //     hello:function()
//     //     {
//     //         console.log("hi");
//     //         console.log("hello");
//     //     }
//     // }
//     // s1.hello()
//     //error
// // =====================================================

// // let s1={
// //     name:[ "avi", "harsa"],
// //     age:20,
// //     isStudent : true,
// //     address:{
// //         state: "tn",
// //         city: "erode"
// //     },
// //     hello:function()
// //     {
// //         console.log("hi");
// //         console.log("hello");
// //     }
// // }
// // console.log(s1.name[0]);
// // console.log(s1.name[1]);
// // console.log(s1["age"]);

// //=============================================================================================================

// // let student1=new Object();
// // student1.name="avi";
// // student1.age=20;
// // console.log(student1)

// //=============================================================================================================
// //wrong
// // let student1=new Object();
// // student1.name="avi";
// // student1.age=20;
// //  hello : function ()
// //  {
// //   console.log("hi")
// //  }
// // console.log(student1)

// //=============================================================================================================

// // let student1=new Object();
// // student1.name="avi";
// // student1.age=20;
// //  student1.hello =function ()
// //  {
// //   console.log("hi")
// //  }
// //  //console.log(student1.hello);
// // //console.log(student1)

// // student1.hello();

// //====================================================][=====][===========================================================================================//

// //arithmetic +,-,*,/,%,++,--
// //comarison   ==,===,!=,>,<,>=,<=
// //logical  &&,||,!

// // 1. AND(&&) Short Circuit
// // `In an expression using the logical AND operator (&&), evaluation stops as soon as a false result is encountered. This is because, in the case of &&, if any operand evaluates to false, the entire expression will be false, regardless of the remaining conditions.

// // When JavaScript encounters an expression with &&, it evaluates from left to right:

// // If the first operand is false, it short-circuits and returns false, skipping any further evaluations.
// // If the first operand is true, it proceeds to evaluate the next condition.
// // Short-circuiting in JavaScript can also be used to replace if-else statements. For example, true && expression always evaluates to the expression, and false && expression always evaluates to false.

// // Example 1: Below is an example of the Short circuiting operators.



// // 1
// // const result = false && (console.log("This won't run"), true); 
// // 2
// // console.log(result);

// // Output
// // false
// //  Example 2: Short-circuiting using the AND(&&) operator. 



// // 1
// // const a = 5;
// // 2
// // const b = 10;
// // 3
// // const result = (a > 0 && b < 20) && "Both conditions are true";
// // 4
// // console.log(result);

// // Output
// // Both conditions are true
// // 2. OR(||) Short Circuit
// // In an expression using the logical OR operator (||), evaluation stops as soon as a true result is encountered. This is because if any operand is true, the entire expression will be true, regardless of the remaining conditions.

// // When JavaScript encounters an expression with ||, it evaluates from left to right:

// // If the first operand is true, it short-circuits and returns true, skipping further evaluations.
// // If the first operand is false, it proceeds to evaluate the next condition.
// // Like &&, OR short-circuiting can be used as a replacement for if-else statements. For example, true || expression always returns true, and false || expression always returns the expression.

// // Example: Short-circuiting using OR(||). `

// //=======================================================================================================================================================//
// let a=5;
// let b=a++ + --a;
// let c=++b + b++;
// a++;
// console.log(a)
// console.log(b)
// console.log(c)
// //Let's break down the code step by step:

// ### Code:
// ```javascript
// let a = 5;
// let b = a++ + --a;
// let c = ++b + b++;
// a++;
// console.log(a);
// console.log(b);
// console.log(c);
// ```

// ### Step-by-Step Execution:

// #### Initial Value:
// - `a = 5`

// #### Line 2: `let b = a++ + --a;`
// - `a++` is **post-increment**: The current value of `a` (5) is used, then `a` is incremented to 6.
// - `--a` is **pre-decrement**: `a` is decremented to 5 before being used.
// - Calculation:
//   ```
//   b = 5 (from a++) + 5 (from --a)
//   b = 10
//   ```
// - `a` is back to 5.

// #### Line 3: `let c = ++b + b++;`
// - `++b` is **pre-increment**: `b` is incremented to 11 before being used.
// - `b++` is **post-increment**: The current value of `b` (11) is used, then `b` is incremented to 12.
// - Calculation:
//   ```
//   c = 11 (from ++b) + 11 (from b++)
//   c = 22
//   ```
// - `b` is now 12.

// #### Line 4: `a++;`
// - `a++` is **post-increment**: The current value of `a` (5) is used, then `a` is incremented to 6.

// #### Final Values:
// - `a = 6`
// - `b = 12`
// - `c = 22`

// ### Output:
// ```javascript
// console.log(a); // 6
// console.log(b); // 12
// console.log(c); // 22
// ```

// Let's revisit **how `b` becomes 12** in detail:

// ### Code:
// ```javascript
// let b = a++ + --a;
// let c = ++b + b++;
// ```

// #### First Line: `let b = a++ + --a;`
// - Initially, `a = 5`.

// Step-by-step:
// 1. `a++`: **Post-increment**, so `5` is used first, then `a` becomes `6`.
// 2. `--a`: **Pre-decrement**, so `a` is decremented back to `5` before being used.
// 3. Calculation:
//    ```
//    b = 5 (from a++) + 5 (from --a)
//    b = 10
//    ```
// - At the end of this line:
//   - `a = 5` (after `--a`).
//   - `b = 10`.

// #### Second Line: `let c = ++b + b++;`
// Step-by-step:
// 1. `++b`: **Pre-increment**, so `b` is incremented **before** use:
//    ```
//    b = 10 + 1 = 11
//    ```
//    `11` is used in the calculation.
// 2. `b++`: **Post-increment**, so `11` (current value of `b`) is used, and then `b` is incremented:
//    ```
//    b = 11 + 1 = 12
//    ```
// 3. Calculation for `c`:
//    ```
//    c = 11 (from ++b) + 11 (from b++)
//    c = 22
//    ```
// - At the end of this line:
//   - `b = 12`.

// ---

// ### Final Answer:
// `b` becomes `12` because:
// 1. It was incremented by `++b` (**pre-increment**) to `11`.
// 2. It was incremented again by `b++` (**post-increment**) to `12`.

// This explains how `b` is now `12`.
// // ==========================================================
// let a=true;
// !!!!!a;
// console.log(a) //true a value is not changed
// // ==========================================================
// // ==========================================================
// let a=true;
// a=!!!!!a;
// console.log(a) //true a value is not changed
// // ==========================================================
// let a=10 & 3;
// console.log(a);
// // // ==========================================================
// let x=10 | 3;
// console.log(x);
// // // ==========================================================
// let s=10 ~ 3;
// console.log(s);
// // ==========================================================
//28.12.24

// // ==========================================================
// // // control flow
// // loops
// // functions and async (es6
// //   spreadd and destructuring
// //   ternary
// //   callbacks,promise,async/await
// // dom

// //=============================================================================================================================//
//=========================================================================================
// let a = 47;
//  if ((a % 3 === 0) && (a  %5 === 0)) {
//     console.log("hihello");
// }
// else if (a % 3 === 0) {
//     console.log("hi");
// }
// else if (a % 5 === 0) {
//     console.log("hi");
// }

// else {
//     console.log("bye");
// }
//=========================================================================================
// switch(choice){
//     case 1:
//         statements;
//         break;
//      case 2:
//         statements;
//         break;
//     case 3:
//         statements;
//         break;
//     default:
//         statements;
//         break;
// }

//==============================================================================
// //string can be used
// let choice="hello";
// switch(choice){
//     case "hi":
//         console.log("hi");
       
//      case "hello":
//         console.log("hello");
//         break;
//     case "h":
//         console.log("hihello");
//         break;
//     default:
//         console.log("welcome"); break;
// }
//===============================================
//  an array cannot directly be used as the `choice` value in a `switch` statement in JavaScript. The `switch` statement performs strict equality comparison (`===`) between the `choice` value and the `case` values, and strict equality between objects (including arrays) only evaluates to `true` if they are the same reference.

// Here’s an example to demonstrate this:

// ```javascript
// let choice = [1, 2, 3];

// switch (choice) {
//     case [1, 2, 3]: // This will not work as expected because the arrays are different references.
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case"); // This will execute.
// }
// ```

// ### Why It Doesn't Work
// In the example above:
// - The `choice` variable holds an array reference.
// - The `case [1, 2, 3]` creates a new array reference, which is different from the `choice` reference.
// - Since `choice` and `[1, 2, 3]` do not refer to the same object in memory, the comparison fails.

// ### Alternatives
// If you want to use arrays in such a context, consider converting the array to a string or some other comparable value:

// ```javascript
// let choice = [1, 2, 3].toString();

// switch (choice) {
//     case "1,2,3":
//         console.log("Matched!");
//         break;
//     default:
//         console.log("Default case");
// }
// ```
//--------------------------------------------------------------------------------------------
//error
// if(false)
//     console.log("hi");
//     console.log("hello" );
// else
//   console.log("bye")

//-------------------------------------------------------------------------

// if(false)
// {
//     console.log("hi");
//     console.log("hello" );}
// else
//   console.log("bye")

// console.log("byebye")


//-------------------------------------------------------------------------
// entry check loop-->for,while
// end check loop-->do while
//----------------------------------------------------------------------
// for loop
// for(intialization;Condition;increment/decrement)
// {
//     statements;
// }

//-------------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
  
//-------------------------------------------------------------------------
// for(;;)
// {
//     console.log("")
// }
// this tajes the value true and runs infinte  Times  
// ---------------------------------------------------------
// let a=1;
// for(console.log('a');a<=3;console.log('b')){
//     console.log('c')
//     a++;
// }  
// ---------------------------------------------------------
// let a=1;
// for(a=1;a<100;a++)
// console.log("hi")
// console.log(a)
// ---------------------------------------------------------
// let a=1;
// for(a=1;a<100;a++);
// console.log("hi");
// console.log(a);
//==========================================================

// for(let a=1;a<100;a++);
// console.log("hi")
// console.log(a);
//-----------------------------------------------------

// let a=1;
// for(a=1;a<100;a++);  
// console.log("hi");
// console.log(a);
//-----------------------------------------------------------
// while()
// {
//     console.log("hi")
// }

// for()
//     {
//         console.log("hi")
//     }
//error
//---------------------------------------------------------
// do{
//     console.log("hi")
// }
// while(false);
//infinity
//-----------------------------
// let a=100
// do{
//     console.log("hi")
//     a++;
// }
// while(a<=10);
//-------------------------------------
//functions==>
    //parameterized
    //non parameterized
    //  -------------------------------------
    //non paramaterized + without   return
    // function apple()
    // {
    //     console.log("apple")

    // }
    // apple()
    // // -------------------------------------
       //non paramaterized + with return
    //    function orange()
    //    {
    //            return "orange";
    //    }
    //    //let a=orange();console.log(a);
    //    console.log(orange());
//------------------------------------------------
// parameterized+ without return
// function apple(a,b)
// {
//     console.log(a+b)
// }
// apple(10,20);
//------------------------------------------------
// parameterized+ with return
// function apple(a,b)
// {
    
//     return a+b;
// }
// console.log(apple(10,20));
//------------------------------------------------
// |\/|/\|\/|
// |\/|/\|\/|
// |\/|/\|\/|
// |\/|/\|\/|
//-------------------------------------
//arrow functiion(single line function)
// let apple=()=>console.log("apple")
 
// apple();
//-------------------
// let orange=()=>"apple";
 
// console.log(orange());
//--------------------------------
// //arrow functiion(multi line function)
// let appl=()=>
// {
//     console.log("apple");
//     console.log("apple");
//     console.log("apple");
// }
// appl();
//-----------------------
// let banana =()=>
//     {
//         console.log("apple");
//         return 3+3;
//     } 
// banana();
//----------------------------
// let banana =()=>
//     {
//         console.log("apple");
//         return 3+3;
//     } 
// console.log(banana());
//--------------------------------------------------
// let add=(a,b)=>
// {
// return a+b;
// }
// console.log(add(1,2));
//-----------------------------------------------------------
// //spread  operator(...)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);

//-----------------------
//spread  operator(...)
// let d = [1,2,3,4,5]
// let e = [...d]
// e[2]=10;
// console.log(e)
//-----------------------
// //spread  operator(...)
// let d = [1,2,3,4,5]
// let e = d
// e[2]=10;
// console.log(e)
//---------------------------------------------
// let a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20  because let is delacred globally and noot in scope hence it is changing to 20
//----------------------
// var a=10;
// function x()
// {
//     a=20;
//     console.log(a);
// }
// x();
// console.log(a);
//20 20
//------------------------------------
// let a=10;
// let b=a;
// a=20;
// console.log(a);
// console.log(b);
//20 10
// a      b
//10      10
//20      10
//-------------------------------------------
//spread  operator(...)(spread the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];
// console.log(c);
// function sp(values)
// {
//     console.log(values)
// }sp(...c)

//rest operator(combine the values)
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// function sp(b,c,d,...values)
// {
//     // console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//-----------
// let a=[1,2,3,4,5];
// let b=[6,7,8,9,10];
// let c=[...a,...b];

// // function sp(...values)
// // {
// //      console.log(values)
// //     //console.log(b,c,d)
// // }sp(1,2,3,4,5,6,7,55)

// function sp(...values,x,y,)
// {
//      console.log(values)
//     //console.log(b,c,d)
// }sp(1,2,3,4,5,6,7,55)
//------------------------------------------------------------
//spread object
    // let s1={
    //     name:"avi",
    //     age:20,
    //     isStudent : true
    // }
    // let b = {...s1};
    // console.log(s1);
    // console.log(b);
//--------------------------------------------------------------------------
// //destructuring operator
// let a=[1,2,3,4,5];
// // let b =a[0];
// // let c=a[1];
// // let d=a[2];
// // let e=a[4];
// let [b,c,d,e,f]=a;
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
//------------------------------------------
//rest operator
// let a=[1,2,3,4,5,6];
// let [b,c,...d]=a;
// console.log(b);
// console.log(c); 
// console.log(d);
//------------------------------------------
// // destructuring object
// let s1={
//         name:"avi",
//         age:20,
//         isStudent : true
//     }
// // let {name,...y}=s1;
// // console.log(name);
// // console.log(y);
//  let {name,age,isStudent}=s1;
// console.log(name);
// console.log(age);
// console.log(isStudent);
//------------------------------------
//callback
//function as a parameter in  anoother function
                // function dora()
                // {
                //     console.log("buji")
                // }
                // function tom()
                // {
                //     console.log("jerry")
                // }
                // dora()
                // tom()



                // function dora() {
                //     setTimeout=(()=>{
                //     console.log("buji")},2000);
                // }
                // function tom() {
                //     console.log("jerry")
                // }
                // dora()
                // tom()

//-------------------------------------------


// function dora(callback) {
//     setTimeout(() => {
//         console.log("buji");
//         callback(); // Call the callback function
//     }, 2000);
// }
// function tom() {
//     console.log("jerry");
// }

// dora(tom);

//------------------------------------------------------

//call back hell
//calling a function inside a function many times
// function attandace(callback) {
//     setTimeout(() => {
//         console.log("attandance");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function lunch(callback) {
//     setTimeout(() => {
//         console.log("lunch");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// function goingtohome(callback) {
//     setTimeout(() => {
//         console.log("going to home");
//         callback(); // Call the callback after the delay
//     }, 2000);
// }

// attandace(() => { lunch(() => { goingtohome(() => {})   });});
// console.log("end");

//-------------------------------------------------------------------
//to avoid cll back promise is  done

// function attandace() {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("attandance");
    
//     }, 2000);
    
//    })
  
// }

// function lunch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("lunch");
           
//         }, 2000);
//     })
   
// }

// function goingtohome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve ("going to home");
             
//          }, 2000); 
//     })
   
// }

// attandace()
// .then((result) => {
//     console.log(result);
//     return lunch();
// })
// .then((result) => {
//     console.log(result);
//     return goingtohome();
// })
// .then((result) => {
//     console.log(result);
//     console.log("end");
// })
// .catch((error) => {
//     console.error(error);
// });
//----------------------------------------------

// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
     
//      }, 2000);
     
//     })
   
//  }
 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=true;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
    
//  }
 
//  function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
 
//  attandace().then((result) => {
//      console.log(result);
//      return lunch();
//  }).then((result) => {
//      console.log(result);
//      return goingtohome();
//  }) .then((result) => {
//      console.log(result);
//      console.log("end");
//  }) .catch((error) => {
//      console.error(error);
//  });
 //-----------------------------------------------------------------------
 
// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
   
//      }, 2000);
     
//     })
//    } 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=false;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
//      }
//   function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
 
//  attandace().then((result) => {
//      console.log(result);
//      return lunch();
//  }).then((result) => {
//      console.log(result);
//      return goingtohome();
//  }) .then((result) => {
//      console.log(result);
//      console.log("end");
//  }) .catch((error) => {
//      console.error(error);
//  });
 //-----------------------------------'`'`'`'`'`'`'`'`'`''`'`'`'`''`'`'`'`'`'`'`''`'`'`'`''`'``'`'`''``'`'`'`''``''`'`'`'`'`'`'`'``'`"
// function apple()
// {
//     console.log("apple");
//     return new Promise((resolve,reject)=>{
//         //resolve("good")
//        reject("bad") 
//     })
// }
// apple().then((result)=>{console.log(result)})
//     .catch((result)=>{console.error(result)})
//----------------------------------------------------------------------------------------------
//aysnc 
// async function a()
// {
//     await db=connectionstring
// }
// fun b()
// {

// }
// func c()
// {

// }

//----------------------------------------------------
// function attandace() {
//     return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         let a=true;
//         if(a)         
//             resolve("attandance true");
//             else
//  reject("attandance false");
     
//      }, 2000);
     
//     })
   
//  }
 
//  function lunch() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let b=true;
//             if(b)         
//                 resolve("l true");
//             else
//              reject("l false");
            
//          }, 2000);
//      })
    
//  }
 
//  function goingtohome() {
//      return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             let c=true;
//             if(c)         
//                 resolve("home true");
//             else
//              reject("home false");
              
//           }, 2000); 
//      })
    
//  }
// async function final(){
//     try {
//         let attandances = await attandace();
//         console.log(attandances);
//         let lun=await lunch();
//         console.log(lun);
//         let home=await goingtohome();
//         console.log(home);
//     } catch (error) {
//         console.error(error);
//     };
// }

// final();

// ----------------------------------------------------------------------------------------
// function processing(callback, filename)
// {
//     console.log(`file ${filename} is  processing`);
//     callback();
// }
// function downloading(callback, filename)
// {
//     console.log(`file ${filename} is  downloading`);
//     callback();
// }
// const filename="abc";
// processing(()=>{
//     downloading(()=>{
//         console.log("download complete");
//     },filename);
    
// },filename);
//--------------------------------------------------------------------------------
// ternary
// if(condition )
//     true statement 
// else 
//    false statement

// (condition)?true statement:false statement   
//----------------------------------------------------------------------------------------------