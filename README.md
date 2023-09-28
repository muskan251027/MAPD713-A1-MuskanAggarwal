# MAPD713-A1-MuskanAggarwal

- I have used restify and save for dtaa persistence
- I have made functions for GET, POST and Delete
- You can perform these actions for all products or product by id

## APPLICATION LOGIC FOR SEQUENCE DIAGRAM
Product->Web API: Http Request  
Note right of Product: POST \n/serverUrl/products\n{productId:12, name:"User1", price:25, quantity: 12}  
Web API->Data Access: Create product  
Data Access->DB: Insert Product  
DB->Data Access: Return Code  
Data Access->Web API: Return Code  
Web API->Product: Http Response  
Note right of Product: {<product1>}  

Product->Web API: Http Request  
Note right of Product: GET \n/serverUrl/products\n  
Web API->Data Access: Get all products  
Data Access->DB: Find all Products  
DB->Data Access: Return Code  
Data Access->Web API: Return Code  
Web API->Product: Http Response  
Note right of Product: [{<product1>},{<product2>}]  

Product->Web API: Http Request  
Note right of Product: GET \n/serverUrl/products/{id}  
Web API->Data Access: Get product with _id=id  
Data Access->DB: Find Product with _id=id  
DB->Data Access: Return Code  
Data Access->Web API: Return Code  
Web API->Product: Http Response  
Note right of Product: {<product1>}  

Product->Web API: Http Request  
Note right of Product: DELETE \n/serverUrl/products  
Web API->Data Access: Get All products  
Data Access->DB: Delete All products  
DB->Data Access: Return Code  
Data Access->Web API: Return Code  
Web API->Product: Http Response  
Note right of Product: {}  

Product->Web API: Http Request  
Note right of Product: DELETE \n/serverUrl/products/{id}  
Web API->Data Access: Get product with _id=id  
Data Access->DB: Delete that product  
DB->Data Access: Return Code  
Data Access->Web API: Return Code  
Web API->Product: Http Response  
Note right of Product: {}  


