import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepository, Repository } from 'typeorm';
import { Product } from './../models/product';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductService', () => {
    let service: ProductService;
    let productRepository: Repository<Product>;

    beforeEach(async () => {

        const mockRepository = jest.fn();

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                {
                    provide: getRepositoryToken(Product),
                    useClass: mockRepository
                }
            ],
        }).compile();

        productRepository = module.get(getRepositoryToken(Product));
        service = module.get<ProductService>(ProductService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
