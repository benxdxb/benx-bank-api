export default function handler(req, res) {
  const banks = [
    "Emirates NBD",
    "Dubai Islamic Bank",
    "Abu Dhabi Commercial Bank",
    "First Abu Dhabi Bank",
    "HSBC Middle East",
    "Mashreq Bank",
    "Banque Misr",
    "Crédit Agricole",
    "Société Générale",
    "BNP Paribas"
  ];
  
  res.status(200).json(banks);
}
