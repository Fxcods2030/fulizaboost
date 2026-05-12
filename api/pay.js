export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { phone, amount, reference } = req.body;

  // Validate inputs
  if (!phone || !amount) {
    return res.status(400).json({ error: 'Phone and amount are required' });
  }

  // Your Megapay credentials (SECURE - only server can see these)
  const MEGAPAY_API_KEY = 'MGPYUXJqx4yT';
  const MEGAPAY_EMAIL = 'elishakoskey36@gmail.com';
  const MEGAPAY_ENDPOINT = 'https://megapay.co.ke/backend/v1/initiatestk';

  try {
    const response = await fetch(MEGAPAY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        api_key: MEGAPAY_API_KEY,
        email: MEGAPAY_EMAIL,
        amount: amount.toString(),
        msisdn: phone,
        reference: reference || 'Service'
      })
    });

    const data = await response.json();

    // Return Megapay response to frontend
    return res.status(200).json({
      success: response.ok,
      data: data,
      status: response.status
    });

  } catch (error) {
    console.error('Megapay API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to initiate payment',
      details: error.message
    });
  }
}
