import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Person } from "./entities/person.entity";
import { Repository } from "typeorm";
import { NotFoundError } from "rxjs";

@Injectable()
export class PersonService{
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository <Person>
    ) {}

    async createPerson(person: CreatePersonDto): Promise<Person>{
        try{
            const newPerson = this.personRepository.create(person);
            return await this.personRepository.save(newPerson);
        }
        catch(error){
            throw new InternalServerErrorException(
                "Error al crear una nueva persona",
            )
        }
    }

    async getAllPerson(){
        try{
            return await  this.personRepository.find({
                where: {status: true},
            })
        }catch(error){
            throw new InternalServerErrorException(
                "Error al listar a las personas",
            )
        }
    }

    async updatePerson(id: number, dto: UpdatePersonDto): Promise<Person> {
        try {
            const person = await this.personRepository.findOneBy({ id_person: id });

            if (!person) {
            throw new InternalServerErrorException('Persona no encontrada');
            }

            const updatedPerson = Object.assign(person, dto);

            return await this.personRepository.save(updatedPerson);
        } catch (error) {
            throw new InternalServerErrorException('Error al actualizar a la persona');
        }
    }

    async deletePerson(id_person: number){
        try{
            const person = await this.personRepository.findOneBy({
                id_person
            })
            if (!person) {
            throw new NotFoundException('Persona no encontrada');
            }
            return await this.personRepository.update(id_person, {
                status: false
            })
        }
        catch(error){
            throw new InternalServerErrorException('Error al eliminar a una persona')
        }
    }

}

