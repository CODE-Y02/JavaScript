//task 7

/*
1)
output :- 
30 
reason :- var a =30 in block will overwrite var a = 50 in global;

2)
output :- 
syntax error at a 
reason :- we delcared a as const and in block we redeclared var a , but var is always declared global scope therefore we cannot reassign or redeclare value of const with same variable name and var in any scope


3)
output :- 
syntax error at a 
reason :- we delcared a as let and in block we redeclared var a , but var is always declared global scope therefore we cannot re assign or redeclare value of let with same variable name and var in any scope



4)
output :- 
50 
reason :- var a = 30 , we declare inside function its local scope and var a = 50 is global scope, 
if we just write a = 30 then compiler will look for a in lexical scope but and modify its reference value 

NOTE :- everything declared in different context has different memory space allocated



5)
output :- 50
reason :- same explaination as above question 4 , 
function is special block scope as they create completely different context so variable DECLARED inside it points to different location than variable outside it 



6)
output :- syntax error 
reason :- same as question 2 , we cannot redeclare let const variable with same name using var in block because var is always declared globally with undefined in memory allocation and at that time let and const was in temporial dead zone , its create clash espically with const 



7)
output:-
50
20
10
reason:- its like maths inner block will solve first 
in second block , we have a in its scope with val a =50 and its only valid in scope of scond block,

in outer block const a = 20 have scope of outerblock + we will also have access to lexical scope but as we have const a in block scope we will not look into parent scopes , therefore we get a = > 20 ;

in global we have const a = 10; (actually const isnt in window scope but it is accessible after defining value , when temporial dead zone ends ) 
and whatever in block will exist only in block 
therefore a ==> 10;




8)
output:-
20
20
10

reason :- in block we have access to parent elements i.e clouser 
in innermost block compiler dont find a so it will look into its parent scope , i.e outer block we find a = 20;
therefore a = 20;

in outerblock we have a = 20 in its scope theefore we get 20;

in global we have a = 10 , therefore we get 10






 Explain what did you understand by lexical scope in your own words

 lexical scope means ability of function to access variable and function of its parent scope 

*/

//  task 8

/*

 CLOSURE IS SCOPE OF FUNCTION + LEXICAL SCOPE    , BUT IF WE RETURN FUNCTION THEN THAT RETURNED FUNCTION STILL POINTS TO ORIGINAL CLOSURE OF FUNCTION , LIKE REFERENCE 

1)
output :-
10
reason :-  as a is not present in current function y it will look into closure i.e scope of its parent x 





2)
output :-
10
resason:-
first x is callled then on return of x function y is called , in function y we dont have a so it will look into its closure ( scope of parent) we found a =10;
threfore a =10 is logged on console



3)
output:-
function y() {
    console.log(a);
  }

  reason :- we are returning function y , that gives us function y through reference along with its closure (refrence to lexical scope) ;
   


4)
output:-
10
undefined 

reason :- we call x() that return function y (only refrence) ,
now const z = reference to original function y,
when we console.log(z()) we call function y , as a is not present in y it will look into lexical scope (closure) , we get a = 10 
and as function y is not returning anyting we get undefined



5)
output :-
50
undefined

reason :- when we call x() , context is created for function x and in it we have overwritten value of a = 10 to a =50 after function y at end we return function y (along with its reference to original lexical scope);

now const z =  y + reference to  original lexical scope
now when we call z() we actually call y now in y function we dont have a we will get value of a from its parent i.e a =50 ; 

and as function y is not returning anything we get undefined 
*/











