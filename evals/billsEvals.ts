export const billEvals: {
  name: string;
  input: string;
  expected: {
    businessName: string | null;
    date: string | null;
    billItems: { name: string; price: number }[];
    tax: number | null;
  };
}[] = [
  {
    name: "Nobu Caesars Palace Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/nobu-caesars-palace-receipt.jpg",
    expected: {
      businessName: "NOBU - Restaurant",
      date: "2020-02-13",
      billItems: [
        {
          name: "Peruvian Caipiri",
          price: 18,
        },
        {
          name: "Hakka Nigori",
          price: 18,
        },
        {
          name: "PF 155 Oma",
          price: 155,
        },
        {
          name: "PF 155 Oma",
          price: 155,
        },
      ],
      tax: 28.98,
    },
  },
  {
    name: "Bubba Gump Shrimp Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/bubba-gump-shrimp-receipt.jpg",
    expected: {
      businessName: "Bubba Gump Shrimp Co",
      date: "2016-07-18",
      billItems: [
        {
          name: "Diet Pepsi",
          price: 2.79,
        },
        {
          name: "Lemonade",
          price: 2.79,
        },
        {
          name: "Dft 16 Bud Light",
          price: 3.5,
        },
        {
          name: "Shrimmer's Heaven",
          price: 20.99,
        },
        {
          name: "Steamed Shellfish",
          price: 24.49,
        },
        {
          name: "Scampi Linguini",
          price: 17.49,
        },
        {
          name: "Scampi Linguini",
          price: 17.49,
        },
      ],
      tax: 4.55,
    },
  },
  {
    name: "Italian Restaurant Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/italian-restaurant-receipt.jpg",
    expected: {
      businessName: null,
      date: null,
      billItems: [
        {
          name: "ACQUA S.ANGELO NATUR",
          price: 1.32,
        },
        {
          name: "MILK PRO PORRIDGE AV",
          price: 1.65,
        },
        {
          name: "MILK PRO PORRIDGE AV",
          price: 1.65,
        },
        {
          name: "LINDT TAVOLETTA LATT",
          price: 2.85,
        },
        {
          name: "CRIK CROK STILE FATT",
          price: 2.85,
        },
        {
          name: "MELE GRANNY SMITH [C",
          price: 1.53,
        },
      ],
      tax: 1.12,
    },
  },
  {
    name: "Dubai Mall Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/dubai-mall-receipt.jpg",
    expected: {
      businessName: "Mertcan",
      date: "2018-03-28",
      billItems: [
        {
          name: "Frsh Lawash Wrap",
          price: 39,
        },
        {
          name: "Urfa Kebab",
          price: 54,
        },
        {
          name: "Lamb Chops",
          price: 67,
        },
        {
          name: "Chicken Skewers",
          price: 47,
        },
        {
          name: "OFM Styl Lamb",
          price: 67,
        },
        {
          name: "Peach Ice Tea",
          price: 17,
        },
        {
          name: "Lemon &Peach I.T",
          price: 36,
        },
      ],
      tax: 16.35,
    },
  },
  {
    name: "Tatiana New York Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/tatiana-new-york-receipt.jpg",
    expected: {
      businessName: "Lincoln Center",
      date: "2024-06-18",
      billItems: [
        {
          name: "Spicy Marg",
          price: 18,
        },
        {
          name: "Tatiana Tonic",
          price: 18,
        },
        {
          name: "Egusi Dumpling",
          price: 22,
        },
        {
          name: "Crispy Okra",
          price: 16,
        },
        {
          name: "Curried Goat Patties",
          price: 27,
        },
        {
          name: "Braised Oxtails",
          price: 58,
        },
        {
          name: "Malbec, Solar del Alma, Natural, Mendoza",
          price: 59,
        },
        {
          name: "Black Bean Hummus",
          price: 26,
        },
        {
          name: "Rice & Peas",
          price: 12,
        },
        {
          name: "Rum Cake",
          price: 18,
        },
      ],
      tax: 24.33,
    },
  },
  {
    name: "El Chalan Restaurant Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/el-chalan-restaurant-receipt.jpg",
    expected: {
      businessName: "El Chalan Restaurant",
      date: "2016-12-03",
      billItems: [
        {
          name: "CAUSA DE POLLO",
          price: 8.95,
        },
        {
          name: "CEVICHE DE CAMARONES",
          price: 16.95,
        },
        {
          name: "LIMONADA",
          price: 4,
        },
        {
          name: "PESCADO AL AJILLO",
          price: 15.95,
        },
      ],
      tax: 3.67,
    },
  },
  {
    name: "Blue India Atlanta Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/blue-india-atlanta-receipt.jpg",
    expected: {
      businessName: "Blue India Atlanta",
      date: "2019-12-24",
      billItems: [
        {
          name: "Samosas",
          price: 6,
        },
        {
          name: "Karahi Dinner",
          price: 16,
        },
        {
          name: "Paneer",
          price: 1,
        },
        {
          name: "Vindaloo Dinner",
          price: 16,
        },
        {
          name: "Paneer",
          price: 1,
        },
        {
          name: "Biryani",
          price: 16,
        },
        {
          name: "Cheddar Naan",
          price: 6,
        },
      ],
      tax: 5.5,
    },
  },
  {
    name: "Iranian Restaurant Receipt",
    input:
      "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/iranian-restaurant-receipt.jpg",
    expected: {
      businessName: "Iranian Restaurant",
      date: "2024-5-17",
      billItems: [
        {
          name: "Noon",
          price: 8,
        },
        {
          name: "Mast-O-Khiar",
          price: 15,
        },
        {
          name: "Kashk E Badenjan",
          price: 36,
        },
        {
          name: "Soltani",
          price: 74,
        },
        {
          name: "Iranian Rice",
          price: 15,
        },
        {
          name: "Sparkling water LRG",
          price: 20,
        },
      ],
      tax: 8,
    },
  },
  // {
  //   name: "Nobu Los Angeles Receipt",
  //   input:
  //     "https://napkinsdev.s3.us-east-1.amazonaws.com/receipt-images/nobu-los-angeles-receipt.jpg",
  //   expected: {
  //     businessName: null,
  //     date: "2011-4-16",
  //     billItems: [
  //       {
  //         name: "Pina Martini",
  //         price: 14.0,
  //       },
  //       {
  //         name: "Japanese Caipirinha",
  //         price: 14.0,
  //       },
  //       {
  //         name: "Yamazaki Sidecar",
  //         price: 14.0,
  //       },
  //       {
  //         name: "Mia Margarita",
  //         price: 4.0,
  //       },
  //       {
  //         name: "Diet Coke",
  //         price: 27.0,
  //       },
  //       {
  //         name: "Vodka Martini (2 @14.00)",
  //         price: 28.0,
  //       },
  //       {
  //         name: "Vodka Martini (4 @12.00)",
  //         price: 48.0,
  //       },
  //       {
  //         name: "Glass Tauzler Riesling",
  //         price: 12.0,
  //       },
  //       {
  //         name: "Glass Tauzler Riesling (2 @12.00)",
  //         price: 24.0,
  //       },
  //       {
  //         name: "Sangria ROM (6 @24.00)",
  //         price: 144.0,
  //       },
  //       {
  //         name: "VKSO",
  //         price: 225.0,
  //       },
  //       {
  //         name: "Green Tea (5 @0.00)",
  //         price: 0.0,
  //       },
  //       {
  //         name: "Tiradito (3 @25.00)",
  //         price: 75.0,
  //       },
  //       {
  //         name: "$25 REFILL",
  //         price: 0.0,
  //       },
  //       {
  //         name: "Tiradito",
  //         price: 20.0,
  //       },
  //       {
  //         name: "$20 REFILL",
  //         price: 0.0,
  //       },
  //       {
  //         name: "New-F BOTAN (3 @30.00)",
  //         price: 90.0,
  //       },
  //       {
  //         name: "Diet Coke Refill",
  //         price: 3.0,
  //       },
  //       {
  //         name: "bamboo (3 @25.00)",
  //         price: 75.0,
  //       },
  //       {
  //         name: "Admin Fee",
  //         price: 300.0,
  //       },
  //       {
  //         name: "TESOLUR (15 @150.00)",
  //         price: 2250.0,
  //       },
  //       {
  //         name: "Sparkling Water Large",
  //         price: 9.0,
  //       },
  //       {
  //         name: "King Crab Assu (3 @26.00)",
  //         price: 78.0,
  //       },
  //       {
  //         name: "Mexican white shrimp (15 @5.00)",
  //         price: 75.0,
  //       },
  //       {
  //         name: "Monkfish Pate Cav",
  //         price: 22.0,
  //       },
  //     ],
  //     tax: 447.72,
  //   },
  // },
];
