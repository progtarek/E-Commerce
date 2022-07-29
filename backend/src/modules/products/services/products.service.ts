import { Product, ProductSchema } from './../../../db/schemas/product.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private _productModel: Model<Product>,
  ) {}

  // async create(createCatDto: CreateCatDto): Promise<Cat> {
  //   const createdCat = new this._productModel(createCatDto);
  //   return createdCat.save();
  // }

  async findAll(): Promise<Product[]> {
    return this._productModel.find();
  }
}
