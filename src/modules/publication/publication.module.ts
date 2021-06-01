import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { publicationProviders } from './publication.providers';

@Module({
  providers: [PublicationService, ...publicationProviders],
  controllers: [PublicationController]
})
export class PublicationModule {}
