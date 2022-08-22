const getAllPkgCombination = (arr, sum) => {
  const len = arr.length;
  const res = [];
  for (let i = 1; i < Math.pow(2, len); i++) {
    let s = 0;
    let temp = [];
    for (var j = 0; j < len; j++) {
      if (i & (1 << (len - 1 - j))) {
        s += arr[j].weight;
        temp.push(arr[j]);
      }
    }
    if (s <= sum) {
      res.push({ tempArr: temp, totalWeight: s });
    }
  }
  const maximumWeightCombo = res.sort((a, b) => {
    return b.totalWeight - a.totalWeight;
  })[0].tempArr;
  return maximumWeightCombo;
};

const removeKnownRoute = (oriArr, maxArr) => {
  return oriArr.filter((ar) => !maxArr.find((rm) => rm.id === ar.id));
};

const getAllRoutes = (arr, sum, routes) => {
  const maximumWeightCombo = getAllPkgCombination(arr, sum);
  routes.push(maximumWeightCombo);

  const updatedArr = removeKnownRoute(arr, maximumWeightCombo);

  if (!updatedArr.length) {
    return routes;
  }
  return getAllRoutes(updatedArr, sum, routes);
};

export default getAllRoutes;
