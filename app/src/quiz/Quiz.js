import React, { useState } from 'react';
import {Button, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles({
   helloThereStyles: {
       fontStyle: 'oblique',
       color: "grey",
       fontSize: "30px"
   }
});
 
 
 
 
export default function Quiz() {
 
   const classes = useStyles();
 
  
   const questions = [
    
       {
           questionText: 'How much of the earths surface is water?',
           answerOptions: [
               { answerText: '60%', isCorrect: false },
               { answerText: '70%', isCorrect: true },
               { answerText: '80%', isCorrect: false },
               { answerText: '90', isCorrect: false },
           ],
       },
       {
           questionText: 'How much of ALL earths water is frozen?',
           answerOptions: [
               { answerText: '1%', isCorrect: false},
               { answerText: '2%', isCorrect: true},
               { answerText: '3%', isCorrect: false },
               { answerText: '4%', isCorrect: false },
           ],
       },
     {
           questionText: 'How much water is used to flush a toilet?',
           answerOptions: [
               { answerText: '2 liters', isCorrect: false},
               { answerText: '4 liters', isCorrect: false},
               { answerText: '6 liters', isCorrect: true },
               { answerText: '8 liters', isCorrect: false },
           ],
       },
      {
           questionText: 'On average, how much water is used to hand wash dishes?',
           answerOptions: [
               { answerText: '20-40liters', isCorrect: false},
               { answerText: '40-60 liters', isCorrect: false},
               { answerText: '60-80 liters', isCorrect: true},
               { answerText: '80-100 liters', isCorrect: false},
           ],
       },
 
 
{
           questionText: 'On average, how much water is used for a dishwasher?',
           answerOptions: [
               { answerText: '15-30liters', isCorrect: true},
               { answerText: '30-45 liters', isCorrect: false},
               { answerText: '45-60 liters', isCorrect: false },
               { answerText: '60-185 liters', isCorrect: false},
           ],
       },
{
           questionText: 'How much water is used in the average five-minute shower?',
           answerOptions: [
               { answerText: '50 liters', isCorrect: false},
               { answerText: '80 liters', isCorrect: true},
               { answerText: '100 liters', isCorrect: false },
               { answerText: '120 liters', isCorrect: false},
           ],
       },
{
           questionText: 'What country has the best tap water?',
           answerOptions: [
               { answerText: 'Germany', isCorrect: false},
               { answerText: 'Italy', isCorrect: true},
               { answerText: 'Denmark', isCorrect: false },
               { answerText: 'USA (lol)', isCorrect: false},
           ],
       },
 
       {
        questionText: 'What and where is the tallest waterfall in the world?',
           answerOptions: [
               { answerText: 'Niagara Falls, Canada', isCorrect: false },
               { answerText: 'Kaieteur Falls, Guyana', isCorrect: false},
               { answerText: 'Blue Nile Falls, Ethiopia', isCorrect: false },
               { answerText: 'Angel Falls, Venezuela.', isCorrect: true},
           ],
       },
     
   {
        questionText: 'Joseph Priestley was the first who invented carbonated water(artificially). What year was that?',
           answerOptions: [
               { answerText: '1697', isCorrect: false },
               { answerText: '1767', isCorrect: true},
               { answerText: '1847', isCorrect: false },
               { answerText: '1907', isCorrect: false},
           ],
       },
 {
        questionText: 'How much water does it take to produce a pair of jeans?',
           answerOptions: [
               { answerText: '2000 litres', isCorrect: false },
               { answerText: '8000 litres', isCorrect: false},
               { answerText: '1000 litres', isCorrect: true},
               { answerText: '12000 litres', isCorrect: false },
           ],
       },
 {
   questionText: 'Which animal drinks the most water per pound of bodyweight?',
       answerOptions: [
           { answerText: 'Cows', isCorrect: true },
           { answerText: 'Dogs', isCorrect: false},
           { answerText: 'Sharks', isCorrect: false},
           { answerText: 'Crocodiles', isCorrect: false },
       ],
   },
 
 {
        questionText: 'Which ocean is the largest and deepest?',
           answerOptions: [
               { answerText: 'Pacific Ocean', isCorrect: true},
               { answerText: 'Atlantic Ocean', isCorrect: false},
               { answerText: 'Southern Ocean', isCorrect: false },
               { answerText: 'Indian Ocean', isCorrect: false },
           ],
       },
 {
        questionText: 'Which ocean is the smallest and shallowest?',
           answerOptions: [
               { answerText: 'Pacific Ocean', isCorrect: false},
               { answerText: 'Atlantic Ocean', isCorrect: true},
               { answerText: 'Southern Ocean', isCorrect: false },
               { answerText: 'Indian Ocean', isCorrect: false },
           ],
       },
 
{
        questionText: 'Which year did the Titanic sink?',
           answerOptions: [
               { answerText: '1910', isCorrect: false},
               { answerText: '1912', isCorrect: true},
               { answerText: '1923', isCorrect: false },
               { answerText: '1944', isCorrect: false },
           ],
       },
 {
        questionText: 'How many shipwrecks are estimated to be in the ocean?',
           answerOptions: [
               { answerText: '3 million', isCorrect: false},
               { answerText: '8 million', isCorrect: true},
               { answerText: '10 million', isCorrect: false },
               { answerText: '100 million', isCorrect: false },
           ],
       },
{
        questionText: 'Most of Earths freshwater is in:',
           answerOptions: [
               { answerText: 'Lakes', isCorrect: false},
               { answerText: 'Springs', isCorrect: false} ,
               { answerText: 'Man made reservoir', isCorrect: false },
               { answerText: 'aquifers', isCorrect: true},
           ],
       },
 
{
        questionText: 'What percentage of the worlds population does not have access to clean water?',
           answerOptions: [
               { answerText: '5%', isCorrect: false },
               { answerText: '11%', isCorrect: false},
               { answerText: '17%', isCorrect: true},
               { answerText: '36%', isCorrect: false },
           ],
       },
{
     questionText: 'The daily drinking water requirement per person is 2-4 litres. According to the UN, how many litres of water, on average, does it take to produce one persons daily food?',
           answerOptions: [
               { answerText: '10-15 litres', isCorrect: false },
               { answerText: '100-150 litres', isCorrect: false},
               { answerText: '500-1000 litres', isCorrect: true},
               { answerText: '1000-5000', isCorrect: false },
           ],
       },
 
{
        questionText: 'How much of the earth’s water is suitable for drinking water?',
           answerOptions: [
               { answerText: '0.5%', isCorrect: false },
               { answerText: '1%', isCorrect: true},
               { answerText: '1.5%', isCorrect: false },
               { answerText: '2%', isCorrect: false },
           ],
       },
{
        questionText: 'Which of these contains the most water?',
           answerOptions: [
               { answerText: 'bones', isCorrect: false },
               { answerText: 'muscles', isCorrect: false},
               { answerText: 'brain', isCorrect: true},
               { answerText: 'the skin', isCorrect: false },
           ],
       },
 
 
    ];
 
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [score, setScore] = useState(0);
 
   const handleAnswerOptionClick = (isCorrect) => {
       if (isCorrect) {
           setScore(score + 1);
       }
 
       const nextQuestion = currentQuestion + 1;
       if (nextQuestion < questions.length) {
           setCurrentQuestion(nextQuestion);
       } else {
           setShowScore(true);
       }
   };
 
  
 
  
 
   return (
      <Container maxWidth="lg">
       <div className='quiz'>
           <div>
             <Typography
             className = {classes.helloThereStyles}
             variant = "h1"
             color="secondary"> THIS IS OUR GAME ABOUT WATER KNOWLEDGE</Typography> 
           </div>
           {showScore ? (
               <div className='score-section'>
                   You scored {score} out of {questions.length}
                   <Button link href="quiz">RESTART GAME</Button>
                   <Button >LEAVE GAME</Button>
               </div>
           ) : (
               <>
                   <div className='question-section'>
                       <div className='question-count'>
                           <span>Question {currentQuestion + 1}</span>/{questions.length}
                       </div>
                       <div className='question-text'>{questions[currentQuestion].questionText}</div>
                   </div>
                   <div className='answer-section'>
                       <h1>
                       {questions[currentQuestion].answerOptions.map((answerOption) => (
                           <Button
                           color= "secondary" variant="contained" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                       ))}
                       </h1>
                   </div>
               </>
           )}
       </div>
       </Container>
   );
}
