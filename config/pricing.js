// Single source of truth for plan prices. Yearly = 15% off monthly, applied
// consistently to every paid plan (see toggle_save i18n key for the badge copy).
export const PRICES = {
  pro: { monthly: 5, yearly: 4.25 },
  team: { monthly: 16, yearly: 13.6 },
};

export function formatPrice(amount) {
  return `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}
