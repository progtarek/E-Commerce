import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductsService) {}

  @Get()
  findAll() {
    return this._productService.findAll();
  }
}
