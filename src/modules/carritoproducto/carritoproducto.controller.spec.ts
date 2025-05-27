import { Test, TestingModule } from '@nestjs/testing';
import { CarritoproductoController } from './carritoproducto.controller';
import { CarritoproductoService } from './carritoproducto.service';

describe('CarritoproductoController', () => {
  let controller: CarritoproductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarritoproductoController],
      providers: [CarritoproductoService],
    }).compile();

    controller = module.get<CarritoproductoController>(CarritoproductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
