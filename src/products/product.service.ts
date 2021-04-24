import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../models/product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    public async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    public async find(id: number): Promise<Product> {
        const product = await this.productRepository.findOne(id);

        if (product instanceof Product) {
            return product;
        }

        throw new NotFoundException(`Product #${id['id']} not found`);
    }    

}
