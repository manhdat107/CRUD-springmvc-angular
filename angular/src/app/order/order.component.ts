import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_service/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {
  public orders;
  idDel: number;  
  selectedRow: Number;
  setClickedRow: Function;
  //initializing p to one
  p: number = 1;

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private orderService: OrderService
    , private router: Router) {
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  };

  ngOnInit() {
    this.showall();

  }
  showall() {
    this.orderService.showall().subscribe(
      data => { this.orders = data, console.log(data) },
      err => console.error(err),
      () => console.log("data")
    );
  }
  reload() {
    this.orderService.showall().subscribe(
      data => this.orders = data,
      err => console.error(err),
      () => console.log("data")
    );
  }
  deleteById(id: number) {
    this.orderService.deleteById(id).subscribe(
      data => {
        this.orders = data;
        this.showall()
      },
      err => console.error(err)

    )
  }

  setId(id: number) {
    this.idDel = id,
      console.log(id)
  }
}
