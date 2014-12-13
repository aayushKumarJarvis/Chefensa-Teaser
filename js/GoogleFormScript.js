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
            console.log("Form Successfully Submitted !!")

        }
    });

}

// Sending Data to Google Spreadsheet
$("#btnContactUs").click(function(){
    postDataToGoogleForm();

});
