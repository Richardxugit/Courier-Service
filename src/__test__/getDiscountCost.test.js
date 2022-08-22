import getDiscount from "../OrderCost/getDiscount.js";

const TEST_DELIVERY_COST = 700;
const TEST_WEIGHT = 10;
const TEST_DISTANCE = 100;
const TEST_OFFER_CODE = "OFR003";

test("get discount calculation", () => {
  const testDiscount = getDiscount(
    TEST_DELIVERY_COST,
    TEST_WEIGHT,
    TEST_DISTANCE,
    TEST_OFFER_CODE
  );
  expect(testDiscount).toBe(35);
});
