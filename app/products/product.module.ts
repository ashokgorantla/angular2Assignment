import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { productRouting } from './product.routing';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { LaddaModule } from 'angular2-ladda';
import {notieService} from './notie.service';
import { Ng2DragDropModule } from 'ng2-drag-drop';


@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    productRouting,
    LaddaModule,
    LaddaModule.forRoot({
      style: "expand-left",
      spinnerSize: 40,
      spinnerLines: 12
    }),
    Ng2Bs3ModalModule,
    Ng2DragDropModule.forRoot()
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
      notieService
  ]
})
export class ProductModule {}
