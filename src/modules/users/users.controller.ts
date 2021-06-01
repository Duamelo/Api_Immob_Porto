import { Controller, Get, Param } from '@nestjs/common';
import { ResponseError, ResponseSuccess } from '../common/dto/response.dto';
import { IResponse } from '../common/interfaces/response.interface';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:  UsersService) {}

@Get('user/:email')
async findById(@Param() params): Promise<IResponse>{
  try {
    var user =  await this.usersService.findOneByEmail(params.email);
    return new ResponseSuccess("COMMON.SUCCESS", new UserDto(user));
  } catch(error){
    return new ResponseError("COMMON.ERROR.GENERIC_ERROR", error);
  }
}

}