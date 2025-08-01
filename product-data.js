const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    description: "High-quality sound with noise cancellation.",
    price: 59.99,
    rate: 4.5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71xvfA4ozZL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Smart LED TV 55-inch",
    category: "Electronics",
    description: "4K Ultra HD Smart TV with HDR.",
    price: 499.99,
    rate: 4.7,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/samsung_un55h6400afxza_un55h6400_55_smart_led_1026263.jpg",
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    description: "Insulated stainless steel water bottle.",
    price: 24.99,
    rate: 4.6,
    image:
      "https://m.media-amazon.com/images/I/719UK+f1SWL._AC_UL960_QL65_.jpg",
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    description: "Ergonomic design with customizable buttons.",
    price: 45.99,
    rate: 4.4,
    image:
      "https://i5.walmartimages.com/seo/Wireless-Gaming-Mouse-Laptop-TSV-Rechargeable-USB-2-4G-PC-5-Adjustable-DPI-7-Colors-LED-Lights-6-Silent-Buttons-Ergonomic-Optical-Computer-Desktop-Ma_8c2707d9-286f-440f-8a7f-8639ccb6e247_1.6e24c983626322e82e3fb15f4ed7e13a.jpeg",
  },
  {
    id: 5,
    name: "Organic Green Tea",
    category: "Food & Beverage",
    description: "100% organic green tea leaves.",
    price: 9.99,
    rate: 4.3,
    image:
      "https://i5.walmartimages.com/asr/9b6011c1-f435-4303-b589-c3161fcfdcff_1.beb5f59934865d8d7e96946644a5ecdb.jpeg",
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports & Fitness",
    description: "Eco-friendly and non-slip yoga mat.",
    price: 29.99,
    rate: 4.5,
    image:
      "https://ae01.alicdn.com/kf/HTB1yVg9JVXXXXcbXVXXq6xXFXXXC/FANGCAN-FCY-02-PVC-Yoga-Mat-Non-toxic-Environmentally-Friendly-Yoga-Mat-Slip-prooving-Yoga-Mat.jpg",
  },
  {
    id: 7,
    name: "Electric Kettle",
    category: "Home & Kitchen",
    description: "Fast-boiling electric kettle.",
    price: 34.99,
    rate: 4.4,
    image:
      "https://i5.walmartimages.com/asr/3e387115-6d07-47f0-b7c7-51c197dd458f_2.58d408f4e37854ea0b5f261f9d9b1c44.jpeg",
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Fashion",
    description: "Genuine leather wallet with multiple card slots.",
    price: 39.99,
    rate: 4.2,
    image:
      "https://th.bing.com/th/id/OIP.mb-DY-xbQO90VPG4rI24UAHaHd?rs=1&pid=ImgDetMain",
  },
  {
    id: 9,
    name: "Blender",
    category: "Home & Kitchen",
    description: "High-speed blender for smoothies and shakes.",
    price: 89.99,
    rate: 4.6,
    image:
      "https://i5.walmartimages.com/seo/Oster-6-Cup-Blender-Easy-to-Clean-Smoothie-Blender-in-Black_a38a70fd-feae-4b33-b4fc-7ec34276a46f.40fab336ab539a6d985c1b06e32d22de.jpeg",

  },
  {
    id: 10,
    name: "Running Shoes",
    category: "Sports & Fitness",
    description: "Lightweight running shoes with cushioning.",
    price: 79.99,
    rate: 4.7,
    image:
      "https://th.bing.com/th/id/R.e3d001282860f1d5e30285f6f52d7f9c?rik=CBEvO0W45Vd3Sw&pid=ImgRaw&r=0",
  },
  {
    id: 11,
    name: "Wireless Charger",
    category: "Electronics",
    description: "Fast wireless charging pad.",
    price: 29.99,
    rate: 4.3,
    image: "https://m.media-amazon.com/images/I/81VfBSdIPvL.jpg",
  },
  {
    id: 12,
    name: "Backpack",
    category: "Fashion",
    description: "Durable and water-resistant backpack.",
    price: 49.99,
    rate: 4.5,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/manfrotto_mb_ma_trv_gy_advanced_travel_backpack_grey_1177051.jpg",
  },
  {
    id: 13,
    name: "Coffee Maker",
    category: "Home & Kitchen",
    description: "12-cup programmable coffee maker.",
    price: 59.99,
    rate: 4.4,
    image:
      "https://i5.walmartimages.com/asr/16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg",
  },
  {
    id: 14,
    name: "Smartwatch",
    category: "Electronics",
    description: "Fitness tracker with heart rate monitor.",
    price: 129.99,
    rate: 4.6,
    image: "https://m.media-amazon.com/images/I/71erhKJ-jhL._AC_SL1500_.jpg",
  },
  {
    id: 15,
    name: "Air Fryer",
    category: "Home & Kitchen",
    description: "Healthy cooking with less oil.",
    price: 99.99,
    rate: 4.5,
    image:
      "https://i5.walmartimages.com/asr/2c0055e8-8dea-4bb7-a08f-0b903fe2488c.094e9c43810b5aa65022354921a3b9ef.jpeg",
  },
  {
    id: 16,
    name: "Desk Lamp",
    category: "Home & Kitchen",
    description: "Adjustable LED desk lamp.",
    price: 39.99,
    rate: 4.3,
    image:
      "https://cdn.images.fecom-media.com/FE00006284/images/Flexible%20Desk%20Lamp_7vp_3EfGQk.jpg",
  },
  {
    id: 17,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    description: "Waterproof and portable speaker.",
    price: 69.99,
    rate: 4.5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/811hGWxj1gL._AC_SL1500_.jpg",
  },
  {
    id: 18,
    name: "Electric Toothbrush",
    category: "Health & Personal Care",
    description: "Rechargeable electric toothbrush.",
    price: 49.99,
    rate: 4.4,
    image:
      "https://i5.walmartimages.com/asr/2dd09fee-6b40-41e0-95f3-61fe62f4c252.ca67de8763077368b4fac62a44ebaae6.jpeg",
  },
  {
    id: 19,
    name: "Laptop Backpack",
    category: "Fashion",
    description: "Sleek and durable laptop backpack.",
    price: 54.99,
    rate: 4.6,
    image:
      "https://www.targus.com/content/images/thumbs/0002494_17-drifter-ii-laptop-backpack.jpeg",
  },
  {
    id: 20,
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    description: "Over-ear headphones with noise cancellation.",
    price: 199.99,
    rate: 4.7,
    image:
      "https://techstory.in/wp-content/uploads/2020/02/01LW4049122-HeroSquare-f670a23de42e4206b42e87a61fe486fe.jpg",
  },
  {
    id: 21,
    name: "Electric Scooter",
    category: "Sports & Fitness",
    description: "Foldable electric scooter for commuting.",
    price: 299.99,
    rate: 4.5,
    image:
      "https://th.bing.com/th/id/R.38d82eb7933f404ed196024d7e67cc8d?rik=%2bDSR0zHSS%2bu5zQ&pid=ImgRaw&r=0",
  },
  {
    id: 22,
    name: "Smart Thermostat",
    category: "Home Automation",
    description: "Energy-saving smart thermostat.",
    price: 149.99,
    rate: 4.6,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5852/5852331_sd.jpg",
  },
  {
    id: 23,
    name: "Electric Grill",
    category: "Home & Kitchen",
    description: "Indoor electric grill for healthy cooking.",
    price: 79.99,
    rate: 4.4,
    image:
      "https://th.bing.com/th/id/OIP.W1y0N8SUBdJhFS8B2S4T_gHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 24,
    name: "Gaming Keyboard",
    category: "Electronics",
    description: "Mechanical gaming keyboard with RGB lighting.",
    price: 89.99,
    rate: 4.5,
    image:
      "https://images-cdn.ubuy.co.in/634d011f7b4c27441051324c-gaming-keyboard-tedgem-gaming-keyboards.jpg",
  },
  {
    id: 25,
    name: "Electric Blanket",
    category: "Home & Kitchen",
    description: "Soft and warm electric blanket.",
    price: 59.99,
    rate: 4.3,
    image:
      "https://i5.walmartimages.com/asr/20794c62-9f80-41ad-9bbe-e81862e50f09.4d55ab5471bdb6989b681aa46673ce23.jpeg",
  },
  {
    id: 26,
    name: "Fitness Tracker",
    category: "Sports & Fitness",
    description: "Track your steps, heart rate, and sleep.",
    price: 79.99,
    rate: 4.5,
    image:
      "https://th.bing.com/th/id/R.eba125c1340c60f86835e2ee6913be3d?rik=UDz99h0S3qCUhA&riu=http%3a%2f%2fwww.herstylecode.com%2fwp-content%2fuploads%2f2016%2f11%2fbest-fitness-trackers-3.jpg&ehk=6pvPryXs%2fbDtmXUkA%2blSdr%2fwDPuNdbKZj7A1%2fx7SM18%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 27,
    name: "Robot Vacuum",
    category: "Home Automation",
    description: "Smart robot vacuum with app control.",
    price: 299.99,
    rate: 4.6,
    image:
      "https://i5.walmartimages.com/asr/27d099b3-aff6-41af-97d6-ce6a80ad0982_1.a3b9c134c1d8004084661286fece8371.jpeg",
  },
  {
    id: 28,
    name: "Wireless Mouse",
    category: "Electronics",
    description: "Compact and portable wireless mouse.",
    price: 19.99,
    rate: 4.2,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/Logitech_910_001105_Performance_Mouse_MX_Wireless_647502.jpg",
  },
  {
    id: 29,
    name: "Electric Pressure Cooker",
    category: "Home & Kitchen",
    description: "Multi-functional electric pressure cooker.",
    price: 109.99,
    rate: 4.6,
    image:
      "https://th.bing.com/th/id/R.d1a97c0b4f9a523be46c4b2955ec0d20?rik=XHkVy5mf5ZZAwg&riu=http%3a%2f%2fimages.pressurecookerguide.biz%2fl-m%2f9-in-1-programmable-electric-pressure-cooker-v-3079849120.jpg&ehk=Q0ejTqGQ0QF9IIRTw1amKNmQbh15a8R5W%2bmWzklisAo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 30,
    name: "Smart Doorbell",
    category: "Home Automation",
    description: "Video doorbell with motion detection.",
    price: 199.99,
    rate: 4.5,
    image:
      "https://i5.walmartimages.com/asr/8399bef6-5ad8-4c66-a21b-63742324755e_1.8ea247cd26c1abbf48b989b4a42e4e9e.jpeg",
  },
  {
    id: 31,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    description:
      "Over-ear noise-canceling headphones with deep bass and 40-hour battery life.",
    price: 99.99,
    rate: 4.5,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/skullcandy_s6hbgy_374_hesh_2_bluetooth_headphones_1085703.jpg",
  },
  {
    id: 32,
    name: "Smart Fitness Watch",
    category: "Electronics",
    description:
      "A waterproof smartwatch with heart rate monitoring and fitness tracking features.",
    price: 149.99,
    rate: 4.7,
    image:
      "https://i5.walmartimages.com/asr/220802f0-988a-4593-927a-1c44350906a8_1.6763539a2a35a654d9d2856ec6c2ec6a.png?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
  {
    id: 33,
    name: "Ergonomic Office Chair",
    category: "Home & Kitchen",
    description:
      "Adjustable high-back office chair with lumbar support and breathable mesh.",
    price: 199.99,
    rate: 4.6,
    image: "https://m.media-amazon.com/images/I/81HznWNJPnL.jpg",
  },
  {
    id: 34,
    name: "Portable Espresso Maker",
    category: "Home & Kitchen",
    description: "Compact espresso machine for coffee lovers on the go.",
    price: 79.99,
    rate: 4.4,
    image:
      "https://cdn.shopify.com/s/files/1/0083/6845/5746/products/profile_miniespresso_1024x1024@2x.jpg?v=1575205498",
  },
  {
    id: 35,
    name: "Gaming Mechanical Keyboard",
    category: "Electronics",
    description: "RGB backlit mechanical keyboard with programmable keys.",
    price: 89.99,
    rate: 4.8,
    image: "https://m.media-amazon.com/images/I/71OH4BueKmL._AC_SL1500_.jpg",
  },
  {
    id: 36,
    name: "4K Ultra HD Streaming Device",
    category: "Electronics",
    description:
      "Plug-and-play streaming device supporting 4K HDR and Dolby Atmos.",
    price: 59.99,
    rate: 4.5,
    image: "https://m.media-amazon.com/images/I/61iZ6jMZVSL._AC_SL1500_.jpg",
  },
  {
    id: 37,
    name: "Adjustable Dumbbell Set",
    category: "Fitness Equipment",
    description: "Versatile dumbbell set with adjustable weight plates.",
    price: 129.99,
    rate: 4.6,
    image:
      "https://th.bing.com/th/id/R.ae3848cb7efe5ed146a47d573a5de34a?rik=h1Z1mmy7gc0huA&pid=ImgRaw&r=0",
  },
  {
    id: 38,
    name: "Noise-Canceling Sleep Mask",
    category: "Electronics",
    description:
      "Comfortable sleep mask with built-in noise-canceling Bluetooth headphones.",
    price: 39.99,
    rate: 4.3,
    image: "https://m.media-amazon.com/images/I/71knzwIPTML._AC_SL1500_.jpg",
  },
  {
    id: 39,
    name: "Stainless Steel Air Fryer",
    category: "Home & Kitchen",
    description:
      "Large-capacity air fryer with rapid air technology for healthier cooking.",
    price: 129.99,
    rate: 4.7,
    image:
      "https://i5.walmartimages.com/asr/fd80607d-56d1-4522-8284-70d8b8500a25.515225ea5a264ecd3de0086c959e5486.jpeg",
  },
  {
    id: 40,
    name: "Ultra-Compact Power Bank",
    category: "Electronics",
    description: "Fast-charging 10000mAh power bank with dual USB ports.",
    price: 34.99,
    rate: 4.6,
    image:
      "https://th.bing.com/th/id/R.471af23dc4adaef66e0a8593d143b84d?rik=S2T%2f7ttaNjnwhQ&pid=ImgRaw&r=0",
  },
];
