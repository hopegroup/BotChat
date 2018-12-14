const fs = require("fs");
const login = require("facebook-chat-api");

login({ email: "0978085495", password: "Ch04nh1lan" }, (err, api) => {

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

    api.setOptions({ forceLogin: true, selfListen: false, logLevel: "silent", listenEvents: true });


    var ID = 100006165366157; // id trieu xuan khang

    var ID2 = 100004359125508; // id ly gia

    var IDG = 1590386811002851; // id group chat

    var url = "https://goo.gl/3kY3An"; // sheets log

    var pattern = /sp[0-9]*/ig; // chuoi chinh quy

    api.listen(function callback(err, message) {
        if (message.body === "getid" || message.body === "Getid" || message.body === "GetID" || message.body === "/getid") {

            console.log("1. FB.com/" + message.threadID + ' - Message: ' + message.body);

            api.sendMessage("ID : " + message.threadID, message.threadID);
        }
        //Ví dụ nếu mình set message.body = /Jarvis thì bot sẽ print api.sendMessage = Send bobs n vegena... 
        else if ((message.body === "ok" || message.body === "Ok") && message.senderID == ID) {

            console.log("2. FB.com/" + message.threadID + ' - Message: ' + message.body);

            api.sendMessage("_____ok_____", ID);

            api.sendMessage("Ok chi", IDG);

            api.sendMessage("Xac nhan dang sp", ID2)

            return;
        }
        //message.body = tin nhắn bạn send cho bot
        else if (pattern.exec(message.body)&& message.senderID!=ID2) {
            // ghi log nguoi gui
            console.log("3. FB.com/" + message.threadID + ' - Message: ' + message.body);
            // gui phan hoi cho ktv
            api.sendMessage("_____co sp moi nhe _____", ID);

            api.sendMessage(message.body, ID);

            api.sendMessage("Link :" + url, ID);

            // xac nhan da gui
            api.sendMessage("Xac nhan da gui thong tin sp", ID2)

            return;
        } else if (message.body === "Karaoke" || message.body === "karaoke") {

            api.sendMessage("ok e ơi 1s thôi la đủ", message.threadID);

            api.sendMessage("Link Add Music : https://goo.gl/forms/ibKrgHgD9KpRp0JA3", message.threadID);

            api.sendMessage("Link List Music : https://goo.gl/BsZEoq", message.threadID);

            return;
        }
    });
});
