var Bank = function() {
  this.accounts = [];
}

Bank.prototype.numberOfAccounts = function() {
  return this.accounts.length;
}

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

Bank.prototype.findAccountByName = function(name) {
  for (account of this.accounts) {
    if (account.owner_name === name) {
      return account;
    }
  }
};

Bank.prototype.findTotalValue = function() {
  var totalValue = 0;
  for (account of this.accounts) {
    totalValue += account.amount;
  }
  return totalValue;
};

Bank.prototype.findAverageValue = function() {
  return this.findTotalValue()/this.numberOfAccounts();
}

module.exports = Bank;
