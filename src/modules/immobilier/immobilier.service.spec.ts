import { Test, TestingModule } from '@nestjs/testing';
import { ImmobilierService } from './immobilier.service';

describe('ImmobilierService', () => {
  let service: ImmobilierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmobilierService],
    }).compile();

    service = module.get<ImmobilierService>(ImmobilierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
