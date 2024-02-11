import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    // You can fetch products from an API or any other source here
    // For simplicity, I'm returning a static array of products
    return new Promise<any[]>((resolve) => {
      resolve([
        {
          "name": "Finance Professional Networking Forum - Meet and Greet 28 Jan 2024, 07:00 PM",
          "hostedBy":"Ram",
          "attending": "150",
          "dateTime": "Thu, FEB 15 - 07.00 PM",
          "mode": "IN-PERSON",
          "ticket": "600₹",
          "image": "../assets/event3.jpg"
        },
        {
            "name": "Finance Professional Networking Forum - Meet and Greet 28 Jan 2024, 07:00 PM",
            "hostedBy":"Ram",
            "attending": "150",
            "dateTime": "Thu, FEB 15 - 07.00 PM",
            "mode": "IN-PERSON",
            "ticket": "600₹",
            "image": "../assets/event3.jpg"
          },
          {
            "name": "Finance Professional Networking Forum - Meet and Greet 28 Jan 2024, 07:00 PM",
            "hostedBy":"Ram",
            "attending": "150",
            "dateTime": "Thu, FEB 15 - 07.00 PM",
            "mode": "IN-PERSON",
            "ticket": "600₹",
            "image": "../assets/event3.jpg"
          },
      ]);
    });
  }
}
