import { Injectable, Inject } from '@nestjs/common';
import { CreateImmobilierDto } from '../immobilier/dto/create-immobilier.dto';
import { User } from '../users/user.entity';
import { IMMOBILIER_REPOSITORY } from '../../core/constants';
import { Immobilier } from './immobilier.entity';


@Injectable()
export class ImmobilierService {
    constructor(
        @Inject(IMMOBILIER_REPOSITORY) private readonly immobilierRepository: typeof Immobilier
        ) { }

    async create(immobilier: CreateImmobilierDto, vendorId): Promise<Immobilier> {
        console.log("rentre dans la fonction create de immbilierService");
        return await this.immobilierRepository.create<Immobilier>({ ...immobilier, vendorId });
        
    }



    async findAll(): Promise<Immobilier[]> {
        return await this.immobilierRepository.findAll<Immobilier>({
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async findOne(id): Promise<Immobilier> {
        return await this.immobilierRepository.findOne({
        	where: { id },
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async delete(id, vendorId) {
  
            return  await this.immobilierRepository.destroy({ where: { id, vendorId } });   
    }

    async update(id, data, vendorId) {
        const [numberOfAffectedRows, [updatedImmobilier]] = await this.immobilierRepository.update({ ...data }, { where: { id, vendorId }, returning: true });

            return { numberOfAffectedRows, updatedImmobilier };
  
    }
}