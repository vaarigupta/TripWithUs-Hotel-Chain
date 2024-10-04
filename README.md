# “TripWithUs” Hotel Chain

## Introduction

TripWithUs is a new platform  to list some hotels from all over the world.
**Requirements:** create some APIs to display hotels based on the following filters:

-   Category
    -   Mid-Range
    -   Family
    -   Luxury
    -   Boutique
    -   Resort    
    -   Budget
-   Amenity
    -   Spa  
    -   Bar     
    -   Pool   
    -   Restaurant
    -   Gym  
    -   Pet Friendly
    -   Parking   
    -   Free WiFi  
-   Country
    -   France 
    -   USA      
    -   India  
    -   Germany
    -   United Kingdom   
    -   Australia 
    -   South Africa
Also, sort the result of hotels on:
-   Pricing
-   Ratings
-   Reviews
  
So, we need to use Sorting and Filtering methods to display the hotels based on the user choices.

## **What are the various Actions and Consequences a user has to undergo?**

1.  Select the following sorting options and see the hotels getting sorted:
    -   Pricing
    -   Ratings  
    -   Reviews
        
2.  Select any filter based on:
    - Category
    -  Amenity 
    -  Country
The hotels are listed based on the filters applied.

## API Endpoints:

### Endpoint 1: Get the hotels sorted by pricing
```
<http://localhost:3000/hotels/sort/pricing?pricing=low-to-high>
```
### Endpoint 2: Get the hotels sorted based on their Ratings
```
<http://localhost:3000/hotels/sort/rating?rating=low-to-high>
```
### Endpoint 3: Get the Hotels sorted based on their Reviews
```
<http://localhost:3000/hotels/sort/reviews?reviews=least-to-most>
```
### Endpoint 4: Filter the hotels based on the Hotel Amenity
```
<http://localhost:3000/hotels/filter/amenity?amenity=spa>
```
### Endpoint 5: Filter the hotels based on the selected Country
```
<http://localhost:3000/hotels/filter/country?country=india>
```
### Endpoint 6: Filter the hotels based on the selected Category
```
<http://localhost:3000/hotels/filter/category?category=luxury>
```
### Endpoint 7: Send all hotels
```
<http://localhost:3000/hotels>
```
  **Deployed Link:**  [TripWithUs-Hotel-Chain](https://trip-with-us-hotel-chain-lemon.vercel.app/hotels)
  
  **Note:** Check API endpoints on the deployed link or use this frontend application - [UI](https://bd2-hotel-listing.vercel.app/) to API response.
