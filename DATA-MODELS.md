
---

# 3. `DATA-MODELS.md`

```markdown
# MunchMate Data Models

## Purpose

These models define the structure of the data used by MunchMate.

Phase 1 uses JavaScript mock data.

Phase 2 will use MongoDB and backend APIs.

The structures should remain as consistent as possible between both phases.

---

# 1. Customer

{
    id,
    name,
    email,
    phone,
    password,
    addresses,
    createdAt
}

Fields:

id:
Unique customer identifier.

name:
Customer full name.

email:
Customer email.

phone:
Customer phone number.

password:
Prototype authentication value in Phase 1.
Real password handling/security will be implemented in Phase 2.

addresses:
List of saved delivery addresses.

createdAt:
Account creation timestamp.

---

# 2. Address

{
    id,
    label,
    addressLine,
    city,
    state,
    pincode
}

Example labels:

- Home
- Work
- Other

---

# 3. Restaurant

{
    id,
    name,
    ownerName,
    email,
    phone,
    password,
    logo,
    image,
    description,
    cuisine,
    location,
    rating,
    status,
    rejectionReason,
    createdAt
}

Status values:

DRAFT
PENDING_APPROVAL
APPROVED
REJECTED

Only APPROVED restaurants are publicly visible to customers.

---

# 4. Food Item

{
    id,
    restaurantId,
    name,
    description,
    price,
    image,
    category,
    rating,
    isVeg,
    isAvailable,
    isBestseller
}

The restaurant owns the food item.

restaurantId connects the food item to a restaurant.

---

# 5. Category

{
    id,
    name,
    image
}

Possible categories:

- Biryani
- Pizza
- Burgers
- South Indian
- North Indian
- Chinese
- Bakery
- Cafe
- Desserts
- Beverages
- Fast Food
- Street Food
- Snacks
- Thalis
- Healthy Food

The exact list can be expanded.

---

# 6. Cart Item

{
    foodItemId,
    restaurantId,
    name,
    image,
    price,
    quantity
}

The cart should be generated/managed through cartService.

---

# 7. Order

{
    id,
    customerId,
    restaurantId,
    items,
    deliveryAddress,
    subtotal,
    deliveryFee,
    tax,
    total,
    paymentMethod,
    paymentStatus,
    orderStatus,
    deliveryPartnerId,
    createdAt
}

Order status values:

PLACED
CONFIRMED
PREPARING
READY
OUT_FOR_DELIVERY
DELIVERED
CANCELLED

Payment status values:

PENDING
PAID
FAILED
COD

Phase 1 payment is simulated.

---

# 8. Order Item

{
    foodItemId,
    name,
    price,
    quantity,
    subtotal
}

Order items should preserve the price at the time of ordering.

---

# 9. Review

{
    id,
    customerId,
    restaurantId,
    orderId,
    rating,
    comment,
    createdAt
}

Rating:

1 to 5

Reviews should only be allowed after a completed/delivered order.

---

# 10. Delivery Partner

{
    id,
    name,
    rating,
    vehicle,
    available
}

Delivery partners are mock entities in Phase 1.

There is no delivery-partner registration system.

---

# 11. Admin

{
    id,
    name,
    email,
    role
}

Admin registration is not public.

Admin accounts are controlled separately.

---

# 12. Relationships

Customer:

Customer
 ↓
Orders
 ↓
Restaurants
 ↓
Food Items

Restaurant:

Restaurant
 ↓
Food Items
 ↓
Orders
 ↓
Reviews

Order:

Customer
   ↓
Order
   ↓
Restaurant
   ↓
Order Items
   ↓
Food Items

Order
   ↓
Delivery Partner

---

# 13. Important Rules

1. A restaurant must be APPROVED before appearing publicly.
2. A restaurant can edit its profile/menu before approval.
3. A rejected restaurant can modify its details and resubmit.
4. A customer can review a restaurant only after a delivered order.
5. Delivery partners are predefined/mock in Phase 1.
6. Offers and coupons are not part of the current model.
7. Ingredient information is not required.
8. Location is stored as text; no GPS data is required in Phase 1.
