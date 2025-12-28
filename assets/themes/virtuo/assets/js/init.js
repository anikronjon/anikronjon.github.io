/*
 * Copyright (c) 2025 Marketify
 * Author: Marketify
 * This file is made for CURRENT THEME
*/


/*

	@Author: Marketify
	@URL: https://themeforest.net/user/marketify/portfolio


	This file contains the jquery functions for the actual theme, this
	is the file you need to edit to change the structure of the
	theme.

	This files contents are outlined below.

*/


// All other theme functions
(function ($){

	"use strict";

	var VirtuoAjax = VirtuoAjaxObject;

    var VirtuoInit 		= {
		
		
		
        init: function () {
			this.svg();
			this.blog();
			this.portfolio();
			this.like();
			this.vcard_menu();
			this.bio_menu();
			this.copy();
        },

		copy: function(){
			$('.fn__copy').off().on('click',function(){
				var e = $(this);
				
				var temp = $("<input>");
				$("body").append(temp);
				temp.val(e.attr('href')).select();
				document.execCommand("copy");
				temp.remove();
				
				e.addClass('active');
				setTimeout(function(){
					e.removeClass('active');
				},500);
				
				return false;
			});
		},

		vcard_menu: function(){
			var biobody = $('.page-template-home-vcard-php');
			if(biobody.length){
				$('.navbar-info a').off('click').on('click',function(){
					var e = $(this),
					href = e.attr('href');
					var element = $(href);
					if(element.length){
						if(!e.hasClass('active')){
							e.parent().siblings().find('.active').removeClass('active');
							e.addClass('active');
							var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
							var parentOffsetTop = $('.page_vcard').offset().top;
							parentOffsetTop-= 180;
							if(!biobody.hasClass('elementor-editor-active')){
								element.siblings().removeClass('active').hide();
								element.addClass('active').show();
								var distance = scrollTop - parentOffsetTop;
								if (distance < 1000) {
									$("html, body").animate({ scrollTop: parentOffsetTop }, 500);
								} else {
									$("html, body").animate({ scrollTop: parentOffsetTop + 500 }, 0).promise().done(function() {
										$("html, body").animate({ scrollTop: parentOffsetTop }, 600);
									});
								}
							}else{
								$("html, body").animate({scrollTop: element.offset().top},500);
							}
						}
						return false;
					}
				});
			}
			
		},

		bio_menu: function(){
			var biobody = $('.page-template-home-bio-php');
			if(biobody.length){
				$('.tab-navigation-button a').off('click').on('click',function(){
					var e = $(this),
					href = e.attr('href');
					var element = $(href);
					if(element.length){
						if(!e.hasClass('active')){
							e.parent().siblings().find('.active').removeClass('active');
							e.addClass('active');
							var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
							var parentOffsetTop = $('.page_bio').offset().top;
							parentOffsetTop-= 180;
							if(!biobody.hasClass('elementor-editor-active')){
								element.addClass('active').show();
								element.siblings().removeClass('active').hide();
								var distance = scrollTop - parentOffsetTop;
								if (distance < 1000) {
									$("html, body").animate({ scrollTop: parentOffsetTop }, 500);
								} else {
									$("html, body").animate({ scrollTop: parentOffsetTop + 500 }, 0).promise().done(function() {
										$("html, body").animate({ scrollTop: parentOffsetTop }, 600);
									});
								}
							}else{
								$("html, body").animate({scrollTop: element.offset().top},500);
							}
						}
						return false;
					}
				});
			}
			
		},

		blog: function(){
			var modal = $('#exampleModalCentersBlog');
			if(modal.length){
				var self = this;
				$('.fn__blog_item_1 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__blog_item_1'),
						content = parent.find('.modal-hidden-info').html();
						modal.find('.modal-body').html(content);
						modal.find('.blog-link').attr('href',parent.data('url'));
					}
				});
			}
		},
		
		portfolio: function(){
			var modal = $('#exampleModalCenter');
			if(modal.length){
				var self = this;
				$('.fn__portfolio_item_1 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__portfolio_item_1'),
						image = parent.find('.portfoli-card-img a').html(),
						title = parent.find('.portfolio-card-title').text(),
						description = parent.find('.portfolio-card-description').html(),
						like = parent.attr('data-like');
						modal.find('.portfolio-popup-thumbnail .image').html(image);
						modal.find('.text-content h3').html(title);
						modal.find('.desc').html(description);
						modal.find('.portfolio-link').attr('href',parent.data('url'));
						var like_btn = modal.find('.fn__like_btn');
						like_btn.attr('data-id',parent.attr('data-id'));
						if(like == 1){
							like_btn.addClass('active');
							like_btn.find('.btn-text').text(like_btn.data('liked'));
						}
						self.like();
					}
				});
			}
			var modal2 = $('#exampleModalCenter2');
			if(modal2.length){
				var self = this;
				$('.fn__portfolio_item_2 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__portfolio_item_2'),
						image = parent.find('.portfoli-card-img a').html(),
						title = parent.find('.portfolio-card-title').text(),
						description = parent.find('.portfolio-card-description').html(),
						like = parent.attr('data-like');
						modal2.find('.portfolio-popup-thumbnail .image').html(image);
						modal2.find('.text-content h3').html(title);
						modal2.find('.desc').html(description);
						modal2.find('.portfolio-link').attr('href',parent.data('url'));
						var like_btn = modal2.find('.fn__like_btn');
						like_btn.attr('data-id',parent.attr('data-id'));
						if(like == 1){
							like_btn.addClass('active');
							like_btn.find('.btn-text').text(like_btn.data('liked'));
						}
						self.like();
					}
				});
			}
			var modal3 = $('#exampleModalCenter3');
			if(modal3.length){
				var self = this;
				$('.fn__portfolio_item_3 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__portfolio_item_3'),
						image = parent.find('.thumbnail a').html(),
						title = parent.find('.title').text(),
						description = parent.find('.portfolio-card-description').html(),
						like = parent.attr('data-like');
						modal3.find('.portfolio-popup-thumbnail .image').html(image);
						modal3.find('.text-content h3').html(title);
						modal3.find('.desc').html(description);
						modal3.find('.portfolio-link').attr('href',parent.data('url'));
						var like_btn = modal3.find('.fn__like_btn');
						like_btn.attr('data-id',parent.attr('data-id'));
						if(like == 1){
							like_btn.addClass('active');
							like_btn.find('.btn-text').text(like_btn.data('liked'));
						}
						self.like();
					}
				});
			}
			var modal4 = $('#exampleModalCenter4');
			if(modal4.length){
				var self = this;
				$('.fn__portfolio_item_4 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__portfolio_item_4'),
						image = parent.find('.portfoli-card-img a').html(),
						title = parent.find('.portfolio-card-title').text(),
						description = parent.find('.portfolio-card-description').html(),
						like = parent.attr('data-like');
						modal4.find('.portfolio-popup-thumbnail .image').html(image);
						modal4.find('.text-content h3').html(title);
						modal4.find('.desc').html(description);
						modal4.find('.portfolio-link').attr('href',parent.data('url'));
						var like_btn = modal4.find('.fn__like_btn');
						like_btn.attr('data-id',parent.attr('data-id'));
						if(like == 1){
							like_btn.addClass('active');
							like_btn.find('.btn-text').text(like_btn.data('liked'));
						}
						self.like();
					}
				});
			}
			var modal5 = $('#exampleModalCenter5');
			if(modal5.length){
				var self = this;
				$('.fn__portfolio_item_5 a').on('click', function(){
					var element = $(this);
					if(!element.hasClass('tag-item')){
						var parent = element.closest('.fn__portfolio_item_5'),
						image = parent.find('.portfoli-card-img').html(),
						title = parent.find('.portfolio-card-title').text(),
						description = parent.find('.portfolio-card-description').html(),
						like = parent.attr('data-like');
						modal5.find('.portfolio-popup-thumbnail .image').html(image);
						modal5.find('.text-content h3').html(title);
						modal5.find('.desc').html(description);
						modal5.find('.portfolio-link').attr('href',parent.data('url'));
						var like_btn = modal5.find('.fn__like_btn');
						like_btn.attr('data-id',parent.attr('data-id'));
						if(like == 1){
							like_btn.addClass('active');
							like_btn.find('.btn-text').text(like_btn.data('liked'));
						}
						self.like();
					}
				});
			}
		},

		like: function(){
			var self = this;
			$('.fn__like_btn').off('click').on('click',function(){
				var element = $(this);

				if(!element.hasClass('loading')){
					element.addClass('loading');
					var ID 				= element.attr('data-id');
					var requestData 	= {
						action: 'virtuo_fn_like', 
						ID: parseInt(ID),
						security: VirtuoAjax.nonce
					};
					
					$.ajax({
						type: 'POST',
						url: VirtuoAjax.ajax_url,
						cache: false,
						data: requestData,
						success: function(data) {
							var fnQueriedObj 	= $.parseJSON(data); //get the data object
							var ajaxAction		= fnQueriedObj.ajax_action;
							var data_like;
							element.find('.btn-text').text(fnQueriedObj.like_text);
							element.attr('title', fnQueriedObj.count);
							if($('.fn__like_count[data-id="'+ID+'"]').length){
								$('.fn__like_count[data-id="'+ID+'"]').text(fnQueriedObj.count);
							}
							if(ajaxAction === 'add'){
								data_like = 1;
								element.addClass('active');
							}else{
								data_like = 0;
								element.removeClass('active');
							}
							$('[data-id="'+ID+'"]').attr('data-like',data_like);
							element.removeClass('loading');
							self.portfolio();
						},
						error: function(MLHttpRequest, textStatus, errorThrown) {
							console.log(MLHttpRequest);
							console.log(textStatus);
							console.log(errorThrown);
						}
					});
				}
				
				
				
				return false;
			});
				
		},

		svg: function(){
			$('img.fn__svg').each(function(){
				var img 		= $(this);
				var imgClass	= img.attr('class');
				var imgURL		= img.attr('src');

				$.get(imgURL, function(data) {
					var svg 	= $(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						svg 	= svg.attr('class', imgClass+' replaced-svg');
					}
					img.replaceWith(svg);

				}, 'xml');
			});	
		},
		
		
    };
	
	
	
	// ready functions
	$(document).ready(function(){
		VirtuoInit.init();
	});
	
	
})(jQuery);