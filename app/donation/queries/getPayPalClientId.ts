export default async function getPayPalClientId() {
  const id = process.env.PAYPAL_CLIENT_ID
  if (!id) {
    return null
  }
  return id
}
