/*
ASSIGNMENT RULES
– All the answers must be written in JavaScript
– You can ask for help, reach the Teaching Assistants if needed
– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet
– You can test your code in a separate file or de-commenting the single exercises in this one.
– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.
– Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
Create a variable called test and assign a string value to it.
*/
console.log("\n-----------EXERCISE A-----------\n");

let text = "This is a string."

console.log(text)

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log("\n-----------EXERCISE B-----------\n");

const sum = 10 + 20

console.log(sum)

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log("\n-----------EXERCISE C-----------\n");

Math.random()

let theRandomNumber = Math.floor(Math.random() * 20) + 0;

console.log(theRandomNumber)

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log("\n-----------EXERCISE D-----------\n");

let me = {
  name: "Tereza",
  surname: "Danke",
  age: "23",
}

console.log(me)

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log("\n-----------EXERCISE E-----------\n");

delete me.age

console.log(me)

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
console.log("\n-----------EXERCISE F-----------\n");

me.skills = ["HTML", "CSS", "Javascript"]

console.log(me)

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log("\n-----------EXERCISE G-----------\n");

me.skills.pop()
console.log(me)


// JS Functions

/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
* 6) + 1)*/

console.log("\n-----------EXERCISE 1-----------\n");

function dice(){
return Math.floor((Math.random() * 6) + 1)
}
console.log(dice())

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

console.log("\n-----------EXERCISE 2-----------\n");

function whoIsBigger(z, m){
  if (z > m) {
      return z + " is the biggest one";   
  } else {
      return m + " is the biggest one";
  }
}       

console.log(whoIsBigger(5,9))

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log("\n-----------EXERCISE 3-----------\n");


function splitMe(h){
  return  h.split(" ")
}

console.log(splitMe("I love coding"))

/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

console.log("\n-----------EXERCISE 4-----------\n");

function deleteOne(str, bool){
  if(bool === true){
    return str.substring(1);
  }else{
   return str.substr(0, str.length - 1);
  }
}
console.log(deleteOne("Buongiorno", false))
console.log(deleteOne("Buongiorno", true))

/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/

console.log("\n-----------EXERCISE 5-----------\n");

function onlyLetters(str){
  return str.replace(/[0-9]/g, '');
}
console.log(onlyLetters("I have 4 dogs"))

/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

console.log("\n-----------EXERCISE 6-----------\n");

function isThisAnEmail(email) 
{
    let em = /\S+@\S+\.\S+/;
    return em.test(email);
}

console.log(isThisAnEmail('tereza.danke@gmail.com'))

/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/

console.log("\n-----------EXERCISE 7-----------\n");

function whatDayIsIt() {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
  let today = new Date().getDay()
  return days[today]
}
console.log('Today is: ', whatDayIsIt());


/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.  //8
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/

console.log("\n-----------EXERCISE 8-----------\n");

function rollTheDices(u){
  let arrMy = []
   for(let i = 0; i < u; i++) {
      arrMy.push(dice())
  }
  let sumMyAr = arrMy.reduce((a, b) => a + b, 0) 
  let result = {
      sum: sumMyAr,
      values: arrMy
  }
  return result
}

console.log(rollTheDices(8));

/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

console.log("\n-----------EXERCISE 9-----------\n");


function howManyDays(m){
   const date1 = new Date('10/05/2022');
   const date2 = new Date().getMonth().getDay().getFullYear();
   const diffTime = Math.abs(date2 - date1);
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); }
   const date2 = new Date().getMonth();

   console.log(date2)

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/
console.log("\n-----------EXERCISE 10-----------\n");

function isTodayMyBirthday(){
  let myBirthday = 1
  let myBirthMonth = 9
  let today = new Date()
  let actualMonth = new Date()
  return  myBirthday === today.getDate() && myBirthMonth === actualMonth.getMonth() + 1 
}
console.log('Is my birthday today?', isTodayMyBirthday());

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/
console.log("\n-----------EXERCISE 11-----------\n");

let movies1 =  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
}

function deleteProp(objectD, stringD){
 delete objectD[stringD]
return objectD
}

console.log('delete property', deleteProp(movies1, 'Type'));


