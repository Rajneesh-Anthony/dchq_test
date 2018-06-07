// Calender Carousal js
 $(document).ready(function() {
      //         $('.calender-carousal .owl-carousel').owlCarousel({
      //           loop: false,
      //           responsiveClass: true,
      //           responsive: {
      //             0: {
      //               items: 1,
      //               nav: true
      //             },
      //             480: {
      //               items: 2,
      //               nav: false
      //             },
      //             768: {
      //               items: 4,
      //               nav: true,
      //               loop: false,
      //             }
				  // ,
      //             1200: {
      //               items: 7,
      //               nav: true,
      //               loop: false,
      //             }
      //           }
      //         })
			  
//$('.selectpicker').selectpicker();
jQuery(document).on('click','.item',function(){
  jQuery('.date-container').removeClass('active');
  var item  = jQuery(this);
  var date_container = jQuery(this).find('.date-container');
  date_container.addClass('active');
  jQuery('.col-sm-12.event_content').addClass('hidden');
  if(date_container.hasClass('active')) {
    current_id = item.attr('id');
    jQuery('.'+current_id).removeClass('hidden');
  }  
});

  // Table Accordion class
  //jQuery('.clickrow').on('click',function(){
  jQuery(document).on('click','.clickrow',function(){  
  	jQuery('.clickrow').not(this).removeClass('active');
  	jQuery('.panel').hide();
    jQuery(this).toggleClass('active');
  	
  	if(jQuery(this).hasClass('active')){
  		jQuery(this).next('.panel:eq(0)').show();
  	}else {
  		jQuery(this).next('.panel:eq(0)').hide();
  	}
  });

//$(".btn-blue").click(function(){  
jQuery(document).on('click','.btn-blue',function(){  
    $(".divcontent > p").toggleClass('active');
});

jQuery('.type_select').on('change',function(){
   var select = jQuery(this);
  var selected_type = select.val();

    if(selected_type == 'course') {
          jQuery('.clickrow[event_type=2]').addClass('hidden');
          jQuery('.clickrow[event_type=5]').removeClass('hidden');
    }else if (selected_type == 'event') {
          jQuery('.clickrow[event_type=2]').removeClass('hidden');
          jQuery('.clickrow[event_type=5]').addClass('hidden');
    }else {
          jQuery('.clickrow[event_type=2]').removeClass('hidden');
          jQuery('.clickrow[event_type=5]').removeClass('hidden');
    }

  
});


jQuery('.ampm_select').on('change',function(){
   var select = jQuery(this);
   var selected_type = select.val();

    if(selected_type == 'am') {
          jQuery('.clickrow[ampm=PM]').addClass('hidden');
          jQuery('.clickrow[ampm=AM]').removeClass('hidden');
    }else if (selected_type == 'pm') {
          jQuery('.clickrow[ampm=PM]').removeClass('hidden');
          jQuery('.clickrow[ampm=AM]').addClass('hidden');
    }else {
          jQuery('.clickrow[ampm=AM]').removeClass('hidden');
          jQuery('.clickrow[ampm=PM]').removeClass('hidden');
    }

  
});

});

