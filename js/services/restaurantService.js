/* ========================================
   MunchMate - Restaurant Service
   ======================================== */


/**
 * Get publicly visible restaurants.
 *
 * Only APPROVED restaurants should be returned.
 *
 * Phase 1:
 * Uses mock data.
 *
 * Phase 2:
 * GET /api/restaurants
 */
function getApprovedRestaurants() {

    const restaurants =
        JSON.parse(
            localStorage.getItem("munchmate_restaurants")
        ) || getDefaultRestaurants();

    return restaurants.filter(
        restaurant => restaurant.status === "APPROVED"
    );
}


/**
 * Get a restaurant by ID.
 *
 * Phase 2:
 * GET /api/restaurants/:id
 */
function getRestaurantById(restaurantId) {

    const restaurants =
        JSON.parse(
            localStorage.getItem("munchmate_restaurants")
        ) || getDefaultRestaurants();

    return restaurants.find(
        restaurant => restaurant.id === restaurantId
    ) || null;
}


/**
 * Get default mock restaurants.
 *
 * These represent realistic Phase 1 data.
 */
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
            location: "Hyderabad, Telangana",
            rating: 4.5,
            status: "APPROVED",
            rejectionReason: "",
            createdAt: "2026-01-10T10:00:00Z"
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
            location: "Hyderabad, Telangana",
            rating: 4.3,
            status: "APPROVED",
            rejectionReason: "",
            createdAt: "2026-01-15T10:00:00Z"
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
            location: "Hyderabad, Telangana",
            rating: 4.6,
            status: "APPROVED",
            rejectionReason: "",
            createdAt: "2026-02-01T10:00:00Z"
        }
    ];
}
