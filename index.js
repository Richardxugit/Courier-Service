import getInputs from "./src/getInputs.js";
import getDeliveryCost from "./src/getDeliveryCost.js";
import getDiscount from "./src/getDiscount.js";
import { offers } from "./src/lib/const.js";

const getTotalDeliveryCost = () => {
  const { baseCost, orders } = getInputs();

  console.log(
    `\nHere are your total delivery cost of your ${orders.length} package(s):`
  );

  let totalDeliveryCost = "";
  let totalDiscount = "";

  for (const order of orders) {
    const deliveryCost = getDeliveryCost(baseCost, order.weight, order.distance);
    if (!offers.includes(order.offerCode)) {
      totalDeliveryCost = deliveryCost;
      totalDiscount = 0;
    } else {
      const discount = getDiscount(deliveryCost, order.weight, order.distance, order.offerCode);
      totalDiscount = discount;
      totalDeliveryCost = deliveryCost - discount;
    }
    console.log(order[0] + " " + totalDiscount + " " + totalDeliveryCost);
  }
};

getTotalDeliveryCost();
