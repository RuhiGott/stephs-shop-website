export function getProduct(productId) {
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    return matchingProduct;
  }
  
  export const products = [
    
      {
        "id": "0",
        "image": "images/products/item1.png",
        "store": "Urban Outfitters",
        "price": 10
      },
    
      {
        "id": "1",
        "image": "images/products/item2.png",
        "store": "H&M",
        "price": 15
      },
      
      {
        "id": "2",
        "image": "images/products/item3.png",
        "store": "Brandy Melville",
        "price": 20
      },
    
      {
        "id": "3",
        "image": "images/products/item4.png",
        "store": "ZARA",
        "price": 20
      },
    
      {
        "id": "4",
        "image": "images/products/item5.png",
        "store": "Mystery Tee",
        "price": 10
      },
    
      {
        "id": "5",
        "image": "images/products/item6.png",
        "store": "Mystery Tee",
        "price": 10
      },
    
      {
        "id": "6",
        "image": "images/products/item7.png",
        "store": "Brandy Melville",
        "price": 15
      },
    
      {
        "id": "7",
        "image": "images/products/item8.png",
        "store": "Brandy Melville",
        "price": 15
      }
  ];