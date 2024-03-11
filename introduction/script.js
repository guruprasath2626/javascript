//single line comments
        /*multi ine comment*/
        // console.log("hapy")
        // alert("hai")

        //variables
/*
        let score=10 //initialisation
        score=20 //assingment

        console.log("score is" + score);

        const pi =3.14
        console.log(pi)
        var a=30
        a=40
        console.log(a)

*/
/*
operators
---------


Arthmetric operators: +  -  * **  / %  ++  --
Assignment operators: =  +=  -=  *=  /=  %=  **=
Comparison operators: ==  ===  !=  !==  >  <  >=  <=  ?:-ternery operator
Logical operators: &&  ||  !
Bitwise operators: &  |  ~  ^  <<  >>  >>>



*/

/*
javascript has a autoconversion 
a="5"-1
console.log(a);
o/p=4
*/


// a=10
// b=30
// console.log(a>b)

//-------------------------------------------------------------------------- 6/3/2024
// let a= prompt("how many tickets do you want")
// console.log("you should pay",a*30)



// alert("hai")
// console.log("hiii");
//----------------------------------------------------------------------------7/3/2024
// string a group of characters

let str1= "hai"
let str2="good morning"
// console.log(str1+str2)
// console.log(str1.concat(str2))
/*
Partioning String
slice(start,end)
substring(start,end)
substr(start,length)
*/


// str2.slice(3,10)   o/p- 'd morni'
// str2.slice(5)      o/p-'morning'
// str2.slice(-5)     o/p-'rning'
// str2.substring(3,10)   o/p- 'd morni'
// str2.substr(3,10)   o/p- 'd morning'

// str2.replace('morning','night')   o/p- 'good night'




// str2.toLocaleUpperCase()  o/p- 'GOOD MORNING'

// str2.toLowerCase()  o/p- 'goodmorning'

// str2.length
// 12

// str2.trim() ------it remove the extra spaces
// str2.trimStart()-----it remove starting spaces
// str2.trimEnd()------it remove the end spaces
// str2[0]
// 'g'


// str2.charAt(1)
// 'o'


// str2.charCodeAt(1)
// 111--------unicode






// str2.indexOf('e')  --there is no e in string
// -1


// str2.indexOf('m')  
// 5
// str2.lastIndexOf('m') ---it take last 'm' in the string
// 5

// str2.search('good')------------it give the index of the value if it is not it give -1
// str2.includes('good')----------it give true or false value
// str2.padEnd(7,0)---------------its added the 0 in the length of the str2 become 7
// 0 ----index
// let a= str2.indexOf('g')
// console.log(a)
// let a = "guruprasath";
// let randomIndex = Math.floor(Math.random() * a.length);
// console.log(a[randomIndex]);




/*----------------------------------------------------------------------------------------------------------------------------11/03/2024
templates literals
 introduced in 2015 with ECMAScripts or ES6


 let firstname="guru"
 let lastname="prasath"
 let city="tirupur"
 console.log(firstname+" "+ lastname+" "+city)

 //backtick
 console.log(`${firstname} ${lastname} ${city}`)

//multiline string
let s=`good
morning`
console.log(s)


let e=`"you have 5 items in your cart.
your bill amount is $95"`
console.log(e)
*/



/*array 

//a=[4,5,2,8]
// a=[1,"hai",6,3,2,"hello"]
// console.log(a[1])
*/


/* 2d array
a=[[1,23,3],[4,5,6],[7,8,9]]
console.log(a[1][1]);
*/

//push- add element to the end and returns new length
// let a=["a","b","c","d"]
// a.push("e")

// console.log(a)
// console.log(a.push("e"))


//pop- remove the element from the end and return the removed element
// a.pop()
// console.log(a)
// console.log(a.pop())


//shift - remove the element fron the start of array and return the removed element

// a.shift()
// console.log(a)
// console.log(a.shift());


// unshift --- adds the element from the start of the array and return new length

// a.unshift("a")
// console.log(a);
// console.log(a.unshift("a"));


// delete

// delete a[2]
// console.log(a);   //o/p [ 'a', 'b', <1 empty item>, 'd' ]



// splice
// 1st parameter- starting index
// 2nd parameter- no of elements to be deleted  from starting index 
// 3rd parameter or more - values to be inserted from starting index

// let a=["a","b","c","d"]

// a.splice(1,1)

// console.log(a);

// a.splice(1,2)
// console.log(a.splice(1,2));
// console.log(a);



// a.splice(1,2,"v","j")
// console.log(a);

// a.splice(1,0,"v")
// console.log(a.splice(1,0,"v"));
// console.log(a)




// slice(starting index, ending index)
//ending index not included
// let a=["a","b","c","d"]

// // console.log((a.slice(1)));
// console.log((a.slice(1,2)));



// reverse
// let a=["a","b","c","d"]
// a.reverse()
// console.log(a);

// split - converts string into array
// a= "a,b,c,d"
// b=a.split(",")
// console.log(b);

// concat, spread operator

// let a=[1,2,3]
// let b=[4,5,6]
// // let c=[a,b]
// // c=a.concat(b)
// let c=[...a,...b]
// console.log(c);

// if - else ---condition statement

// let a= true
// if (a){
//         console.log("ok");
// }

// else{
//         console.log("not ok");

// }
// console.log("bye");


// age=65
// gender='male'
// if (age>60 && gender==='female'){
//         console.log("you are avail for special discount");
// }

// else {
//         console.log("not avail")
// }



// let a=10 , b=20

// let max

// if (a>b){
//  console.log(max=a);
// }

// else{
//         console.log(max=b);
// }

// max=a>b?a:b     //---------ternay operators
// console.log(max);



//switch case

// let day = 1;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log("The day is: " + dayName);
