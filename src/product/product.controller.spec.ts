import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './../models/product';
import { Repository } from 'typeorm';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
            provide: getRepositoryToken(Product),
            useClass: Repository,
        }
      ]
    }).compile();

    productService = module.get<ProductService>(ProductService);
    controller = module.get<ProductController>(ProductController);
    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
