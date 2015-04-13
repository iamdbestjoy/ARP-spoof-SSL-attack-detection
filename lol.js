
var url= document.URL;
  var url_check = "http://www.onlinesbi.com/"+" "+"http://retail.onlinesbi.com/retail/login.htm"+" "+"http://retail.onlinesbi.com/retail/login.htm#"
  +" "+"http://retail.onlinesbi.com/personal/"+" "+"http://www.facebook.com/"+" "+"http://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=http://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1"
  +" "+"http://www.gmail.com/intl/en_us/mail/help/about.html"+" "+"http://www.amazon.ca/ap/signin?_encoding=UTF8&openid.assoc_handle=caflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=http%3A%2F%2Fwww.amazon.ca%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_signin"
  +" "+"http://signin.ebay.ca/ws/eBayISAPI.dll?SignIn&ru=http%3A%2F%2Fwww.ebay.ca%2F";
  //alert(url_check);
  if(url_check.search(url)>-1 && url.search("https")==-1){
alert("This is a phishing website. Please do not proceed");


document.images[0].src = "https://sites.google.com/site/warningjoy1/home/warning.png";
document.images[0].height = "300"; 
document.images[0].width  = "500";
}
