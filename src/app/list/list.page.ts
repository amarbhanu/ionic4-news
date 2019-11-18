import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { Router } from '@angular/router';

import { ProductProvider } from './../providers/product/product';
import { PageDetailPage } from '../page-detail/page-detail.page';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];
    public allProducts =[];
    constructor( private router: Router,public navCtrl: NavController, private productService: ProductProvider) {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
        this.getProductData();
    }

    getProductData(){
        this.productService.getProductsList()
        .subscribe((response) =>{
           this.allProducts = response;
           this.allProducts = this.allProducts[0];
           console.log(this.allProducts);
        });
    }

    goToPageDetails(id) {
        this.router.navigate(['/page-detail', id]);
    }


//   goToProductDetailPage(product){
//     this.navCtrl.push(PageDetailPage, {
//       productDetails: product

//     })
//   }

    ngOnInit() {
    }
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
