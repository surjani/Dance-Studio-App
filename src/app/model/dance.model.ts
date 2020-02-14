import { Student } from './student.model';
import { Choreographer } from './choreographer.model';

export class DanceDetails{
    public danceId:number;
    public danceStyle:string;
    public danceCost:string;
    public timePref:String;
    public place:string;
    public student:Student;
    public choreographer:Choreographer;
}