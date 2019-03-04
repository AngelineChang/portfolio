// Filter
$(".filter-btn").click(function(){
let str = $(this).attr("id");

$(".filter-btn").removeClass("active");
$(this).addClass("active");

if(str != "focus"){
$(".project").removeClass("project-col-4").addClass("project-col-6")
}
else {
$(".project").each(function(){
if($(this).hasClass("sm")){
 $(this).removeClass("project-col-6").addClass("project-col-4")
}
})
}

$(".project").each(function(){
let filter = 0;
let categories = $(this).data("cate").split(" ");

for(let i = 0; i < categories.length; i++) {
if(categories[i] == str) {
$(this).css("display", "block");
filter = 1;
}
}
if(filter == 0) {
$(this).fadeOut();
}
else {
$(this).hide();
$(this).fadeIn();
}
})
})
