class Order {
  constructor(base, weight, distance) {
    this.base = Number(base);
    this.weight = Number(weight);
    this.distance = Number(distance);
  }

  calculateCost() {
    const deliveryCost = this.base + this.weight * 10 + this.distance * 5;
    return deliveryCost;
  }
}

export default Order;
