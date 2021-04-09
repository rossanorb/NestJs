import { Test } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from '../../services/product/product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product, ProductRepositoryFake } from './../../models/product';
import { Repository } from 'typeorm';

describe('ProductController', () => {
    let productController: ProductController;
    let productService: ProductService;


    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [
                ProductService,
                {
                    provide: getRepositoryToken(Product),
                    useClass: Repository,
                }
            ],
        }).compile();

        productService = moduleRef.get<ProductService>(ProductService);
        productController = moduleRef.get<ProductController>(ProductController);

    });

    describe('find product', () => {
        it('should return one product', async () => {
            const result: any = {
                id: 1,
                name: "NVIDIA GeForce GTX 1050 Ti",
                price: 1250.00,
                created_at: "2021-04-03T03:48:44.000Z"
            };

            jest.spyOn(productService, 'find').mockImplementation(() => result);

            expect(await productController.show(1)).toBe(result);

        });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

})