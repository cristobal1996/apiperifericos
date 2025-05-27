import { Injectable } from '@nestjs/common';
import { CreateCarritoproductoDto } from './dto/create-carritoproducto.dto';
import { UpdateCarritoproductoDto } from './dto/update-carritoproducto.dto';

@Injectable()
export class CarritoproductoService {
  create(createCarritoproductoDto: CreateCarritoproductoDto) {
    return 'This action adds a new carritoproducto';
  }

  findAll() {
    return `This action returns all carritoproducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carritoproducto`;
  }

  update(id: number, updateCarritoproductoDto: UpdateCarritoproductoDto) {
    return `This action updates a #${id} carritoproducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} carritoproducto`;
  }
}
