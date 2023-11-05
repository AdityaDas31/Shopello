const ProductData = [
    {
        id: "1",
        name: "Orange T-Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111142/product/orange-tshirt_t25gyk.png" }],
        price: "1200",
        rating: 3.5,
        stock: 10,
        description: "This is the Orange T-Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "2",
        name: "Pink T-Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111143/product/pink-tshirt_jdnf1r.png" }],
        price: "1000",
        rating: 4,
        stock: 10,
        description: "This is the Pink T-Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "3",
        name: "Red T-Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111202/product/red-tshirt_lgzajn.png" }],
        price: "1500",
        rating: 4.5,
        stock: 10,
        description: "This is the Red T-Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "4",
        name: "Purple T-Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111202/product/purple-tshirt_bba1g7.png" }],
        price: "1500",
        rating: 4.5,
        stock: 10,
        description: "This is the Purple T-Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "5",
        name: "Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111204/product/shirt-5_yaxhjt.png" }],
        price: "2000",
        rating: 4.9,
        stock: 10,
        description: "This is the Most rated Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "6",
        name: "Black Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111203/product/shirt-4_kriom9.png" }],
        price: "2500",
        rating: 4.5,
        stock: 10,
        description: "This is the Black Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "7",
        name: "Blue Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111205/product/shirt-6_owqm7m.png" }],
        price: "2500",
        rating: 4.3,
        stock: 10,
        description: "This is the Blue Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "8",
        name: "Aqua Shirt",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111206/product/shirt-8_ozrhqq.png" }],
        price: "2500",
        rating: 4.2,
        stock: 10,
        description: "This is the Aqua Shirt",
        sizes: ["M", "L", "XL", "XXL"],
    },
    {
        id: "9",
        name: "Shoe",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111211/product/shoe-6_zqxdgh.png" }],
        price: "2000",
        rating: 4.9,
        stock: 10,
        description: "This is the best rated Shoe",
        sizes: null,
    },
    {
        id: "10",
        name: "Shoe",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111212/product/shoe-7_whe5f5.png" }],
        price: "2500",
        rating: 4.2,
        stock: 10,
        description: "This is the most purchased shoe",
        sizes: null,
    },
    {
        id: "11",
        name: "Shoe",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111213/product/shoe-8_hr3pol.png" }],
        price: "2000",
        rating: 3.9,
        stock: 10,
        description: "This is the best shoe at its price",
        sizes: null,
    },
    {
        id: "12",
        name: "Shoe",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111207/product/shoe-5_xrdz8j.png" }],
        price: "2500",
        rating: 4.2,
        stock: 10,
        description: "This is the most purchased shoe",
        sizes: null,
    },
    {
        id: "13",
        name: "Bagpack",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111139/product/bagpacks-4_iufhdk.png" }],
        price: "1500",
        rating: 4,
        stock: 10,
        description: "This is the most purchased bagpack",
        sizes: null,
    },
    {
        id: "14",
        name: "Bagpack",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111140/product/bagpacks-6_utadxs.png" }],
        price: "2000",
        rating: 4.7,
        stock: 10,
        description: "This is the best rated bagpack",
        sizes: null,
    },
    {
        id: "15",
        name: "Bagpack",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111139/product/bagpacks-3_wu4ckk.png" }],
        price: "1500",
        rating: 4.6,
        stock: 10,
        description: "This is the most purchased bagpack",
        sizes: null,
    },
    {
        id: "16",
        name: "Bagpack",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111141/product/bagpacks-7_k4na4z.png" }],
        price: "1000",
        rating: 4.2,
        stock: 10,
        description: "This is the best bagpack at its price",
        sizes: null,
    },
    {
        id: "17",
        name: "Watch",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111222/product/watch-7_wckfw0.png" }],
        price: "2000",
        rating: 4.2,
        stock: 10,
        description: "This is the most purchased watch",
        sizes: null,
    },
    {
        id: "18",
        name: "Watch",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111221/product/watch-4_nuwpzj.png" }],
        price: "2500",
        rating: 4.8,
        stock: 10,
        description: "This is the best rated watch",
        sizes: null,
    },
    {
        id: "19",
        name: "Watch",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111220/product/watch-2_nv7b2h.png" }],
        price: "2500",
        rating: 4,
        stock: 10,
        description: "This is the most purchased watch",
        sizes: null,
    },
    {
        id: "20",
        name: "Watch",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111218/product/watch-1_s5gps4.png" }],
        price: "2000",
        rating: 4.8,
        stock: 10,
        description: "This is the best watch at its price",
        sizes: null,
    },
    {
        id: "21",
        name: "Sunglass",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111217/product/sunglass-5_ltfwww.png" }],
        price: "500",
        rating: 4.5,
        stock: 10,
        description: "This is the most purchased sunglass",
        sizes: null,
    },
    {
        id: "22",
        name: "Sunglass",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111215/product/sunglass-2_f0g9bv.png" }],
        price: "750",
        rating: 4.7,
        stock: 10,
        description: "This is the best rated sunglass ",
        sizes: null,
    },
    {
        id: "23",
        name: "Sunglass",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111214/product/sunglass-1_ffh948.png" }],
        price: "500",
        rating: 4,
        stock: 10,
        description: "This is the most purchased sunglass",
        sizes: null,
    },
    {
        id: "24",
        name: "Sunglass",
        images: [{ url: "https://res.cloudinary.com/dejkfqabk/image/upload/v1699111216/product/sunglass-4_nbzmcb.png" }],
        price: "450",
        rating: 4.5,
        stock: 10,
        description: "This is the best sunglass at its price",
        sizes: null,
    },
    
    
]

export default ProductData;