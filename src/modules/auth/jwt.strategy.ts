import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userService: UsersService,
       // private readonly configService: ConfigService
        ) {
        super({
             jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                 return request?.cookies?.Authentication;
             }]),
             ignoreExpiration: false,
             secretOrKey: process.env.JWTKEY,
        });
    }

    async validate(payload: TokenPayload) {
        // check if user in the token actually exist
        const user = await this.userService.findOneById(payload.userId);
        if (!user) {
            throw new UnauthorizedException('You are not authorized to perform the operation');
        }
        return user;
    }
}
