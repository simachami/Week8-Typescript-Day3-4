import { User, Item, Shop } from './ShoppingCart/shoppingCart'

const shop = new Shop()
const user = new User("Sima", 21)
let desktop:Item
let monitor:Item
let candle:Item


if(shop != null && user != null) {
    if(shop.items.length >= 3) {
        desktop = shop.items[0]
        monitor = shop.items[1]
        candle = shop.items[2]

        user.addToCart(desktop)
        user.addToCart(monitor)
        user.addToCart(candle)

        user.printCart()
        console.log(`Cart Total: ${user.cartTotal()}`)
    
        user.addToCart(monitor)
        user.addToCart(candle)
        user.addToCart(monitor)

        user.printCart()
        console.log(`Cart Total: ${user.cartTotal()}`)

        user.removeFromCart(monitor)

        user.printCart()
        console.log(`Cart Total: ${user.cartTotal()}`)

        user.addToCart(desktop)
        user.addToCart(candle)
        user.addToCart(desktop)
        user.addToCart(monitor)
        user.addToCart(candle)
        user.addToCart(desktop)

        user.printCart()
        console.log(`Cart Total: ${user.cartTotal()}`)

        user.removeQuantityFromCart(desktop, 2)

        user.printCart()
        console.log(`Cart Total: ${user.cartTotal()}`)
    }
}



// TODOs:
    // Add items from the shop.items[] into the user.cart[]
    // Print the user.cart[] using user.printCart()
    // Remove all instances of the specified item; e.g. user.removeFromCart("Monitor")
        // removeFromCart("ItemToRemove") needs to loop the user.cart[] and remove any item that has item.name == the "ItemToRemove" (or whatever is passed in)
    // Remove a certain amount of a specified item from the user.cart[]
        // user.removeQuantityFromCart("ItemName", 4) will loop through user.cart[] and try to remove 4 of item.name == "ItemName" if there are at least 4 in user.cart[]

