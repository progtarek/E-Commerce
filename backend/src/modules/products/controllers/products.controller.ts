import { Product } from 'src/db/schemas/product.schema';
import { CreateProductDTO } from './../dto/create-product.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductsService) {}

  @Post('')
  async register(
    @Body() _createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    return this._productService.create(_createProductDTO);
  }
}
