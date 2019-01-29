class Item {
    constructor(id, name, description, cost, image) {
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.image = image;
        this.test = name + description;
        this.id = id
        this.itemTemplate = [`<div class='col-xl-4 col-md-6 mb-4'>
                                <div class='card h-100'>
                                    <a href='#'><img class='card-img-top item-image' src='${this.image}' alt=''></a>
                                    <div class='card-body'>
                                        <h4 class='card-title item-name'><a href='#'>${this.name}</a></h4>
                                        <p class='card-text'>${this.description}</p>
                                    </div>
                                    <div class='card-footer'>
                                        <span class='cost item-price'>$${this.cost}</span>
                                        <button type='button' onclick="myFunction()" class='btn btn-primary cart cart-add'>
                                            Add to Cart <i class='fas fa-shopping-cart'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>`]
    }
    displayItem(location) {
        $(location).append(this.itemTemplate);
    }
}

var apple = new Item(1, "Apples", "Bag of Fresh Granny Smiths, High in Vitamin A", 3.49,'https://gourmelistaste.com/wp-content/uploads/Apples.jpg')
var banana = new Item(2, "Banana", "Long THicc and Juicy", 1.99, 'https://i.imgur.com/3hnkXfN.jpg')
var strawberry = new Item(3, "Strawberry", "Big fat red Balloons", 4.99, "https://2.bp.blogspot.com/-lkEhaOmCKIk/VSSLSQJ2SeI/AAAAAAAAjKo/D-LoBp1MxCI/s1600/Strawberry%2Bin%2Ba%2Bbox.JPG")

var tsoup = new Item(4, "Tomato Soup", "Hot and Fresh Soup", 1.29,'https://www.adweek.com/files/imagecache/node-detail/campbells-01-2014.jpg')
var csoup = new Item(5, "Chicken Soup", "4 Pack of the Best", 3.89, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRsznBs_JCBf39RsSBAaCaptJbl943XmxBe2mJicc40SQgH_j2A')
var beans = new Item(6, "Black Beans", "The Biggest and Blackest", 1.19, "https://cdnimg.webstaurantstore.com/images/products/large/7347/1735119.jpg")

var fsnacks = new Item(7, "Fruit Snacks", "Box of Welch's Fruit Mixed Snacks", 6.49,'https://i5.walmartimages.ca/images/Large/932/987/999999-34856932987.jpg')
var vstraws = new Item(8, "Veggie Straws", "6 Pack of Veggie Straws", 3.99, 'https://i5.walmartimages.ca/images/Large/321/482/999999-829515321482.jpg')
var crackers = new Item(9, "Ritz Snackwitch", "Cheese with Buttery Crackers", 2.99, "https://i5.walmartimages.ca/images/Large/018/885/999999-66721018885.jpg")

var iawesome = new Item(10, "Italian Awesome", "Crackers, Cheese and MEAT", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-Italian.jpg")
var medfun = new Item(11, "Mediterranean Fun", "Feel'in Greek?", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-mediterannean.jpg")
var stick = new Item(12, "Sandwich on a Stick", "Everythings better on a Stick", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-ham-sandwich-on-a-stick.jpg")
var classic = new Item(13, "The Classic", "Since the Begining", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-ideas-cheese-crackers-pepperoni.jpg")
var bagel = new Item(14, "Bagel Beast", "Healthy Donuts", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-ideas-bagels.jpg")
var pbj = new Item(15, "PB & J", "The best one can get", 8.99, "https://www.laurengreutman.com/wp-content/uploads/2016/08/7-lunch-box-ideas-heart-sandwiches.jpg")


apple.displayItem(produce)
banana.displayItem(produce)
strawberry.displayItem(produce)

tsoup.displayItem(canned)
csoup.displayItem(canned)
beans.displayItem(canned)

fsnacks.displayItem(snacks)
vstraws.displayItem(snacks)
crackers.displayItem(snacks)

iawesome.displayItem(kits)
medfun.displayItem(kits)
stick.displayItem(kits)
classic.displayItem(kits)
bagel.displayItem(kits)
pbj.displayItem(kits)
