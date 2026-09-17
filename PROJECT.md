# MunchMate

## 1. Project Overview

MunchMate is a modern web-based food ordering and delivery platform inspired by popular Indian food-delivery applications such as Swiggy and Zomato.

The project is being developed as a college-level prototype that demonstrates the complete food-ordering workflow from customer registration and restaurant discovery to food ordering, restaurant management, administration, delivery tracking, and reviews.

The project will be developed in two major phases.

### Phase 1 — Frontend Prototype

The first phase focuses entirely on the frontend.

Technologies:

- HTML
- CSS
- JavaScript

No Bootstrap or React will be used.

The frontend will use realistic mock/sample data so that the application looks and behaves like a functional food-delivery platform.

### Phase 2 — Backend Integration

The second phase will connect the existing frontend to a real backend and database.

Planned technologies:

- Node.js
- Express.js
- MongoDB
- Socket.IO for real-time communication

The frontend architecture must therefore be designed so that mock data can later be replaced with backend API responses with minimal changes to the UI.

---

# 2. Project Goals

The main goals of MunchMate are:

1. Create a modern and professional food-delivery interface.
2. Allow customers to discover restaurants and food items.
3. Allow customers to search and filter food and restaurants.
4. Allow customers to add food to a cart.
5. Allow customers to checkout and place orders.
6. Allow customers to track order status.
7. Allow customers to rate and review restaurants.
8. Allow restaurants to register and manage their profiles.
9. Allow restaurants to create and manage menus.
10. Require admin approval before a restaurant becomes publicly visible.
11. Allow restaurants to manage customer orders.
12. Provide an administrative dashboard for platform management.
13. Simulate delivery partners during the prototype phase.
14. Keep the architecture ready for backend/database integration.

---

# 3. User Roles

MunchMate has three main system roles.

## 3.1 Customer

Customers can:

- Register
- Login
- Browse restaurants
- Search food and restaurants
- Filter results
- View restaurant pages
- View menus
- View food details
- Add food to cart
- Modify cart quantities
- Checkout
- Place orders
- View order history
- Track order status
- Manage profile
- Manage saved addresses
- Rate restaurants
- Write restaurant reviews
- Reorder previous orders
- Change password
- Logout

---

## 3.2 Restaurant

Restaurants can:

- Register
- Login
- Create restaurant profile
- Upload restaurant logo/image
- Add restaurant information
- Add food items
- Edit food items
- Delete food items
- Change food prices
- Upload food images
- Organize food into categories
- Mark food as available/unavailable
- View incoming orders
- Accept orders
- Reject orders with a reason
- Update order status
- View customer ratings and reviews
- View basic order/sales statistics
- Submit restaurant and menu for admin approval

A restaurant can register and configure its account without immediate approval.

However:

> A restaurant must receive admin approval before it becomes publicly visible to customers.

Restaurant status values:

- DRAFT
- PENDING_APPROVAL
- APPROVED
- REJECTED

---

## 3.3 Admin

There is no public admin registration.

Admin access is through a private/admin-controlled login.

Admin can:

- View dashboard statistics
- Manage customers
- Manage restaurants
- Review restaurant applications
- Approve restaurants
- Reject restaurants
- Provide rejection reasons
- Review restaurant menus
- Manage/oversee food categories
- Monitor orders
- View reviews
- Remove inappropriate reviews
- Activate/deactivate users or restaurants where required

---

# 4. Customer Experience

The customer flow is:

Login/Register
        ↓
Home Page
        ↓
Search / Categories / Filters
        ↓
Restaurant Page
        ↓
Menu
        ↓
Food Item
        ↓
Add to Cart
        ↓
Cart
        ↓
Checkout
        ↓
Place Order
        ↓
Order Tracking
        ↓
Delivered
        ↓
Restaurant Rating & Review

---

# 5. Customer Home Page

The customer home page should contain:

- Customer profile/account
- Delivery address
- Search bar
- Food categories
- Trending items
- Recommended items
- Popular restaurants
- Restaurant cards
- Cart access
- Orders access

The UI should be inspired by modern food-delivery applications but should have its own MunchMate branding and design.

---

# 6. Search and Filtering

Customers can search for:

- Food name
- Restaurant name
- Cuisine
- Category

Customers can filter by:

- Rating
- Price range
- Veg / Non-veg
- Cuisine
- Category

---

# 7. Restaurant Page

The restaurant page should display:

- Restaurant name
- Restaurant logo
- Restaurant cover/image
- Rating
- Cuisine
- Location
- Reviews and ratings
- Restaurant menu
- Search within restaurant menu

