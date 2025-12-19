import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './persons/entities/person.entity';
import { PersonModule } from './persons/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'person_db',
      entities: [Person],
      autoLoadEntities: true,
      synchronize: true,
    }),
   // Module,
   PersonModule
  ],
})
export class AppModule {}
