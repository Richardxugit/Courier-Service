class Offer {
  constructor(cost, weight, distance) {
    this.cost = cost;
    this.weight = Number(weight);
    this.distance = Number(distance);
  }

  inRange(n, nStart, nEnd) {
    if (n >= nStart && n <= nEnd) return true;
    else return false;
  }

  calDisCountOffer1() {
    const inDistance = this.inRange(this.distance, 0, 200);
    const inWeight = this.inRange(this.weight, 70, 200);
    if (inDistance && inWeight) {
      return this.cost * 0.1;
    } else {
      return 0;
    }
  }

  calDisCountOffer2() {
    const inDistance = this.inRange(this.distance, 50, 150);
    const inWeight = this.inRange(this.weight, 100, 250);
    if (inDistance && inWeight) {
      return this.cost * 0.07;
    } else {
      return 0;
    }
  }

  calDisCountOffer3() {
    const inDistance = this.inRange(this.distance, 50, 250);
    const inWeight = this.inRange(this.weight, 10, 150);
    if (inDistance && inWeight) {
      return this.cost * 0.05;
    } else {
      return 0;
    }
  }
}

export default Offer;
