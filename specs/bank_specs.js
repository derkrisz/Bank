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
    account1 = new Account("current", "John Snow", 1000);
    account2 = new Account("savings", "Jane Snow", 10000);
    account3 = new Account("current", "Jim Morrison", 500);
  });


it('bank has no accounts', function (){
  assert.strictEqual(bank.numberOfAccounts(), 0);
 });

it('can add account to bank', function (){
  bank.addAccount(account1);
  assert.strictEqual(bank.numberOfAccounts(), 1);
});

it('can get account by name', function (){
  bank.findAccountByName();
  assert.strictEqual(bank.findAccountByName(), "John Snow");
});

// it('find largest account', function (){
//   assert.strictEqual(bank.largestAccount(), account2);
// });

});
