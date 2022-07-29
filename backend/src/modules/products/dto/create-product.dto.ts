import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(100)
  @IsString()
  title: string;

  @IsNotEmpty()
  @MinLength(30)
  @MaxLength(500)
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: string;

  @IsOptional()
  @IsString()
  imageURL: string;
}
