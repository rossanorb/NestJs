import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './../../models/product';
import { Repository } from 'typeorm';

export interface ICreateProductData {
    name:string,
    price:number
}

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
        const product =  await this.productRepository.findOne(id);
        
        if(!product) {
            throw new NotFoundException('No product found.');
        }

        return product;
    }

    public async create(ICreateProductData: ICreateProductData): Promise<Product> {
        const product = this.productRepository.create(ICreateProductData);
        return this.productRepository.save(product);
    }

}
