import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductController {

    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ){}

    @Get()
    index() {
        return this.productRepo.find();
    }

    @Get(':id')
    show(@Param() id: string) {
        return this.productRepo.findOne(id);
    }

    @Post()
    store(@Body() body) {
      const product = this.productRepo.create(body);
      return this.productRepo.save(product);
    }
}
