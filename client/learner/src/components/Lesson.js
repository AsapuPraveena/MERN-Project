import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const Lesson = () => {
  const lessons = [
    { name: 'Introduction to English', description: 'Learn the basics of English grammar and vocabulary.', duration: '30 minutes', faculty: 'John Smith' },
    { name: 'English Pronunciation', description: 'Master common English sounds and pronunciation.', duration: '45 minutes', faculty: 'Emily Johnson' },
    { name: 'Grammar Basics', description: 'An overview of basic English grammar rules.', duration: '40 minutes', faculty: 'Michael Brown' },
    { name: 'Common English Phrases', description: 'Familiarize yourself with everyday phrases.', duration: '25 minutes', faculty: 'Emma Wilson' },
    { name: 'Writing Skills', description: 'Improve your basic writing skills in English.', duration: '50 minutes', faculty: 'David Miller' },
    { name: 'Listening Comprehension', description: 'Practice listening and understanding English speech.', duration: '35 minutes', faculty: 'Sophia Davis' },
    { name: 'Advanced Grammar', description: 'Dive deep into advanced grammar concepts.', duration: '55 minutes', faculty: 'James Martinez' },
    { name: 'Conversational English', description: 'Learn how to engage in English conversations.', duration: '30 minutes', faculty: 'Isabella Garcia' },
    { name: 'Reading Comprehension', description: 'Develop your reading comprehension skills.', duration: '40 minutes', faculty: 'Lucas Rodriguez' },
    { name: 'Vocabulary Building', description: 'Expand your English vocabulary through various exercises.', duration: '35 minutes', faculty: 'Mia Hernandez' },
    { name: 'Idioms and Expressions', description: 'Learn popular idioms and expressions used in English.', duration: '45 minutes', faculty: 'William Lee' },
    { name: 'English for Travel', description: 'Prepare for traveling with common English phrases.', duration: '25 minutes', faculty: 'Sophia Gonzalez' },
    { name: 'Business English', description: 'Improve your English for business and work situations.', duration: '50 minutes', faculty: 'Alexander Perez' },
    { name: 'English for Interviews', description: 'Master English interview techniques and phrases.', duration: '30 minutes', faculty: 'Olivia Ramirez' },
    { name: 'Public Speaking in English', description: 'Gain confidence in public speaking with English.', duration: '60 minutes', faculty: 'Ethan Thompson' },
    { name: 'Accent Reduction', description: 'Work on reducing your accent while speaking English.', duration: '35 minutes', faculty: 'Charlotte White' },
    { name: 'English for Technology', description: 'Learn English terms and phrases for the tech industry.', duration: '45 minutes', faculty: 'Henry Lewis' },
    { name: 'Writing Formal Emails', description: 'Learn how to write formal emails in English.', duration: '25 minutes', faculty: 'Mason Walker' },
    { name: 'English for Presentations', description: 'Present confidently in English using the right phrases.', duration: '55 minutes', faculty: 'Amelia Hall' },
    { name: 'Grammar for Professionals', description: 'Polish your grammar for a professional setting.', duration: '40 minutes', faculty: 'Evelyn Allen' },
    { name: 'Everyday Conversations', description: 'Practice common everyday conversations in English.', duration: '30 minutes', faculty: 'Jackson Young' },
    { name: 'Intermediate Listening Skills', description: 'Build intermediate-level listening skills.', duration: '35 minutes', faculty: 'Harper King' },
    { name: 'Basic Writing Techniques', description: 'Learn the fundamentals of writing in English.', duration: '45 minutes', faculty: 'Sebastian Scott' },
    { name: 'Creative Writing', description: 'Explore creative writing techniques in English.', duration: '50 minutes', faculty: 'Avery Green' },
    { name: 'Understanding English Slang', description: 'Understand and use common English slang.', duration: '40 minutes', faculty: 'Benjamin Adams' },
    { name: 'Listening to Native Speakers', description: 'Practice listening to native English speakers.', duration: '60 minutes', faculty: 'Lily Nelson' },
    { name: 'Advanced Writing Skills', description: 'Develop advanced writing skills for essays and reports.', duration: '55 minutes', faculty: 'James Carter' },
    { name: 'Casual Conversations', description: 'Engage in casual English conversations confidently.', duration: '30 minutes', faculty: 'Ellie Hill' },
    { name: 'Pronunciation for Advanced Learners', description: 'Improve your pronunciation at an advanced level.', duration: '40 minutes', faculty: 'Aiden Baker' },
    { name: 'Formal vs Informal Language', description: 'Understand the differences between formal and informal English.', duration: '35 minutes', faculty: 'Charlotte Rivera' },
    { name: 'Storytelling in English', description: 'Learn how to tell engaging stories in English.', duration: '50 minutes', faculty: 'Owen Sanders' },
    { name: 'English for Exams', description: 'Prepare for English exams with sample questions.', duration: '45 minutes', faculty: 'Henry Collins' },
    { name: 'English Grammar in Depth', description: 'A comprehensive guide to English grammar.', duration: '60 minutes', faculty: 'Mila Brooks' },
    { name: 'Advanced Listening Skills', description: 'Master advanced listening techniques.', duration: '55 minutes', faculty: 'Alexander Bell' },
    { name: 'Job Interview Practice', description: 'Practice mock interviews in English.', duration: '40 minutes', faculty: 'Scarlett Phillips' },
    { name: 'Understanding News in English', description: 'Learn to comprehend English news articles.', duration: '50 minutes', faculty: 'Oliver Torres' },
    { name: 'Essay Writing', description: 'Write structured essays with proper grammar.', duration: '60 minutes', faculty: 'William Richardson' },
    { name: 'English Vocabulary for Exams', description: 'Expand your vocabulary for English exams.', duration: '35 minutes', faculty: 'Sofia Morris' },
    { name: 'Professional English Writing', description: 'Refine your writing for professional settings.', duration: '50 minutes', faculty: 'Lucas Flores' },
    { name: 'Advanced Conversation Techniques', description: 'Enhance your conversational skills with advanced techniques.', duration: '45 minutes', faculty: 'Evelyn Sanders' },
    { name: 'Business Presentation Skills', description: 'Learn to give effective presentations in English.', duration: '60 minutes', faculty: 'Noah Ross' },
    { name: 'Debating in English', description: 'Practice debating in English with structured arguments.', duration: '55 minutes', faculty: 'Sophia Barnes' },
    { name: 'Improving Accent for Business', description: 'Polish your accent for business communication.', duration: '40 minutes', faculty: 'Henry Roberts' },
    { name: 'Learning Idioms', description: 'Master commonly used idioms in English.', duration: '35 minutes', faculty: 'Ava Ward' },
    { name: 'Reading Complex Texts', description: 'Build skills for understanding complex texts.', duration: '50 minutes', faculty: 'Jack Peterson' },
    { name: 'Grammar for Writing Emails', description: 'Learn the grammar needed for professional emails.', duration: '45 minutes', faculty: 'Amelia Turner' },
    { name: 'Using Prepositions Correctly', description: 'Understand how to use prepositions in English.', duration: '30 minutes', faculty: 'Ethan Campbell' },
    { name: 'Conversational English for Networking', description: 'Practice English conversations for networking events.', duration: '50 minutes', faculty: 'Mia Mitchell' },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Lesson List
      </Typography>
      <Grid container spacing={3}>
        {lessons.map((lesson, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {lesson.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Description:</strong> {lesson.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  <strong>Duration:</strong> {lesson.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Faculty:</strong> {lesson.faculty}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Lesson;
