"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../shared/shared.module');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var product_routing_1 = require('./product.routing');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require('./product-detail.component');
var product_filter_pipe_1 = require('./product-filter.pipe');
var product_service_1 = require('./product.service');
var angular2_ladda_1 = require('angular2-ladda');
var notie_service_1 = require('./notie.service');
var ng2_drag_drop_1 = require('ng2-drag-drop');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                product_routing_1.productRouting,
                angular2_ladda_1.LaddaModule,
                angular2_ladda_1.LaddaModule.forRoot({
                    style: "expand-left",
                    spinnerSize: 40,
                    spinnerLines: 12
                }),
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                ng2_drag_drop_1.Ng2DragDropModule.forRoot()
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_filter_pipe_1.ProductFilterPipe
            ],
            providers: [
                product_service_1.ProductService,
                notie_service_1.notieService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map