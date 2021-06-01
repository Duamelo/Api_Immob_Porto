import { Injectable, Inject } from '@nestjs/common';
import { PUBLICATION_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';
import CreatePublicationDto from './dto/create-publication.dto';
import { Publication } from './publication.entity';

@Injectable()
export class PublicationService {

    constructor(@Inject(PUBLICATION_REPOSITORY) private readonly publicationRepository: typeof Publication) { }

    async create(publication: CreatePublicationDto, clientId): Promise<Publication> {
        console.log("rentre dans la fonction create de publicationService");
        return await this.publicationRepository.create<Publication>({ ...publication, clientId });
    }

    async findAll(): Promise<Publication[]> {
        return await this.publicationRepository.findAll<Publication>({
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async findOne(id): Promise<Publication> {
        return await this.publicationRepository.findOne({
        	where: { id },
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async delete(id, clientId) {
        return await this.publicationRepository.destroy({ where: { id, clientId } });
    }

    async update(id, data, clientId) {
        const [numberOfAffectedRows, [updatedPublication]] = await this.publicationRepository.update({ ...data }, { where: { id, clientId }, returning: true });

        return { numberOfAffectedRows, updatedPublication };
    }


}
