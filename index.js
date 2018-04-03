var firebase = require('firebase');
firebase.initializeApp({
 
 "serviceAccount": "serviceAccountKey.json",
 
 "databaseURL": "https://databot-8e775.firebaseio.com"
});
var ref = firebase.app().database().ref();
function getData(key){
  console.log("key:"+key);
ref.child(key).once('value')
 .then(function (snap) {
 console.log(snap.val());
 return snap.val()
 
 });
}


function logger (key,data){
  var obj1=ref.child(key)
  console.log('function called..')
  obj1.push(data);   // Creates a new ref with a new "push key"
  obj1.set(data);    // Overwrites the path
  obj1.update(data); // Updates only the specified attributes 
}
module.exports.getData=getData;
module.exports.logger= logger;
