export default async function handler(req, res) {

  const response = await fetch(
    'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MELHOR_ENVIO_TOKEN}`,
        'Accept': 'application/json'
      },

      body: JSON.stringify({

        from: {
          postal_code: '19470000'
        },

        to: {
          postal_code: req.query.cep
        },

        products: [
          {
            id: "1",
            width: 20,
            height: 10,
            length: 30,
            weight: 1,
            insurance_value: 59.90,
            quantity: 1
          }
        ]

      })
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
