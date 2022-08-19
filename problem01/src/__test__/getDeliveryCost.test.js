import {jest} from '@jest/globals'

import getDeliveryCost from "../getDeliveryCost.js";

const TEST_BASE_DELIVERY_COST = 100;
const TEST_WEIGHT = 5;
const TEST_DISTANCE = 5;

test("get delivery cost calculation", () => {
  const testDeliveryCost = getDeliveryCost(
    TEST_BASE_DELIVERY_COST,
    TEST_WEIGHT,
    TEST_DISTANCE
  );
  expect(testDeliveryCost).toBe(175);
});
