import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../entities';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TermsAndServicesComponent } from '../terms-and-services/terms-and-services.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutingProviders } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule,FormsModule,TermsAndServicesComponent,ProductListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
// userList:User[] =[{
//   id:0,
//   name:'parisa',
//   isAdmin:false
// },{
//   id:1,
//   name:'ali',
//   isAdmin:false
// },
// {
// id:2,
// name:'reza',
// isAdmin:true
// }];

//   title : string = 'World';

//   ngOnInit():void{
//     this.getUserList();
    
//   }

//   getUserList(){
//     //return this.userList;
//     console.log(this.userList)
//   }
}
