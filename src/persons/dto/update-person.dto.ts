import { IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class UpdatePersonDto{
    @IsOptional()
    @Transform((value => value.value.trim()))
    @IsString()
    name?: string;

    @IsOptional()
    @Transform((value => value.value.trim()))
    @IsString()
    email?: string;

    @IsOptional()
    @Transform((value => value.value.trim()))
    @IsString()
    age?: number;
    
}