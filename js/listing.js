
var link = $('.pagination__link');
var cname;
var listing;

link.on('click', function(){
  link.removeClass('is_active');
  $(this).addClass('is_active');
  $('div').removeClass('page-active');
  cname = this.className.split(" ")[0];
  listing= $('#'+cname);
  listing.addClass('page-active');
  console.log(cname);
});

