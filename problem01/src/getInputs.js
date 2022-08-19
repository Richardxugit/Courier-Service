import promptSync from "prompt-sync";
const getInputs = () => {
  const prompt = promptSync();

  const baseAndPkgNo = prompt(
    "Please input your base_delivery_cost, no_of_packages: "
  );

  const baseCost = baseAndPkgNo.split(" ")[0];
  const NoOfPkg = baseAndPkgNo.split(" ")[1];

  const ordersAndBaseCost = { baseCost, orders: [] };

  for (let i = 1; i <= NoOfPkg; i++) {
    const nextOrder = prompt(
      "Please input your pkg_id, weight, distance, offer_code: "
    );
    ordersAndBaseCost.orders.push(nextOrder.split(" "));
  }
  return ordersAndBaseCost;
};

export default getInputs;
