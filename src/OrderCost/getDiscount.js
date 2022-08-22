import Offer from "../class/Offer.js";

const getDiscount = (deliveryCost, weight, distance, offerId) => {
  const offer = new Offer(deliveryCost, weight, distance);
  const offersCalculation = {
    OFR001: offer.calDisCountOffer1(),
    OFR002: offer.calDisCountOffer2(),
    OFR003: offer.calDisCountOffer3(),
  };
  return Math.round(offersCalculation[offerId]);
};

export default getDiscount;
