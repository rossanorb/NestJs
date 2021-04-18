import { Module } from '@nestjs/common';
import { Product } from './../models/product';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './../product/product.controller';
import { ProductService } from './../product/product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductService],
    controllers: [ProductController]
})
export class ProductModule {}
