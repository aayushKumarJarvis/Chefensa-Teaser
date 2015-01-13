/**
 * Created by aayush on 12/11/14.
 */

// Function to transfer data directly to Google Spreadsheet
function postDataToGoogleForm() {

    var name = $('#name').val();
    var email = $('#email').val();
    var contactNumber = $('#contact-number').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    $.ajax({
        url: "https://docs.google.com/forms/d/10dr9_gWJr-44u-9L-jO_lfclVBEYJxQbTxm4toQ8DJA/formResponse",
        data: {
            "entry.1861170508": name,
            "entry.2043681964": email,
            "entry.1379320226": contactNumber,
            "entry.709559213": subject,
            "entry.1493384257": message
        },

        crossDomain:true,
        type: "POST",
        dataType: "jsonp",

        success: function(data) {
            console.log("Form Successfully Submitted !!");

        }
    });

}

function postDataToGoogleForm_signup() {

    var email = $('#signup_email').val();
    console.log(email);
    $.ajax({
        url: "https://docs.google.com/forms/d/10dr9_gWJr-44u-9L-jO_lfclVBEYJxQbTxm4toQ8DJA/formResponse",
        data: {
            "entry.1861170508": " ",
            "entry.2043681964": email,
            "entry.1379320226": " ",
            "entry.709559213": " ",
            "entry.1493384257": " "
        },

        crossDomain:true,
        type: "POST",
        dataType: "jsonp",

        statusCode: {
            200: function() {
                return true;
            },
            300: function() {
                return true;
            }
        },

        success: function(data) {
            console.log("Form Successfully Submitted !!");
            return true;
        },

        error: function () {
            console.log("Form error :(");
            return false;
        }
    });
    return true;
}

 function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if( !emailReg.test( $email ) ) {
    return false;
  } else {
    return true;
  }
}

// Sending Data to Google Spreadsheet
$("#btnContactUs").click(function(){
    if(postDataToGoogleForm())
        alert("Thanks for your response !");
});

$("#btn_signup").click(function(){
    if(validateEmail($('#signup_email').val())) {
        if(postDataToGoogleForm_signup())
            alert("Thanks for signing up. We'll get back to you in a day or two..");
    }else{
        alert("Please enter valid email");
    }
})
