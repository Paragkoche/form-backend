# Backend

- Start server commend

```bash
  npm i 
    npm run dev
```

- base Url

```request
 http://localhost:8080
```

# Document

### Endpoints

| Name     | Endpoint                        |
| :------- | :------------------------------ |
| User     | [/user](#user-endpoint)         |

## User `(ENDPOINT)`

| Name     | Endpoint                               | Http Method | Request type            | Response type           |
| :------- | :------------------------------------- | :---------- | :---------------------- | :---------------------- |
| Add user | [/add](http://localhost:8080/user/add) | POST        | [Req](#add-user) | [Res](#add-user) |
| Get user | [/:id](http://localhost:8080/user/:id) | GET         | [Req](#get-user) | [Res](#get-user) |

# Types

## User `(Types)`

### Get User

- `Request`

```json
{
  "params:id": "UUID"
}
```

- `Response`

```json
{
  "states": "Number",
  "data": 
    {
      "id": "UUID",
      "firstName": "String",
      "email": "String",
      "phone": "String",
      "whatsappNo": "String",
      "designation": "String",
      "company_exhibit": "String",
      "company": "String",
      "website": "String",
      "address": "String",
      "Marketing_Sales_Name": "String",
      "Marketing_Sales_Whatsapp_Number": "String",
      "Marketing_Sales_designation": "String",
      "Marketing_Sales_email": "String",
      "Accounts_Finance_name": "String",
      "Accounts_Finance_Whatsapp_Number": "String",
      "Accounts_Finance_designation": "String",
      "Accounts_Finance_email": "String",
      "event_coordinator_name": "String",
      "event_coordinator_Whatsapp_Number": "String",
      "event_coordinator_designation": "String",
      "event_coordinator_email": "String",
      "category":  "String",
      "product": "String"
      
    }
  
}
```
### Add User

- `Request`

```json
{
  "firstName": "String",
      "email": "String",
      "phone": "String",
      "whatsappNo": "String",
      "designation": "String",
      "company_exhibit": "String",
      "company": "String",
      "website": "String",
      "address": "String",
      "password": "String",
      "Marketing_Sales_Name": "String",
      "Marketing_Sales_Whatsapp_Number": "String",
      "Marketing_Sales_designation": "String",
      "Marketing_Sales_email": "String",
      "Accounts_Finance_name": "String",
      "Accounts_Finance_Whatsapp_Number": "String",
      "Accounts_Finance_designation": "String",
      "Accounts_Finance_email": "String",
      "event_coordinator_name": "String",
      "event_coordinator_Whatsapp_Number": "String",
      "event_coordinator_designation": "String",
      "event_coordinator_email": "String",
      "category": "String",
       
      "product":"String",
        
}
```

- `Response`

```json
{
  "states": "Number",
  "data": 
    {
      "id": "UUID",
      "firstName": "String",
      "email": "String",
      "phone": "String",
      "whatsappNo": "String",
      "designation": "String",
      "company_exhibit": "String",
      "company": "String",
      "website": "String",
      "address": "String",
      "Marketing_Sales_Name": "String",
      "Marketing_Sales_Whatsapp_Number": "String",
      "Marketing_Sales_designation": "String",
      "Marketing_Sales_email": "String",
      "Accounts_Finance_name": "String",
      "Accounts_Finance_Whatsapp_Number": "String",
      "Accounts_Finance_designation": "String",
      "Accounts_Finance_email": "String",
      "event_coordinator_name": "String",
      "event_coordinator_Whatsapp_Number": "String",
      "event_coordinator_designation": "String",
      "event_coordinator_email": "String",
      "category":"String",
      
      "product":"String"
      
    }
  
}
```
