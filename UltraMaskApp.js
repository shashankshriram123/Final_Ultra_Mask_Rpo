var CreateEmail; // email input that the user gives for creating an account
var SignEmail; // email input that the user gives when signing into app
var emailList = []; // list that contains all previous user emails
var CreatePassword; // password input that the user gives for creating an account
var SignPassword; // password input that the user gives when signing into app
var passwordList = []; // list that contains all previous user passwords
var seconds; // seconds is the variable that dictates how long the "incorrect" message is shown

onEvent("CreateAnAccount_Btn", "click", function( ) { // changes screen for the user to create their account
    setScreen("CreateAccount_Screen");
});
onEvent("HomeSignIn_Btn", "click", function( ) {
  setScreen("SignIn_Screen");
});

onEvent("CreateAccnt_Button", "click", function( ) {
  CreateEmail = getText("NewEmail_Input");
  CreatePassword = getText("NewPassword_Input");
  appendItem(emailList, CreateEmail); // adds new email to a list containing emails of different users
  appendItem(passwordList, CreatePassword); // adds password corresponding to user email to a list
  setScreen("Welcome_Screen");
  setText("NewEmail_Input", "");
  setText("NewPassword_Input", "");
});
onEvent("SignIn_Btn", "click", function( ) {
  seconds = 0;
  SignEmail = getText("SignEmail_Input");
  SignPassword = getText("SignPassword_Input");
  for (var i = 0; i < emailList.length; i++) { // repeats for all elements in the list that contains the user's emails
    if (SignEmail == emailList[i] && SignPassword == passwordList[i]){ // checks to see if the email/password that the user provides corresponds in the list
      setScreen("Home_Screen");
      setText("SignEmail_Input", ""); //resets email input text box
      setText("SignPassword_Input", ""); // resets password input text box
      break;
    }
    else { // displays "incorrect" message for 2 seconds
      showElement("Incorrect_Text");
      timedLoop(1000, function() {
      seconds = seconds + 1;
      if (seconds == 2) {
        stopTimedLoop();
        hideElement("Incorrect_Text");
        }
      });
    }
  }
});

onEvent("CovidCase_Btn", "click", function( ) {
  setScreen("CovidCase_Screen");
});
onEvent("BackToHome_Btn", "click", function( ) {
  setScreen("Home_Screen");
});
onEvent("LogOut_Btn", "click", function( ) {
  setScreen("Welcome_Screen");
});
