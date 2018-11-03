import { Component, OnInit } from '@angular/core';
import { Shoe } from '../classes/shoes';
import { EmitService } from '../service/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart_list: Shoe [] = [];
  sum = 0;

  constructor(
    public emitService: EmitService
  ) { }

  ngOnInit() {
    this.calculateSum();
  }

  // 添加商品数量
  addIntoCart(selected_shoes: Shoe) {
      this.emitService.shoesArray.forEach((item: Shoe) => {
        if (item.id === selected_shoes.id) {
          item.num ++ ;
        }
      });
      this.calculateSum();
  }

  // 减少商品数量，减少到0时，将商品移出购物车
  removeFromCart(selected_shoes: Shoe) {
    this.emitService.shoesArray.forEach((item: Shoe, index) => {
      if (item.id === selected_shoes.id) {
        item.num -- ;
      }
      if (item.num === 0) {
        this.emitService.shoesArray.splice(index, 1);
      }
    });
    this.calculateSum();
  }

  // 计算总价格，数量改变后必须调用
  calculateSum() {
    this.sum = 0;
    this.emitService.shoesArray.forEach((item: Shoe) => {
      this.sum = this.sum + parseInt(item.price, 0) * item.num;
    });
    console.log(this.sum);
  }

  stringToInt(price: string) {
    return parseInt(price, 0);
  }
}
