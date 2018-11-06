// JavaScript Document
var serverPath = window.location.href.match('www-test') ? "http://test.bigbigwork.com/" : "http://p.bigbigwork.com/";
$(function () {
  initial();
  /*注册框的回车事件*/
  $(".bottombanner-input,.telphoneinput").keydown(function (e) {
    if (e && e.keyCode == 13) {

      var reg = /^[1]([3-9]{1}[0-9]{1})[0-9]{8}$/;
      if ($(".telphonerror")) {
        $(".telphonerror").remove();
      }
      var telphone = $(this).val();
      if (reg.test(telphone)) {
        $(this).next(".telphonerror").remove();
        $(this).val("");

        //location.href="http://p.j-h-k.com/w-register.htm?phone="+telphone;
        $("#iframepagerelease").attr('src', serverPath + "/registernew.htm?phone=" + telphone+"#/phone");
        $("body").css("overflow", "hidden");
        $("#register-bombbox.JHKbombbox").fadeIn();
        $(".closedthis").click(function () {
          $(this).parents(".JHKbombbox").hide();
            $("body").css("overflow-y", "scroll");
        });
      } else {
        if(!telphone){
            $("#iframepagerelease").attr('src', serverPath + "/registernew.htm");
            $("body").css("overflow", "hidden");
            $("#register-bombbox.JHKbombbox").fadeIn();
            $(".closedthis").click(function () {
                $(this).parents(".JHKbombbox").hide();
                $("body").css("overflow-y", "scroll");
            });
        }else{
            $(this).after("<span class='telphonerror'>手机格式错误</span>");
        }

      }
  
  
      //--------------------产品让我改的-------------------start------------
      // $("#register-bombbox.JHKbombbox").show();
      // $("body").css("overflow", "hidden");
      // $("#iframepagerelease").attr('src', serverPath + "/registernew.htm#/weixin");
      // $(".JHKbombbox .bombbox").append();
      // $(".closedthis").click(function () {
      //   $(this).parents(".JHKbombbox").hide();
      //   $("body").css("overflow-y", "scroll");
      // })
      //--------------------产品让我改的-------------------end------------
    }
  });
  
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top >= 55) {
      $("#header").addClass("header-fixed");
    } else {
      $("#header").removeClass("header-fixed");
    }
    
    if (top > 300) {
      $(".scroll-top").addClass("on");
    } else {
      $(".scroll-top").removeClass("on");
    }
    
    /*2017新版*/
    if (top >= 60) {
      $(".newheaderbox").addClass("header-fixed");
      $(".pinterestbox").hide();
      $(".newheaderbox").find(".newlogobox img").attr("src", "bigworklogoblack.png"/*tpa=http://wimg.bigbigwork.com/images/bigworklogoblack.png*/);
    } else {
      $(".newheaderbox").removeClass("header-fixed");
      $(".pinterestbox").show();
      $(".newheaderbox").find(".newlogobox img").attr("src", "bigworklogowhite.png"/*tpa=http://wimg.bigbigwork.com/images/bigworklogowhite.png*/);
    }
    
  });
  
  $(".scroll-top").click(function () {
    //$(document.body).animate({'scrollTop':0},500);
    pageScroll();
  });
  // pinterest广告条点击显示注册弹框效果
  $(function () {
    $('#register-pinterest').click(function () {
      // var iframe="<iframe class='loginiframe' id='iframepage' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='register-release.htm'/*tpa=http://p.bigbigwork.com/register-release.htm*/></iframe>";
      $("#iframepagerelease").attr('src', serverPath + "/registernew.htm");
      $("#register-bombbox.JHKbombbox").fadeIn();
      $(".closedthis").click(function () {
        $(this).parents(".JHKbombbox").hide();
        $("body").css("overflow-y", "scroll");
      })
    });
  });
  
  $(".CollectionButton,.DownloadButton,.operation-left-button,.login-button,.newlogin-button").click(function (e) {
    $("body").css("overflow", "hidden");
    // $("#iframepage").attr('src',"http://p.bigbigwork.com/login.htm");
    $("#iframepage").attr('src', serverPath + "/loginnew.htm#/weixin");
    $(".JHKbombbox").eq(0).fadeIn();
    $(".closedthis").click(function () {
      $(this).parents(".JHKbombbox").hide();
      $("body").css("overflow-y", "scroll");
      // $("body").append($(".JHKbombbox").find(".loginiframe"));
    })
    //alert("未登录！先去登录页面");
    //location.href="http://p.j-h-k.com/login.htm";
    //window.open("http://p.j-h-k.com/login.htm");   //在新窗口打开页面
    event.stopPropagation();
  });
  
  $(".register-now-button,.newregister-button,.pinterestbox,#startBtn, a.loadBtn,div.loadBtn").click(function (e) {
    $("#register-bombbox.JHKbombbox").show();
    $("body").css("overflow", "hidden");
    // var iframe="<iframe class='loginiframe' id='iframepage' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='register-release.htm'/*tpa=http://p.bigbigwork.com/register-release.htm*/></iframe>";
    $("#iframepagerelease").attr('src', serverPath + "/registernew.htm#/weixin");
    $(".JHKbombbox .bombbox").append();
    $(".closedthis").click(function () {
      $(this).parents(".JHKbombbox").hide();
      $("body").css("overflow-y", "scroll");
      
    })
    //alert("未登录！先去登录页面");
    //location.href="http://p.j-h-k.com/login.htm";
    //window.open("http://p.j-h-k.com/login.htm");   //在新窗口打开页面
    event.stopPropagation();
  });
  
  $(".clickbigshow").click(function () {
    $("#waterfall-flow-box").addClass("mainoverflow");
    $(".Floating-layerbox").show();
    /***********************************大图浮层部分推荐图片瀑布流插件激活*****************************************/
    var container = $('.Recommended-box .PicWaterfall');
    container.imagesLoaded(function () {
      container.masonry({
        itemSelector: '.Recommended-box .PicWaterfallist',
        gutterWidth: 17,
        //columnWidth : 286,
        isAnimated: true,
        isRTL: false, //使用从右到左的布局 Boolean
      });
    });
  })
  
  $(".Floating-layerbox").click(function () {
    $(this).hide();
    $("#waterfall-flow-box").removeClass("mainoverflow");
  });
  
  
  /*推荐给您的图片点击*/
  // $(".Recommended-box .clickbigshow").click(function(e){
  //         var url=$(this).find("img:first").attr("src");
  //         $(".Floating-layerbox").find(".bigimg img").attr("src",url);
  // 	event.stopPropagation();
  // });
  
  /*禁止鼠标右键*/
  // $(document).bind("contextmenu",function(e){
  //          return false;
  //        });
  
  
})

