// dummyListings.js
// Sample data for Airbnb-clone listings across Pakistan.
// 25 listings each for Islamabad, Rawalpindi, Lahore, and Karachi (100 total).
// images[0] = hero image (shown on the card / list view)
// images[1..3] = shown in the gallery/modal when user clicks the card or hits "Reserve"
// All images are INTERIOR shots (living rooms, bedrooms, kitchens, bathrooms).

const dummyListings = [
  {
    "id": 1,
    "title": "Independent House in F-6",
    "location": "F-6, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 27000,
    "currency": "PKR",
    "rating": 4.82,
    "host": "Areeba",
    "description": "A independent house located in F-6, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Gas heater",
      "Free parking",
      "Air conditioning",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 2,
    "title": "Family House in F-7",
    "location": "F-7, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 44500,
    "currency": "PKR",
    "rating": 4.55,
    "host": "Adnan",
    "description": "A family house located in F-7, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Elevator",
      "Washer",
      "Prayer room (Mosalla)",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 3,
    "title": "Spacious Farmhouse in F-8",
    "location": "F-8, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 31500,
    "currency": "PKR",
    "rating": 4.35,
    "host": "Mahnoor",
    "description": "A spacious farmhouse located in F-8, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Study room",
      "Balcony",
      "Solar power",
      "Lawn/Garden",
      "Dining area"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 4,
    "title": "Luxury Bungalow in F-10",
    "location": "F-10, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 19000,
    "currency": "PKR",
    "rating": 4.86,
    "host": "Mariam",
    "description": "A luxury bungalow located in F-10, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Washer",
      "Air conditioning",
      "Dining area",
      "Solar power"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 5,
    "title": "Contemporary Duplex in F-11",
    "location": "F-11, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 29000,
    "currency": "PKR",
    "rating": 4.43,
    "host": "Amna",
    "description": "A contemporary duplex located in F-11, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Prayer room (Mosalla)",
      "Solar power",
      "Wifi",
      "Balcony",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 6,
    "title": "Elegant Townhouse in E-11",
    "location": "E-11, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 37000,
    "currency": "PKR",
    "rating": 4.65,
    "host": "Faisal",
    "description": "A elegant townhouse located in E-11, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Free parking",
      "Study room",
      "CCTV",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 7,
    "title": "Chic Studio Flat in G-6",
    "location": "G-6, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 34500,
    "currency": "PKR",
    "rating": 4.39,
    "host": "Zara",
    "description": "A chic studio flat located in G-6, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Backup generator",
      "Gas heater",
      "CCTV",
      "Free parking",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 8,
    "title": "Elegant Townhouse in G-9",
    "location": "G-9, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 9000,
    "currency": "PKR",
    "rating": 4.55,
    "host": "Shahzad",
    "description": "A elegant townhouse located in G-9, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Servant quarter",
      "Wifi",
      "Lawn/Garden",
      "Prayer room (Mosalla)"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 9,
    "title": "Family House in G-10",
    "location": "G-10, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 37500,
    "currency": "PKR",
    "rating": 4.34,
    "host": "Shahzad",
    "description": "A family house located in G-10, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Solar power",
      "Lawn/Garden",
      "Geyser",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 10,
    "title": "Furnished Flat in Bahria Town Islamabad",
    "location": "Bahria Town Islamabad, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 6500,
    "currency": "PKR",
    "rating": 4.39,
    "host": "Sana",
    "description": "A furnished flat located in Bahria Town Islamabad, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Rooftop access",
      "Lawn/Garden",
      "Free parking",
      "Prayer room (Mosalla)"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 11,
    "title": "Modern Villa in DHA Islamabad",
    "location": "DHA Islamabad, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 34000,
    "currency": "PKR",
    "rating": 4.53,
    "host": "Ayesha",
    "description": "A modern villa located in DHA Islamabad, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Study room",
      "Backup generator",
      "Security guard",
      "Elevator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 12,
    "title": "Furnished Flat in Blue Area",
    "location": "Blue Area, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 37000,
    "currency": "PKR",
    "rating": 4.34,
    "host": "Iqra",
    "description": "A furnished flat located in Blue Area, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Gas heater",
      "CCTV",
      "Rooftop access",
      "Servant quarter",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 13,
    "title": "Executive Apartment in Bani Gala",
    "location": "Bani Gala, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 16000,
    "currency": "PKR",
    "rating": 4.34,
    "host": "Asad",
    "description": "A executive apartment located in Bani Gala, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Gas heater",
      "Study room",
      "Rooftop access",
      "Geyser",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 14,
    "title": "Furnished Flat in Chak Shahzad",
    "location": "Chak Shahzad, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 40500,
    "currency": "PKR",
    "rating": 4.58,
    "host": "Sana",
    "description": "A furnished flat located in Chak Shahzad, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Security guard",
      "Balcony",
      "Elevator",
      "Dining area"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 15,
    "title": "Elegant Townhouse in PWD Housing Scheme",
    "location": "PWD Housing Scheme, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 14500,
    "currency": "PKR",
    "rating": 4.7,
    "host": "Junaid",
    "description": "A elegant townhouse located in PWD Housing Scheme, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Security guard",
      "Lawn/Garden",
      "Washer",
      "Rooftop access"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 16,
    "title": "Boutique Guest House in Margalla Town",
    "location": "Margalla Town, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 24500,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Rabia",
    "description": "A boutique guest house located in Margalla Town, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Free parking",
      "Air conditioning",
      "Rooftop access",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 17,
    "title": "Independent House in Soan Garden",
    "location": "Soan Garden, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 24000,
    "currency": "PKR",
    "rating": 4.68,
    "host": "Faisal",
    "description": "A independent house located in Soan Garden, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "CCTV",
      "Backup generator",
      "Dining area",
      "Gas heater"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 18,
    "title": "Contemporary Duplex in Sector I-8",
    "location": "Sector I-8, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 31500,
    "currency": "PKR",
    "rating": 4.68,
    "host": "Mariam",
    "description": "A contemporary duplex located in Sector I-8, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Gas heater",
      "Balcony",
      "Washer",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 19,
    "title": "Independent House in Sector H-8",
    "location": "Sector H-8, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 11500,
    "currency": "PKR",
    "rating": 4.5,
    "host": "Iqra",
    "description": "A independent house located in Sector H-8, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Dining area",
      "Prayer room (Mosalla)",
      "Solar power",
      "Lawn/Garden"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 20,
    "title": "Contemporary Duplex in Diplomatic Enclave",
    "location": "Diplomatic Enclave, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 25000,
    "currency": "PKR",
    "rating": 4.78,
    "host": "Mariam",
    "description": "A contemporary duplex located in Diplomatic Enclave, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Kitchen",
      "Prayer room (Mosalla)",
      "Study room",
      "Wifi"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 21,
    "title": "Furnished Flat in Golra Road",
    "location": "Golra Road, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 25500,
    "currency": "PKR",
    "rating": 5,
    "host": "Sadia",
    "description": "A furnished flat located in Golra Road, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Lawn/Garden",
      "Prayer room (Mosalla)",
      "Backup generator",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 22,
    "title": "Executive Apartment in Ghouri Town",
    "location": "Ghouri Town, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 13000,
    "currency": "PKR",
    "rating": 4.34,
    "host": "Adnan",
    "description": "A executive apartment located in Ghouri Town, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Washer",
      "Study room",
      "Lawn/Garden",
      "Prayer room (Mosalla)"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 23,
    "title": "Chic Studio Flat in Sector D-12",
    "location": "Sector D-12, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 23000,
    "currency": "PKR",
    "rating": 4.77,
    "host": "Mahnoor",
    "description": "A chic studio flat located in Sector D-12, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Servant quarter",
      "Study room",
      "Dining area",
      "Kitchen",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 24,
    "title": "Penthouse Suite in Naval Anchorage",
    "location": "Naval Anchorage, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 25500,
    "currency": "PKR",
    "rating": 4.84,
    "host": "Rabia",
    "description": "A penthouse suite located in Naval Anchorage, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Solar power",
      "Servant quarter",
      "Washer",
      "Elevator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 25,
    "title": "Contemporary Duplex in Airport Road",
    "location": "Airport Road, Islamabad, Pakistan",
    "city": "Islamabad",
    "price": 43500,
    "currency": "PKR",
    "rating": 4.36,
    "host": "Kashif",
    "description": "A contemporary duplex located in Airport Road, Islamabad, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Gas heater",
      "Balcony",
      "Wifi",
      "Servant quarter",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 26,
    "title": "Penthouse Suite in Bahria Town Rawalpindi",
    "location": "Bahria Town Rawalpindi, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 38500,
    "currency": "PKR",
    "rating": 4.9,
    "host": "Rizwan",
    "description": "A penthouse suite located in Bahria Town Rawalpindi, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "CCTV",
      "Backup generator",
      "Washer",
      "Kitchen",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 27,
    "title": "Elegant Townhouse in DHA Rawalpindi",
    "location": "DHA Rawalpindi, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 34500,
    "currency": "PKR",
    "rating": 4.31,
    "host": "Naveed",
    "description": "A elegant townhouse located in DHA Rawalpindi, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "CCTV",
      "Wifi",
      "Solar power",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 28,
    "title": "Luxury Bungalow in Saddar",
    "location": "Saddar, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 19000,
    "currency": "PKR",
    "rating": 4.65,
    "host": "Imran",
    "description": "A luxury bungalow located in Saddar, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Rooftop access",
      "Air conditioning",
      "Backup generator",
      "Balcony",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 29,
    "title": "Luxury Bungalow in Chaklala",
    "location": "Chaklala, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 7500,
    "currency": "PKR",
    "rating": 4.94,
    "host": "Areeba",
    "description": "A luxury bungalow located in Chaklala, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Kitchen",
      "Servant quarter",
      "Free parking",
      "Solar power"
    ],
    "images": [
      "https://loremflickr.com/1200/800/house,exterior",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 30,
    "title": "Independent House in Askari Housing",
    "location": "Askari Housing, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 44500,
    "currency": "PKR",
    "rating": 4.4,
    "host": "Iqra",
    "description": "A independent house located in Askari Housing, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Study room",
      "Balcony",
      "Rooftop access",
      "Wifi",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 31,
    "title": "Hilltop Villa in Satellite Town",
    "location": "Satellite Town, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 17500,
    "currency": "PKR",
    "rating": 4.76,
    "host": "Naveed",
    "description": "A hilltop villa located in Satellite Town, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "CCTV",
      "Solar power",
      "Servant quarter",
      "Wifi",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 32,
    "title": "Executive Apartment in Adiala Road",
    "location": "Adiala Road, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 35000,
    "currency": "PKR",
    "rating": 4.71,
    "host": "Rabia",
    "description": "A executive apartment located in Adiala Road, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Prayer room (Mosalla)",
      "Security guard",
      "Wifi",
      "Elevator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 33,
    "title": "Penthouse Suite in Committee Chowk",
    "location": "Committee Chowk, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 29000,
    "currency": "PKR",
    "rating": 4.77,
    "host": "Ahmed",
    "description": "A penthouse suite located in Committee Chowk, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Dining area",
      "Wifi",
      "Solar power",
      "Air conditioning",
      "Prayer room (Mosalla)"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 34,
    "title": "Furnished Flat in Westridge",
    "location": "Westridge, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 18500,
    "currency": "PKR",
    "rating": 4.85,
    "host": "Laiba",
    "description": "A furnished flat located in Westridge, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Wifi",
      "Gas heater",
      "Washer",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 35,
    "title": "Family House in Cantt Area",
    "location": "Cantt Area, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 36500,
    "currency": "PKR",
    "rating": 4.5,
    "host": "Shahzad",
    "description": "A family house located in Cantt Area, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Rooftop access",
      "Servant quarter",
      "Washer",
      "Security guard",
      "Lawn/Garden"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 36,
    "title": "Garden House in Gulshan-e-Dadan Khan",
    "location": "Gulshan-e-Dadan Khan, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 26000,
    "currency": "PKR",
    "rating": 4.6,
    "host": "Imran",
    "description": "A garden house located in Gulshan-e-Dadan Khan, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Prayer room (Mosalla)",
      "Kitchen",
      "Elevator",
      "Lawn/Garden"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 37,
    "title": "Executive Apartment in Race Course Road",
    "location": "Race Course Road, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 43000,
    "currency": "PKR",
    "rating": 4.32,
    "host": "Zara",
    "description": "A executive apartment located in Race Course Road, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Rooftop access",
      "Solar power",
      "Prayer room (Mosalla)",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 38,
    "title": "Hilltop Villa in PWD Chaklala Scheme",
    "location": "PWD Chaklala Scheme, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 42000,
    "currency": "PKR",
    "rating": 4.61,
    "host": "Sana",
    "description": "A hilltop villa located in PWD Chaklala Scheme, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Elevator",
      "Servant quarter",
      "Rooftop access",
      "Balcony",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 39,
    "title": "Executive Apartment in Peshawar Road",
    "location": "Peshawar Road, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 44500,
    "currency": "PKR",
    "rating": 4.87,
    "host": "Fatima",
    "description": "A executive apartment located in Peshawar Road, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Free parking",
      "Washer",
      "Study room",
      "Lawn/Garden"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 40,
    "title": "Garden House in Sadiqabad",
    "location": "Sadiqabad, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 37500,
    "currency": "PKR",
    "rating": 4.6,
    "host": "Fatima",
    "description": "A garden house located in Sadiqabad, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Dining area",
      "Elevator",
      "Security guard",
      "Lawn/Garden",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 41,
    "title": "Furnished Flat in Morgah",
    "location": "Morgah, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 27500,
    "currency": "PKR",
    "rating": 4.4,
    "host": "Amna",
    "description": "A furnished flat located in Morgah, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Servant quarter",
      "Wifi",
      "Kitchen",
      "Gas heater",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 42,
    "title": "Luxury Bungalow in Chandni Chowk",
    "location": "Chandni Chowk, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 29500,
    "currency": "PKR",
    "rating": 4.57,
    "host": "Asad",
    "description": "A luxury bungalow located in Chandni Chowk, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Servant quarter",
      "Security guard",
      "CCTV",
      "Kitchen",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 43,
    "title": "Elegant Townhouse in Muslim Town",
    "location": "Muslim Town, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 23500,
    "currency": "PKR",
    "rating": 4.86,
    "host": "Mahnoor",
    "description": "A elegant townhouse located in Muslim Town, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Prayer room (Mosalla)",
      "Wifi",
      "CCTV",
      "Washer",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 44,
    "title": "Independent House in Bank Road",
    "location": "Bank Road, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 28500,
    "currency": "PKR",
    "rating": 4.43,
    "host": "Usman",
    "description": "A independent house located in Bank Road, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Servant quarter",
      "Solar power",
      "Dining area",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 45,
    "title": "Luxury Bungalow in Lalkurti",
    "location": "Lalkurti, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 9000,
    "currency": "PKR",
    "rating": 4.4,
    "host": "Tariq",
    "description": "A luxury bungalow located in Lalkurti, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "CCTV",
      "Gas heater",
      "Air conditioning",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 46,
    "title": "Furnished Flat in Gulraiz Housing Scheme",
    "location": "Gulraiz Housing Scheme, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 19500,
    "currency": "PKR",
    "rating": 4.68,
    "host": "Kashif",
    "description": "A furnished flat located in Gulraiz Housing Scheme, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Solar power",
      "Geyser",
      "Security guard",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 47,
    "title": "Garden House in Airport Housing Society",
    "location": "Airport Housing Society, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 11500,
    "currency": "PKR",
    "rating": 4.72,
    "host": "Rabia",
    "description": "A garden house located in Airport Housing Society, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Elevator",
      "Wifi",
      "Backup generator",
      "Rooftop access"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 48,
    "title": "Independent House in Media Town",
    "location": "Media Town, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 44000,
    "currency": "PKR",
    "rating": 4.82,
    "host": "Naveed",
    "description": "A independent house located in Media Town, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Lawn/Garden",
      "Prayer room (Mosalla)",
      "Elevator",
      "Gas heater"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 49,
    "title": "Independent House in Al-Noor Colony",
    "location": "Al-Noor Colony, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 10500,
    "currency": "PKR",
    "rating": 4.88,
    "host": "Rizwan",
    "description": "A independent house located in Al-Noor Colony, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Rooftop access",
      "Washer",
      "CCTV",
      "Servant quarter",
      "Wifi"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 50,
    "title": "Elegant Townhouse in New Katarian",
    "location": "New Katarian, Rawalpindi, Pakistan",
    "city": "Rawalpindi",
    "price": 30000,
    "currency": "PKR",
    "rating": 4.45,
    "host": "Shahzad",
    "description": "A elegant townhouse located in New Katarian, Rawalpindi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Gas heater",
      "Kitchen",
      "Free parking",
      "Geyser",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 51,
    "title": "Cozy Apartment in DHA Phase 5",
    "location": "DHA Phase 5, Lahore, Pakistan",
    "city": "Lahore",
    "price": 19500,
    "currency": "PKR",
    "rating": 4.43,
    "host": "Amna",
    "description": "A cozy apartment located in DHA Phase 5, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Rooftop access",
      "Elevator",
      "Solar power",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 52,
    "title": "Contemporary Duplex in DHA Phase 6",
    "location": "DHA Phase 6, Lahore, Pakistan",
    "city": "Lahore",
    "price": 34000,
    "currency": "PKR",
    "rating": 4.85,
    "host": "Amna",
    "description": "A contemporary duplex located in DHA Phase 6, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Wifi",
      "Elevator",
      "Prayer room (Mosalla)",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 53,
    "title": "Contemporary Duplex in Gulberg III",
    "location": "Gulberg III, Lahore, Pakistan",
    "city": "Lahore",
    "price": 39000,
    "currency": "PKR",
    "rating": 4.8,
    "host": "Ahmed",
    "description": "A contemporary duplex located in Gulberg III, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Lawn/Garden",
      "Study room",
      "Security guard",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 54,
    "title": "Independent House in Johar Town",
    "location": "Johar Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 9500,
    "currency": "PKR",
    "rating": 4.86,
    "host": "Ahmed",
    "description": "A independent house located in Johar Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Solar power",
      "Study room",
      "Free parking",
      "Security guard"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 55,
    "title": "Penthouse Suite in Model Town",
    "location": "Model Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 22500,
    "currency": "PKR",
    "rating": 4.61,
    "host": "Naveed",
    "description": "A penthouse suite located in Model Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Kitchen",
      "Geyser",
      "Air conditioning",
      "Wifi"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 56,
    "title": "Elegant Townhouse in Bahria Town Lahore",
    "location": "Bahria Town Lahore, Lahore, Pakistan",
    "city": "Lahore",
    "price": 29000,
    "currency": "PKR",
    "rating": 4.83,
    "host": "Rizwan",
    "description": "A elegant townhouse located in Bahria Town Lahore, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Servant quarter",
      "CCTV",
      "Lawn/Garden",
      "Security guard"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 57,
    "title": "Luxury Bungalow in Cavalry Ground",
    "location": "Cavalry Ground, Lahore, Pakistan",
    "city": "Lahore",
    "price": 42000,
    "currency": "PKR",
    "rating": 4.33,
    "host": "Tariq",
    "description": "A luxury bungalow located in Cavalry Ground, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Solar power",
      "CCTV",
      "Servant quarter",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 58,
    "title": "Furnished Flat in Cantt",
    "location": "Cantt, Lahore, Pakistan",
    "city": "Lahore",
    "price": 23000,
    "currency": "PKR",
    "rating": 4.53,
    "host": "Rizwan",
    "description": "A furnished flat located in Cantt, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Gas heater",
      "Study room",
      "Wifi",
      "Security guard"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 59,
    "title": "Luxury Bungalow in Faisal Town",
    "location": "Faisal Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 38000,
    "currency": "PKR",
    "rating": 4.89,
    "host": "Junaid",
    "description": "A luxury bungalow located in Faisal Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Rooftop access",
      "Wifi",
      "Air conditioning",
      "Gas heater",
      "Security guard"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 60,
    "title": "Contemporary Duplex in Wapda Town",
    "location": "Wapda Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 23500,
    "currency": "PKR",
    "rating": 4.89,
    "host": "Sadia",
    "description": "A contemporary duplex located in Wapda Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Washer",
      "Air conditioning",
      "Free parking",
      "Elevator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 61,
    "title": "Penthouse Suite in Valencia Town",
    "location": "Valencia Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 40500,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Areeba",
    "description": "A penthouse suite located in Valencia Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Prayer room (Mosalla)",
      "CCTV",
      "Study room",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 62,
    "title": "Luxury Bungalow in Garden Town",
    "location": "Garden Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 9500,
    "currency": "PKR",
    "rating": 4.48,
    "host": "Sana",
    "description": "A luxury bungalow located in Garden Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Dining area",
      "Wifi",
      "Gas heater",
      "Balcony",
      "Geyser"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 63,
    "title": "Spacious Farmhouse in Iqbal Town",
    "location": "Iqbal Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 7500,
    "currency": "PKR",
    "rating": 4.54,
    "host": "Ayesha",
    "description": "A spacious farmhouse located in Iqbal Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Rooftop access",
      "Dining area",
      "Wifi",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 64,
    "title": "Penthouse Suite in Township",
    "location": "Township, Lahore, Pakistan",
    "city": "Lahore",
    "price": 19500,
    "currency": "PKR",
    "rating": 4.9,
    "host": "Tariq",
    "description": "A penthouse suite located in Township, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Balcony",
      "Security guard",
      "Dining area",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 65,
    "title": "Chic Studio Flat in Askari 10",
    "location": "Askari 10, Lahore, Pakistan",
    "city": "Lahore",
    "price": 42000,
    "currency": "PKR",
    "rating": 4.92,
    "host": "Imran",
    "description": "A chic studio flat located in Askari 10, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Elevator",
      "Kitchen",
      "Servant quarter",
      "Free parking",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 66,
    "title": "Luxury Bungalow in EME Society",
    "location": "EME Society, Lahore, Pakistan",
    "city": "Lahore",
    "price": 39000,
    "currency": "PKR",
    "rating": 4.85,
    "host": "Sobia",
    "description": "A luxury bungalow located in EME Society, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Washer",
      "Lawn/Garden",
      "Prayer room (Mosalla)",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 67,
    "title": "Independent House in Allama Iqbal Town",
    "location": "Allama Iqbal Town, Lahore, Pakistan",
    "city": "Lahore",
    "price": 7500,
    "currency": "PKR",
    "rating": 4.76,
    "host": "Hamza",
    "description": "A independent house located in Allama Iqbal Town, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Free parking",
      "CCTV",
      "Elevator",
      "Solar power"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 68,
    "title": "Cozy Apartment in Barki Road",
    "location": "Barki Road, Lahore, Pakistan",
    "city": "Lahore",
    "price": 13500,
    "currency": "PKR",
    "rating": 4.97,
    "host": "Adnan",
    "description": "A cozy apartment located in Barki Road, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Rooftop access",
      "Gas heater",
      "Lawn/Garden",
      "Kitchen",
      "Geyser"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 69,
    "title": "Spacious Farmhouse in Sabzazar",
    "location": "Sabzazar, Lahore, Pakistan",
    "city": "Lahore",
    "price": 17500,
    "currency": "PKR",
    "rating": 4.67,
    "host": "Zara",
    "description": "A spacious farmhouse located in Sabzazar, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Free parking",
      "Security guard",
      "Air conditioning",
      "Study room"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 70,
    "title": "Furnished Flat in Gulshan-e-Ravi",
    "location": "Gulshan-e-Ravi, Lahore, Pakistan",
    "city": "Lahore",
    "price": 13500,
    "currency": "PKR",
    "rating": 4.95,
    "host": "Ayesha",
    "description": "A furnished flat located in Gulshan-e-Ravi, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Prayer room (Mosalla)",
      "Balcony",
      "Geyser",
      "Wifi",
      "Rooftop access"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 71,
    "title": "Boutique Guest House in Shadman",
    "location": "Shadman, Lahore, Pakistan",
    "city": "Lahore",
    "price": 6500,
    "currency": "PKR",
    "rating": 4.58,
    "host": "Iqra",
    "description": "A boutique guest house located in Shadman, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Servant quarter",
      "Gas heater",
      "Prayer room (Mosalla)",
      "Washer"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 72,
    "title": "Chic Studio Flat in Samanabad",
    "location": "Samanabad, Lahore, Pakistan",
    "city": "Lahore",
    "price": 24000,
    "currency": "PKR",
    "rating": 4.71,
    "host": "Bilal",
    "description": "A chic studio flat located in Samanabad, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Gas heater",
      "Rooftop access",
      "Elevator",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 73,
    "title": "Boutique Guest House in Raiwind Road",
    "location": "Raiwind Road, Lahore, Pakistan",
    "city": "Lahore",
    "price": 17500,
    "currency": "PKR",
    "rating": 4.75,
    "host": "Junaid",
    "description": "A boutique guest house located in Raiwind Road, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Balcony",
      "Kitchen",
      "Air conditioning",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 74,
    "title": "Cozy Apartment in Bedian Road",
    "location": "Bedian Road, Lahore, Pakistan",
    "city": "Lahore",
    "price": 41000,
    "currency": "PKR",
    "rating": 4.92,
    "host": "Waqas",
    "description": "A cozy apartment located in Bedian Road, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Geyser",
      "Gas heater",
      "Servant quarter",
      "Dining area",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 75,
    "title": "Penthouse Suite in Nishtar Colony",
    "location": "Nishtar Colony, Lahore, Pakistan",
    "city": "Lahore",
    "price": 37500,
    "currency": "PKR",
    "rating": 4.56,
    "host": "Ahmed",
    "description": "A penthouse suite located in Nishtar Colony, Lahore, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Kitchen",
      "Security guard",
      "Rooftop access",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 76,
    "title": "Luxury Bungalow in DHA Phase 6",
    "location": "DHA Phase 6, Karachi, Pakistan",
    "city": "Karachi",
    "price": 25500,
    "currency": "PKR",
    "rating": 4.94,
    "host": "Hamza",
    "description": "A luxury bungalow located in DHA Phase 6, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Rooftop access",
      "Air conditioning",
      "Lawn/Garden",
      "Geyser"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 77,
    "title": "Penthouse Suite in Clifton",
    "location": "Clifton, Karachi, Pakistan",
    "city": "Karachi",
    "price": 19500,
    "currency": "PKR",
    "rating": 4.48,
    "host": "Iqra",
    "description": "A penthouse suite located in Clifton, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Prayer room (Mosalla)",
      "Backup generator",
      "CCTV",
      "Study room",
      "Gas heater"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 78,
    "title": "Cozy Apartment in Bahria Town Karachi",
    "location": "Bahria Town Karachi, Karachi, Pakistan",
    "city": "Karachi",
    "price": 32500,
    "currency": "PKR",
    "rating": 4.42,
    "host": "Adnan",
    "description": "A cozy apartment located in Bahria Town Karachi, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Kitchen",
      "Gas heater",
      "Dining area",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 79,
    "title": "Contemporary Duplex in Gulshan-e-Iqbal",
    "location": "Gulshan-e-Iqbal, Karachi, Pakistan",
    "city": "Karachi",
    "price": 39500,
    "currency": "PKR",
    "rating": 4.5,
    "host": "Amna",
    "description": "A contemporary duplex located in Gulshan-e-Iqbal, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Wifi",
      "Backup generator",
      "Air conditioning",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 80,
    "title": "Luxury Bungalow in Nazimabad",
    "location": "Nazimabad, Karachi, Pakistan",
    "city": "Karachi",
    "price": 12500,
    "currency": "PKR",
    "rating": 4.95,
    "host": "Hira",
    "description": "A luxury bungalow located in Nazimabad, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Elevator",
      "Air conditioning",
      "Rooftop access",
      "Study room",
      "Lawn/Garden"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 81,
    "title": "Modern Villa in PECHS",
    "location": "PECHS, Karachi, Pakistan",
    "city": "Karachi",
    "price": 25500,
    "currency": "PKR",
    "rating": 4.51,
    "host": "Usman",
    "description": "A modern villa located in PECHS, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Free parking",
      "Rooftop access",
      "Kitchen",
      "Geyser"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 82,
    "title": "Contemporary Duplex in North Nazimabad",
    "location": "North Nazimabad, Karachi, Pakistan",
    "city": "Karachi",
    "price": 26000,
    "currency": "PKR",
    "rating": 4.89,
    "host": "Asad",
    "description": "A contemporary duplex located in North Nazimabad, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Solar power",
      "Washer",
      "Wifi",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 83,
    "title": "Penthouse Suite in Malir Cantt",
    "location": "Malir Cantt, Karachi, Pakistan",
    "city": "Karachi",
    "price": 20500,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Zara",
    "description": "A penthouse suite located in Malir Cantt, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Geyser",
      "Gas heater",
      "Balcony",
      "Wifi"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 84,
    "title": "Cozy Apartment in Saddar",
    "location": "Saddar, Karachi, Pakistan",
    "city": "Karachi",
    "price": 12500,
    "currency": "PKR",
    "rating": 4.65,
    "host": "Amna",
    "description": "A cozy apartment located in Saddar, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Backup generator",
      "Kitchen",
      "Solar power",
      "Lawn/Garden",
      "Servant quarter"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 85,
    "title": "Garden House in Korangi",
    "location": "Korangi, Karachi, Pakistan",
    "city": "Karachi",
    "price": 9500,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Fatima",
    "description": "A garden house located in Korangi, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Free parking",
      "Gas heater",
      "Lawn/Garden",
      "Servant quarter",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 86,
    "title": "Penthouse Suite in Gulistan-e-Johar",
    "location": "Gulistan-e-Johar, Karachi, Pakistan",
    "city": "Karachi",
    "price": 40000,
    "currency": "PKR",
    "rating": 4.34,
    "host": "Imran",
    "description": "A penthouse suite located in Gulistan-e-Johar, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Geyser",
      "Kitchen",
      "CCTV",
      "Balcony"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 87,
    "title": "Cozy Apartment in Defence View",
    "location": "Defence View, Karachi, Pakistan",
    "city": "Karachi",
    "price": 37500,
    "currency": "PKR",
    "rating": 4.59,
    "host": "Asad",
    "description": "A cozy apartment located in Defence View, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "CCTV",
      "Geyser",
      "Prayer room (Mosalla)",
      "Backup generator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 88,
    "title": "Luxury Bungalow in Federal B Area",
    "location": "Federal B Area, Karachi, Pakistan",
    "city": "Karachi",
    "price": 45000,
    "currency": "PKR",
    "rating": 4.58,
    "host": "Sobia",
    "description": "A luxury bungalow located in Federal B Area, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Solar power",
      "Kitchen",
      "Study room",
      "Rooftop access",
      "Prayer room (Mosalla)"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 89,
    "title": "Family House in Bath Island",
    "location": "Bath Island, Karachi, Pakistan",
    "city": "Karachi",
    "price": 12000,
    "currency": "PKR",
    "rating": 4.57,
    "host": "Hamza",
    "description": "A family house located in Bath Island, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Lawn/Garden",
      "Wifi",
      "CCTV",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 90,
    "title": "Boutique Guest House in Shahra-e-Faisal",
    "location": "Shahra-e-Faisal, Karachi, Pakistan",
    "city": "Karachi",
    "price": 24500,
    "currency": "PKR",
    "rating": 4.77,
    "host": "Ahmed",
    "description": "A boutique guest house located in Shahra-e-Faisal, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "CCTV",
      "Elevator",
      "Solar power",
      "Study room",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  },
  {
    "id": 91,
    "title": "Executive Apartment in Scheme 33",
    "location": "Scheme 33, Karachi, Pakistan",
    "city": "Karachi",
    "price": 10500,
    "currency": "PKR",
    "rating": 4.64,
    "host": "Imran",
    "description": "A executive apartment located in Scheme 33, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Balcony",
      "Wifi",
      "Prayer room (Mosalla)",
      "Solar power",
      "Servant quarter"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=1200",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"
    ]
  },
  {
    "id": 92,
    "title": "Spacious Farmhouse in Askari 4",
    "location": "Askari 4, Karachi, Pakistan",
    "city": "Karachi",
    "price": 14500,
    "currency": "PKR",
    "rating": 4.96,
    "host": "Shahzad",
    "description": "A spacious farmhouse located in Askari 4, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "CCTV",
      "Solar power",
      "Prayer room (Mosalla)",
      "Study room",
      "Rooftop access"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200"
    ]
  },
  {
    "id": 93,
    "title": "Hilltop Villa in Gulshan-e-Maymar",
    "location": "Gulshan-e-Maymar, Karachi, Pakistan",
    "city": "Karachi",
    "price": 9500,
    "currency": "PKR",
    "rating": 4.56,
    "host": "Faisal",
    "description": "A hilltop villa located in Gulshan-e-Maymar, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Kitchen",
      "Free parking",
      "Solar power",
      "Washer",
      "Gas heater"
    ],
    "images": [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200"
    ]
  },
  {
    "id": 94,
    "title": "Boutique Guest House in Old Clifton",
    "location": "Old Clifton, Karachi, Pakistan",
    "city": "Karachi",
    "price": 44000,
    "currency": "PKR",
    "rating": 4.5,
    "host": "Sadia",
    "description": "A boutique guest house located in Old Clifton, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Prayer room (Mosalla)",
      "Lawn/Garden",
      "Solar power",
      "Geyser",
      "Kitchen"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200"
    ]
  },
  {
    "id": 95,
    "title": "Family House in Kemari",
    "location": "Kemari, Karachi, Pakistan",
    "city": "Karachi",
    "price": 6500,
    "currency": "PKR",
    "rating": 4.41,
    "host": "Mahnoor",
    "description": "A family house located in Kemari, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Backup generator",
      "Wifi",
      "Washer",
      "Dining area",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200"
    ]
  },
  {
    "id": 96,
    "title": "Contemporary Duplex in Tariq Road",
    "location": "Tariq Road, Karachi, Pakistan",
    "city": "Karachi",
    "price": 29500,
    "currency": "PKR",
    "rating": 4.54,
    "host": "Naveed",
    "description": "A contemporary duplex located in Tariq Road, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Washer",
      "Lawn/Garden",
      "Solar power",
      "Security guard",
      "Free parking"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200"
    ]
  },
  {
    "id": 97,
    "title": "Chic Studio Flat in Zamzama",
    "location": "Zamzama, Karachi, Pakistan",
    "city": "Karachi",
    "price": 8500,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Imran",
    "description": "A chic studio flat located in Zamzama, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Kitchen",
      "Study room",
      "Washer",
      "Solar power"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200"
    ]
  },
  {
    "id": 98,
    "title": "Garden House in Frere Town",
    "location": "Frere Town, Karachi, Pakistan",
    "city": "Karachi",
    "price": 42500,
    "currency": "PKR",
    "rating": 4.38,
    "host": "Usman",
    "description": "A garden house located in Frere Town, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Air conditioning",
      "Wifi",
      "Backup generator",
      "Gas heater",
      "Elevator"
    ],
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200",
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200"
    ]
  },
  {
    "id": 99,
    "title": "Spacious Farmhouse in Cantt Station Area",
    "location": "Cantt Station Area, Karachi, Pakistan",
    "city": "Karachi",
    "price": 18000,
    "currency": "PKR",
    "rating": 4.82,
    "host": "Shahzad",
    "description": "A spacious farmhouse located in Cantt Station Area, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Lawn/Garden",
      "Kitchen",
      "Free parking",
      "Servant quarter",
      "CCTV"
    ],
    "images": [
      "https://images.unsplash.com/photo-1560449017-7dcd80e19f8a?w=1200",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
    ]
  },
  {
    "id": 100,
    "title": "Penthouse Suite in Surjani Town",
    "location": "Surjani Town, Karachi, Pakistan",
    "city": "Karachi",
    "price": 15000,
    "currency": "PKR",
    "rating": 4.49,
    "host": "Rizwan",
    "description": "A penthouse suite located in Surjani Town, Karachi, offering a comfortable stay with modern interiors and easy access to the city's main attractions.",
    "amenities": [
      "Wifi",
      "Prayer room (Mosalla)",
      "Security guard",
      "Servant quarter",
      "Air conditioning"
    ],
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
    ]
  }
];

export default dummyListings;