const app = Vue.createApp({
    data() {
        return {
            // product: 'Shoes',
            // brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: false,
            // inventory: 100,
            // details: ['50% cotton', '30% wool', '20% polyester'],
            // variants: [
            //     { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' ,quantity: 50 , onSale: true},
            //     { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' ,quantity: 0 , onSale: false}
            // ],
            // selectedVariant:0,
            cart: [],
            premium: true

        }
    },
    methods: {
        updateCart(id) {
            if (id==2234) {
                this.cart[0] += 1;
            } else 
                this.cart[1] += 1;
            },
            removeFromCart() {
                this.cart.splice(0,1,0)
                this.cart.splice(1,1,0)
        // },
        // updateImage(variantImage) {
        //     this.image = variantImage
        // },
        // updateVariant(index){
        //     this.selectedVariant = index;
        }
    },
    // computed: {
    //     title(){
    //         return this.brand + ' ' + this.product
    //     },
    //     image(){
    //         return this.variants[this.selectedVariant].image
    //     },
    //     inStock(){
    //         return this.variants[this.selectedVariant].quantity
    //     },
    //     onSale(){
    //         if(this.variants[this.selectedVariant].onSale){
    //             return this.brand + ' ' + this.product + ' is on sale'
    //         }
    //         else{
    //             return this.brand + ' ' + this.product + ' is not sale'

    //         }

    //     }
    // }
})