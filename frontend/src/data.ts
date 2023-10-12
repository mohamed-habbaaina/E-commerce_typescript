import { Product } from "./types/Product";

export const sampleProducts:Product[] = [
    {
        name: 'Nike slim shirt',
        slug: 'nike-slim-shirt',
        category: 'Shirts',
        image: '../images/p1.jpeg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality shirt'
    },
    {
        name: 'Adidas fit shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '../images/p2.webp',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product'
    },
    {
        name: 'Lacost Free Pants',
        slug: 'lacost-free-pants',
        category: 'Pants',
        image: '../images/P3.jpeg',
        price: 220,
        countInStock: 0,
        brand: 'Lacost',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product'
    },
    {
        name: 'Nike slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '../images/p4.webp',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product'
    }
]