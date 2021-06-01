import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { Publication as PublicationEntity } from './publication.entity';
import JwtAuthenticationGuard from '../auth/jwt.auth.guard';
import CreatePublicationDto from './dto/create-publication.dto';



@Controller('publication')
export class PublicationController {

    constructor(private readonly publicationService: PublicationService) { }

    @Get()
    async findAll() {
        // get all publication in the db
        return await this.publicationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PublicationEntity> {
        // find the publication with this id
        const pub = await this.publicationService.findOne(id);

        // if the publication doesn't exit in the db, throw a 404 error
        if (!pub) {
            throw new NotFoundException('This publication doesn\'t exist');
        }

        // if immobilier exist, return the immobilier
        return pub;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    async create(@Body() pub: CreatePublicationDto, @Request() req): Promise<PublicationEntity> {
        console.log("rentre dans la fonction create");
        try{
            // create a new publication and return the newly created immobilier
            return await this.publicationService.create(pub, req.user.id);
        }catch(err){
            console.log(err, req);
        }
        
        
    }

    @UseGuards(JwtAuthenticationGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() pub: CreatePublicationDto, @Request() req): Promise<PublicationEntity> {
        // get the number of row affected and the updated publication
        const { numberOfAffectedRows, updatedPublication } = await this.publicationService.update(id, pub, req.user.id);

        // if the number of row affected is zero, 
        // it means the publication doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Publication doesn\'t exist');
        }

        // return the updated publication
        return updatedPublication;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the publication with this id
        const deleted = await this.publicationService.delete(id, req.user.id);

        // if the number of row affected is zero, 
        // then the publication doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Publication doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }

}
