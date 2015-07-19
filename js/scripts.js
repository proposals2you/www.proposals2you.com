// JavaScript Document

$(document).ready(function(){
	$('.tabMensal').hide();
	
	$('a#planoMensal').click(function(){
		$('.tabAnual').hide();
		$('.tabMensal').show();
		$(this).removeClass("aba-inativa").addClass("aba-ativa");
		$('a#planoAnual').removeClass("aba-ativa").addClass("aba-inativa");
	});
	
	$('a#planoAnual').click(function(){
		$('.tabMensal').hide();
		$('.tabAnual').show();
		$(this).removeClass("aba-inativa").addClass("aba-ativa");
		$('a#planoMensal').removeClass("aba-ativa").addClass("aba-inativa");
	});
	
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

	 var menu = $('.topo');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 72) {
            menu.addClass("f-nav");
        } else {
            menu.removeClass("f-nav");
        }
    });
	
});
