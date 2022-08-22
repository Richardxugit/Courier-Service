const getPkgDeliveryTime = (route, speed, waitTime) => {
  const deliveryTime = route.map((route) => {
    const deliveryTime = Math.floor((route.distance / speed) * 100) / 100;
    return { id: route.id, deliveryTime };
  });

  const deliveryTimeWithWait =
    waitTime &&
    deliveryTime.map((pkgTime) => {
      return {
        id: pkgTime.id,
        deliveryTime: (
          pkgTime.deliveryTime +
          waitTime / deliveryTime.length
        ).toFixed(2),
      };
    });

  const pkgDeliveryTime = deliveryTimeWithWait ?? deliveryTime;
  const maxDeliveryTime = getMaxDeliveryTime(pkgDeliveryTime);
  return { pkgDeliveryTime, maxDeliveryTime };
};

const getMaxDeliveryTime = (deliveryTimeArr) => {
  return (
    deliveryTimeArr.sort((a, b) => {
      return b.deliveryTime - a.deliveryTime;
    })[0].deliveryTime * 2
  );
};

const removeMinWaitTime = (waitTimeArr, minWaitTime) => {
  const index = waitTimeArr.indexOf(minWaitTime);
  if (index > -1) {
    waitTimeArr.splice(index, 1);
  }
};

const getDeliveryTimeByPkgs = (routes, vehiclesNo, speed) => {
  const waitTime = [];
  const allPkgDeliveryTime = [];

  for (let i = 0; i < routes.length; i++) {
    if (i < vehiclesNo) {
      const { maxDeliveryTime, pkgDeliveryTime } = getPkgDeliveryTime(
        routes[i],
        speed
      );
      waitTime.push(maxDeliveryTime);
      allPkgDeliveryTime.push(pkgDeliveryTime);
    } else {
      const minWaitTime = waitTime.sort((a, b) => {
        return a - b;
      })[0];
      const { maxDeliveryTime, pkgDeliveryTime } = getPkgDeliveryTime(
        routes[i],
        speed,
        minWaitTime
      );
      removeMinWaitTime(waitTime, minWaitTime);
      waitTime.push(maxDeliveryTime);

      allPkgDeliveryTime.push(pkgDeliveryTime);
    }
  }
  return allPkgDeliveryTime.flat();
};

export default getDeliveryTimeByPkgs;
