import Order from "../src/class/Order.js";

const getDeliveryCost = (base, weight, distance) => {
    const order = new Order(base, weight, distance);
    return order.calculateCost();
  };

  export default getDeliveryCost;