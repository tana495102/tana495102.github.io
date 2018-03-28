//current energy consumption update picture
function update_member_profit(number) {
    $("#member_profit").text(String(number));
}
//DIY------------------------------------------------
function update_member_order(number) {
    $("#member_order").text(String(number));
}

function update_data(id,number) {
    $("#"+String(id)).text(String(number));
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
//DIY------------------------------------------------

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyCne79racwrVdwHQ-um-yA3uIbJ8sAGk88",
      authDomain: "tana-python-training.firebaseapp.com",
      databaseURL: "https://tana-python-training.firebaseio.com",
      projectId: "tana-python-training",
      storageBucket: "tana-python-training.appspot.com",
      messagingSenderId: "311145151944"
    };
    firebase.initializeApp(config);

//    var ref = firebase.database().ref();
//
//    ref.on("value", function(snapshot) {
//        console.log(snapshot.val().test);
//        x = snapshot.val().test;
//    }, function (error) {
//        console.log("Error: " + error.code);
//    });

//    total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_data(data.key,parseInt(data.val()));
            writeUserData('tana','tanap','tana_pai@hotmail.com','https://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg')
        } else if (data.key == 'member_order') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_issuereports') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_ipomargin') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_payments') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_logistics') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_orders') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_transactions') {
            update_data(data.key,parseInt(data.val()));
        } else if (data.key == 'member_revenue') {
            update_data(data.key,parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });
//DIY--------------------------------------------------------------------
    // var member_orderRef = firebase.database().ref("member");
    //
    // member_orderRef.on("child_changed", function(data) {
    //   console.log(data.key);
    //   console.log(data.val());
    //   if(data.key == "1PV221445K1200100") {
    //     total_load_activePower  = data.val().load_activePower;
    //   } else if (data.key == 'member_order') {
    //       update_member_order(parseInt(data.val()));
    //   } else {
    //       console.log("need to parse this key " + data.key)
    //     }
    // });

    // var member_orderRef = firebase.database().ref("member");
    //
    // member_orderRef.on("child_changed", function(data) {
    //     console.log(data.key);
    //     console.log(data.val());
    //     if(data.key == "1PV221445K1200100") {
    //         total_load_activePower  = data.val().load_activePower;
    //     } else if (data.key == 'member_order') {
    //         update_data(parseInt(data.val()));
    //     } else {
    //         console.log("need to parse this key " + data.key)
    //     }
    // });
//DIY--------------------------------------------------------------------

//  });

});
