module.exports = {
  routes: [
    {
      method: "POST",
      path: "/ordersPayment",
      handler: "order.payment",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
