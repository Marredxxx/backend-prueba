import { Transform } from "class-transformer";
import {IsString, IsEmail, IsNumber} from 'class-validator'

export class CreatePersonDto{
    @Transform((value => value.value.trim()))
    @IsString()
    name: string;

    @Transform((value => value.value.trim()))
    @IsEmail()
    email:string;

    @Transform((value => value.value.trim()))
    @IsNumber()
    age: number;

}