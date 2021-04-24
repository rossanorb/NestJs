import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './models/database.entities';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: process.env.TYPEORM_CONNECTION as any,
            host: process.env.TYPEORM_HOST,
            port: parseInt(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: entities,
            synchronize: true,
          }),
        ProductModule
    ],
    exports: [ProductModule]
})
export class AppModule { }
