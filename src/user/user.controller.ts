import { Controller, Get, Res, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService
  ) { }

  @Get()
  getAllUsers(@Res() response) {
    return this.userService.findAllUsers()
      .then((res) => {
        response.json({
          response: res
        })
      })
      .catch((err) => {
        response.json({
          response: err
        })
      });
  }
  @Get(':id')
  getUser(@Param('id') id, @Res() response) {
    return this.userService.findOneUser(id)
      .then((res) => {
        response.json({
          response: res
        })
      })
      .catch((err) => {
        response.json({
          response: err
        })
      });
  }
  @Post()
  createUser(@Body() user: UserModel, @Res() response) {
    return this.userService.createUser(user)
      .then((res) => {
        response.json({
          response: res
        })
      })
      .catch((err) => {
        response.json({
          response: err
        })
      });
  }
  @Put(':id')
  updateUser(@Param('id') id, @Body() user: UserModel, @Res() response) {
    return this.userService.updateUser(id, user)
      .then((res) => {
        response.json({
          response: res
        })
      })
      .catch((err) => {
        response.json({
          response: err
        })
      });
  }
  @Delete(':id')
  deleteUser(@Param('id') id, @Res() response) {
    return this.userService.removeUser(id)
      .then((res) => {
        response.json({
          response: res
        })
      })
      .catch((err) => {
        response.json({
          response: err
        })
      });
  }
}