function checkedthis(This) {
  var Text = $(This).text();
  $(This).parents(".BeautifulButtonBox").find(".ButtonName").text(Text);
  $(This).addClass("DropDownChecked").siblings().removeClass("DropDownChecked");
  $(This).parents(".DropDownBox").hide();
}

function pageScroll() {
  window.scrollBy(0, -100);
  scrolldelay = setTimeout('pageScroll()', 10);
  var sTop = document.documentElement.scrollTop + document.body.scrollTop;
  if (sTop == 0) clearTimeout(scrolldelay);
}


/*免费注册功能*/
function initial() {
  var reg = /^[1]([3-9]{1}[0-9]{1})[0-9]{8}$/;
  $(".bottombaner-button,.freeregister").click(function () {
    if ($(".telphonerror")) {
      $(".telphonerror").remove();
    }
    var telphone = $(this).prev(".bottombanner-input,.telphoneinput").val();
    $(".bottombanner-input,.telphoneinput").val('')
    if (reg.test(telphone)) {
      //--------------------产品让我改的-------------------start------------
      $("#register-bombbox.JHKbombbox").show();
      $("body").css("overflow", "hidden");
      $("#iframepagerelease").attr('src', serverPath + "/registernew.htm?phone=" + telphone +"#/phone");
      $(".JHKbombbox .bombbox").append();
      $(".closedthis").click(function () {
        $(this).parents(".JHKbombbox").hide();
        $("body").css("overflow-y", "scroll");
      })
      //--------------------产品让我改的-------------------end------------
    } else {
      if(!telphone){
          $("#register-bombbox.JHKbombbox").show();
          $("body").css("overflow", "hidden");
          $("#iframepagerelease").attr('src', serverPath + "/registernew.htm#/weixin");
          $(".JHKbombbox .bombbox").append();
          $(".closedthis").click(function () {
              $(this).parents(".JHKbombbox").hide();
              $("body").css("overflow-y", "scroll");
          })
      }else{
          $(this).after("<span class='telphonerror'>手机格式错误</span>");
      }
    }
    
    
  })
}

