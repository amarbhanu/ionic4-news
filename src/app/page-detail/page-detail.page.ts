import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductProvider } from './../providers/product/product';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {
  public allProducts =[];
  private data = [];
  pId = null;
  pageDataList = {};
  
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute, private productService: ProductProvider) { }

  ngOnInit() {
    this.pId = this.activatedRoute.snapshot.paramMap.get('pid');

    let pageDataList = '';
    this.productService.getProductsList()
    .subscribe((response) =>{
       this.allProducts = response;
      this.pageDataList = this.allProducts[0].find(index=>index.item_id==this.pId);       
      console.log(JSON.stringify(this.pageDataList));
     });

  }


  goBack() {
    this.navCtrl.goBack();
  }


  // function getDimensionsByFind(id){
  //   let pageDataList = '';
  //   this.productService.getProductsList()
  //   .subscribe((response) =>{
  //      this.allProducts = response;
  //     //  this.allProducts = this.allProducts[0];

  //     //  this.data[this.pId] =  this.allProducts[0];

  //     //  console.log(JSON.stringify(this.allProducts[0]['item_id']));

  //     // this.allProducts[0].find(x=>x.item_id===id);
  //     pageDataList = this.allProducts[0].find(1053);          
  //   });

  //   // return pageDataList.find(x => x.id === id);
  //   return pageDataList;
  // }
  
  // var test = getDimensionsByFilter(10);
  // console.log(test);
  
  // let testData = getDimensionsByFind(1053);
  // console.log(testData);

   



}
