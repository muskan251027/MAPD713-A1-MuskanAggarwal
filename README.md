# MAPD713-A1-MuskanAggarwal

- I have used restify and save for dtaa persistence
- I have made functions for GET, POST and Delete
- You can perform these actions for all products or product by id
- GITHUB URL - https://github.com/muskan251027/MAPD713-A1-MuskanAggarwal

## APPLICATION LOGIC FOR SEQUENCE DIAGRAM
Client->Products Web API: Http Request  
Note right of Client: POST \n/serverUrl/products\n{productId:12, name:"product1", price:25, quantity: 12}  
Products Web API->Data Access: Create product  
Data Access->DB: Insert Product  
DB->Data Access: Return Code  
Data Access->Products Web API: Return Code  
Products Web API->Client: Http Response  
Note right of Client: {<product1>}  

Client->Products Web API: Http Request  
Note right of Client: GET \n/serverUrl/products\n  
Products Web API->Data Access: Get all products  
Data Access->DB: Find all Products  
DB->Data Access: Return Code  
Data Access->Products Web API: Return Code  
Products Web API->Client: Http Response  
Note right of Client: [{<product1>},{<product2>}]  

Client->Products Web API: Http Request  
Note right of Client: GET \n/serverUrl/products/{id}  
Products Web API->Data Access: Get product with _id=id  
Data Access->DB: Find Product with _id=id  
DB->Data Access: Return Code  
Data Access->Products Web API: Return Code  
Products Web API->Client: Http Response  
Note right of Client: {<product1>}  

Client->Products Web API: Http Request  
Note right of Client: DELETE \n/serverUrl/products  
Products Web API->Data Access: Get All products  
Data Access->DB: Delete All products  
DB->Data Access: Return Code  
Data Access->Products Web API: Return Code  
Products Web API->Client: Http Response  
Note right of Client: 204, <No content>    

Client->Products Web API: Http Request  
Note right of Client: DELETE \n/serverUrl/products/{id}  
Products Web API->Data Access: Get product with _id=id  
Data Access->DB: Delete that product  
DB->Data Access: Return Code  
Data Access->Products Web API: Return Code  
Products Web API->Client: Http Response  
Note right of Client: 204, <No content>   


