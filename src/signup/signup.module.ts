import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignupModel } from './signup.model';

@Module({
  imports:[SequelizeModule.forFeature([SignupModel])],
  providers: [SignupService],
  controllers: [SignupController]
})

export class SignupModule  {}
