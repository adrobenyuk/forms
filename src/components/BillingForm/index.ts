export const PAYMENT_TYPES = ['credit' , 'debit' , 'paypal'] as const;

export type PaymentType = typeof PAYMENT_TYPES[number];

export { default } from './Form';
