import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      UserEntity
    ]),],
  controllers: [UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
