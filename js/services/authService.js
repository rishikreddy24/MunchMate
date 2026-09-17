/* ========================================
   MunchMate - Authentication Service
   Phase 1: Mock Authentication
   Phase 2: Backend API
   ======================================== */


/**
 * Register a new customer.
 *
 * Phase 1:
 * Stores the customer in localStorage.
 *
 * Phase 2:
 * This function will call:
 * POST /api/auth/customer/register
 */
function registerCustomer(customerData) {

    const customers =
        JSON.parse(localStorage.getItem("munchmate_customers")) || [];

    const existingCustomer = customers.find(
        customer => customer.email === customerData.email
    );

    if (existingCustomer) {
        return {
            success: false,
            message: "An account with this email already exists."
        };
    }

    const newCustomer = {
        id: "customer_" + Date.now(),
        name: customerData.name,
        email: customerData.email,
        phone: customerData.phone,
        password: customerData.password,
        addresses: [],
        createdAt: new Date().toISOString()
    };

    customers.push(newCustomer);

    localStorage.setItem(
        "munchmate_customers",
        JSON.stringify(customers)
    );

    return {
        success: true,
        message: "Registration successful.",
        user: newCustomer
    };
}


/**
 * Login a customer.
 *
 * Phase 1:
 * Checks localStorage.
 *
 * Phase 2:
 * This function will call:
 * POST /api/auth/login
 */
function loginCustomer(email, password) {

    const customers =
        JSON.parse(localStorage.getItem("munchmate_customers")) || [];

    const customer = customers.find(
        user =>
            user.email === email &&
            user.password === password
    );

    if (!customer) {
        return {
            success: false,
            message: "Invalid email or password."
        };
    }

    const sessionUser = {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone
    };

    localStorage.setItem(
        "munchmate_current_user",
        JSON.stringify(sessionUser)
    );

    return {
        success: true,
        message: "Login successful.",
        user: sessionUser
    };
}


/**
 * Get currently logged-in user.
 */
function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("munchmate_current_user")
    );
}


/**
 * Check whether a user is logged in.
 */
function isLoggedIn() {

    return localStorage.getItem(
        "munchmate_current_user"
    ) !== null;
}


/**
 * Logout current user.
 *
 * Phase 2:
 * This can later call:
 * POST /api/auth/logout
 */
function logoutUser() {

    localStorage.removeItem(
        "munchmate_current_user"
    );

    return {
        success: true,
        message: "Logged out successfully."
    };
}
