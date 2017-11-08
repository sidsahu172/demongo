# demongo
An Javascript api to assign schema to mongodb database.

Functions:
1. createDatabase(databaseName)
2. createCollection(databaseName,collectionName)
3. setSchema(url,collectionName,schema as JSON)
Example:
var mong=require('./index')
var schema2= {
      "firstName": {$type: "string", $exists: true},


      "lastName": { $type: "string", $exists: true}
    ,

      "phoneNumber": { 
        $type: "string",
        $exists: true,
        $regex: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
      }
    ,

      "email": {
        $type: "string",
        $exists: true
      }
    };
var url="mongodb://localhost:27017/sid2";
  mong.setSchema(url,"user1",schema2)

4. insertValues(url,collectionName,values,many=false)
*to insert multiple values assign many =true
