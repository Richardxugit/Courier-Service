import promptSync from "prompt-sync";
const getInputs = () => {
  const prompt = promptSync();

  const baseAndPkgNo = prompt(
    "Please input your base_delivery_cost, no_of_packages: "
  );

  const baseCost = Number(baseAndPkgNo.split(" ")[0]);
  const NoOfPkg = Number(baseAndPkgNo.split(" ")[1]);

  const ordersAndBaseCost = {
    baseCost,
    orders: [],
  };

  for (let i = 1; i <= NoOfPkg; i++) {
    const nextOrder = prompt(
      "Please input your pkg_id, weight, distance, offer_code: "
    );
    const orderArr = nextOrder.split(" ");
    ordersAndBaseCost.orders.push({
      id: orderArr[0],
      weight: Number(orderArr[1]),
      distance: Number(orderArr[2]),
      offerCode: orderArr[3],
    });
  }
  const deliveryInfo = prompt(
    "Please input your no_of_vehicles, max_speed and max_carriable_weight: "
  );
  const noOfVehicles = Number(deliveryInfo.split(" ")[0]);
  const maxSpeed = Number(deliveryInfo.split(" ")[1]);
  const maxWeight = Number(deliveryInfo.split(" ")[2]);

  const ordersWithDeliveryInfo = {
    ...ordersAndBaseCost,
    deliveryInfo: { noOfVehicles, maxSpeed, maxWeight },
  };
  return ordersWithDeliveryInfo;
};

export default getInputs;
