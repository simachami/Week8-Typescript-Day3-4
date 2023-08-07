
class Item {
    //private _id: string = uuidv4()
    private _id: string = ""
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    private _name: string = ""
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    private _price: number = 0
    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
    }
    private _description: string = ""
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }

    constructor(name:string, price:number, description:string)
    {
        this.name = name
        this.price = price
        this.description = description
    }
}

class Shop {
    private _items: Item[] = []
    public get items(): Item[] {
        return this._items
    }
    public set items(value: Item[]) {
        this._items = value
    }

    constructor() {
        this.items.push(new Item("Computer", 1500, "Desktop Gaming Computer"))
        this.items.push(new Item("Monitor", 175, "Gaming Monitor"))
        this.items.push(new Item("Candle", 10, "Tea Tree Scented Candle"))
    }
    
}

class User {
    //private _id: string = uuidv4()
    private _id: string = ""
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    private _name: string = ""
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    private _age: number = 0
    public get age(): number {
        return this._age
    }
    public set age(value: number) {
        this._age = value
    }
    private cart:Item[]

    constructor(name:string, age:number)
    {
        this.name = name
        this.age = age
        this.cart = []
    }

    addToCart(item:Item) {
        this.cart.push(item)
    }

    removeFromCart(item:Item) {
        /* TODO
        needs to loop the user.cart[] and remove any item that 
        has item.name == the "ItemToRemove" (or whatever is passed in)
        */
       const itemsResultArr = this.cart.filter(function(x) {
            return x.name != item.name
       });

       if (itemsResultArr != null) {
            this.cart = itemsResultArr
            console.log(`Removed all occurences of ${item.name} from ${this.name}'s cart`)
       }
       else {
            console.log(`Could not find any ${item.name} to remove`)
       }
    }

    removeQuantityFromCart(item:Item, quantity:number) {
        /* TODO
        user.removeQuantityFromCart("ItemName", 4) will loop through user.cart[] 
        and try to remove 4 of item.name == "ItemName" if there are at least 4 in user.cart[]
        */

        const itemQuantityInCart = this.cart.filter(function(x) {
            return x.name == item.name
        }).length;

        if(itemQuantityInCart >= quantity) {
            let quantityCounter = quantity
            for(let currItem of this.cart) {
                if(quantityCounter > 0) {
                    if(currItem.name == item.name) {
                        this.cart.forEach( (item, index) => {
                            if(item === currItem && quantityCounter > 0) {
                                this.cart.splice(index,1)
                                quantityCounter--
                            }
                          });
                    }
                }
            }
        }
    }

    cartTotal() {
        let total:number = 0
        for (const item of this.cart) {
            total += item.price
        }
        return total
    }

    printCart() {
        for(const item of this.cart)
        {
            console.log(item.name)
        }
        
    }
}



export 
{
    Item,
    Shop,
    User
}

