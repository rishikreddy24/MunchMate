/* ========================================
   MunchMate - Restaurant Service
   Phase 1: Mock Data
   Phase 2: Backend API
   ======================================== */


/* ========================================
   GET ALL RESTAURANTS
   ======================================== */

/**
 * Returns all restaurants.
 *
 * Phase 1:
 * Uses localStorage if available,
 * otherwise uses default mock data.
 *
 * Phase 2:
 * Will use:
 * GET /api/restaurants
 */
function getAllRestaurants() {

    const storedRestaurants =
        JSON.parse(
            localStorage.getItem("munchmate_restaurants")
        );

    if (storedRestaurants) {
        return storedRestaurants;
    }

    return getDefaultRestaurants();
}


/* ========================================
   GET APPROVED RESTAURANTS
   ======================================== */

/**
 * Only approved restaurants are visible
 * to customers.
 */
function getApprovedRestaurants() {

    const restaurants = getAllRestaurants();

    return restaurants.filter(
        restaurant =>
            restaurant.status === "APPROVED"
    );
}


/* ========================================
   GET RESTAURANT BY ID
   ======================================== */

/**
 * Returns one restaurant using its ID.
 *
 * Phase 2:
 * GET /api/restaurants/:id
 */
function getRestaurantById(restaurantId) {

    const restaurants = getAllRestaurants();

    return restaurants.find(
        restaurant =>
            restaurant.id === restaurantId
    ) || null;
}


/* ========================================
   SEARCH RESTAURANTS
   ======================================== */

/**
 * Searches restaurants by:
 * - restaurant name
 * - cuisine
 * - location
 *
 * Only approved restaurants are searched.
 *
 * Phase 2:
 * Backend search can eventually handle
 * larger datasets.
 */
function searchRestaurants(searchText) {

    const restaurants =
        getApprovedRestaurants();

    const query =
        searchText.trim().toLowerCase();

    if (!query) {
        return restaurants;
    }

    return restaurants.filter(
        restaurant => {

            const name =
                restaurant.name.toLowerCase();

            const location =
                restaurant.location.toLowerCase();

            const cuisine =
                restaurant.cuisine
                    .join(" ")
                    .toLowerCase();

            return (
                name.includes(query) ||
                location.includes(query) ||
                cuisine.includes(query)
            );
        }
    );
}


/* ========================================
   FILTER BY CUISINE
   ======================================== */

/**
 * Returns restaurants matching
 * a cuisine.
 */
function filterRestaurantsByCuisine(cuisine) {

    const restaurants =
        getApprovedRestaurants();

    if (!cuisine) {
        return restaurants;
    }

    return restaurants.filter(
        restaurant =>
            restaurant.cuisine.some(
                item =>
                    item.toLowerCase() ===
                    cuisine.toLowerCase()
            )
    );
}


/* ========================================
   SAVE RESTAURANTS
   ======================================== */

/**
 * Saves restaurant data locally.
 *
 * This is mainly useful for Phase 1
 * restaurant/admin prototype features.
 *
 * Phase 2:
 * Data will be stored in MongoDB
 * through backend APIs.
 */
function saveRestaurants(restaurants) {

    localStorage.setItem(
        "munchmate_restaurants",
        JSON.stringify(restaurants)
    );
}


/* ========================================
   DEFAULT MOCK RESTAURANTS
   ======================================== */

function getDefaultRestaurants() {

    return [

        {
            id: "restaurant_001",

            name: "Spice Garden",

            ownerName: "Rahul Sharma",

            email: "spicegarden@munchmate.com",

            phone: "9876543210",

            logo: "",

            image: "",

            description:
                "Authentic Indian dishes prepared with traditional flavours.",

            cuisine: [
                "Biryani",
                "North Indian"
            ],

            location:
                "Hyderabad, Telangana",

            rating: 4.5,

            status: "APPROVED",

            rejectionReason: "",

            createdAt:
                "2026-01-10T10:00:00Z"
        },


        {
            id: "restaurant_002",

            name: "Pizza Hub",

            ownerName: "Arjun Reddy",

            email: "pizzahub@munchmate.com",

            phone: "9876543211",

            logo: "",

            image: "",

            description:
                "Fresh pizzas and fast food made for every occasion.",

            cuisine: [
                "Pizza",
                "Fast Food"
            ],

            location:
                "Hyderabad, Telangana",

            rating: 4.3,

            status: "APPROVED",

            rejectionReason: "",

            createdAt:
                "2026-01-15T10:00:00Z"
        },


        {
            id: "restaurant_003",

            name: "South Spice",

            ownerName: "Priya Kumar",

            email: "southspice@munchmate.com",

            phone: "9876543212",

            logo: "",

            image: "",

            description:
                "Delicious South Indian food and traditional snacks.",

            cuisine: [
                "South Indian",
                "Snacks"
            ],

            location:
                "Hyderabad, Telangana",

            rating: 4.6,

            status: "APPROVED",

            rejectionReason: "",

            createdAt:
                "2026-02-01T10:00:00Z"
        }

    ];
}
