sportRb.onchange = function() {
  NSB.MsgBox("Your favorite sport is " + $("#sportRb_" + sportRb.value).val());
};


menuHb.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    if (s === "Sign Out") {
        NSB.MsgBox('You have Signed out')
    }
    if (s === "Change Password") {
        NSB.MsgBox('Check email for a link to proceed')
    }
    if (s === "Change Email") {
        NSB.MsgBox('Check email for a link to proceed')
    }
    if (s === "Delete Account") {
        NSB.MsgBox('Are you sure?')
    }
};
