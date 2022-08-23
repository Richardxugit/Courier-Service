import getAllRoutes from "../DeliveryTime/getAllRoutes.js";

const TEST_ORDERS = [
  { id: "PKG1", weight: 50, distance: 30 },
  { id: "PKG2", weight: 75, distance: 125 },
  { id: "PKG3", weight: 175, distance: 100 },
  { id: "PKG4", weight: 110, distance: 60 },
  { id: "PKG5", weight: 155, distance: 95 },
];
const TEST_MAX_WEIGHT = 200;
const TEST_INITIAL_ROUTE = [];
const TEST_RESULT = [
  [
    { id: "PKG2", weight: 75, distance: 125 },
    { id: "PKG4", weight: 110, distance: 60 },
  ],
  [{ id: "PKG3", weight: 175, distance: 100 }],
  [{ id: "PKG5", weight: 155, distance: 95 }],
  [{ id: "PKG1", weight: 50, distance: 30 }],
];

test("get all routes", () => {
  const result = getAllRoutes(TEST_ORDERS, TEST_MAX_WEIGHT, TEST_INITIAL_ROUTE);
  expect(result).toStrictEqual(TEST_RESULT);
});
