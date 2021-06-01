import { CreateImmobilierDto } from '../immobilier/dto/create-immobilier.dto';
import { Immobilier } from './immobilier.entity';
export declare class ImmobilierService {
    private readonly immobilierRepository;
    constructor(immobilierRepository: typeof Immobilier);
    create(immobilier: CreateImmobilierDto, vendorId: any): Promise<Immobilier>;
    findAll(): Promise<Immobilier[]>;
    findOne(id: any): Promise<Immobilier>;
    delete(id: any, vendorId: any): Promise<number>;
    update(id: any, data: any, vendorId: any): Promise<{
        numberOfAffectedRows: number;
        updatedImmobilier: Immobilier;
    }>;
}
