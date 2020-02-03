import { Quiz } from '../models/quiz.model';
import { Theme } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';


export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
};
export const QUESTION_SPORT: Question = {
    label: 'Kevin Durant joue chez les...',
    answers: [
        {
            value: 'Nets de Brooklyn',
            isCorrect: false,
        },
        {
            value: 'Lakers',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Voitures', // What's happening if I change this value..?
        theme: Theme.Car,
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: Theme.Sport,
        questions: [QUESTION_SPORT],
    }
];
