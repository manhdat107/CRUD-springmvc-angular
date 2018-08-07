import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_service/order.service';
import { order } from '../../_model/Order';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { Result } from '../../_model/Result';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  public order;
  orderForm: FormGroup;

  results:any= {};
  constructor(private odeService: OrderService, private route: Router) { }

  ngOnInit() {
    this.order = new order();
    this.orderForm = new FormGroup({
      ordername: new FormControl(Validators.required, Validators.minLength(10)),
      quantity: new FormControl(Validators.required),
      price: new FormControl(Validators.required),
      phone: new FormControl(Validators.required),
    });

  }
  createOrder(order) {
    this.odeService.addOrder(order).subscribe(
      result => {
        this.results.message = result;
        console.log(result);
        data => this.order = data;
        err => console.error(err);
      },
      () => this.route.navigate(['/listview'])
    );
  }



}


