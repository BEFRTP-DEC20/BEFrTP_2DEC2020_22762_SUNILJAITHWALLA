<html>
<body>
<script>

'use strict';//when remove this will give allow to define the writeable to name.

var Cat = {
  name: "Fulffy",//name: {first: "Fluffy",last:"Schinder"}
  color: "White"
};
<!--  Object.defineProperty(Cat,'name',{writable:false});
Cat.name="Scracthy"; 
Object.freeze(Object.name);// to enable writable=false to an property which have sub object   -->
for(var i in Cat)
document.writeln(i);

</script>
</body>
</html>