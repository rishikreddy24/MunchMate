/* ========================================
   MunchMate - Menu Service
   Phase 1: Mock Data
   Phase 2: Backend API
   ======================================== */


/* ========================================
   GET ALL FOOD ITEMS
   ======================================== */

/**
 * Returns all food items.
 *
 * Phase 1:
 * Uses MENU_DATA.
 *
 * Phase 2:
 * Backend will provide the data.
 */
function getAllFoodItems() {

    return MENU_DATA;
}


/* ========================================
   GET FOOD BY ID
   ======================================== */

/**
 * Returns one food item by ID.
 */
function getFoodItemById(foodItemId) {

    return MENU_DATA.find(
        food =>
            food.id === foodItemId
    ) || null;
}


/* ========================================
   GET RESTAURANT MENU
   ======================================== */

/**
 * Returns available food items
 * belonging to a restaurant.
 *
 * Phase 2:
 * GET /api/restaurants/:id/menu
 */
function getRestaurantMenu(restaurantId) {

    return MENU_DATA.filter(
        food =>
            food.restaurantId === restaurantId &&
            food.isAvailable === true
    );
}


/* ========================================
   SEARCH MENU
   ======================================== */

/**
 * Searches food within a restaurant.
 *
 * Searches:
 * - food name
 * - description
 * - category
 */
function searchRestaurantMenu(
    restaurantId,
    searchText
) {

    const menu =
        getRestaurantMenu(restaurantId);

    const query =
        searchText.trim().toLowerCase();

    if (!query) {
        return menu;
    }

    return menu.filter(
        food => {

            const name =
                food.name.toLowerCase();

            const description =
                food.description.toLowerCase();

            const category =
                food.category.toLowerCase();

            return (
                name.includes(query) ||
                description.includes(query) ||
                category.includes(query)
            );
        }
    );
}


/* ========================================
   GET BY CATEGORY
   ======================================== */

/**
 * Returns food items belonging
 * to a specific category.
 */
function getFoodItemsByCategory(category) {

    if (!category) {
        return getAllFoodItems();
    }

    return getAllFoodItems().filter(
        food =>
            food.category.toLowerCase() ===
            category.toLowerCase()
    );
}


/* ========================================
   GET BESTSELLERS
   ======================================== */

function getBestsellerItems() {

    return getAllFoodItems().filter(
        food =>
            food.isBestseller === true &&
            food.isAvailable === true
    );
}


/* ========================================
   GET VEG ITEMS
   ======================================== */

function getVegItems() {

    return getAllFoodItems().filter(
        food =>
            food.isVeg === true &&
            food.isAvailable === true
    );
}


/* ========================================
   GET NON-VEG ITEMS
   ======================================== */

function getNonVegItems() {

    return getAllFoodItems().filter(
        food =>
            food.isVeg === false &&
            food.isAvailable === true
    );
}
