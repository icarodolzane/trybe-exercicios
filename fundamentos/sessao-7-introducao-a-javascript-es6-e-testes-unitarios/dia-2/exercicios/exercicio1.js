const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    let key = order.order;
    key = key.delivery;
    const deliveryPerson = key.deliveryPerson;
    const customerName = order.name;
    key = order.phoneNumber;
    const tel = key;
    key = order.address;
    const address = `R: ${key.street}, N${key.number},${key.apartment} `;

    return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${tel}, ${address}`;
  
  };
  

console.log(customerInfo(order));

const orderModifier = (order) => {
  const newCustomerName = order.name = 'Luiz Silva';
  const newAmount = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  return `Olá ${newCustomerName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newAmount},00.`;
}

console.log(orderModifier(order));