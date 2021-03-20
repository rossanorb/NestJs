import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    index() {
        return this.productService.findAll();
    }

    @Get(':id')
    show(@Param() id: number) {
        return this.productService.find(id);
    }

}
