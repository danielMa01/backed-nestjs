import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SignupModel } from './signup/signup.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SignupModule,
    ConfigModule.forRoot()
    ,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: <number>(<unknown>process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, 
      models: [SignupModel],
      autoLoadModels: true
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
