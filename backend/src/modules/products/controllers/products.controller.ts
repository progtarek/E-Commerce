import { Product } from 'src/db/schemas/product.schema';
import { CreateProductDTO } from './../dto/create-product.dto';
import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductsService) {}

  @Post('')
  async create(@Body() _createProductDTO: CreateProductDTO): Promise<Product> {
    return this._productService.create(_createProductDTO);
  }

  @Patch(':uniqueName')
  async edit(
    @Param('uniqueName') uniqueName: string,
    @Body() _createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    return this._productService.edit(uniqueName, _createProductDTO);
  }

  @Delete(':uniqueName')
  async delete(@Param('uniqueName') uniqueName: string): Promise<void> {
    return this._productService.delete(uniqueName);
  }
}
