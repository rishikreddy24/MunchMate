document.addEventListener("DOMContentLoaded", function () {

    loadCategories();
    loadTrendingFoods();
    loadRecommendedFoods();
    loadPopularRestaurants();
    updateCartCount();

    setupSearch();

});


/* ========================================
   CATEGORIES
======================================== */

function loadCategories() {

    const container =
        document.getElementById("categoryGrid");

    if (!container) {
        return;
    }

    if (typeof getAllCategories !== "function") {

        console.error(
            "Category service is not available."
        );

        return;
    }

    const categories =
        getAllCategories();

    container.innerHTML = "";

    categories.forEach(function (category) {

        const card =
            document.createElement("div");

        card.className =
            "category-card";

        card.innerHTML = `
            <div class="category-icon">
                ${category.image}
            </div>

            <h3>
                ${category.name}
            </h3>
        `;

        card.addEventListener(
            "click",
            function () {

                showCategoryFoods(
                    category.name
                );

            }
        );

        container.appendChild(card);

    });

}


/* ========================================
   CATEGORY FOOD
======================================== */

function showCategoryFoods(categoryName) {

    const foods =
        getFoodItemsByCategory(
            categoryName
        );

    const container =
        document.getElementById(
            "trendingFoodGrid"
        );

    const title =
        document.getElementById(
            "trendingTitle"
        );

    if (!container) {
        return;
    }

    if (title) {

        title.textContent =
            categoryName + " Food";

    }

    if (!foods || foods.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    No food items found
                </h3>

                <p>
                    No items are available
                    in this category.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        foods.map(function (food) {

            return createFoodCard(food);

        }).join("");

}


/* ========================================
   TRENDING FOODS
======================================== */

function loadTrendingFoods() {

    const container =
        document.getElementById(
            "trendingFoodGrid"
        );

    if (!container) {
        return;
    }

    if (
        typeof getBestsellerItems !==
        "function"
    ) {

        console.error(
            "Menu service is not available."
        );

        return;
    }

    const foods =
        getBestsellerItems();

    container.innerHTML =
        foods.map(function (food) {

            return createFoodCard(food);

        }).join("");

}


/* ========================================
   RECOMMENDED FOODS
======================================== */

function loadRecommendedFoods() {

    const container =
        document.getElementById(
            "recommendedFoodGrid"
        );

    if (!container) {
        return;
    }

    const foods =
        getAllFoodItems();

    const recommendedFoods =
        foods
            .filter(function (food) {

                return Number(food.rating) >= 4.4;

            })
            .slice(0, 6);

    container.innerHTML =
        recommendedFoods.map(
            function (food) {

                return createFoodCard(food);

            }
        ).join("");

}


/* ========================================
   FOOD CARD
======================================== */

function createFoodCard(food) {

    const icon =
        getFoodIcon(food.category);

    const vegBadge =
        food.isVeg
            ? `<span class="veg-badge">VEG</span>`
            : `<span class="nonveg-badge">NON-VEG</span>`;

    const bestsellerBadge =
        food.isBestseller
            ? `<span class="bestseller-badge">
                    Bestseller
               </span>`
            : "";

    return `

        <article class="food-card">

            <div class="food-image">

                <span class="food-icon">
                    ${icon}
                </span>

            </div>

            <div class="food-card-content">

                <div class="food-badges">

                    ${vegBadge}

                    ${bestsellerBadge}

                </div>

                <h3>
                    ${food.name}
                </h3>

                <p class="food-description">

                    ${
                        food.description ||
                        "Delicious and freshly prepared."
                    }

                </p>

                <div class="food-details">

                    <span class="food-price">
                        ₹${food.price}
                    </span>

                    <span class="food-rating">
                        ⭐ ${food.rating}
                    </span>

                </div>

                <button
                    type="button"
                    class="btn btn-primary food-view-button"
                    onclick="viewFood('${food.id}')">

                    View Item

                </button>

            </div>

        </article>

    `;

}


/* ========================================
   FOOD ICON
======================================== */

function getFoodIcon(category) {

    const icons = {

        "Biryani": "🍛",
        "Pizza": "🍕",
        "Burgers": "🍔",
        "South Indian": "🥞",
        "North Indian": "🍲",
        "Chinese": "🍜",
        "Bakery": "🥐",
        "Cafe": "☕",
        "Desserts": "🍰",
        "Beverages": "🥤",
        "Fast Food": "🍟",
        "Street Food": "🌮",
        "Snacks": "🥟",
        "Thalis": "🍱",
        "Healthy Food": "🥗"

    };

    return icons[category] || "🍽️";

}


/* ========================================
   POPULAR RESTAURANTS
======================================== */

function loadPopularRestaurants() {

    const container =
        document.getElementById(
            "restaurantGrid"
        );

    if (!container) {
        return;
    }

    const restaurants =
        getApprovedRestaurants();

    if (
        !restaurants ||
        restaurants.length === 0
    ) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>
                    No restaurants available
                </h3>

                <p>
                    Please check again later.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        restaurants.map(
            function (restaurant) {

                return createRestaurantCard(
                    restaurant
                );

            }
        ).join("");

    setupRestaurantClicks();

}


/* ========================================
   RESTAURANT CARD
======================================== */

function createRestaurantCard(
    restaurant
) {

    const cuisineText =
        Array.isArray(restaurant.cuisine)
            ? restaurant.cuisine.join(" • ")
            : restaurant.cuisine || "Restaurant";


    return `

        <article
            class="restaurant-card"
            data-restaurant-id="${restaurant.id}"
        >

            <div class="restaurant-image">

                <span class="restaurant-icon">

                    ${getRestaurantIcon(
                        restaurant.name
                    )}

                </span>

            </div>


            <div class="restaurant-card-content">

                <h3>
                    ${restaurant.name}
                </h3>

                <p class="restaurant-cuisine">
                    ${cuisineText}
                </p>

                <p class="restaurant-location">
                    📍 ${restaurant.location}
                </p>

                <div class="restaurant-rating">

                    ⭐ ${restaurant.rating}

                </div>

                <button
                    type="button"
                    class="btn btn-primary"
                >
                    View Restaurant
                </button>

            </div>

        </article>

    `;

}


/* ========================================
   RESTAURANT ICON
======================================== */

function getRestaurantIcon(name) {

    const restaurantName =
        String(name || "").toLowerCase();


    if (
        restaurantName.includes("pizza")
    ) {

        return "🍕";

    }


    if (
        restaurantName.includes("south")
    ) {

        return "🥞";

    }


    if (
        restaurantName.includes("burger")
    ) {

        return "🍔";

    }


    if (
        restaurantName.includes("cafe")
    ) {

        return "☕";

    }


    return "🍛";

}


/* ========================================
   RESTAURANT CLICK
======================================== */

function setupRestaurantClicks() {

    const cards =
        document.querySelectorAll(
            ".restaurant-card"
        );


    cards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const restaurantId =
                    card.dataset.restaurantId;


                localStorage.setItem(
                    "munchmate_selected_restaurant",
                    restaurantId
                );


                alert(
                    "Restaurant page will be added next."
                );

            }
        );

    });

}


