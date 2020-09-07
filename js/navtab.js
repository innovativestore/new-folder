 jQuery('.nav-tabs li:first-child').addClass('active');
    jQuery('.tab-pane').hide();
    jQuery('.tab-pane:first').show();
    //jQuery('.login-btn-modal .col-sm-6:first-child').addClass('active')
//    jQuery('.msg-box .reply').hide();
    jQuery('.msg-box .option').hide();
jQuery(document).ready(function(){
    jQuery('.nav-tabs li').click(function(){
    jQuery('.nav-tabs li').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tab-pane').hide();

var activeTab = $(this).find('a').attr('href');
jQuery(activeTab).fadeIn();
return false;

})


    
    

// jQuery('.login-btn-modal .col-sm-6').hover(function(){
//     jQuery('.login-btn-modal .col-sm-6').removeClass('active');
   //  jQuery(this).addClass('active');
// })


/*       msg box    */
   //jQuery('.notifications-section .msg-box').click(function(){
//	   jQuery('.notifications-section .msg-box').removeClass('active');
  //     jQuery(this).addClass('active');
	//   jQuery('.msg-box .reply').hide();
	   
    //})
    
	});
	
