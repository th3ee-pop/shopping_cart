import { Component, OnInit } from '@angular/core';
import { SHOES } from './shoes_data/shoes_data';
import { Shoe } from '../classes/shoes';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { EmitService } from '../service/message.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes_list = SHOES;
  shoes_cart: Shoe[] = [];

  constructor(
    public snackBar: MatSnackBar,
    public router: Router,
    public emitService: EmitService
  ) {}

  ngOnInit() {
  }

  // 添加商品
  addIntoCart(selected_shoes: Shoe) {
   // this.sendShoesToCart(selected_shoes);
    this.openSnackBar(`${selected_shoes.name} was added into the cart`, 'cancel');
    const checkIfExisted = this.emitService.shoesArray.filter((item: Shoe) => {
      return item.id === selected_shoes.id;
    });
    if (checkIfExisted.length === 0) {
      selected_shoes.num ++;
     this.emitService.shoesArray.push(selected_shoes);
    } else {
      this.emitService.shoesArray.forEach((item: Shoe) => {
        if (item.id === selected_shoes.id) {
          item.num ++ ;
        }
      });
    }
  }

  // 添加成功提示
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }

  // 跳转至购物车页面
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
