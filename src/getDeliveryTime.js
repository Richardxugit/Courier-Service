// getTimeForRoute=([[PKG2,125],[PKG4,60]], speed)=>{
// return {PKGDTime, waitTiem},
// }


// getDeliveryTimeByPkgAndVeh=(routes, vehNumber)=>{
//     const waitTime = []
//     const pkgDeliveryTime = []

//     for(let i=0; i<=routes.length; i++){
//         if(i<=veh.length){
//             const {waitTime,pkgDeliveryTime} = getTimeForRoute(route);
//             waitTime.push(waitTime);
//             pkgDeliveryTime.push(pkgDeliveryTime);
//         }else{
//             const {waitTime,pkgDeliveryTime} = getTimeForRoute(route, MIN.WaitTime[]);
//             const waitTime.filter(MIN.waitTime).push(waitTime)
//         }

//     }
//     return pkgDeliveryTime[]
// }

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
      res.push({ tempArr: temp, totalWight: s });
    }
  }
  const maximumWeightCombo = res.sort((a, b) => {
    return b.totalWight - a.totalWight;
  })[0].tempArr;
  return maximumWeightCombo;
};

// const updatePkgArray = (arr) => {};

const getAllRoutes = (arr, sum, routes) => {
  const maximumWeightCombo = getAllPkgCombination(arr, sum);
  routes.push(maximumWeightCombo);

  const updated = updatedArr(arr, maximumWeightCombo);

  if (!updated.length) {
    return routes;
  }
  return getAllRoutes(updated, sum, routes);
};

const updatedArr = (oriArr, maxArr) => {
  return oriArr.filter((ar) => !maxArr.find((rm) => rm.id === ar.id));
};

console.log(
  getAllRoutes(
    [
      { id: "pkg1", weight: 50, distance: 125 },
      { id: "pkg2", weight: 75, distance: 125 },
      { id: "pkg3", weight: 175, distance: 125 },
      { id: "pkg4", weight: 110, distance: 125 },
      { id: "pkg5", weight: 155, distance: 125 },
    ],
    200,
    []
  )
);
