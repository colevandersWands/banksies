// Video Modals
	$('section').closest('body').find('.modal-video[video-link]').remove();

	$('.modal-video-container').each(function(index){
		$(this).find('.play-button').attr('video-link', index);
		$(this).find('.modal-video').clone().appendTo('body').attr('video-link',index);
	});
	
	$('.modal-video-container .play-button').click(function(){
		var linkedVideo = $('body').find('.modal-video[video-link="'+$(this).attr('video-link')+'"]');
		linkedVideo.toggleClass('reveal-modal');
		
		if(linkedVideo.find('video').length){
			linkedVideo.find('video').get(0).play();
		}
		
		if(linkedVideo.find('iframe').length){
			var iframe = linkedVideo.find('iframe');
        	var iframeSrc = iframe.attr('data-src') + '&autoplay=1';
        	iframe.attr('src', iframeSrc);
		}
	});
	
	$('.close-iframe').click(function(){
    	$(this).closest('.modal-video').toggleClass('reveal-modal');
    	$(this).siblings('iframe').attr('src', '');
    	$(this).siblings('video').get(0).pause();
    });