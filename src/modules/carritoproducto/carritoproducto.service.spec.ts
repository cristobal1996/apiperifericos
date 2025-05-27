import { Test, TestingModule } from '@nestjs/testing';
import { CarritoproductoService } from './carritoproducto.service';

describe('CarritoproductoService', () => {
  let service: CarritoproductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarritoproductoService],
    }).compile();

    service = module.get<CarritoproductoService>(CarritoproductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
