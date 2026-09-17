/* ========================================
   MunchMate - Menu Data
   Phase 1 Mock Data
   ======================================== */


/*
 * Food item structure:
 *
 * id
 * restaurantId
 * name
 * description
 * price
 * image
 * category
 * rating
 * isVeg
 * isAvailable
 * isBestseller
 */


const MENU_DATA = [

    /* ========================================
       SPICE GARDEN
       ======================================== */

    {
        id: "food_001",
        restaurantId: "restaurant_001",
        name: "Chicken Biryani",
        description:
            "Aromatic basmati rice cooked with tender chicken and traditional spices.",
        price: 249,
        image: "",
        category: "Biryani",
        rating: 4.7,
        isVeg: false,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_002",
        restaurantId: "restaurant_001",
        name: "Mutton Biryani",
        description:
            "Flavourful basmati rice prepared with tender mutton and aromatic spices.",
        price: 299,
        image: "",
        category: "Biryani",
        rating: 4.6,
        isVeg: false,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_003",
        restaurantId: "restaurant_001",
        name: "Paneer Butter Masala",
        description:
            "Soft paneer cooked in a creamy tomato and butter gravy.",
        price: 199,
        image: "",
        category: "North Indian",
        rating: 4.4,
        isVeg: true,
        isAvailable: true,
        isBestseller: false
    },

    {
        id: "food_004",
        restaurantId: "restaurant_001",
        name: "Butter Naan",
        description:
            "Soft Indian flatbread topped with butter.",
        price: 49,
        image: "",
        category: "North Indian",
        rating: 4.3,
        isVeg: true,
        isAvailable: true,
        isBestseller: false
    },


    /* ========================================
       PIZZA HUB
       ======================================== */

    {
        id: "food_005",
        restaurantId: "restaurant_002",
        name: "Margherita Pizza",
        description:
            "Classic pizza topped with tomato sauce, mozzarella and herbs.",
        price: 199,
        image: "",
        category: "Pizza",
        rating: 4.4,
        isVeg: true,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_006",
        restaurantId: "restaurant_002",
        name: "Farmhouse Pizza",
        description:
            "Loaded with fresh vegetables, mozzarella and delicious seasoning.",
        price: 279,
        image: "",
        category: "Pizza",
        rating: 4.5,
        isVeg: true,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_007",
        restaurantId: "restaurant_002",
        name: "Chicken Supreme Pizza",
        description:
            "A delicious pizza loaded with chicken, vegetables and cheese.",
        price: 329,
        image: "",
        category: "Pizza",
        rating: 4.6,
        isVeg: false,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_008",
        restaurantId: "restaurant_002",
        name: "Veg Burger",
        description:
            "Crispy vegetable patty with fresh vegetables and sauces.",
        price: 149,
        image: "",
        category: "Burgers",
        rating: 4.2,
        isVeg: true,
        isAvailable: true,
        isBestseller: false
    },


    /* ========================================
       SOUTH SPICE
       ======================================== */

    {
        id: "food_009",
        restaurantId: "restaurant_003",
        name: "Masala Dosa",
        description:
            "Crispy dosa filled with spiced potato masala, served with chutney and sambar.",
        price: 99,
        image: "",
        category: "South Indian",
        rating: 4.7,
        isVeg: true,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_010",
        restaurantId: "restaurant_003",
        name: "Idli Sambar",
        description:
            "Soft steamed idlis served with hot sambar and chutney.",
        price: 79,
        image: "",
        category: "South Indian",
        rating: 4.5,
        isVeg: true,
        isAvailable: true,
        isBestseller: true
    },

    {
        id: "food_011",
        restaurantId: "restaurant_003",
        name: "Vada",
        description:
            "Crispy South Indian lentil fritters served with chutney.",
        price: 69,
        image: "",
        category: "Snacks",
        rating: 4.4,
        isVeg: true,
        isAvailable: true,
        isBestseller: false
    },

    {
        id: "food_012",
        restaurantId: "restaurant_003",
        name: "Paneer Dosa",
        description:
            "Crispy dosa filled with spicy paneer masala.",
        price: 139,
        image: "",
        category: "South Indian",
        rating: 4.3,
        isVeg: true,
        isAvailable: true,
        isBestseller: false
    }

];
