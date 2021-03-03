

  $(document).ready(function() {
      var d2=$('div');
      var d1=$('#myContent');
      var d=$('.abc');
      var eventr=$('tr:even');

      var ahref=$('a[href="www.google.com"]');

      var ahref1=$('a[href^="http"]');
      var ahref2=$('a[href$=".in"]');

    var myfind=$('#mydiv').find('.abc').css('color','red');

    console.log(myfind[0]);

    var mychild=$('#mydiv').children('.abc').css('color','red');

    console.log(mychild[0]);
  });