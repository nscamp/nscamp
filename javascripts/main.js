// 2013-07-26
// Dougal MacPherson <dougal@jtribe.com.au>
// 
// Some js hacks to hightlight the current page

$('#menu-main a').each(function(index) {
  
  // create a tmp link in memory and get the browser
  // to parse the pathname, so we don't have to deal with 
  // messy regexp to detect pathname
  var tmp_ = document.createElement('a');
      tmp_.href = this.href
      
      if (tmp_.pathname == document.location.pathname) {
        return $(this).addClass('current');
      }
});

