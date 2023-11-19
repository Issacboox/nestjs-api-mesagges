import { IsString } from 'class-validator';

export class CreateMesageDto {
  @IsString()
  content: string;
}
