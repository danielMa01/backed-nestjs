import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { SignupService } from './signup.service';


@Controller('signup')
export class SignupController {
    constructor(private readonly signupService: SignupService) {}
    @Post('/api')
    Signup(@Body() body){
    let result = this.signupService.create(body.username,body.password).then(()=>{
        return {message:'datos almacenados correctamente'}
    }).catch((e)=>{
        return {error:e};
    });
      return result;
    }
}
