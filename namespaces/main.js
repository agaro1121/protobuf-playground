const {Customer, CustomerType, Address} = require('./messages2_pb');

const customer = new Customer();
customer.setType(CustomerType.REGULAR);

const address = new Address();
address.setAddress('123 NoWhere St.');
address.setCity('New York');
address.setState('NY');
address.setZipCode('12345');

customer.setAddressesList([address]);

console.log("Raw Customer=",customer);
console.log("Customer Object=",customer.toObject());