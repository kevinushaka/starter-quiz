import { Question } from './question.model';

export interface Quiz {
    name: string;
    theme: Theme;
    creationDate?: Date;
    questions: Question[];
}

export enum Theme {
    Actor = 'Actor',
    Sport = 'Sport',
    Car= 'Car',
    Cooking= 'Cooking'
}
