import { Module } from '@nestjs/common';
import { ImmobilierService } from './immobilier.service';
import { ImmobilierController } from './immobilier.controller';
import { immobilierProviders } from './immobilier.providers';


@Module({
  imports: [],
  providers: [ImmobilierService, ...immobilierProviders],
  controllers: [ImmobilierController]
})
export class ImmobilierModule {}
