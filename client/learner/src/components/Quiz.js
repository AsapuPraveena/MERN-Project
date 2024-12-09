import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const Quiz = () => {
  // Dummy quiz data focused on English grammar and vocabulary
  const quizQuestions = [
    {
      question: 'What is the plural form of "child"?',
      choices: ['a) Childs', 'b) Children', 'c) Childes', 'd) Childer'],
      correctAnswer: 'b) Children',
    },
    {
      question: 'Which word is an antonym of "happy"?',
      choices: ['a) Joyful', 'b) Sad', 'c) Excited', 'd) Cheerful'],
      correctAnswer: 'b) Sad',
    },
    {
      question: 'What is the past tense of "go"?',
      choices: ['a) Going', 'b) Went', 'c) Gone', 'd) Goes'],
      correctAnswer: 'b) Went',
    },
    {
      question: 'Which sentence is correct?',
      choices: [
        'a) He go to school.',
        'b) He gone to school.',
        'c) He went to school.',
        'd) He goes to school.',
      ],
      correctAnswer: 'c) He went to school.',
    },
    {
      question: 'What is the synonym of "quick"?',
      choices: ['a) Fast', 'b) Slow', 'c) Steady', 'd) Careful'],
      correctAnswer: 'a) Fast',
    },
    {
      question: 'What type of word is "beautiful"?',
      choices: ['a) Noun', 'b) Verb', 'c) Adjective', 'd) Adverb'],
      correctAnswer: 'c) Adjective',
    },
    {
      question: 'Which is a correct question form?',
      choices: [
        'a) You are coming?',
        'b) Are you coming?',
        'c) Coming you are?',
        'd) You coming are?',
      ],
      correctAnswer: 'b) Are you coming?',
    },
    {
      question: 'What is the superlative form of "good"?',
      choices: ['a) Gooder', 'b) Best', 'c) Better', 'd) Goodest'],
      correctAnswer: 'b) Best',
    },
    {
      question: 'Which of the following is a compound sentence?',
      choices: [
        'a) I like ice cream.',
        'b) I like ice cream and I like cake.',
        'c) I like ice cream but.',
        'd) Ice cream is good.',
      ],
      correctAnswer: 'b) I like ice cream and I like cake.',
    },
    {
      question: 'What is the correct form of the verb: "She ___ to the store"?',
      choices: ['a) Go', 'b) Goes', 'c) Gone', 'd) Going'],
      correctAnswer: 'b) Goes',
    },
    {
      question: 'Which word means the same as "help"?',
      choices: ['a) Assist', 'b) Hinder', 'c) Ignore', 'd) Stop'],
      correctAnswer: 'a) Assist',
    },
    {
      question: 'Which is the correct past form of "eat"?',
      choices: ['a) Eated', 'b) Ate', 'c) Eats', 'd) Eating'],
      correctAnswer: 'b) Ate',
    },
    {
      question: 'What is the opposite of "difficult"?',
      choices: ['a) Challenging', 'b) Easy', 'c) Hard', 'd) Complicated'],
      correctAnswer: 'b) Easy',
    },
    {
      question: 'Which of the following is an adverb?',
      choices: ['a) Quickly', 'b) Quick', 'c) Quickness', 'd) Quicker'],
      correctAnswer: 'a) Quickly',
    },
    {
      question: 'What is the future form of "to be"?',
      choices: ['a) Am', 'b) Is', 'c) Will be', 'd) Are'],
      correctAnswer: 'c) Will be',
    },
    {
      question: 'Choose the correct word: "He is ___ doctor."',
      choices: ['a) A', 'b) An', 'c) The', 'd) None'],
      correctAnswer: 'a) A',
    },
    {
      question: 'What is the correct negative form of "I am happy"?',
      choices: [
        'a) I not happy.',
        'b) I am not happy.',
        'c) I am no happy.',
        'd) I not am happy.',
      ],
      correctAnswer: 'b) I am not happy.',
    },
    {
      question: 'Which word is spelled incorrectly?',
      choices: ['a) Accommodate', 'b) Definately', 'c) Receive', 'd) Occasion'],
      correctAnswer: 'b) Definately',
    },
    {
      question: 'What is the meaning of "benevolent"?',
      choices: ['a) Evil', 'b) Kind', 'c) Selfish', 'd) Angry'],
      correctAnswer: 'b) Kind',
    },
    {
      question: 'What part of speech is the word "quickly"?',
      choices: ['a) Noun', 'b) Verb', 'c) Adverb', 'd) Adjective'],
      correctAnswer: 'c) Adverb',
    },
    {
      question: 'What is the comparative form of "big"?',
      choices: ['a) Bigger', 'b) Biggest', 'c) More big', 'd) Biger'],
      correctAnswer: 'a) Bigger',
    },
    {
      question: 'Which of the following is a pronoun?',
      choices: ['a) They', 'b) House', 'c) Run', 'd) Happy'],
      correctAnswer: 'a) They',
    },
    {
      question: 'What does the word "transient" mean?',
      choices: ['a) Permanent', 'b) Temporary', 'c) Long-lasting', 'd) Stable'],
      correctAnswer: 'b) Temporary',
    },
    {
      question: 'Which of the following is an example of a conjunction?',
      choices: ['a) And', 'b) Happy', 'c) Run', 'd) Quickly'],
      correctAnswer: 'a) And',
    },
    {
      question: 'What is the past tense of "sing"?',
      choices: ['a) Sang', 'b) Sung', 'c) Sings', 'd) Singing'],
      correctAnswer: 'a) Sang',
    },
    {
      question: 'Which sentence uses correct punctuation?',
      choices: [
        'a) Its a nice day.',
        'b) It’s a nice day.',
        'c) Its a nice day',
        'd) It’s a nice day',
      ],
      correctAnswer: 'b) It’s a nice day.',
    },
    {
      question: 'What is the main verb in the sentence "She runs every day"?',
      choices: ['a) Runs', 'b) She', 'c) Every', 'd) Day'],
      correctAnswer: 'a) Runs',
    },
    {
      question: 'Which word is a synonym of "begin"?',
      choices: ['a) Start', 'b) End', 'c) Stop', 'd) Finish'],
      correctAnswer: 'a) Start',
    },
    {
      question: 'Choose the correct word: "She has ___ friends."',
      choices: ['a) Many', 'b) Much', 'c) Few', 'd) A little'],
      correctAnswer: 'a) Many',
    },
    {
      question: 'What does "inquisitive" mean?',
      choices: ['a) Curious', 'b) Lazy', 'c) Angry', 'd) Happy'],
      correctAnswer: 'a) Curious',
    },
    {
      question: 'Which word means the opposite of "generous"?',
      choices: ['a) Kind', 'b) Selfish', 'c) Giving', 'd) Friendly'],
      correctAnswer: 'b) Selfish',
    },
    {
      question: 'What is the plural of "mouse"?',
      choices: ['a) Mouses', 'b) Mice', 'c) Mouse', 'd) Mices'],
      correctAnswer: 'b) Mice',
    },
    {
      question: 'Which of the following is a sentence fragment?',
      choices: [
        'a) I love ice cream.',
        'b) Because I love ice cream.',
        'c) Ice cream is delicious.',
        'd) I eat ice cream every day.',
      ],
      correctAnswer: 'b) Because I love ice cream.',
    },
    {
      question: 'What is the meaning of the idiom "break the ice"?',
      choices: [
        'a) To shatter something',
        'b) To make a difficult situation easier',
        'c) To ruin a relationship',
        'd) To start a conversation',
      ],
      correctAnswer: 'd) To start a conversation',
    },
    {
      question: 'What is the gerund form of "to swim"?',
      choices: ['a) Swam', 'b) Swimming', 'c) Swim', 'd) Swims'],
      correctAnswer: 'b) Swimming',
    },
    {
      question: 'Which sentence is correct?',
      choices: [
        'a) She don’t like coffee.',
        'b) She doesn’t likes coffee.',
        'c) She doesn’t like coffee.',
        'd) She not like coffee.',
      ],
      correctAnswer: 'c) She doesn’t like coffee.',
    },
    {
      question: 'What is the present perfect form of "to read"?',
      choices: ['a) Read', 'b) Reads', 'c) Have read', 'd) Reading'],
      correctAnswer: 'c) Have read',
    },
    {
      question: 'Which word means "to inform"?',
      choices: ['a) Notify', 'b) Ignore', 'c) Forget', 'd) Abandon'],
      correctAnswer: 'a) Notify',
    },
    {
      question: 'What is the correct order of adjectives in the sentence: "I have a ___ car"?',
      choices: [
        'a) Red old nice',
        'b) Nice red old',
        'c) Old nice red',
        'd) Old red nice',
      ],
      correctAnswer: 'd) Old red nice',
    },
    {
      question: 'What does "to throw in the towel" mean?',
      choices: [
        'a) To win',
        'b) To give up',
        'c) To celebrate',
        'd) To start',
      ],
      correctAnswer: 'b) To give up',
    },
    {
      question: 'Which of the following sentences is interrogative?',
      choices: [
        'a) I like pizza.',
        'b) You are my friend.',
        'c) Do you like pizza?',
        'd) Pizza is great.',
      ],
      correctAnswer: 'c) Do you like pizza?',
    },
    {
      question: 'What is the correct conditional form: "If I ___ rich, I would travel."?',
      choices: ['a) Am', 'b) Were', 'c) Was', 'd) Will be'],
      correctAnswer: 'b) Were',
    },
    {
      question: 'Which word is an adjective?',
      choices: ['a) Quickly', 'b) Happiness', 'c) Beautiful', 'd) Run'],
      correctAnswer: 'c) Beautiful',
    },
    {
      question: 'What is the meaning of "to add fuel to the fire"?',
      choices: [
        'a) To make something worse',
        'b) To help someone',
        'c) To calm down a situation',
        'd) To finish a task',
      ],
      correctAnswer: 'a) To make something worse',
    },
    {
      question: 'Which of the following is a synonym of "difficult"?',
      choices: ['a) Easy', 'b) Hard', 'c) Simple', 'd) Clear'],
      correctAnswer: 'b) Hard',
    },
    {
      question: 'What is the antonym of "succeed"?',
      choices: ['a) Fail', 'b) Achieve', 'c) Win', 'd) Complete'],
      correctAnswer: 'a) Fail',
    },
    {
      question: 'What is the correct form of the verb "to be" in the past for "I"?',
      choices: ['a) Am', 'b) Was', 'c) Is', 'd) Were'],
      correctAnswer: 'b) Was',
    },
  ];

  // State to hold the selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizQuestions.length).fill(''));

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer; // Set the selected answer for the question
    setSelectedAnswers(newAnswers); // Update the state
  };

  const handleSubmit = () => {
    // Handle submission logic here (e.g., check answers, show results)
    console.log('Selected Answers:', selectedAnswers);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Quiz
      </Typography>
      {quizQuestions.map((item, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="h6" align="left">{`${index + 1}. ${item.question}`}</Typography>
          <RadioGroup
            value={selectedAnswers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            sx={{ textAlign: 'left' }} // Align the radio buttons and labels to the left
          >
            {item.choices.map((choice, choiceIndex) => (
              <FormControlLabel
                key={choiceIndex}
                control={<Radio />}
                label={choice}
                value={choice} // Value is the choice text
                sx={{ textAlign: 'left' }} // Left align the choices
              />
            ))}
          </RadioGroup>
        </Box>
      ))}
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Quiz;
