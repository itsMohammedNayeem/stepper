export const CHECKOUT_STEPS = [
  { name: "Ordered", Component: () => <p>Your order is placed</p> },
  { name: "Shipped", status: () => <p>Your order is shipped</p> },
  {
    name: "Out for delivery",
    status: () => <p>Your order is out for delivery</p>,
  },
  { name: "Delivered", status: () => <p>Your order has been delivered</p> },
];
