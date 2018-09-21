document.writeln("<link rel=\'stylesheet\' type=\'text/css\' href=\'http://liuyan.qudaosujian.com/gw/b_footer/css/cd-popup-css.css\'/>");
document.writeln("<script type=\'text/javascript\'>");
document.writeln("//寮瑰嚭闅愯棌灞�");
document.writeln("function ShowDiv(show_div,bg_div){");
document.writeln("document.getElementById(show_div).style.display=\'block\';");
document.writeln("document.getElementById(bg_div).style.display=\'block\' ;");
document.writeln("var bgdiv = document.getElementById(bg_div);");
document.writeln("bgdiv.style.width = document.body.scrollWidth;");
document.writeln("// bgdiv.style.height = $(document).height();");
document.writeln("$(\'#\'+bg_div).height($(document).height());");
document.writeln("};");
document.writeln("//鍏抽棴寮瑰嚭灞�");
document.writeln("function CloseDiv(show_div,bg_div)");
document.writeln("{");
document.writeln("document.getElementById(show_div).style.display=\'none\';");
document.writeln("document.getElementById(bg_div).style.display=\'none\';");
document.writeln("};");
document.writeln("</script>");
document.writeln("<div class=\'cd-popup-block\'></div>");
document.writeln("<div class=\'cd-popup-floor\'>");
document.writeln("  <ul class=\'cd-popup-tab5\'>");
document.writeln("    <li>");
document.writeln("      <p class=\'bar-img\'><a class=\'J_ping\' onClick=\"ShowDiv(\'MyDiv\',\'fade\')\"><img  src=\'http://liuyan.qudaosujian.com/gw/b_footer/images/liuyan.png\'/></a></p>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("      <p class=\'bar-img\'><a class=\'J_ping\'  href=\'tel:18588936450\'><img  src=\'http://liuyan.qudaosujian.com/gw/b_footer/images/phone.png\'/></a></p>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("      <p class=\'bar-img\'><a class=\'J_ping\'  href=\'mailto:1360878169@qq.com\'><img  src=\'http://liuyan.qudaosujian.com/gw/b_footer/images/qq.png\'/></a></p>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("      <p class=\'bar-img\'><a class=\'J_ping\'  href=\'sms:18588936450\'><img  src=\'http://liuyan.qudaosujian.com/gw/b_footer/images/duanxin.png\'/></a></p>");
document.writeln("    </li>");
document.writeln("  </ul>");
document.writeln("</div>");
document.writeln("<!--弹出层时背景层DIV-->");
document.writeln("<div id=\'fade\' class=\'black_overlay\'> </div>");
document.writeln("<div id=\'MyDiv\' class=\'white_content\'>");
document.writeln("  <div  class=\'cd-popup-gbdiv\'> <span class=\'cd-popup-guanbi\'  onclick=\"CloseDiv(\'MyDiv\',\'fade\')\"><img  src=\'http://liuyan.qudaosujian.com/gw/b_footer/images/cuo-cuo.png\'/></span> </div>");
document.writeln("  <div class=\'lylyly\'>");
document.writeln("    <div class=\'cd-popup-container\'>");
document.writeln("      <p id=\'fsn_change\'>  留言咨询，免费领取加盟资料</p>");

/*<script type="text/javascript" src="http://dd.heytea88.com/ad/wfpublic/js/wfbase.js"></script>
<script type="text/javascript">
	var wfheight='173'; 
	var wfsrc='http://dd.heytea88.com/ad/wfdata/item/8c9b4538d9c1f42e.html';
	document.write('<iframe src="'+wfsrc+'" width="100%" height="'+wfheight+'" frameborder="0" scrolling="no"></iframe>');
</script>*/
var a = 'http://dd.heytea88.com/ad/wfpublic/js/wfbase.js';
document.writeln("<script src="+a+"></script>");
var wfheight = '173';
var wfsrc='http://dd.heytea88.com/ad/wfdata/item/8c9b4538d9c1f42e.html';
document.writeln('<iframe src="' + wfsrc + '" width="100%" height="' + wfheight + '" frameborder="0" scrolling="no"></iframe>');


document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("</div>");