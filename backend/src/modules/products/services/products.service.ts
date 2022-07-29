import { CreateProductDTO } from './../dto/create-product.dto';
import { Product } from './../../../db/schemas/product.schema';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private _productModel: Model<Product>,
  ) {}

  async create(createCatDto: CreateProductDTO): Promise<Product> {
    const existed = await this._productModel.findOne({
      title: createCatDto.title,
    });
    if (existed) {
      throw new ConflictException('Product already exist');
    } else {
      const createdCat = new this._productModel(createCatDto);
      return createdCat.save();
    }
  }
}
