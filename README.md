#### Exercise

(Application was created using Express Generator)  
(API Collection in Postman)  

Create Rest Apis for Simple Inventry Management for Household goods so that during lockdown period one can get idea that how many items one have in home.

1. Create a database connection using mongoose.

2. Create mongoose schema for same day "Items" with appropiate properties, validations and pre/post hooks.

name : string, required
quantity: number, required
isSanitized: boolean
unit: string, required,
expiryDate: Date
createdDate: automatically inserted current date and time
updatedDate: automatically inserted current date and time
category: possible values [Grocery, Medical, Fruits&Veg, Berverages, Babycare. Cleaning]
location: possible values [Store, Kitchen]

3. Establish the connection with mongoDB through mongoose.

3. Expose below endpoints

RestApis:

GET : /items
To fetch all the items with all properties. Array of objects.

POST: /items
To add new items in database if already present (check by name) then update the item.

PATCH: /item/:id
Update existing item

DELETE: /item/:id
delete the exisitng item.

Note:
 All the routes should be listed in route.js file then points to controller.js file which  further points to service.js file where actually mongoose queries are written.