let movies = [
{
  Title: "The Lord of the Rings: The Fellowship of the Ring",
  Year: "2001",
  imdbID: "tt0120737",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
},
{
  Title: "The Lord of the Rings: The Return of the King",
  Year: "2003",
  imdbID: "tt0167260",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
},
{
  Title: "The Lord of the Rings: The Two Towers",
  Year: "2002",
  imdbID: "tt0167261",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
},
{
  Title: "Lord of War",
  Year: "2005",
  imdbID: "tt0399295",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
},
{
  Title: "Lords of Dogtown",
  Year: "2005",
  imdbID: "tt0355702",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
},
{
  Title: "The Lord of the Rings",
  Year: "1978",
  imdbID: "tt0077869",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
},
{
  Title: "Lord of the Flies",
  Year: "1990",
  imdbID: "tt0100054",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
},
{
  Title: "The Lords of Salem",
  Year: "2012",
  imdbID: "tt1731697",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
},
{
  Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
  Year: "1984",
  imdbID: "tt0087365",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
},
{
  Title: "Lord of the Flies",
  Year: "1963",
  imdbID: "tt0057261",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
},
{
  Title: "The Avengers",
  Year: "2012",
  imdbID: "tt0848228",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
},
{
  Title: "Avengers: Infinity War",
  Year: "2018",
  imdbID: "tt4154756",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
},
{
  Title: "Avengers: Age of Ultron",
  Year: "2015",
  imdbID: "tt2395427",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
},
{
  Title: "Avengers: Endgame",
  Year: "2019",
  imdbID: "tt4154796",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
},
]

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

console.log("\n-----------EXERCISE 12-----------\n");

function olderMovie(){
  let myYears = []
  for (let i = 0; i < movies.length; i++){
      myYears.push(movies[i]['Year'])
  }
  return Math.max(...myYears)
}

console.log('The oldest movie: ', olderMovie());


/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

console.log("\n-----------EXERCISE 13-----------\n");

function countMovies(){
  let numberMovies = movies.length
  return numberMovies
}

console.log('Number of movies: ',countMovies());

/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

console.log("\n-----------EXERCISE 14-----------\n");

function onlyTheTitles(){
  let myTitles = []
  for (let i = 0; i < movies.length; i++){
      myTitles.push(movies[i].Title)
  }
  return myTitles
}

console.log('The titles: ', onlyTheTitles() );

/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

console.log("\n-----------EXERCISE 15-----------\n");

function onlyInThisMillennium(){
  let myMillArr = []
  for (let j = 0; j < movies.length; j++){
      if(movies[j].Year > 2000){
          myMillArr.push(movies[j])
      }
  }
  return myMillArr
}

console.log('Movies produced in this millennium: ', onlyInThisMillennium());

/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
console.log("\n-----------EXERCISE 16-----------\n");

function getMovieById(id){
  let givenId = []
  for (let i = 0; i < movies.length; i++){
      if(id === movies[i].imdbID){
          givenId.push(movies[i])
      }
  }
  return givenId
}

console.log('The movie with id I chose is:', getMovieById("tt0399295"));

/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

console.log("\n-----------EXERCISE 17-----------\n");

function sumAllTheYears(){
  let sumYears = []
  let myTotal
  for (let i = 0; i < movies.length; i++) {
      sumYears.push(movies[i].Year)
      myTotal += sumYears[i]
  }
  return myTotal
}

console.log('Number of the years in which the movies have been produced: ', sumAllTheYears());


/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

console.log("\n-----------EXERCISE 18-----------\n");


function searchByTitle(str7){
  let myMovies = []
  for (let i = 0; i < movies.length; i++) {
      if(movies[i].Title.indexOf(str7) >= 0 ){
          myMovies.push(movies[i])
      }
  }
  return myMovies
}

console.log('Changing the name of all the movies for:searchByTitle(Changing the name of all the movies for', searchByTitle);

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/

console.log("\n-----------EXERCISE 19-----------\n");

function searchAndDivide(anotherString){
  let obj8 = {
      match: [],
      unmatch: []
  }
  for(let i = 0; i < movies.length; i++) {
      if (movies[i].Title.indexOf(anotherString) >= 0 ) {
          obj8.match.push(movies[i])
      } else {
          obj8.unmatch.push(movies[i])
      }
  }
  return obj8
}

console.log('Match and unmatch movies: ', searchAndDivide('Lord'));

/* EXERCISE 20
Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

console.log("\n-----------EXERCISE 19-----------\n");

function removeIndex(int9){
  delete movies[int9]
  return movies

}

console.log('The canceled item(n.9):', removeIndex(8));


// [EXTRAS] JS Advanced

/* EXERCISE 21
Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
Example:
halfTree(3)
*
**
***
*/

console.log("\n-----------EXERCISE 21-----------\n");

function halfTree(height){
  let star = ''
  for (let i = 0; i < height; i += 1){
      console.log(star+= '*' );
  } 
}

console.log(halfTree(9));

/* EXERCISE 22
Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
Example:
tree(3)
*/


/* EXERCISE 23
Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

console.log("\n-----------EXERCISE 23-----------\n");

function isItPrime(lol){
  let primeNum = lol / 2
  return primeNum % 1 === 0 ? 'Is not prime.' : 'Is it prime.'
}

console.log('Is prime?? ', isItPrime(9));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.
*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */