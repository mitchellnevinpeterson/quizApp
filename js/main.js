// creating an array of questions
var questions = [
	{
		question: "How many rings are in the Audi symbol?",
		answer: 4
	},
	{
		question: "What is the base liquor in a Manhattan drink?",
		answer: "whiskey"
	},
	{
		question: "Does your phone battery charge faster when put in airplane mode?",
		answer: "yes"
	},
	{
		question: "What is the least populated state in the United States?",
		answer: "wyoming"
	},
	{
		question: "Which state in the U.S. has the largest population?",
		answer: "california"
	},
	{
		question: "What is the most popular sport in the world?",
		answer: "soccer"
	},
	{
		question: "To get Beetlejuice to appear, how many times do you say his name?",
		answer: 3
	},
	{
		question: "Is sugar a carbohydrate?",
		answer: "yes"
	},
	{
		question: "What does EDM stand for in the music scene?",
		answer: "electronic dance music"
	},
	{
		question: "Is is possible to have better than 20/20 vision?",
		answer: "yes"
	}
]
// Looping though the array of questions
// for(var i = 0; i < questions.length; i++) {
// 	// storing the value of the questions
// 	var question = questions[i].question
// 	// storing the values of the question in html
// 	var element = document.getElementById("question" + [i])
// 	console.log(question)

// 	element.textContent = question
// 	console.log(question)
// }

// creating a function that will check the answers to the user input
function testResults() {
	for(var i = 0; i < questions.length; i++) {
		// storing the value of the answers in a variable
		var answer = questions[i].answer
		// storing the answers of the user as a variable
		var userAnswer = document.getElementById("answer" + [i]).value.toLowerCase()
		// storing the question spot to add a class
		var questionSpot = document.getElementById("question" + [i])
		if(answer == userAnswer) {
			questionSpot.className = "correct"
		} else {
			questionSpot.className = "incorrect"
		}
	}
}