/* 投诉渠道 */
function complaints() {
  $(".JHKbombbox").eq(2).show();
  $("body").css("overflow", "hidden");
  var iframe = "<iframe class='loginiframe' id='iframepage' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://p.bigbigwork.com/complaints.htm'></iframe>";
  $("#JHKbombbox .bombbox").append(iframe);
  $(".closedthis").click(function () {
    $(this).parents(".JHKbombbox").hide();
    $("body").css("overflow-y", "scroll");
    $("#JHKbombbox").find(".loginiframe").remove();
  })
};

function closed() {
  $(".closedthis").parents("#JHKbombbox").hide();
  $("body").css("overflow-y", "scroll");
  $("#JHKbombbox").find(".loginiframe").remove();
};


var jhk = {
  randomId: function () {
    return new Date().getTime() + "" + (Math.random() * 1000).toFixed(0);
  },
  clone: function (source, filter) {
    return this._clone(source, filter, false);
  },
  revClone: function (source, filter) {
    return this._clone(source, filter, true);
  },
  _clone: function (source, filter, type) {
    if (typeof source !== "object") {
      throw new Error("source is not object");
    }
    if (filter != undefined && !(filter instanceof Array)) {
      throw new Error("filter is not array");
    }
    filter = filter || [];
    var to = {};
    for (var p in source) {
      var flg = false;
      for (var i = 0; i < filter.length; i++) {
        if (filter[i] == p) {
          flg = true;
          break;
        }
      }
      if (type ? flg : !flg) {
        to[p] = source[p];
      }
    }
    return to;
  },
  queryParam: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];
    return "";
  },
  getCookie: function (name) {
    var cookies = document.cookie;
    var cookieIndex = cookies.indexOf(name + "=");
    if (cookieIndex != -1) {
      var cookieValueStart = cookieIndex + name.length + 1;
      var cookieValueEnd = cookies.indexOf(";", cookieValueStart);
      if (cookieValueEnd == -1) {
        cookieValueEnd = cookies.length;
      }
      var cookieValue = cookies.substring(cookieValueStart, cookieValueEnd);
      return cookieValue;
    } else {
      return null;
    }
  },
  setCookie: function (name, value, time) {
    var n = new Date();
    n.setTime(n.getTime() + time);
    document.cookie = name + "=" + value + ((time == null) ? "" : ";expires=" + n.toGMTString()) + ";path=/;domain=.bigbigwork.com";
    return true;
  },
};
$.extend({"jhk": jhk});
//注册统计
var statistics = function () {
  var data = {};
  var source = $.jhk.queryParam("utm_source", location.href);
  data = {
    source: source,
    medium: $.jhk.queryParam("utm_medium"),
    term: $.jhk.queryParam("utm_term"),
    campaign: $.jhk.queryParam("utm_campaign")
  };
  var content = $.jhk.queryParam("utm_content");
  if (content != null && content != "") {
    data["content"] = content;
  }
  var website = "${website.website}";
  $.jhk.setCookie("website", website, 10 * 60 * 1000 * 60);
  
  $.jhk.setCookie("jhktracert", encodeURIComponent(JSON.stringify(data)));
  if (!$.jhk.getCookie("number") || $.jhk.getCookie("number") < 4382454) {
    $.jhk.setCookie("number", 4382454, 8 * 3600 * 1000);
  } else {
    $(".AlreadyExisting span").text($.jhk.getCookie("number"))
  }
  if ($.jhk.getCookie("ishow") < 1) {
    $.jhk.setCookie("ishow", 1, 8 * 3600 * 1000);
  }
  setInterval(search, 10000);
  
  function search() {
    var num = $.jhk.getCookie("number");
    var add = getRandom(5);
    var sum = num - (-add);
    $(".AlreadyExisting span").text(sum)
    $.jhk.setCookie("number", sum, 10 * 60 * 1000 * 60);
  }
  
  function getRandom(n) {
    return Math.floor(Math.random() * n + 1)
  }
};
statistics();
var originDomain = window.document.domain;
window.document.domain = "http://www.bigbigwork.com/js-lyl/bigbigwork.com";
window.loginSuccess = function (target) {
  window.localStorage.setItem("userLoginFlag", 'true');
  window.document.domain = originDomain;
  if (window.top != window.self) {
    parent.window.location.href = target || "http://p.bigbigwork.com/";
  } else {
    window.location.href = target || "http://p.bigbigwork.com/";
  }
};























