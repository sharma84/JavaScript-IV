// CODE here for your Lambda Classes
 //class-Person, base-class
 class Person {
     constructor(object) {
         this.name = object.name;
         this.age = object.age;
         this.location = object.location;
         this.gender = object.gender;
     }
     speak() {
         return `Hello my name is ${this.name}, I am from ${this.location}.`;
     }
 }


 //Instructors - extensions of Person ie Person-parent and instructor-child
class Instructor extends Person 
{
    constructor(instructor)
    {
        super(instructor);
        this.speciality = instructor.speciality;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo(subject) 
    {
      return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) 
    {
    // return (`${student.name} receives a perfect score on ${subject}.`);
    return (`${student} receives a perfect score on ${subject}.`);  
    }
}


 //Student - extensions of Person ie Person-parent and student-child
class Student extends Person 
{
    constructor(student)
    {
        super(student);
        this.previousBackground  = student.previousBackground ;
        this.className  = student.className ;
        this.favSubjects = student.favSubjects;
        //this.name = student.name;
    }
    listsSubject()
    {
        for (let i = 0; i < this.favSubjects.length; i++)
        {
            return (`${this.name} favourite subjects are ${this.favSubjects[i]}`);
         }
    }
    PRAssignment(student, subject) 
    {
        return(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(student, subject) 
    {
        return(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

//Project Manager - extensions of Instructor ie Instructor-parent and Project Manager-child
class ProjectManager extends Instructor 
{
    constructor(project)
    {
        super(project);
        this.gradClassName = project.gradClassName;
        this.favInstructor = project.favInstructor;
    }
    standup(channel) 
    {
        return(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) 
    {
    return(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



const fred = new Instructor({ 
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    gender: 'male',
    speciality: 'redux',
    favLanguage: 'JavaScript',
    catchPhrase: `Don't forget the homies`
  });

  const john = new Student({ 
    name: 'John',
    age: 33,
    location: 'Austin',
    gender: 'male',
    previousBackground: 'Salesperson',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const mary = new ProjectManager({  
    name: 'Mary',
    location: 'San Francisco',
    age: 40,
    gender: 'female', 
    speciality: 'Back-end',
    favLanguage: 'JS',
    catchPhrase: `JS is cool`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
  });


//Instructor
console.log(fred.speak());
console.log(fred.demo('JS'));
console.log(fred.grade(john, 'redux'));
console.log(fred.speciality); //redux
console.log(fred.favLanguage);//JavaScript
console.log(fred.catchPhrase); //Don't forget the homies

//Student
console.log(john.speak());
console.log(john.listsSubject());
console.log(john.PRAssignment(john, 'HTML'));
console.log(john.sprintChallenge(john, 'HTML'));
console.log(john.previousBackground);//Salesperson
console.log(john.className);//CS132
console.log(john.favSubjects);//['Html', 'CSS', 'JavaScript']

//Project Manager
console.log(mary.speak());
console.log(mary.standup('slack'));
console.log(mary.debugsCode(john,'JS'));
console.log(mary.gradClassName);//CS1
console.log(mary.favInstructor);//Sean

