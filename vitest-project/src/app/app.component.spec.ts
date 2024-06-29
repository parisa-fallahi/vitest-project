
import { it, expect, describe } from 'vitest'
import {render,screen} from '@testing-library/angular'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { AppComponent } from './app.component'
import { User } from '../entities'

// describe('AppComponent', () => {
//   it('should render h1 element', async() => {
//     await render(AppComponent, {
//       componentProperties: {title: 'parisa'},
      
//     })
//     const heading1 = screen.getByRole('heading');
//     expect(heading1).toBeInTheDocument();
//     expect(heading1).toHaveTextContent(/hello/i);
//    })
// })


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

      expect(screen.getByRole('link', { name: user.name })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: user.name })).toHaveAttribute('href', 'https://www.test.com/')
    }
     
      )
    
  })
  
})