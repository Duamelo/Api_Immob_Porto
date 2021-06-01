import CreatePublicationDto from './dto/create-publication.dto';
import { Publication } from './publication.entity';
export declare class PublicationService {
    private readonly publicationRepository;
    constructor(publicationRepository: typeof Publication);
    create(publication: CreatePublicationDto, clientId: any): Promise<Publication>;
    findAll(): Promise<Publication[]>;
    findOne(id: any): Promise<Publication>;
    delete(id: any, clientId: any): Promise<number>;
    update(id: any, data: any, clientId: any): Promise<{
        numberOfAffectedRows: number;
        updatedPublication: Publication;
    }>;
}
