export const CHECKOUT_STEPS = [
  { name: "Ordered", Component: () => <p>Your order is placed</p> },
  { name: "Shipped", Component: () => <p>Your order is shipped</p> },
  {
    name: "Out for delivery",
    Component: () => <p>Your order is out for delivery</p>,
  },
  { name: "Delivered", Component: () => <p>Your order has been delivered</p> },
];
