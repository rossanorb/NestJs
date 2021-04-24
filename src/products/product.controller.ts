import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    async index(): Promise<Product[]> {
        const products = await this.productService.findAll();        
        return products;
    }

    @Get(':id')
    async show(@Param() id: number): Promise<Product> {
        const product = await this.productService.find(id);

        if (product instanceof Product) {
            return product;
        }

        return product;

    }
}
