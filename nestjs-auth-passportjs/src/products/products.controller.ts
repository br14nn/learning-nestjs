import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from 'src/auth/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    const products = this.productsService.getAllProducts();

    return products;
  }
}
