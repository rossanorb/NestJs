import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepository, Repository } from 'typeorm';
import { Product } from './../models/product';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductService', () => {
    let service: ProductService;
    let productRepository: Repository<Product>;

    beforeEach(async () => {

        const mockRepository = jest.fn(() => ([
            {
                "id": 1,
                "name": "NVIDIA GeForce GTX 1050 Ti",
                "price": 152929,
                "created_at": "2021-04-18T15:41:25.771Z"
            },
            {
                "id": 2,
                "name": "MSI NVIDIA GeForce GTX 1650",
                "price": 199988,
                "created_at": "2021-04-18T15:41:43.916Z"
            }
        ]));

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
