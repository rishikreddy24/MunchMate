# MunchMate API Contract

## Purpose

This document defines the planned communication between the frontend and backend.

The APIs do not need to be implemented during Phase 1.

The frontend services should be designed so that they can later call these endpoints.

---

# 1. Base URL

Development:

http://localhost:5000/api

Production URL will be decided later.

Frontend should not hardcode the API URL throughout the application.

Use a central configuration file.

Example:

config.js

---

# 2. Authentication

## Register Customer

POST /api/auth/customer/register

Request:

{
    name,
    email,
    phone,
    password
}

Response:

{
    success,
    message,
    user
}

---

## Login

POST /api/auth/login

Request:

{
    email,
    password,
    role
}

Response:

{
    success,
    token,
    user
}

Possible roles:

CUSTOMER
RESTAURANT
ADMIN

---

## Get Current User

GET /api/auth/me

Response:

{
    user
}

---

## Logout

POST /api/auth/logout

---

# 3. Restaurants

## Get Public Restaurants

GET /api/restaurants

Only approved/public restaurants should be returned.

Possible query parameters:

?search=
?category=
?cuisine=
?rating=
?minPrice=
?maxPrice=

---

## Get Restaurant

GET /api/restaurants/:id

---

## Register Restaurant

POST /api/restaurants/register

---

## Update Restaurant

PUT /api/restaurants/:id

---

## Submit Restaurant for Approval

POST /api/restaurants/:id/submit

---

# 4. Restaurant Menu

## Get Menu

GET /api/restaurants/:id/menu

---

## Add Food Item

POST /api/restaurants/:id/menu

Request:

{
    name,
    description,
    price,
    image,
    category,
    isVeg,
    isAvailable
}

---

## Update Food Item

PUT /api/menu/:id

---

## Delete Food Item

DELETE /api/menu/:id

---

# 5. Orders

## Create Order

POST /api/orders

Request:

{
    restaurantId,
    items,
    deliveryAddress,
    paymentMethod
}

Response:

{
    order
}

---

## Get Customer Orders

GET /api/orders/customer

---

## Get Order

GET /api/orders/:id

---

## Get Restaurant Orders

GET /api/orders/restaurant

---

## Update Order Status

PUT /api/orders/:id/status

Request:

{
    status
}

Possible statuses:

PLACED
CONFIRMED
PREPARING
READY
OUT_FOR_DELIVERY
DELIVERED
CANCELLED

---

# 6. Reviews

## Create Review

POST /api/reviews

Request:

{
    restaurantId,
    orderId,
    rating,
    comment
}

---

## Get Restaurant Reviews

GET /api/restaurants/:id/reviews

---

# 7. Admin

## Get Pending Restaurants

GET /api/admin/restaurants/pending

---

## Approve Restaurant

PUT /api/admin/restaurants/:id/approve

---

## Reject Restaurant

PUT /api/admin/restaurants/:id/reject

Request:

{
    reason
}

---

## Get Users

GET /api/admin/users

---

## Get Orders

GET /api/admin/orders

---

## Get Reviews

GET /api/admin/reviews

---

# 8. Delivery Partners

Phase 1:

Delivery partners are mock data.

Phase 2:

The backend may manage delivery partner assignment.

Possible future endpoints:

GET /api/delivery-partners
GET /api/delivery-partners/available
POST /api/orders/:id/assign-delivery-partner

These endpoints are not required in Phase 1.

---

# 9. Real-Time Events

Socket.IO will be introduced during Phase 2.

Possible events:

order:created
order:confirmed
order:preparing
order:ready
order:out-for-delivery
order:delivered

The exact event implementation will be finalized during backend development.

---

# 10. API Rules

1. Frontend pages should not directly contain API URLs.
2. API calls should be placed inside service files.
3. Services should return predictable data structures.
4. Errors should be handled by services and displayed appropriately.
5. Authentication tokens should not be hardcoded.
6. API base URL should be stored in config.js.
7. Mock data and API responses should use compatible structures.
