import { Module } from '@nestjs/common';
import { Product } from './../models/product';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ProductController } from './../controllers/product/product.controller';
import { ProductService } from './../services/product/product.service';


@Module({
    imports:[
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: process.env.TYPEORM_CONNECTION as any,
          host: process.env.TYPEORM_HOST,
          port: parseInt(process.env.TYPEORM_PORT),
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          entities: [Product]
        }),
        TypeOrmModule.forFeature([Product]),        
    ],
    providers: [ProductService],
    controllers: [ProductController],
    exports: []
})
export class ProductModule {}
