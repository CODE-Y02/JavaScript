# typescript beginners guide

## What advantage does typescript gives us?Explain with example?

> problem with js is its loose data types
> ex -> sum(a,b) returns sum of a+b ,

    if we pass sum(5,2) ==> 7 as output which is correct
     but sum('5',2) ==> '52' thats non expected but dosent error out

> we can use conditions to check data types but with ts we can write it in better snd less lines in more STATIC PROG LANG APPROACh

> TS uses strict checks for data type like in static prog lang like c++ or java

> we never use ts code directly

> TS code is compilled into JS code and then we use that JS code

> If we wrote loose code like in exapmle TS will give error during compilation and force us Devs to write clean code .

> IT helps us to reduce runtime bugs

---

## What does typescript add to javascript?Explain each of them in your own words. Research on google if you are confused.

> typescrypt is super set of js , means everything of js + extra feature = > typescript
>
> 1. strict data type check

    TS forces us to write or specify data type everywhere when we write code .
    This checks will hepls us to write better code and reduce bugs on runtime .
    TS support many data types including
    Number , Obj , Array , String , Boolean , etc .

> 2. Compile time checks

    JavaScript is an interpreted programming language. There is no compilation involved. Hence, the errors get caught during the runtime. Since TypeScript compiles into JavaScript, errors get reported during the compile time rather than the runtime

> 3. Object-Oriented Programming :-

     it has support of class , inheritance ,generics , etc

> 4. function overloading is supported
>
> 5. support modules --> a collection of classes

        module Company {
            class Employee {
            }

            class EmployeeHelper {
                    targetEmployee: Employee;
            }

            export class Customer {
            }
    	}

        var obj = new Company.Customer();

---

## Why do we need typescript compiler?

> browser dont understand TS , it just understand 3 things : HTML , CSS , JS

> think of compiler as converter that convert TS code into JS and if error happen gives error during compilation

> Due to this extra process we will have lot less bugs during runtime

---

## What happens when you compile?

> TS code will be converted into Js and saved into JS file with same name

> During compilation from top to bottom approach it will check for error and if error happens compilation will stop at that point

---

## What are the different types available in typescript?

> number ,arrays , onject , boolian , strings , Array of definite size like java

---

## Why does add('1', '2') start showing error when the trainer has defined types?

> because in app.ts we have assigned data type number to params of function add so during compilation when we pass string it gives error

---

## What do you mean typescript can infer the types? What is the advantage of this?

> TS can pre determine type of variables based on value & if not or its has more than one possible value then we need to pass types to it .

> Infer types are types that we dont define or assign to variable but TS assign it based on varible value

> Infer type can be anything : array , string or maybe html element

        let x = [0, 1, null];

       infer ==>  let x: (number | null)[]

> advantge :- we can determine type of value

    var num1Ele = document.getElementById("num1")

    can have type ==>html ele or null
    so if we do num1Ele.value it will error out as if num1Ele is null then .value is not its property

---

## What is the problem with type inferenece sometime and how do you solve with type casting?

> example

    var num1Ele = document.getElementById("num1")

    can have type ==>html ele or null
    so if we do num1Ele.value it will error out as if num1Ele is null then .value is not its property


    to solve this problem we use typle casting

    var num1Ele = document.getElementById("num1") as HTMLInputElement;

---

## What does tsc init do?

> initialize tsconfig.json

> by modifying settings in config file we can modify TS compiler behivaour

---

## What does strict mode do?

> checks for null and strict type checks

> ex-> if html ele is null event cannot be added on it therefore it will throw error

---

## What does buttonElement ! exactly do ? Why do we put EXCLAMATION MARK( ! ).

    buttonElement = document.querySelector("button")

    if dom is not loded buttonElement value can be null , here we get error from TS if we add event on it .

    therefore as dev we know that buttonElement will not be null , we use !

    ! will tell TS to ignore null case and only expect other value i.e html button element

    or we cn also specify type explicitly rather than !

---

## Why shouldnt we use any type?

> any is data type in TS that allows any knid of value

> only use any when we dont know what kind of value a variable should have or we want it to have any kind of value

> never liave params in functions vithout data type at least assign any to avoid Error in TS

---

## How we handle objects?

> we assign data types to keys

        resultObj is a obj with key val and timestamp in it
            value will have datatype number
            timestamp will have data type date

        function printResults(resultObj: { val: number; timestamp: Date })
            {
                console.log(resultObj.val);
            }

    let result = 10;
    printResults({ val: result as number, timestamp: new Date() });

---

## How do we handle arrays?

> syntax

    let numResults: number[] = [];
    let textResults: string[] = [];


      var result = add(+num1, +num2);

    numResults.push(result as number);
        let stringRes = add(num1, num2);

    textResults.push(stringRes as string);

---

## What does type keyword do?

> ITS USED TO CREATE OUR OWN TYPE

        ----------
        syntax
        ----------

        type numOrStr = number | string;

        type Result = { val: number; timestamp: Date };

---

## Interface are more frequently used than types. What do you think is the advantage of interfaces?

> READ ON [Types vs. interfaces in TypeScript](https://blog.logrocket.com/types-vs-interfaces-in-typescript/#:~:text=In%20TypeScript%2C%20we%20can%20easily,also%20create%20classes%20implementing%20interfaces)

    Let’s imagine that we have two interfaces called Song, with different properties:

    interface Song {
        artistName: string;
    };

    interface Song {
        songName: string;
    };

    const song: Song = {
        artistName: "Freddie",
        songName: "The Chain"
    };

    TypeScript will automatically merge both interfaces declarations into one, so when we use this Song interface, we’ll have both properties.

    Declaration merging does not work with types. If we try to create two types with the same names, but with different properties, TypeScript would still throw us an error.

    ______

>

    Interfaces are better when you need to define a new object or method of an object. For example, in React applications, when you need to define the props that a specific component is going to receive, it’s ideal to use interface over types

>

    interface TodoProps {
        name: string;
        isCompleted: boolean
    };

    const Todo: React.FC<TodoProps> = ({ name, isCompleted }) => {
        ...
    };

>

    Types are better when you need to create functions, for example. Let’s imagine that we have a function that’s going to return an object called, type alias is more recommended for this approach:

        type Person = {
            name: string,
            age: number
        };

        type ReturnPerson = (
                person: Person
        ) => Person;

        const returnPerson: ReturnPerson = (person) => {
                return person;
        };

---

## How is an array a generic as per the trainer?

> WHAT IS GENERICS :

    data type that is made up o combination of other data type elements

    now synntax :-->
             let numResults: number[] = [];
    can also be written as
        let numResults: Array<number> = []; // generics

---

## Why do we need to change the target to es6?

> many new feature of js are introduced in es6 (2015) .

> promise doesnot support in version before es6.

> we canchange it in config file

> latest TS uses es7 i.e ecma2016 by default

## How does generics work with promises.

        // generics with promise

            const myPromise = new Promise<string>((res, rej) => {
            setTimeout(() => {
                res("hello TS 😀");
            }, 1000);
            });

            myPromise.then((result) => {
            console.log(result.split(" "));
            });


