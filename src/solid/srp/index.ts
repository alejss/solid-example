(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductCart {

        checkStock(id: number) {
            console.log('Product Units: ',{ id, stock: 20 });
        }
    
        getProduct( id: number ) {
            console.log('Product: ',{ id, name: 'Apple' });
        }
    
        saveProduct( product: Product ) {
            console.log('Save product in DB', product );
        }
    
        onAddToCart( productId: number ) {
            console.log(`Add product ID: ${productId}`)
        }

        onDeleteToCart(productId: number) {
            console.log(`Delete product ID: ${productId}`)
        }

        notifyCustomers() {
            console.log('Send email product discount');
        }
    
    }
    


    const productCart = new ProductCart();

    productCart.checkStock(1);
    productCart.getProduct(10);
    productCart.saveProduct({ id: 10, name: 'Chocolate' });
    productCart.notifyCustomers();
    productCart.onAddToCart(10);
    productCart.onDeleteToCart(13);








})();