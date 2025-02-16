//Print statement
/*console.log("Hello World")*/

/*DECLARATION
var a=10
let b="Hello"
const c=true
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))
a="abc"
b=21.21
c=false
console.log(a,b,c)
console.log(typeof(a),typeof(b),typeof(c))*/

//Secondary datatype

//Arrays

/*array = [1,6,"abc",true]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array)*/

//Objects

/*obj1 =
{
  firstname :"Sivasanjay",
  lastname : "S",
  dept:["cse","it","ece","mech"],       // declaration-first way
  training : "mern"
}
obj2={}                                 //declaration-second way
obj2["age"]=20;
obj3 = new Object                       //declaration-third way
obj3["age"]=20;
console.log(obj1)                       //output way-1
console.log(obj1.firstname)             //output way-2
console.log(obj1["dept"])               //output way-3*/


//Set

/*set = new Set()
console.log(set)
set.add("Hello")
console.log(set)
set.add("World")
console.log(set)
console.log(typeof(set))*/

//Operators

//logical operator(&&,||,!)

/*console.log("logical and")
console.log(10 && 5)//5
console.log(true && 10)//10
console.log(false && 10)//false
console.log(false && true)//false
console.log(true && false)//false
console.log("logical or")
console.log(5 || 10)//5
console.log(true || 10)//true
console.log(false || 10)//10
console.log(false || true)//true
console.log(true || false)//true*/

//Relational operator(==,!=,===,!==,<=,>=)

/*a=5 
b="5"
console.log(a==b)//true
console.log(a===b)//false
console.log(a!=b)//false
console.log(a!==b)//true*/

//bitwise operator(&,|,^,~,<<,>>)

/*a=70
b=35
c=13
console.log(a&b)//2
console.log(a|b)//103
console.log(a^b)//101
console.log(~c)//-14
console.log(10<<3)//80
console.log(10>>3)//1*/

//Example for looping

//for in

/*array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i in array)
{
  console.log(i)             //prints keyy
}*/

//for of

/*array = [10,20,30,"abc",true,"hello",[1,2,3]]
for(i of array)
{
  console.log(i)            //prints value
}*/

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