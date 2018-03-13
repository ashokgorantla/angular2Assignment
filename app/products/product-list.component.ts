import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[];

    droppedItems:any = [];
    constructor(private _productService: ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
           this._productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
    }
    onItemDrop(event:any) : void {
       let idx = this.products.findIndex((product)=>{
            return product.productId === event.dragData.productId;
        });
        this.products.splice(idx, 1);
        this.droppedItems.push(event.dragData);
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
