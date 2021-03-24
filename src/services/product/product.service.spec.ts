import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { Repository } from 'typeorm';
import { Product, ProductRepositoryFake } from './../../models/product';

describe('ProductService', () => {
    let productService: ProductService;
    let producttRepository: Repository<Product>;

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
        producttRepository = module.get(getRepositoryToken(Product));
    });

    describe('finding a product', () => {

        it('throws an error when a product doesnt exist', async () => {
            const productRepositoryFindOneSpy = jest.spyOn(producttRepository, 'findOne').mockResolvedValue(null);
            expect.assertions(3);

            try {
                await productService.find(999999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toBe('No product found.');
            }

            expect(productRepositoryFindOneSpy).toHaveBeenCalledWith(999999);            
        });

        it('returns the found product', async () => {
            const ID = 4;
            const PRICE = 999.99;

            const existingProduct = Product.of({
                id:ID,
                name:'Product Teste',
                price: PRICE,
                created_at: new Date(),
            });

            const productRepositoryFindOneSpy = jest.spyOn(producttRepository, 'findOne').mockResolvedValue(existingProduct);
            const result = await productService.find(ID);

            expect(result).toBe(existingProduct);
            expect(productRepositoryFindOneSpy).toHaveBeenCalledWith(ID);

        })

    })


});
