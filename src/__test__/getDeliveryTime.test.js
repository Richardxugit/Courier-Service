import getDeliveryTimeByPkgs from "../DeliveryTime/getDeliveryTime.js";

const TEST_ROUTES = [
  [
    { id: "PKG2", weight: 75, distance: 125 },
    { id: "PKG4", weight: 110, distance: 60 },
  ],
  [{ id: "PKG3", weight: 175, distance: 100 }],
];
const TEST_NO_VEHICLES = 2;
const TEST_MAX_SPEED = 70;

const TEST_RESULT = [
  { id: "PKG2", deliveryTime: 1.78 },
  { id: "PKG4", deliveryTime: 0.85 },
  { id: "PKG3", deliveryTime: 1.42 },
];

test("get delivery time", () => {
  const testDiscount = getDeliveryTimeByPkgs(
    TEST_ROUTES,
    TEST_NO_VEHICLES,
    TEST_MAX_SPEED
  );
  expect(testDiscount).toStrictEqual(TEST_RESULT);
});
