import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_service/order.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { order } from '../../_model/Order';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.css']
})
export class ViewEditComponent implements OnInit {
  public orderView :any = {

  };
  constructor(private orderservide: OrderService,
  private route: ActivatedRoute,
private routers: Router) { }

  ngOnInit() {
    this.viewById(this.route.snapshot.params.id);
  }
  viewById(id : number){
    this.orderservide.viewById(id).subscribe(
      data=>this.orderView = data,
      err=>console.error(err),
      ()=>console.log("ok")
    )
  }
  editOrder(orderView){
    this.orderservide.updateOrder(orderView).subscribe(
      data=>this.orderView=data,
      err=>console.error(err),
      ()=>console.log("sao no deo chiu")
    )
  }
  

}
