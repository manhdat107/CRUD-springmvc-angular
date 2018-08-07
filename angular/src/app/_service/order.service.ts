import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { order } from '../../_model/Order';
import { Result } from '../../_model/Result';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  showall() {
    return this.http.get('/api/order/all');
  }
  
  deleteById(id: number) {
    return this.http.delete('/api/order/' + id)
  }
  addOrder(order:order) {
    let body = JSON.stringify(order)
    return this.http.post<Result>('/api/order/add', body, httpOptions)
  }
  viewById(id: number){
    return this.http.get('/api/order/'+id);
  }
  updateOrder(order:order){
    let data = JSON.stringify(order)
    return this.http.post('/api/order/save',data,httpOptions)
  }
 
}
