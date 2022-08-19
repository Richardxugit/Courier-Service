import Offer from "../src/class/Offer.js";

const getDiscount = (deliveryCost, weight, distance, offerId) => {
  const offer = new Offer(deliveryCost, weight, distance);
  const offersCalculation = {
    OFR001: offer.calDisCountOffer1(),
    OFR002: offer.calDisCountOffer2(),
    OFR003: offer.calDisCountOffer3(),
  };
  return offersCalculation[offerId];
};

export default getDiscount;
