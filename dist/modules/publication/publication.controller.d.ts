import { PublicationService } from './publication.service';
import { Publication as PublicationEntity } from './publication.entity';
import CreatePublicationDto from './dto/create-publication.dto';
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
    findAll(): Promise<PublicationEntity[]>;
    findOne(id: number): Promise<PublicationEntity>;
    create(pub: CreatePublicationDto, req: any): Promise<PublicationEntity>;
    update(id: number, pub: CreatePublicationDto, req: any): Promise<PublicationEntity>;
    remove(id: number, req: any): Promise<string>;
}
