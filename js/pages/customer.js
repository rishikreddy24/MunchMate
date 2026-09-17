/* ========================================
   MunchMate - Customer Home Page
   ======================================== */


/* ========================================
   PAGE INITIALIZATION
   ======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCategories();

        loadTrendingFood();

        loadRecommendedFood();

        loadRestaurants();

        setupSearch();

        updateCartCount();

    }
);


/* ========================================
   CATEGORIES
   ======================================== */

function loadCategories() {

    const categoryGrid =
        document.getElementById(
            "categoryGrid"
        );

    if (!categoryGrid) {
        return;
    }


    const categories =
        getAllCategories();


    categoryGrid.innerHTML =
        categories.map(
            category => `

                <a
                    href="#trendingFoodGrid"
                    class="category-card"
                    data-category="${category.name}"
                >

                    <span class="category-icon">
                        ${category.image}
                    </span>

                    <span>
                        ${category.name}
                    </span>

                </a>

            `
        ).join("");


    setupCategoryClicks();
}


/* ========================================
   CATEGORY CLICK
   ======================================== */

function setupCategoryClicks() {

    const categoryCards =
        document.querySelectorAll(
            ".category-card"
        );


    categoryCards.forEach(
        card => {

            card.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const category =
                        card.dataset.category;

                    showCategoryFood(category);

                }
            );

        }
    );
}


/* ========================================
   SHOW CATEGORY FOOD
   ======================================== */

