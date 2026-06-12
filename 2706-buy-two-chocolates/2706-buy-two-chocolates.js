var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);

    let totalCost = prices[0] + prices[1];

    if (totalCost <= money) {
        return money - totalCost;
    }

    return money;
};