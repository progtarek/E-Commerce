import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ trim: true, required: true, minlength: 10, maxlength: 100 })
  title: string;

  @Prop({ trim: true, required: true, minlength: 50, maxlength: 300 })
  description: string;

  @Prop({ trim: true, required: false })
  image: string;

  @Prop({ required: true, min: 1 })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
