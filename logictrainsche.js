var firebaseConfig = {
    apiKey: "AIzaSyBhjAW5rcz9Z-_ckWZca_KAqLAMY5SeKQY",
    authDomain: "cctrainschedule.firebaseapp.com",
    databaseURL: "https://cctrainschedule.firebaseio.com",
    projectId: "cctrainschedule",
    storageBucket: "cctrainschedule.appspot.com",
    messagingSenderId: "556363465669",
    appId: "1:556363465669:web:2e5240f2478137a18181ac",
    measurementId: "G-MFMMJ3H2CR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var dataBase = firebase.database();

  $('#choo').on("submit", function(event){
event.preventDefault();

var trainData = {
trainName: $("#train-name").val().trim(),
destination: $("#destination").val().trim(),
trainTime: $("#trainTime").val().trim(),
frequency: $("#frequency").val().trim(),

}

firebase.database().ref().push(trainData);
$("#train-name").val("");
$("#destination").val("");
$("#trainTime").val("");
$("#frequency").val(""); 

})

dataBase.ref().on("child_added",function(childSnapshot,prevChildKey){
console.log(childSnapshot.val())
var Name = childSnapshot.val().trainName;
var Dest = childSnapshot.val().destination;
var firstT = childSnapshot.val().trainTime;
var frequency = childSnapshot.val().frequency;

var $tr = $("<tr>").append(
$("<td>").text(Name),
$("<td>").text(Dest),
$("<td>").text(firstT),
$("<td>").text(frequency)
)

$(".trainTable > tbody").append($tr)

})


