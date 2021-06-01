import { Response } from 'express';
import CreateUserDto from '../users/dto/create-user.dto';
import RequestWithUser from '../users/interfaces/requestWithUser.interface';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: CreateUserDto): Promise<{
        user: any;
        token: string;
    }>;
    authenticate(request: RequestWithUser): import("../users/user.entity").User;
    login(request: RequestWithUser, response: Response): Promise<Response<any>>;
    logOut(request: RequestWithUser, response: Response): Promise<Response<any>>;
}
