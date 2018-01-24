const assert = require('assert');
const Bank = require('../bank.js');
const Account = require('../account.js');

describe ('Bank', function () {
  var bank;
  var account1;
  var account2;
  var account3;

  beforeEach(function(){
    bank = new Bank();
    account1 = new Account("current", "John Snow", 1500);
    account2 = new Account("savings", "Jane Snow", 10000);
    account3 = new Account("current", "Jim Morrison", 500);
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
  });


xit('bank has no accounts', function (){
  assert.strictEqual(bank.numberOfAccounts(), 0);
 });

xit('can add account to bank', function (){
  bank.addAccount(account1);
  assert.strictEqual(bank.numberOfAccounts(), 1);
});

it('can get account by name', function (){
  assert.strictEqual(bank.findAccountByName("John Snow"), account1);
});

it('find total account value', function (){
  assert.strictEqual(bank.findTotalValue(), 12000);
});

it('find average account value', function (){
  assert.strictEqual(bank.findAverageValue(), 4000);
});

});
