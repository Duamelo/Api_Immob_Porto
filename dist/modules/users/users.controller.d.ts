import { IResponse } from '../common/interfaces/response.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findById(params: any): Promise<IResponse>;
}
