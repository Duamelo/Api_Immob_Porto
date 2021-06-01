import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ImmobilierService } from './immobilier.service';
import { Immobilier as ImmobilierEntity } from './immobilier.entity';
import { CreateImmobilierDto } from './dto/create-immobilier.dto';
import JwtAuthenticationGuard from '../auth/jwt.auth.guard';

@Controller('immobilier')
//@UseInterceptors(ClassSerializerInterceptor)
export class ImmobilierController {
    constructor(private readonly immobilierService: ImmobilierService) { }


    @Get()
    async findAll() {
        // get all immobilier in the db
        return await this.immobilierService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ImmobilierEntity> {
        // find the immobilier with this id
        const immob = await this.immobilierService.findOne(id);

        // if the immobilier doesn't exit in the db, throw a 404 error
        if (!immob) {
            throw new NotFoundException('This immobilier doesn\'t exist');
        }

        // if immobilier exist, return the immobilier
        return immob;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Post()
    async create(@Body() immob: CreateImmobilierDto, @Request() req): Promise<ImmobilierEntity> {
        console.log("rentre dans la fonction create");
        try{
            // create a new immobilier and return the newly created immobilier
            return await this.immobilierService.create(immob, req.user.id);
        }catch(err){
            console.log(err, req);
        }
        
        
    }

    @UseGuards(JwtAuthenticationGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() immob: CreateImmobilierDto, @Request() req): Promise<ImmobilierEntity> {
        // get the number of row affected and the updated immobilier
        const { numberOfAffectedRows, updatedImmobilier } = await this.immobilierService.update(id, immob, req.user.id);

        // if the number of row affected is zero, 
        // it means the immobilier doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Immobilier doesn\'t exist');
        }

        // return the updated immobilier
        return updatedImmobilier;
    }

    @UseGuards(JwtAuthenticationGuard)
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the immobilier with this id
        const deleted = await this.immobilierService.delete(id, req.user.id);

        // if the number of row affected is zero, 
        // then the immobilier doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Immobilier doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}