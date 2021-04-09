import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    index() {
        return this.productService.findAll();
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
