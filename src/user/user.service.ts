import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>
  ) { }

  async findAllUsers(): Promise<UserEntity[]> {
    return await this.userEntity.find();
  }

  async findOneUser(_id: string): Promise<UserEntity> {
    return await this.userEntity.findOne(_id);
  }

  async createUser(user: UserModel): Promise<UserEntity> {
    return await this.userEntity.save(user);
  }

  async updateUser(_id: string, user: UserModel): Promise<UserEntity> {
    const userUpdate = await this.userEntity.findOne(_id);
    if (!userUpdate) { return undefined }
    user._id = userUpdate._id;
    return await this.userEntity.save(user);
  }

  async removeUser(_id: string): Promise<any> {
    return await this.userEntity.delete(_id);
  }

}
