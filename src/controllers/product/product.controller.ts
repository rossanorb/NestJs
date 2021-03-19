import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    index() {
        return this.productService.find();
    }

}
