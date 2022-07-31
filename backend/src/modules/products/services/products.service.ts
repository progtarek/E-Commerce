import { PaginatedResponse } from './../dto/paginated-response.model';
import { PaginationParamsDTO } from './../dto/paginate.dto';
import { CreateProductDTO } from './../dto/create-product.dto';
import { Product } from './../../../db/schemas/product.schema';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private _productModel: Model<Product>,
  ) {}

  private escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  private processSearchQuery(searchString, searchableFields?) {
    // case insensitive substring search
    const searchRegex = {
      $regex: `.*${this.escapeRegExp(searchString)}.*`,
      $options: 'i',
    };
    return { $or: searchableFields.map((field) => ({ [field]: searchRegex })) };
  }

  async find(
    queryParams: PaginationParamsDTO,
  ): Promise<PaginatedResponse<Product>> {
    const q = queryParams.q
      ? this.processSearchQuery(queryParams.q, ['title', 'description'])
      : null;
    const query = this._productModel
      .find({ ...(q && { ...q }) })
      .select('title description price uniqueName imageURL -_id')
      .sort({ _id: 1 })
      .skip(queryParams.skip);

    if (queryParams.limit) {
      query.limit(queryParams.limit);
    }
    const docs = await query;
    const total = await this._productModel.count();

    return { docs, total, skip: queryParams.skip };
  }

  async findProduct(uniqueName: string): Promise<Product> {
    const foundProduct = await this._productModel
      .findOne({ uniqueName })
      .select('title description price uniqueName imageURL -_id');
    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    } else {
      return foundProduct;
    }
  }

  async create(createProductDto: CreateProductDTO): Promise<Product> {
    const existed = await this._productModel.findOne({
      title: createProductDto.title,
    });
    if (existed) {
      throw new ConflictException('Product already exist');
    } else {
      const createdProduct = new this._productModel(createProductDto);
      return createdProduct.save();
    }
  }

  async edit(
    uniqueName: string,
    createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const foundProduct = await this._productModel.findOne({ uniqueName });
    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    } else {
      const existed = await this._productModel.findOne({
        title: createProductDto.title,
        uniqueName: { $ne: uniqueName },
      });
      if (existed) {
        throw new ConflictException('Product already exist');
      } else {
        return await this._productModel.findOneAndUpdate(
          { uniqueName },
          createProductDto,
          { new: true },
        );
      }
    }
  }

  async delete(uniqueName: string): Promise<void> {
    const foundProduct = await this._productModel.findOne({ uniqueName });
    if (!foundProduct) {
      throw new NotFoundException('Product not found');
    } else {
      await foundProduct.remove();
    }
  }
}
