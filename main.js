Jquery
===========


jQuery('document').ready(function(){
	

	jQuery('.select_location').on('change', function(){
   window.location = jQuery(this).val();

	

});
	
jQuery("#myselect > option").each(function() {
    if (window.location.href.indexOf(this.value) > -1) {
      jQuery(this).attr('selected', 'selected')
    }
});

	
});