class Order {
  constructor(base, weight, distance) {
    this.base = base;
    this.weight = weight;
    this.distance = distance;
  }

  calculateCost() {
    const deliveryCost = this.base + this.weight * 10 + this.distance * 5;
    return deliveryCost;
  }
}

export default Order;