function showCategoryFood(category) {

    const food =
        getFoodItemsByCategory(
            category
        );


    const heading =
        document.querySelector(
            "#trendingFoodGrid"
        );


    if (!heading) {
        return;
    }


    heading.innerHTML =
        createFoodCards(food);


    const trendingSection =
        document.querySelector(
            ".customer-section-gray"
        );


    if (trendingSection) {

        trendingSection.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ========================================
   TRENDING FOOD
   ======================================== */

function loadTrendingFood() {

    const foodGrid =
        document.getElementById(
            "trendingFoodGrid"
        );

    if (!foodGrid) {
        return;
    }


    const food =
        getBestsellerItems();


    foodGrid.innerHTML =
        createFoodCards(food);
}


/* ========================================
   RECOMMENDED FOOD
   ======================================== */

function loadRecommendedFood() {

    const foodGrid =
        document.getElementById(
            "recommendedFoodGrid"
        );

    if (!foodGrid) {
        return;
    }


    /*
     * Phase 1:
     * Recommendations use mock data.
     *
     * Phase 2:
     * This can later be replaced by
     * an AI recommendation API.
     */

    const food =
        getAllFoodItems()
            .filter(
                item =>
                    item.isAvailable === true
            )
            .slice(0, 4);


    foodGrid.innerHTML =
        createFoodCards(food);
}


/* ========================================
   FOOD CARD CREATION
   ======================================== */

function createFoodCards(foodItems) {

    if (
        !foodItems ||
        foodItems.length === 0
    ) {

        return `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🍽️
                </div>

                <h3>
                    No food found
                </h3>

                <p>
                    Try exploring another category.
                </p>

            </div>

        `;
    }


    return foodItems.map(
        food => {

            const restaurant =
                getRestaurantById(
                    food.restaurantId
                );


            const restaurantName =
                restaurant
                    ? restaurant.name
                    : "Restaurant";


            const foodIcon =
                getFoodIcon(
                    food.category
                );


            return `

                <article
                    class="food-card"
                    data-food-id="${food.id}"
                >

                    <div class="food-card-image">

                        ${foodIcon}

                        ${
                            food.isBestseller
                                ? `
                                    <span class="food-card-tag">
                                        Bestseller
                                    </span>
                                  `
                                : ""
                        }

                    </div>


                    <div class="food-card-info">

                        <h3>
                            ${food.name}
                        </h3>


                        <p class="food-card-description">
                            ${food.description}
                        </p>


                        <div class="food-card-meta">

                            <span class="food-card-rating">
                                ★ ${food.rating}
                            </span>

                            <span class="food-card-price">
                                ₹${food.price}
                            </span>

                        </div>


                        <div class="food-card-actions">

                            <span class="food-card-restaurant">
                                ${restaurantName}
                            </span>

                            <button
                                type="button"
                                class="food-card-add"
                                data-food-id="${food.id}"
                            >
                                Add
                            </button>

                        </div>

                    </div>

                </article>

            `;
        }
    ).join("");
}


/* ========================================
   FOOD ICON
   ======================================== */

function getFoodIcon(category) {

    const icons = {

        "Biryani": "🍛",

        "Pizza": "🍕",

        "Burgers": "🍔",

        "South Indian": "🥘",

        "North Indian": "🍲",

        "Chinese": "🥡",

        "Desserts": "🍰",

        "Beverages": "🥤",

        "Snacks": "🥪",

        "Fast Food": "🍟"

    };


    return icons[category] || "🍽️";
}


/* ========================================
   RESTAURANTS
   ======================================== */

function loadRestaurants() {

    const restaurantGrid =
        document.getElementById(
            "restaurantGrid"
        );


    if (!restaurantGrid) {
        return;
    }


    const restaurants =
        getApprovedRestaurants();


    if (
        !restaurants ||
        restaurants.length === 0
    ) {

        restaurantGrid.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🏪
                </div>

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


    restaurantGrid.innerHTML =
        restaurants.map(
            restaurant => `

                <article
                    class="restaurant-card"
                    data-restaurant-id="${restaurant.id}"
                >

                    <div class="restaurant-image">
                        ${getRestaurantIcon(restaurant.name)}
                    </div>


                    <div class="restaurant-info">

                        <h3>
                            ${restaurant.name}
                        </h3>


                        <p class="restaurant-cuisine">
                            ${restaurant.cuisine.join(" • ")}
                        </p>


                        <div class="restaurant-meta">

                            <span class="rating">
                                ★ ${restaurant.rating}
                            </span>

                            <span>
                                •
                            </span>

                            <span>
                                ${restaurant.location}
                            </span>

                        </div>

                    </div>

                </article>

            `
        ).join("");


    setupRestaurantClicks();
}


/* ========================================
   RESTAURANT ICON
   ======================================== */

function getRestaurantIcon(name) {

    if (
        name.toLowerCase().includes("pizza")
    ) {
        return "🍕";
    }


    if (
        name.toLowerCase().includes("south")
    ) {
        return "🥘";
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


    cards.forEach(
        card => {

            card.addEventListener(
                "click",
                function () {

                    const restaurantId =
                        card.dataset.restaurantId;

                    /*
                     * Restaurant page will be created later.
                     *
                     * We store the selected restaurant
                     * temporarily for Phase 1.
                     */

                    localStorage.setItem(
                        "munchmate_selected_restaurant",
                        restaurantId
                    );

                    alert(
                        "Restaurant page will be available soon."
                    );

                }
            );

        }
    );
}


/* ========================================
   SEARCH
   ======================================== */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "foodSearch"
        );


    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (
        !searchInput ||
        !searchButton
    ) {
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

            if (
                event.key === "Enter"
            ) {

                performSearch(
                    searchInput.value
                );

            }

        }
    );
}


/* ========================================
   PERFORM SEARCH
   ======================================== */

function performSearch(searchText) {

    const query =
        searchText.trim();


    if (!query) {

        loadTrendingFood();

        return;
    }


    const restaurantResults =
        searchRestaurants(query);


    const foodResults =
        getAllFoodItems()
            .filter(
                food => {

                    const name =
                        food.name.toLowerCase();

                    const description =
                        food.description.toLowerCase();

                    const category =
                        food.category.toLowerCase();

                    return (
                        name.includes(
                            query.toLowerCase()
                        ) ||
                        description.includes(
                            query.toLowerCase()
                        ) ||
                        category.includes(
                            query.toLowerCase()
                        )
                    );

                }
            );


    const foodGrid =
        document.getElementById(
            "trendingFoodGrid"
        );


    if (!foodGrid) {
        return;
    }


    foodGrid.innerHTML =
        createFoodCards(foodResults);


    const restaurantsSection =
        document.getElementById(
            "restaurants"
        );


    if (restaurantsSection) {

        const restaurantGrid =
            document.getElementById(
                "restaurantGrid"
            );


        restaurantGrid.innerHTML =
            restaurantResults.map(
                restaurant => `

                    <article
                        class="restaurant-card"
                        data-restaurant-id="${restaurant.id}"
                    >

                        <div class="restaurant-image">
                            ${getRestaurantIcon(restaurant.name)}
                        </div>

                        <div class="restaurant-info">

                            <h3>
                                ${restaurant.name}
                            </h3>

                            <p class="restaurant-cuisine">
                                ${restaurant.cuisine.join(" • ")}
                            </p>

                            <div class="restaurant-meta">

                                <span class="rating">
                                    ★ ${restaurant.rating}
                                </span>

                                <span>
                                    •
                                </span>

                                <span>
                                    ${restaurant.location}
                                </span>

                            </div>

                        </div>

                    </article>

                `
            ).join("");


        setupRestaurantClicks();


        restaurantsSection.scrollIntoView({
            behavior: "smooth"
        });

    }
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


    const cart =
        JSON.parse(
            localStorage.getItem(
                "munchmate_cart"
            )
        ) || [];


    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        totalQuantity;
}
