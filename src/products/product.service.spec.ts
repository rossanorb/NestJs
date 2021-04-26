import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepository, Repository } from 'typeorm';
import { Product, ProductRepositoryFake } from '../models/product';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('ProductService', () => {
    let service: ProductService;
    let productRepository: Repository<Product>;

    beforeEach(async () => {

        const mockRepository = {
            findOne: jest.fn().mockReturnValue({}),
            findAll: jest.fn().mockReturnValue({}),
        };        

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                { 
                    provide: getRepositoryToken(Product),
                    useFactory: () => mockRepository
                }

            ],
        }).compile();

        service = module.get<ProductService>(ProductService);
        productRepository = module.get(getRepositoryToken(Product));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('finding a Product', () => {

        it('returns not found when a product doesnt exist', async() => {
            await expect(
                service.find(1)
            ).rejects.toThrow(new NotFoundException(`Product not found`));

        });

    });


});
