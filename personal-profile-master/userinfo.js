define(function(){var a=function(a){var c='<div class="card-inner">                        <div class="card-top clearfix">                            <a href="/u/'+a.uid+'" class="l"><img src="'+a.img+'" alt="'+a.nickname+'"></a>                            <div class="card-top-right-box l">                                <a href="/u/'+a.uid+'"><span class="name text-ellipsis">'+a.nickname+'</span></a>                                <div class="meta">                                    <a href="/u/'+a.uid+'/experience">经验<b id="js-user-mp">'+(a.mp?a.mp:0)+'</b></a>                                    <a href="/u/'+a.uid+'/credit">积分<b id="js-user-credit">'+(a.credit?a.credit:0)+'</b></a>                                </div>                            </div>                        </div>                        <div class="user-center-box">                            <ul class="clearfix">                                <li class="l"><a href="/u/'+a.uid+'/courses" target="_blank"><span class="user-center-icon icon-tick"></span>我的课程</a></li>                                <li class="l"><a href="http://coding.imooc.com/pay/myorder" target="_blank"><span class="user-center-icon icon-receipt"></span>订单中心</a></li>                                <li class="l"><a href="/mall/index" target="_blank"><span class="user-center-icon icon-score_shop"></span>积分商城</a></li>                                <li class="l"><a href="/user/setprofile" target="_blank"><span class="user-center-icon icon-set"></span>个人设置</a></li>                            </ul>                        </div>';return a.last_learning&&""!=a.last_learning&&(c+='<div class="card-history">                            <span class="history-item">                                <span class="tit text-ellipsis">'+a.last_learning.course_name+'</span>                                <span class="media-name text-ellipsis">'+a.last_learning.last_chapter_media+" "+a.last_learning.media_name+'</span>                                <i class="icon-clock"></i>                                <a href="'+a.last_learning.url+'" class="continue" title="'+a.last_learning.course_name+"&#10;"+a.last_learning.last_chapter_media+"  "+a.last_learning.media_name+'">继续</a>                            </span>                    </div>'),c+='<div class="card-sets clearfix"><a href="/passport/user/logout?referer=http://www.imooc.com">安全退出</a></div>                    </div>'},c=function(){isLogin&&$.ajax({url:"/u/card ",type:"get",dataType:"json"}).done(function(c){0==c.result&&($(".js-header-avator img").attr("src",c.data.img),$(".g-user-card").html(a(c.data)).show())})};c()});