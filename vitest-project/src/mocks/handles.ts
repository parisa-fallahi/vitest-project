import {http,HttpResponse} from 'msw'

export const handler = [
    http.get('/categories',()=>{
        return HttpResponse.json([{
            id:1, name: 'product1'
        },
    {id:2 , name: 'product2'}])
    }),
    http.get('http://localhost:3002/product',()=>{
        return HttpResponse.json([{
            id:1, name: 'product1'
        },
    {id:2 , name: 'product2'}])
    })
]