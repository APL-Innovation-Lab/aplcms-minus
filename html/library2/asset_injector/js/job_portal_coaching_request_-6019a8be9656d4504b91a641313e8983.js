(function($, jQuery) {
  $(document).ready(function() {



$('#node-job-portal-assistance-request-form').change(function(){
	selected_value = $("input[name='field_i_prefer_to_be_contacted_b']:checked").val();

	if(selected_value == '0') {
		$('#edit-field-jp-email-wrapper').css('display','none');
		$('#edit-field-jp-phone-wrapper').css('display','block');
	} else {
		$('#edit-field-jp-email-wrapper').css('display','block');
		$('#edit-field-jp-phone-wrapper').css('display','none');
	};
	
	
});  


   
  });
})(jQuery);