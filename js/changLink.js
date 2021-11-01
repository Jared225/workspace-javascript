$('a').each(function(){
    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.google.com");
});

//update all the image address
$('img').each(function(){
    var image = $(this).attr('src');
    $(this).attr('src',"img/"+ image);
});


$('p').css("color","red");