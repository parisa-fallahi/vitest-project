// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have the 'vitest-project' title`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('vitest-project');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, vitest-project');
//   });
// });
import { it, expect, describe } from 'vitest'
import {render,screen} from '@testing-library/angular'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { AppComponent } from './app.component'
import { i } from 'vitest/dist/reporters-yx5ZTtEV.js'
import { User } from '../entities'

describe('AppComponent', () => {
  it('should render h1 element', async() => {
    await render(AppComponent, {
      componentProperties: {title: 'parisa'},
      
    })
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello/i);
   })
})


describe('UserList', () => {
  it('should rerun no user found if giver empty array', async() => {
    await render(AppComponent,{
      componentProperties:{userList:[]},
    })
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
    
  }),
  it('should return array of users if the array is not empty', async() => {
    const users: User[]=[{
      id:11, name:'test-name', isAdmin:false
    },
    {
      id:12, name:'maryam', isAdmin:false
    }]
    await render(AppComponent,{
      componentProperties:{userList:users},
    })

    users.forEach(user => {
      //const link = screen.getByRole('link', {name:user.name});
      // const link =screen.getAllByRole('listitem').find(listitem => listitem.textContent === user.name)
      // expect(link).toBeInTheDocument();
      expect(screen.getByRole('link', { name: user.name })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: user.name })).toHaveAttribute('href', 'https://www.test.com/')
    }
     
      )
    
  })
  
})