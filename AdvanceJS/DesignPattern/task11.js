//Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.


class Student{
    static AllStudentsData = [] // keep record of all student data
    static count =0;
    constructor(name,age,phone,marks){
        this.name = name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
        Student.AllStudentsData.push(this)
        Student.count++;
    }

    /*
    write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
    */
    isEligible(){
        if(this.marks > 40) console.log(`student ${this.name} is egligible  for college`);
        else console.log(`student ${this.name} is egligible  for college`);
    }
    /**
     * Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now. 
     */
    totalStudents(){
        // console.log(`total students => ${Student.count}`)
        console.log(`total students => ${Student.AllStudentsData.length}`)
    }
}

// Create 5 students with different names and age.
let s1 = new Student('Tom',15,789456,50);
let s2 = new Student('harry potter',16,152015,40);
let s3 = new Student('tony',22,001100,99);
let s4 = new Student('jerry',14,111,49);
let s5 = new Student('G one',22,15454,20);

s1.isEligible();
s5.isEligible()

s5.totalStudents()







