import { Component, OnInit } from '@angular/core';
import { TransfereService } from 'src/app/services/transfert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  data = this.transfereService.getData();       
  order = [];
  total: number;


  constructor( private transfereService:TransfereService,
    private router: Router
    ) { }

  ngOnInit(): void {
     if(this.data == undefined){
      this.router.navigate(['/product-list'])
   }
   this.order = this.data.cart;
   this.total = this.data.total;
    console.log(this.order)
  }

}
