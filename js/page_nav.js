$(function(){
	//左侧栏高度
	var window_h=$(window).height();
	$('.side_nav').height(window_h-280);
	if($(window).width()<768){
		$('.side_nav').height(window_h-250);
	}
	if($(window).width()<500){
		$('.side_nav').height(window_h-240);
	}
	$(window).resize(function(){
		if($(window).width()<760){
			$('.side_nav').height(window_h-250);
		}
		if($(window).width()<500){
			$('.side_nav').height(window_h-240);
		}
	});
	
	//鼠标悬浮效果
	$('.result_show li').mouseover(function(){
		$(this).find('.black_wall,.hover_btn').fadeIn();
		$('.hover_btn a').mouseover(function(){
			$(this).addClass('hover');
		}).mouseleave(function(){
			$(this).removeClass('hover');
	});
	}).mouseleave(function(){
		$(this).find('.black_wall,.hover_btn').fadeOut();
	});
	//导航按钮
	$('.nav_btn').click(function(e){
		e.preventDefault();
	    $(this).toggleClass('nav_active');
		if($(this).hasClass('nav_active')){
			$('.left_side').animate({left:'0'});
		}else{
			$('.left_side').animate({left:'-200'});
		}
	});
	//滚动条插件
	$(window).load(function(){
            $(".side_nav").mCustomScrollbar();
     });
});
var Nav={
	initial:function(id){
		$.post(pageData.path+"/nav/"+id+".html",function(res){
			var $container_nav = $("#nav-list");
			var $container_site = $("#site-list");
			var navList = res.
			$.each(res,function(){
				var $li = $("#nav-list li");
				$li.html(this.name);
				$li.data("id",this.id);
				$li.click(function(){
					var $this=$(this);
					UserBoardData.save({id:pageData.id,groupId:$this.data("id")}, function(){
						$("#personal-group-name").html($this.html());
					}, function(){
						alert("修改失败");
					});
				});
				$container_nav.append($li);
				
				$container_site.append($li);
			});
		});
	}
}

var NavTemplate={
		getNavHtml:function(){
			if(this._navHtml==undefined){
				this._navHtml=$.jhk.annotations("personal-dialogue")[0].textContent;
			}
			return $(this._navHtml);
		},
		getSiteGroup:function(){
			if(this._siteGroup==undefined){
				this._siteGroup=$.jhk.annotations("personal-dialogue")[0].textContent;
			}
			return $(this._siteGroup);
		},
}
