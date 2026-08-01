// Paddle checkout integration — not wired up yet.
//
// When ready:
// 1. npm install @paddle/paddle-js
// 2. Add your Paddle client-side token below (public token is safe to ship).
// 3. Call openCheckout(priceId) from the pricing buttons in
//    shell/components/PricingSection.jsx.

let paddleInstance = null;

export async function initPaddle() {
  console.warn('Paddle not configured yet — see src/payments/paddle.js');
  return null;
}

export async function openCheckout(priceId) {
  if (!paddleInstance) {
    console.warn(`Paddle checkout requested for ${priceId}, but Paddle isn't initialized yet.`);
    return;
  }
  // paddleInstance.Checkout.open({ items: [{ priceId, quantity: 1 }] });
}
