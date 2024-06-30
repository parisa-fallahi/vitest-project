import {http,HttpResponse} from 'msw'

export const handler = [

    http.get('http://localhost:3002/product',()=>{
        return HttpResponse.json([{
            name:"Iphone-13",
            price:600,
            color:"Blue",
            discountCode:"SAVE20"
          },
          {
            name:"Iphone-15",
            price:700,
            color:"Red",
            discountCode:"SAVE20"
          }])
    })
]