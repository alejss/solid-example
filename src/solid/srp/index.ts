(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class Stock {
        check(id: number) {
            console.log('Product Units: ',{ id, stock: 20 });
        }
    }

    class Cart {
        onAddToCart( productId: number ) {
            console.log(`Add product ID: ${productId}`)
        }

        onDeleteToCart(productId: number) {
            console.log(`Delete product ID: ${productId}`)
        }
    }

    class Contactability {
        notify() {
            console.log('Send email product discount');
        }
    }

    class ProductCart {
    
        getProduct( id: number ) {
            console.log('Product: ',{ id, name: 'Apple' });
        }
    
        saveProduct( product: Product ) {
            console.log('Save product in DB', product );
        }    
    }
    
    const stock = new Stock();
    const productCart = new ProductCart();
    const cart = new Cart()
    const contactability = new Contactability()

    stock.check(1);
    productCart.getProduct(10);
    productCart.saveProduct({ id: 10, name: 'Chocolate' });
    contactability.notify();
    cart.onAddToCart(10);
    cart.onDeleteToCart(13);

})();