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
  if( $email=="" || !emailReg.test( $email ) ) {
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
    var email_add = $('#signup_email').val();
    if(validateEmail(email_add)) {
        if(postDataToGoogleForm_signup()) {
            $.ajax({
                url:"send_mail.php",
                type:"post",
                data:{ email: email_add },
                dataType:"json",
                success : function(data) {
                    if (data==true) {
                        $('#signup_success_modal').modal("show");
                        $('.signup_matter').hide();
                        $('.social_matter').fadeIn();
                    }
                    else if(data==false) {
                        console.log("Error: Mail not sent. Please let me know so that I can fix this.");
                    }
                    else {
                        var err_msg = "<p>Please correct the following errors in the form and resubmit!<br><br>";
                        for(var key in data) {
                            err_msg = err_msg + "<b style='color:#D73D32'>" + key.charAt(0).toUpperCase() + key.slice(1)+"</b> : <span style='color:#666'>" + data[key] + "</span><br>";
                        }
                        err_msg = err_msg + "</p>";
                        $('#signup_err_modal .modal-body').html(err_msg);
                        $('#signup_err_modal').modal("show");
                    }
                },
                error: function(exception) {
                    $('#signup_err_modal .modal-body').html("Sorry, some internal error occured!<br> Please let me know about this so that we can fix it.");
                    $('#signup_err_modal').modal("show");
                }
            });
        }
    }else{
        $('#signup_err_modal').modal("show");
    }
})
