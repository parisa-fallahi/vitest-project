import { findByText, render,screen } from '@testing-library/angular'
import '@testing-library/jest-dom/vitest';
import{describe,expect,it} from  'vitest'
import { ProductListComponent } from './product-list.component'
import { server } from '../mocks/server'
import {http, HttpResponse} from 'msw'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';



describe('productList',()=>{

  // let component: ProductListComponent;
  // let fixture: ComponentFixture<ProductListComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ProductListComponent],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  
  it('should render the list of products', async() => {
    server.use(http.get('/products',()=>{HttpResponse.json([{
      name:"Iphone-13",
      price:600,
      color:"Blue",
      discountCode:"SAVE20"
    },])}))
    await render(ProductListComponent);
    const items =  await screen.findAllByRole('paragraph');
    expect(items.length).toBeGreaterThan(0);
    
  })
  it('should render no products if the products array is empty', async() => {
    server.use(http.get('/products',()=>{HttpResponse.json([])}))
    render(ProductListComponent);
    const message = await screen.findByText(/not found/i);
    expect(message).toBeInTheDocument()
    
    
  })
  // it('should return an array of coupons', async() => {
  //   await render(ProductListComponent);
  //   const result = getCoupons();
  //   expect(result.length).toBeGreaterThan(0)
    
    
  // })
})