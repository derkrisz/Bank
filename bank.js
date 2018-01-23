var Bank = function() {
  this.accounts = [];
}

Bank.prototype.numberOfAccounts= function() {
  return this.accounts.length;
}

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

Bank.prototype.findAccountByName = function(name) {
  for (var name in this.accounts) {
    if (name === account.owner_name) {
      return name;
    }
  }
};

// Bank.prototype.largestAccount = function(account, amount) {
//   // for (var amount in account) {
//   // var biggestAccount = Math.max(this.accounts.amount);
//   // }
//   for (var i = 0; i < this.accounts.length; i++) {
//     var biggestAccount = Math.max(this.accounts.amount);
//   }
//   return biggestAccount;
// }

module.exports = Bank;
