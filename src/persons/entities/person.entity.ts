import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id_person:number;

    @Column()
    name: string;

    @Column()
    age: number; 

    @Column({default: true})
    status: boolean;
}
