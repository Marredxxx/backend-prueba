import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "./persons.controller";
import { PersonService } from "./persons.service";
import { Person } from "./entities/person.entity";
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [PersonController],
    providers: [PersonService]

})
export class PersonModule {}