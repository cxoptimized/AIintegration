// File: /api/create-checkout-session.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'CX Optimized Member Access',
            },
            unit_amount: 4999, // $49.99
          },
          quantity: 1,
        },
      ],
      success_url: 'https://www.cxoptimized.com/members-area.html?paid=true',
      cancel_url: 'https://www.cxoptimized.com/payment-cancelled.html',
    });

    res.redirect(303, session.url);
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
