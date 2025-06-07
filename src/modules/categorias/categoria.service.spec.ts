import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from './categorias.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

describe('CategoriaService', () => {
  let service: CategoriaService;
  let repo: Repository<Categoria>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        {
          provide: getRepositoryToken(Categoria),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
    repo = module.get<Repository<Categoria>>(getRepositoryToken(Categoria));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
