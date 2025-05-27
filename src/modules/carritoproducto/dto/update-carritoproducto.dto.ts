import { PartialType } from '@nestjs/mapped-types';
import { CreateCarritoproductoDto } from './create-carritoproducto.dto';

export class UpdateCarritoproductoDto extends PartialType(CreateCarritoproductoDto) {}
