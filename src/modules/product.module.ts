import { Module } from '@nestjs/common';
import { Product } from './../models/product';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProductController } from './../controllers/product/product.controller';
import { ProductService } from './../services/product/product.service';


@Module({
    imports: [TypeOrmModule.forFeature([Product])],    
    providers: [ProductService],
    controllers: [ProductController]    
})
export class ProductModule {}
