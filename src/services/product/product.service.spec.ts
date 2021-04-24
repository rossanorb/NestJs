import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { Repository, SimpleConsoleLogger } from 'typeorm';
import { Product, ProductRepositoryFake } from './../../models/product';

describe('ProductService', () => {
    let productService: ProductService;
    let productRepository: Repository<Product>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                {
                    provide: getRepositoryToken(Product),
                    useClass: ProductRepositoryFake,
                }
            ],
        }).compile();

        productService = module.get(ProductService);
        productRepository = module.get(getRepositoryToken(Product));
    });

    describe('find product', () => {

        it('throws an error when a product doesnt exist', async () => {

            const existingProduct = Product.of(
                {
                    id: 1,
                    name: "NVIDIA GeForce GTX 1050 Ti",
                    price: 1250.00
                }
            )

            const productRepositoryFindOneSpy = jest
                .spyOn(productRepository, 'findOne')
                .mockResolvedValue(existingProduct);

            const result = await productService.find(1);

            expect(result).toBe(existingProduct);


        });

    })


});
