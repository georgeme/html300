$(document).ready(function() {
function change_image(obj) {
    $(obj).find("ol.li").fadeOut();
    $(obj).find("ol.li").next().fadeIn();
}

var menu_obj;
function menu(obj) {
   ...
   menu_obj = obj
   setTimeout("change_image(menu_obj);", 5000);
 }
}
