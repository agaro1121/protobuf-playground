const messages = require('./messages_pb');

const customer = new messages.Customer();

customer.setUsername('bigBen');
customer.getEmailAddressesList().push('abc@xyz.com');
customer.setType(messages.Customer.Type.MEMBER);

const address = new messages.Customer.Address();
address.setAddress('123 NoWhere St.');
address.setCity('New York');
address.setState('NY');
address.setZipCode('12345');

customer.setAddress(address);

console.log(customer);
console.log(customer.toObject());