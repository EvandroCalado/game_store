// @ts-nocheck
"use strict";

const stripe = require("stripe")(
  "sk_test_51O38SSEzhEqa5kHV5N3zpq3WhWiqNCMh0Kx0cwPzkj7yqp1eoYtC3m1byZKgLhFQXr0pn9S26UlJrNoyOATRuSiF002iuV7vAd"
);

/**
 * order controller
 */

const calcDiscountPrice = (price, discount) => {
  if (!discount) return price;

  const discountAmount = (price * discount) / 100;
  const result = price - discountAmount;

  return result.toFixed(2);
};

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async payment(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;

    let totalPayment = 0;

    products.forEach((product) => {
      const priceTemp = calcDiscountPrice(
        product.attributes.price,
        product.attributes.discount
      );

      totalPayment += Number(priceTemp) * Number(product.quantity);
    });

    const charge = await stripe.charges.create({
      amount: Math.round(totalPayment * 100),
      currency: "brl",
      source: token.id,
      description: `User ID ${idUser}`,
    });

    const data = {
      user: idUser,
      idPayment: charge.id,
      totalPayment,
      products,
      addressShipping,
    };

    const model = strapi.contentTypes["api::order.order"];

    const isValidData = await strapi.entityValidator.validateEntityCreation(
      model,
      data
    );

    if (!isValidData) {
      ctx.response.status = 400;
      return;
    }

    const entry = await strapi.db
      .query("api::order.order")
      .create({ data: isValidData });

    return entry;
  },
}));
