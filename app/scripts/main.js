$(document).ready(function () {

	//Form content function
	var user_mail = $('#email_inpt');
	var pass_inpt = $('#pass_inpt');
	
	user_mail.on('click', function(){
		$('.username').css({
			'font-size' : '9px',
			'top' : '-7px',
			'color' : '#b0b0b0'
		})

		if(pass_inpt.val() == " " )
		{
			$('.password').css({
			'font-size' : '',
			'top' : '',
			'color' : ''
			})
		}
	})

	pass_inpt.on('click', function(){
		$('.password').css({
			'font-size' : '9px',
			'top' : '-7px',
			'color' : '#b0b0b0'
		})

		if(user_mail.val() == " ")
		{
			$('.username').css({
			'font-size' : '',
			'top' : '',
			'color' : ''
			})
		}
	})

	$('#forgot_pass_div #email_inpt').on('click', function(){
		$('.ur_mail').css({
			'font-size' : '9px',
			'top' : '-7px',
			'color' : '#b0b0b0'
		})
	})
	
	//Click function close popup
	$(document).on('click', function(e){
		if(!$(e.target).closest('.gen_login_form').length){
			if(user_mail.val() == "" && pass_inpt.val() == "")
			{
				$('.password, .username, .ur_mail').css({
					'font-size' : '' ,
					'top' : '' ,
					'color' : ''
				})
			}
			else
			{
				$('.password, .username, .ur_mail').css({
					'font-size' : '9px' ,
					'top' : '-7px' ,
					'color' : '#b0b0b0'
				})
			}

		}
	})

	$('.pass_link').on('click', function(e){
		e.preventDefault();
		$('.login_back_button').css({
			'visibility' : 'visible',
			'opacity' : '1'
		})
	})

	$('.forgot_pass').on('click', function(){
		$('#forgot_pass_div').addClass('forgot_pass_active');
		$('#log_in_div').addClass('login_div_passive');
	})

	$('.login_back_button, .login_close').on('click', function(){
		$('#forgot_pass_div').removeClass('forgot_pass_active');
		$('#log_in_div').removeClass('login_div_passive');
		$('.login_back_button').css({
			'visibility' : '',
			'opacity' : ''
		})
	})

	var isOpen = false;

	$('.login_modal').on('click', function(){

		isOpen = true;

		$('.popup_bg').addClass('popup_ready');
		$('.login_popup_wrap')
			.removeClass('popup_animate')
			.addClass('with_anim');
	})

	$(window).on('click', function(e){
		if (isOpen == false) 
		{
			if (!$(e.target).closest('.popup_wrapper').length)
		 	{
		 	
		 	$('.popup_bg').removeClass('popup_ready');
			$('.login_popup_wrap')
				.addClass('popup_animate')
				.removeClass('with_anim');
			 }

			 //ESC key for closing popup
			 $(document).keydown(function(e){
			 	if (e.keyCode == 27) 
			 	{
			 		$('.popup_bg').removeClass('popup_ready');
					$('.login_popup_wrap')
						.addClass('popup_animate')
						.removeClass('with_anim');
					 	}
			 })
			 isOpen = true;
		}
		else
		{
			isOpen = false;
		}
	})
})

