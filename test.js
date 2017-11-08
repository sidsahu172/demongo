var mong=require('./index');

mong.createDatabase("sid2");
mong.createCollection("sid2","user1");

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
