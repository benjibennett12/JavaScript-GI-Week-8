//EASY

const exercises = ['running', 'swimming', 'dancing', 'fencing'];

function exerciseOftheday(arr) {
  const randomExercise = Math.floor(Math.random() * exercises.length);
  return (`Today's exercise: ${exercises[randomExercise]}`);
}

console.log(exerciseOftheday[exercises]);

//MEDIUM

// let pizzaSlices = 4
// let peopleEating = 2


// function sharePizza (pizzaSlices,peopleEating) {
//     const slicesPerPerson = pizzaSlices / peopleEating;
//  return `Each person gets ${slicesPerPerson} slices of pizza; from our ${pizzaSlices} slice pizza`;
// }



// console.log(sharePizza(pizzaSlices,peopleEating));

//HARD

// function PII(name, ssn) {
//   const privateName = name;
//   const privateSSN = ssn;


//   function getName() {
//     return privateName;
//   }

//   function getSSN() {
//     return privateSSN;
//   }

  
//   return {
//     getName,
//     getSSN,
//   };
// }

// const patient2 = PII("John", "123-45-6789");

// console.log(patient2.names); 
// console.log(patient2.ssn);
// console.log(patient2.getName()); 
// console.log(patient2.getSSN()); 

//VERY HARD

// class Person {
//   constructor(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//   }

//   exercise() {
//     console.log(`${this.name} says, "Running is fun! - said no one ever."`);
//   }

//   fetchJob() {
//     console.log(`${this.name} is a ${this.job}`);
//   }
// }

// class Programmer extends Person {
//   constructor(name, job, age, languages = []) {
//     super(name, job, age);
//     this.languages = languages;
//     this.busy = true;
//   }

//   completeTask() {
//     this.busy = false;
//   }

//   acceptNewTask() {
//     this.busy = true;
//   }

//   offerNewTask() {
//     if (this.busy) {
//       console.log(`${this.name} can't accept any new tasks right now.`);
//     } else {
//       console.log(`${this.name} would love to take on a new responsibility.`);
//     }
//   }

//   learnLanguage(newLanguage) {
//     this.languages.push(newLanguage);
//   }

//   listLanguages() {
//     console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
//   }
// }

// const person1 = new Person("Harold", "Backend Engineer", 20);
// const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
// const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
// const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// c1.learnLanguage("CSS");
// c2.learnLanguage("C++");
// c3.learnLanguage("JAVA");

// console.log(person1);
// console.log(c1);
// console.log(c2);
// console.log(c3);

// person1.exercise();
// person1.fetchJob();
// c1.completeTask();
// c2.acceptNewTask();
// c3.offerNewTask();
// c1.listLanguages();
// c2.listLanguages();
// c3.listLanguages();