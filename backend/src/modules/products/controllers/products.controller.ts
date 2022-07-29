import { PaginatedResponse } from './../dto/paginated-response.model';
import { Product } from 'src/db/schemas/product.schema';
import { CreateProductDTO } from './../dto/create-product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { PaginationParamsDTO } from '../dto/paginate.dto';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductsService) {}

  @Get('')
  @UsePipes(new ValidationPipe({ transform: true }))
  async find(
    @Query() queryParams: PaginationParamsDTO,
  ): Promise<PaginatedResponse<Product>> {
    return this._productService.find(queryParams);
  }

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
