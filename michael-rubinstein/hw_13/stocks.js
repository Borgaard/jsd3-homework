/*
  Create a `Stock` constructor that has the following attributes:
  * symbol - (a string) 
    // Every stock listed on a stock exchange has a symbol, which is usually between
    // one and four capital letters, such as V or AAPL.
  * shares - (a number) 
    // Stocks are sold in shares, which can be whole numbers or decimal amounts.
  * exchange - (a string equal to NYSE) 
    // Stocks are sold on stock exchanges, such as the New York Stock Exchange (NYSE) or the NASDAQ.
    // The NYSE is the largest in the U.S., so we are setting this as a default value for our constructor.

  And the following methods:
  * buyShares(number) - adds the number of shares purchased (a number) to the value of the shares property
  * sellShares(number) - subtracts the number of shares sold (a number) from the value of the shares property
  * calcValue(price) - multiplies the value of the shares property by the price (a number) and returns the result

  ## Goal

  Make sure to use the Stock prototype so that you're not creating multiple copies of the functions for your stocks.
  
  ## Testing

  Create a stock using the name "visa" and the values "V" for symbol and 100 for shares.
  Use the buyShares() method to buy 50 shares.
  Use the sellShares() method to sell 75 shares.
  Use the calcValue() method to calculate the value at a price of 50.35.
  Create a stock using the name "apple" and the values "AAPL" for symbol and 200 for shares. Specify
     the value "NASDAQ" for exchange. Check the values of the exchange property for apple and for visa
     and verify that the value for apple is the one you just set, while the value for visa remains "NYSE".
 
  ## Bonuses

  1. Ensure that the total number of shares is never less than zero.
  2. Ensure that calculated values are always rounded to the nearest cent.
*/


// CONSTRUCTOR FUNCTION
function Stock (stockSymbol = "", shares = 0, exchange = "NYSE") {
    this.stockSymbol = stockSymbol;
    this.shares = shares;
    this.exchange = exchange;
}

// PROTOTYPE PROPERTIES

Stock.prototype.buyShares = function(shares) {
  this.shares += shares;
  console.log(`Bought ${shares} shares of ${this.stockSymbol}.`);
};

Stock.prototype.sellShares = function(shares) {
  var result = this.shares - shares;
  if (result < 0) {
    console.log(`Error! You don't own enough of ${this.stockSymbol} to sell ${shares} shares!`);
  } else {
    this.shares = result;
    console.log(`Sold ${shares} shares of ${this.stockSymbol}.`);
  }
};

Stock.prototype.calcValue = function(price) {
  return (this.shares * price).toFixed(2);
};

Stock.prototype.reportShares = function() {
  console.log(`You now own ${this.shares} shares of ${this.stockSymbol}`);
};

Stock.prototype.reportExchange = function() {
  console.log(`${this.stockSymbol} is traded on the ${this.exchange} exchange.`);
};

// TEST CODE

var visa = new Stock("V", 100);
visa.reportShares();
visa.buyShares(50);
visa.sellShares(75);
visa.reportShares();
var testPrice = 50.35;
console.log(`At a price of $${testPrice} per share, your ${visa.stockSymbol} stock is now worth $${visa.calcValue(testPrice)}.`);

var apple = new Stock("AAPL", 200, "NASDAQ");
apple.reportExchange();
visa.reportExchange();

apple.reportShares();
apple.sellShares(300);

var tp2 = 113.9539847;
console.log(`At a price of $${tp2} per share, your ${apple.stockSymbol} stock is now worth $${apple.calcValue(tp2)}.`);
