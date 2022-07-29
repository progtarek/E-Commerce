import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as getSlug from 'speakingurl';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ trim: true, required: true, minlength: 10, maxlength: 100 })
  title: string;

  @Prop({ trim: true, required: true, minlength: 30, maxlength: 500 })
  description: string;

  @Prop({ trim: true, required: false })
  imageURL: string;

  @Prop({ required: true, min: 1 })
  price: number;

  @Prop({ unique: true, index: true })
  uniqueName: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.pre('save', function (next) {
  if (!this.uniqueName) {
    this.uniqueName = getSlug(this.title, {
      uric: false,
    });
  }
  next();
});
