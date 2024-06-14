(function($, jQuery) {
  $(document).ready(function() {
    $('#edit-submit').val('Cancel Appointment');
console.log('hi b');
$('.usa-alert__text').html('Are you sure you want to cancel your appointment?');

$('#edit-cancel, .item-list').css('display','none');

$('#webform-submission-passport-appointment-request-delete-form').css('color','transparent');
 }); // end of ready
})(jQuery); // end of jQuery