import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './models/database.entities';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './products/product.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env', '.env.development', '.env.prod']
        }),
        TypeOrmModule.forRoot({
            type: process.env.TYPEORM_CONNECTION as any,
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: entities,
            synchronize: false,
          }),
        ProductModule
    ],
    exports: [ProductModule]
})
export class AppModule { }
