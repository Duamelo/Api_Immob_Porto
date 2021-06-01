import { Controller, Body, Post, UseGuards, Request, HttpCode, Req, Res, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { DoesUserExist } from '../common/guards/doesUserExist.guard';
import CreateUserDto from '../users/dto/create-user.dto';
import { UserDto } from '../users/dto/user.dto';
import RequestWithUser from '../users/interfaces/requestWithUser.interface';
import { AuthService } from './auth.service';
import JwtAuthenticationGuard from './jwt.auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


    @UseGuards(DoesUserExist)
    @Post('register')
    async register(@Body() user: CreateUserDto) {
        return await this.authService.create(user);
    }


    @UseGuards(JwtAuthenticationGuard)
    @Get()
    authenticate(@Req() request: RequestWithUser)
    {
        const user = request.user;
        user.password = undefined;
        return user;
    }

    
    @HttpCode(200)
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() request: RequestWithUser, @Res() response: Response)
    {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(user.id);
        response.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return response.send(user);
    }


    @UseGuards(JwtAuthenticationGuard)
    @Post('logout')
    async logOut(@Req() request: RequestWithUser, @Res() response: Response)
    {
        response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return response.sendStatus(200);

    }


}
