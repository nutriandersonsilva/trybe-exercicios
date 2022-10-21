/* Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.

💡 Note que o parâmetro da função já está sendo passado na chamada da função.

Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */

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
    const motoGirl = order.order.delivery.deliveryPerson
    const client = order['name']
    const phone = order['phoneNumber']
    const street = order.address.street
    const number = order.address.number
    const apartment = order.address.apartment
    console.log(`Olá ${motoGirl}, entrega para: ${client}, Telefone: ${phone}, R. ${street}, Nº: ${number}, AP: ${apartment}`)
};

customerInfo(order);
console.log('');
const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva'
    const price = order.payment.total = '50'
    const pizza = Object.keys(order.order.pizza)
    const soda = order.order.drinks.coke.type

    console.log(`Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${soda} é R$ ${price},00.`)

};

orderModifier(order);