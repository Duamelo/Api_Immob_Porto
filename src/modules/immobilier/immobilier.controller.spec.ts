import { Test, TestingModule } from '@nestjs/testing';
import { ImmobilierController } from './immobilier.controller';

describe('ImmobilierController', () => {
  let controller: ImmobilierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmobilierController],
    }).compile();

    controller = module.get<ImmobilierController>(ImmobilierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
