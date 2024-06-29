import { findByText, render,screen } from '@testing-library/angular'
import '@testing-library/jest-dom/vitest';
import{describe,expect,it} from  'vitest'
import { ProductListComponent } from './product-list.component'
import { server } from '../mocks/server'
import {http, HttpResponse} from 'msw'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
  
  // it('should render the list of products', async() => {
  //   await render(ProductListComponent);
  //   const items =  await screen.findAllByRole('listitem');
  //   expect(items.length).toBeGreaterThan(0);
    
  // })
  it('should render no products if the products array is empty', async() => {
    server.use(http.get('/products',()=>{HttpResponse.json([])}))
    render(ProductListComponent);
    const message = await screen.findByText(/not found/i);
    expect(message).toBeInTheDocument()
    
    
  })
  // it('should return an array of coupons', async() => {
  //   await render(ProductListComponent);
  //   const result =  component.getCoupons();
  //   expect(result.length).toBeGreaterThan(0)
    
    
  // })
})