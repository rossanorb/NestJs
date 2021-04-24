import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public price: number;

    @CreateDateColumn({type: 'timestamp'})
    public created_at: Date;

    public static of(params: Partial<Product>): Product {
        const product = new Product();
    
        Object.assign(product, params);
    
        return product;
    }
}

export class ProductRepositoryFake {
    public async findAll(): Promise<void> {}
    public async findOne(): Promise<void> {}
}
