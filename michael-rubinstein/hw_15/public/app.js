// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVN94oUvrRqLXe1FLVMH1M5rQK-HqTH4g",
    authDomain: "mnr-js3sf-demo.firebaseapp.com",
    databaseURL: "https://mnr-js3sf-demo.firebaseio.com",
    storageBucket: "mnr-js3sf-demo.appspot.com",
    messagingSenderId: "724153754020"
};

firebase.initializeApp(config);

var inventoryAppReference = firebase.database();

$(document).ready(function() {

    // Handle the submit form event:
    $('#items-form').submit(function(event) {
        event.preventDefault();

        // Grab the new inventory item from the text field, then blank out the field
        var newItem = $('#newItem').val();
        $('#newItem').val('');

        // Locate the 'items' collection in the databse, OR create it if it doesn't exist,
        // and get a reference to it.
        var itemsReference = inventoryAppReference.ref('items');

        // Add the new item to the 'items' collection with a quantity of 1.
        itemsReference.push({
            description: newItem,
            stock: 1
        });
    });

    // Perform a READ (the R in CRUD) to refresh the list view
    inventoryClass.getItems();
});

var inventoryClass = (function() {
    function getItems() {

        // This event listener is triggered whenever a value in the items collection is changed?
        inventoryAppReference.ref('items').on('value', function(results) {
            var $itemList = $('.item-list');
            var items = [];
            var allItems = results.val();

            for (var itm in allItems) {
                var item = allItems[itm].description;
                var stock = allItems[itm].stock;
                // shortcuts to view elements
                var $itemListElement = $('<li>');
                var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');
                var $increaseStockElement = $('<i class="fa fa-thumbs-up pull-right"></i>');
                var $decreaseStockElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

                // Handle clicks to DELETE an item
                $deleteElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    deleteItem(id);
                });

                // Handle clicks to increase stock of an item
                $increaseStockElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    updateItem(id, ++allItems[id].stock); //stock variable stores value independent of node id. this change targets the id.
                });

                // Handle clicks to decrease stock of an item
                $decreaseStockElement.on('click', function(e) {
                    var id = $(e.target.parentNode).data('id');
                    updateItem(id, --allItems[id].stock);
                });

                
                $itemListElement.attr('data-id', itm);
                $itemListElement.html(item);
                $itemListElement.append($deleteElement);
                $itemListElement.append($increaseStockElement);
                $itemListElement.append($decreaseStockElement);
                $itemListElement.append('<div class="pull-right">' + stock + '</div>');
                items.push($itemListElement);
            }
            $itemList.empty();
            for (var i in items) {
                $itemList.append(items[i]);
            }
        });
    }

    function updateItem(id, stock) {
        var itemReference = inventoryAppReference.ref('items').child(id);
        itemReference.update({
            stock: stock
        });
    }

    function deleteItem(id) {
        var itemReference = inventoryAppReference.ref('items').child(id);
        itemReference.remove();
    }

    return {
        getItems: getItems
    };
})();
