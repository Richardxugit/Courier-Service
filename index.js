import getInputs from "./src/getInputs.js";
import getDeliveryCost from "./src/OrderCost/getDeliveryCost.js";
import getDiscount from "./src/OrderCost/getDiscount.js";
import getDeliveryTimeByPkgs from "./src/DeliveryTime/getDeliveryTime.js";
import getAllRoutes from "./src/DeliveryTime/getAllRoutes.js";
import { offers } from "./src/lib/const.js";

const getAllDeliveryTime = (orders, deliveryInfo) => {
  const allRoutes = getAllRoutes(orders, deliveryInfo.maxWeight, []);
  return getDeliveryTimeByPkgs(
    allRoutes,
    deliveryInfo.noOfVehicles,
    deliveryInfo.maxSpeed
  );
};

const mapDeliveryTimeToPkg = (allDeliveryTime, id) => {
  return allDeliveryTime.filter((item) => {
    return item.id === id;
  });
};

const getTotalDeliveryCost = () => {
  const { baseCost, orders, deliveryInfo } = getInputs();

  console.log(
    `\nHere are your total delivery cost of your ${orders.length} package(s):`
  );

  const allDeliveryTime = getAllDeliveryTime(orders, deliveryInfo);

  let totalDeliveryCost = "";
  let totalDiscount = "";

  for (const order of orders) {
    const deliveryCost = getDeliveryCost(
      baseCost,
      order.weight,
      order.distance
    );
    if (!offers.includes(order.offerCode)) {
      totalDeliveryCost = deliveryCost;
      totalDiscount = 0;
    } else {
      const discount = getDiscount(
        deliveryCost,
        order.weight,
        order.distance,
        order.offerCode
      );
      totalDiscount = discount;
      totalDeliveryCost = deliveryCost - discount;
    }
    const deliveryTime = mapDeliveryTimeToPkg(allDeliveryTime, order.id)[0].deliveryTime
    console.log(order.id + " " + totalDiscount + " " + totalDeliveryCost  + " " + deliveryTime);
  }
};

getTotalDeliveryCost();
