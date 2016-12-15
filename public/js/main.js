function whenActived(start_el,target_el,class_toggle){
  jQuery(start_el).hover(function(){
    jQuery(target_el).toggleClass(class_toggle)
    // console.log("sdddfsdf")
  })}

whenActived('.layout-menu-nav','.menu-sub','submenu-active')


jQuery(document).ready(function(){
  jQuery('.slide-slick').slick({
    'autoplay': true,
    'autoplaySpeed': 3000,
    'dots': true,
    'arrows': false
  });
});