Map integration and distance calculations are NOT required in Phase 1.

Restaurant location is displayed as information only.

---

# 8. Food Item

Food items can contain:

- Food image
- Food name
- Price
- Rating
- Short description
- Veg / Non-veg indicator
- Bestseller/Popular indicator
- Quantity selector
- Add to Cart button
- Offers only if added in a future phase

Ingredients are not required.

---

# 9. Cart

The cart should contain:

- Food image
- Food name
- Restaurant name
- Price
- Quantity
- Increase quantity
- Decrease quantity
- Remove item
- Item subtotal
- Delivery fee
- Tax
- Final total
- Proceed to Checkout

Phase 1 uses simple fixed/sample charges.

---

# 10. Checkout

Checkout contains:

## Customer Details

- Name
- Phone number
- Delivery address

## Payment

Payment methods can include:

- UPI
- Card
- Cash on Delivery

Payment is simulated in Phase 1.

## Order Summary

- Items
- Quantities
- Prices
- Item total
- Delivery fee
- Tax
- Final total

The customer can click:

"Place Order"

---

# 11. Orders

Customers can:

- View current orders
- View previous orders
- View order details
- Track order status
- Reorder previous orders
- Rate/review a restaurant after delivery

Order statuses:

- PLACED
- CONFIRMED
- PREPARING
- READY
- OUT_FOR_DELIVERY
- DELIVERED
- CANCELLED

---

# 12. Restaurant Order Workflow

The restaurant receives a new order.

Workflow:

Customer places order
        ↓
Restaurant receives order
        ↓
Accept / Reject
        ↓
Preparing
        ↓
Ready
        ↓
Delivery partner assigned
        ↓
Out for Delivery
        ↓
Delivered

The customer should eventually receive order-status updates in real time.

---

# 13. Delivery Partners

Delivery partners are NOT registered through a public registration system.

For the prototype, MunchMate uses mock/predefined delivery partners.

A mock delivery partner can contain:

- ID
- Name
- Rating
- Vehicle
- Availability

The system can assign a mock delivery partner to an order.

Actual delivery-partner assignment logic may be implemented in Phase 2.

---

# 14. Restaurant Approval

Restaurant workflow:

Restaurant Registration
        ↓
Restaurant Dashboard
        ↓
Complete Profile
        ↓
Add Menu
        ↓
Request Approval
        ↓
Admin Review
        ↓
Approve / Reject

If approved:

Restaurant becomes publicly visible.

If rejected:

Restaurant remains private and can modify its information and resubmit.

---

# 15. Reviews

Customers can rate restaurants after completing an order.

Reviews contain:

- Rating from 1 to 5 stars
- Optional written review
- Customer information
- Restaurant information
- Date

Only restaurants are rated.

Individual food-item ratings are not required.

---

# 16. Offers and Coupons

Offers, coupons, promotional discounts, and coupon-code systems are NOT part of the current project scope.

They may be considered future enhancements.

---

# 17. Recommendations

Recommended and Trending sections will use predefined/mock data in Phase 1.

No AI recommendation system is required for the first review.

AI-based personalization may be added as a future enhancement after the core system is functional.

---

# 18. Location

Customers manually enter their delivery address.

Real GPS/location detection is not required in Phase 1.

Restaurant locations are displayed but:

- No map integration
- No GPS
- No distance calculation
- No route calculation

---

# 19. Design Philosophy

MunchMate should have a:

- Modern
- Professional
- Clean
- Responsive
- Food-focused
- User-friendly

visual style.

The application should feel like a real food-delivery platform while remaining simple enough for a college project and viva.

---

# 20. Development Principle

The most important technical principle is:

> Build Phase 1 so that Phase 2 can replace mock data with API data without requiring major changes to the UI.

The preferred flow is:

Page
 ↓
JavaScript Logic
 ↓
Service Layer
 ↓
Data Source

Phase 1:

Service Layer
 ↓
Mock Data

Phase 2:

Service Layer
 ↓
Backend API
 ↓
Node.js + Express
 ↓
MongoDB

---

# 21. Current Scope

The current scope includes:

- Customer interface
- Restaurant interface
- Admin interface
- Mock delivery partners
- Authentication UI
- Restaurant approval workflow
- Restaurant menu management
- Cart
- Checkout
- Orders
- Order tracking
- Restaurant reviews
- Search
- Filters
- Responsive design

The current scope does NOT include:

- Real payment gateway
- Real GPS
- Maps
- Distance calculations
- Delivery partner registration
- Coupons
- Offers
- AI recommendation engine
- Real-time backend connectivity

These can be considered for future phases.
