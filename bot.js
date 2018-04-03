console.log('Bot started...');
//var fire = require('./index.js');
var firebase = require('firebase');
firebase.initializeApp({
 "serviceAccount": "serviceAccountKey.json",
 "databaseURL": "https://databot-8e775.firebaseio.com"
});
var ref = firebase.app().database().ref();
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("569362273:AAGQKz1snDpzBywxd7-t0JcDKRPJN7VsoXY", { polling: true });


telegram.on("text", (message) => {
    if(message.text.toLowerCase().indexOf("s") === 0){
        var userID=message.chat.id;
        var url="http://botmaster.com/"+message.chat.id+"/sg_data_bot?action=4354433";
       // logger(userID,{"data":["URL",url,[{"UserName":Math.random(),"Password":Math.random()}]]});
        telegram.sendMessage(message.chat.id,"Your Action url is \n "+
    "URL:"+url+"\nCopy and past in the action of the html page."+
    "\n/stop remove the url.");      
    }else 
    
    if(message.text.toLowerCase().indexOf("z") === 0){
        var key=message.chat.id;
        console.log('getDataFunction called..')
        getData('401526962');
        //console.log(getData('401526962'));
        //getData('401526962');
        //var getDataStructure ="URL:"+data.url+"\n"+data.url.text;
        //telegram.sendMessage(key,data+"");
    }
});




function getData(key){
    var res;
    ref.child(key).once('value')
    .then(function (snap) {
        res= snap.val()
        console.log(res);
        //if(res!='undefined'){
            var getDataStructure ="URL:"+JSON.stringify(res.url)+"\n"+JSON.stringify(res.url);
            telegram.sendMessage(key,getDataStructure);            
        //} 
        
   });
   
}
function logger (key,data){
    var obj1=ref.child(key);
    //var jObj=JSON.parse(data);
    //console.log('function called..'+jObj.data)
   // var url = person.child(data.url);
    
    //obj1.push(data);   // Creates a new ref with a new "push key"
    //obj1.set(data);    // Overwrites the path
    obj1.update(data); // Updates only the specified attributes 
}
  

// telegram.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
  
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     telegram.sendMessage(chatId, resp);
//   });
telegram.addListener