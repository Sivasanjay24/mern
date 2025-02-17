//Conditionals
//for in

/*array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i in array)
{
  console.log(i)             //prints keyy
}*/
/************************************************************************* */
//for of

/*array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i of array)
{
  console.log(i)            //prints value
}*/
/************************************************************************* */
//for each

/*array = [10,20,30,"abc",true,"hello",[1,2,3]]
array.forEach((ele) => {
  console.log(ele)
});*/

/*obj1 =
{
  firstname :"Sivasanjay",
  lastname : "S",
  dept:["cse","it","ece","mech"],       // declaration-first way
  training : "mern"
}
Object.entries(obj1).forEach((i,j)=>{
  console.log(i,j)
})*/

//output
/*[ 'firstname', 'Sivasanjay' ] 0
  [ 'lastname', 'S' ] 1
  [ 'dept', [ 'cse', 'it', 'ece', 'mech' ] ] 2
  [ 'training', 'mern' ] 3*/

/*Object.entries(obj1).forEach(([i,j])=>{
  console.log(i,j)
})*/

//output
/*firstname Sivasanjay
lastname S
dept [ 'cse', 'it', 'ece', 'mech' ]
training mern */

/*---------------------------------------------------------------------------------------------------------------------------------------*/
// Arrow Function

/*var arrowfunction=() =>
{
  console.log("This is a Arrow function")
}
testfunction()
arrowfunction()*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Scoping

/*var a =10;
console.log(a);//10
{
  a = 20;
  console.log(a);//20
  a = 30;
  console.log(a);//30
  var b = 40;
  console.log(b);//40
  let c = 50
  console.log(c);//50
  const d= 60
  console.log(d)//60;
}
console.log(a);//30
console.log(b);//40
console.log(c);//Reference Error
console.log(d);//Reference Error*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Ternary operator

/*a=5
console.log((a%2)?"Odd":"Even")*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Spread operator(...)

/*stud1year = ["user1","user2","user3","user4"]
stud2year = ["user5","user6","user7","user8"]
stud3year = ["user9","user10","user12","user12"]
stud4year = ["user13","user14","user15","user16"]
studdb=[...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studdb)*/

// output

/*[
  'user1',  'user2',  'user3',
  'user4',  'user5',  'user6',
  'user7',  'user8',  'user9',
  'user10', 'user12', 'user12',
  'user13', 'user14', 'user15',
  'user16'
]*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Rest Operator(...)

/*function stdb(...st)
{
  console.log(st)
}
stdb(studdb,stud1year)*/

//output

/*[
  [
    'user1',  'user2',  'user3',
    'user4',  'user5',  'user6',
    'user7',  'user8',  'user9',
    'user10', 'user12', 'user12',
    'user13', 'user14', 'user15',
    'user16'
  ],
  [ 'user1', 'user2', 'user3', 'user4' ]
]*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Destructing opearator([])

/*var array = [1,2,3,4,5,6,7,8,9]
var [a,b,c,d,e,f,g,h,i,j] = array
console.log(a,b)//1 2
console.log(c,d)//3 4
console.log(e,f)//5 6
console.log(g,h)//7 8
console.log(i,j)//9 undefined*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Hoisting 

//example1
/*console.log(a)//undefined
var a = 10;
console.log(a)//10*/

//example2
/*console.log(a)
let a = 10;      //Reference error(Cannot access 'a' before initialization)
console.log(a)*/

//example3
/*console.log(a)
const a = 10;      //Reference error(Cannot access 'a' before initialization)
console.log(a)*/

//for functions

/*func()
function func()
{
  console.log("hello")//hello
}

arrow()
var arrow =()=>
{
  console.log("hello")//Error(arrow is not a function)
}*/

/*---------------------------------------------------------------------------------------------------------------------------------------*/
//Class and Objects
/*class hello{
  a= 10;
  testfun=()=>
  {
    console.log("hello")
  }
}
obj = new hello();
console.log(obj.a)//10
console.log(obj.testfun())// hello ,undefined(sice it does return anything)
console.log(hello().testfun())//Error(Not a function)
console.log(new hello().testfun())//hello ,undefined*/