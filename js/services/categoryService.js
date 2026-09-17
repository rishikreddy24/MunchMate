/* ========================================
   MunchMate - Category Service

   Phase 1: Mock Data
   Phase 2: Backend API
======================================== */


/* ========================================
   GET ALL CATEGORIES
======================================== */

function getAllCategories() {

    return CATEGORY_DATA || [];

}


/* ========================================
   GET CATEGORY BY ID
======================================== */

function getCategoryById(categoryId) {

    const categories = getAllCategories();

    return categories.find(function (category) {

        return category.id === categoryId;

    }) || null;

}


/* ========================================
   GET CATEGORY BY NAME
======================================== */

function getCategoryByName(categoryName) {

    const categories = getAllCategories();

    if (!categoryName) {
        return null;
    }

    const searchName = categoryName
        .trim()
        .toLowerCase();

    return categories.find(function (category) {

        return category.name
            .toLowerCase() === searchName;

    }) || null;

}