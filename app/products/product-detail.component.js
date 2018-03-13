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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var notie_service_1 = require('./notie.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, _productService, _notieService) {
        this.route = route;
        this.router = router;
        this._productService = _productService;
        this._notieService = _notieService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id).subscribe(function (product) { _this.product = product; _this.productToBeEdited = Object.assign({}, _this.product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    ProductDetailComponent.prototype.onEdit = function () {
        this.updateModal.open();
    };
    ProductDetailComponent.prototype.closeModal = function () {
        this.updateModal.close();
        this.productToBeEdited = Object.assign({}, this.product);
    };
    ProductDetailComponent.prototype.updateProduct = function () {
        var _this = this;
        this.isLoading = true;
        this._productService.updateProduct(this.productToBeEdited)
            .subscribe(function (response) {
            response;
            _this.isLoading = false;
            _this.updateModal.close();
            _this._notieService.alert({ type: 1, text: 'Product has been updated' });
        });
    };
    ProductDetailComponent.prototype.onDelete = function () {
        var _this = this;
        this._notieService.confirm({
            text: 'Are you sure you want to delete this product ?',
            submitCallback: function () {
                _this._productService.deleteProduct(_this.productToBeEdited.productId)
                    .subscribe(function (response) { response; _this.onBack(); });
            }
        });
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], ProductDetailComponent.prototype, "updateModal", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, notie_service_1.notieService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map