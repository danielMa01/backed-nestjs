import { Injectable } from '@nestjs/common';
import { SignupModel } from './signup.model';
import { InjectModel } from '@nestjs/sequelize';
import { sign } from 'crypto';

@Injectable()
export class SignupService {
    constructor(
        @InjectModel(SignupModel)
        private userModel: typeof SignupModel,
      ) {}
    
      async findAll(): Promise<SignupModel[]> {
        return this.userModel.findAll();
      }
    
      findOne(id: string): Promise<SignupModel> {
        return this.userModel.findOne({
          where: {
            id,
          },
        });
      }
    
      async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
      }

      async create(username: string , password:string) :  Promise<void>{
           const signup = new SignupModel({
                username,
                password
           });
           signup.save();
      }
}
