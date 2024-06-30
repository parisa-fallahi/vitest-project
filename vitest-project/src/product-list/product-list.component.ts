import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule,FormsModule],  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product: any[] = [];
  inputValue:any =''
  private http = inject(HttpClient);

  amount : number = 0
  ngOnInit() {
    this.getCoupons()
    this.getUsers().subscribe(data => {
      this.product = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }


   getCoupons() {
    return [
      { code: "SAVE20NOW", discount: 0.2 },
      { code: "DISCOUNT50OFF", discount: 0.5 },
    ];
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3002/product');
     
  }



   calculatePrice(inputValue:any):any{
    let price:any = this.product.map(item => item.price)
   
    if (typeof inputValue !== "string") {
      return "Invalid discount code";
    }
  
    let discount = 0;
    if (inputValue === "SAVE10") {
      discount = 0.1;
    } else if (inputValue === "SAVE20") {
      discount = 0.2;
    }
  
  
    if(inputValue === "SAVE10" || inputValue === "SAVE20"){
      let result:any = price - (price * discount)
      alert(result)
    }
    else{
      alert(price)
    }
  
  }
}
