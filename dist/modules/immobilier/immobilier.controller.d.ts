import { ImmobilierService } from './immobilier.service';
import { Immobilier as ImmobilierEntity } from './immobilier.entity';
import { CreateImmobilierDto } from './dto/create-immobilier.dto';
export declare class ImmobilierController {
    private readonly immobilierService;
    constructor(immobilierService: ImmobilierService);
    findAll(): Promise<ImmobilierEntity[]>;
    findOne(id: number): Promise<ImmobilierEntity>;
    create(immob: CreateImmobilierDto, req: any): Promise<ImmobilierEntity>;
    update(id: number, immob: CreateImmobilierDto, req: any): Promise<ImmobilierEntity>;
    remove(id: number, req: any): Promise<string>;
}