/* ========================================
   SEARCH SETUP
======================================== */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (!searchInput) {

        console.error(
            "Search input not found."
        );

        return;
    }


    if (!searchButton) {

        console.error(
            "Search button not found."
        );

        return;
    }


    searchButton.addEventListener(
        "click",
        function () {

            performSearch(
                searchInput.value
            );

        }
    );


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                performSearch(
                    searchInput.value
                );

            }

        }
    );

}


/* ========================================
   SEARCH
======================================== */

function performSearch(searchText) {

    const query =
        String(searchText || "")
            .trim()
            .toLowerCase();


    const foodContainer =
        document.getElementById(
            "trendingFoodGrid"
        );

    const restaurantContainer =
        document.getElementById(
            "restaurantGrid"
        );

    const title =
        document.getElementById(
            "trendingTitle"
        );


    if (!query) {

        loadTrendingFoods();
        loadPopularRestaurants();

        if (title) {

            title.textContent =
                "Trending Now";

        }

        return;

    }


    /* =========================
       FOOD SEARCH
    ========================== */

    const allFoods =
        getAllFoodItems();


    const foodResults =
        allFoods.filter(function (food) {

            const name =
                String(food.name || "")
                    .toLowerCase();

            const description =
                String(
                    food.description || ""
                ).toLowerCase();

            const category =
                String(food.category || "")
                    .toLowerCase();


            return (
                name.includes(query) ||
                description.includes(query) ||
                category.includes(query)
            );

        });


    /* =========================
       RESTAURANT SEARCH
    ========================== */

    const allRestaurants =
        getApprovedRestaurants();


    const restaurantResults =
        allRestaurants.filter(
            function (restaurant) {

                const name =
                    String(
                        restaurant.name || ""
                    ).toLowerCase();


                const location =
                    String(
                        restaurant.location || ""
                    ).toLowerCase();


                const cuisineText =
                    Array.isArray(
                        restaurant.cuisine
                    )
                        ? restaurant.cuisine.join(" ")
                        : String(
                            restaurant.cuisine || ""
                        );


                const cuisine =
                    cuisineText.toLowerCase();


                return (
                    name.includes(query) ||
                    location.includes(query) ||
                    cuisine.includes(query)
                );

            }
        );


    /* =========================
       DISPLAY TITLE
    ========================== */

    if (title) {

        title.textContent =
            `Search Results for "${searchText}"`;

    }


    /* =========================
       DISPLAY FOOD
    ========================== */

    if (foodContainer) {

        if (foodResults.length === 0) {

            foodContainer.innerHTML = `

                <div class="empty-state">

                    <h3>
                        No food items found
                    </h3>

                    <p>
                        Try searching for
                        biryani, pizza, dosa,
                        burger, etc.
                    </p>

                </div>

            `;

        } else {

            foodContainer.innerHTML =
                foodResults.map(
                    function (food) {

                        return createFoodCard(
                            food
                        );

                    }
                ).join("");

        }

    }


    /* =========================
       DISPLAY RESTAURANTS
    ========================== */

    if (restaurantContainer) {

        if (
            restaurantResults.length === 0
        ) {

            restaurantContainer.innerHTML = `

                <div class="empty-state">

                    <h3>
                        No restaurants found
                    </h3>

                    <p>
                        Try searching for
                        a restaurant or cuisine.
                    </p>

                </div>

            `;

        } else {

            restaurantContainer.innerHTML =
                restaurantResults.map(
                    function (restaurant) {

                        return createRestaurantCard(
                            restaurant
                        );

                    }
                ).join("");

            setupRestaurantClicks();

        }

    }

}


/* ========================================
   VIEW FOOD
======================================== */

function viewFood(foodId) {

    localStorage.setItem(
        "munchmate_selected_food",
        foodId
    );

    alert(
        "Food item page will be added next."
    );

}


/* ========================================
   CART COUNT
======================================== */

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );

    if (!cartCount) {
        return;
    }


    let cart = [];


    try {

        const savedCart =
            localStorage.getItem(
                "munchmate_cart"
            );


        if (savedCart) {

            cart =
                JSON.parse(savedCart);

        }

    } catch (error) {

        console.error(
            "Unable to read cart:",
            error
        );

        cart = [];

    }


    const totalQuantity =
        cart.reduce(
            function (total, item) {

                return (
                    total +
                    (Number(item.quantity) || 0)
                );

            },
            0
        );


    cartCount.textContent =
        totalQuantity;

}