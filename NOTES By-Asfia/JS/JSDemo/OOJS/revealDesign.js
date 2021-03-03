<html>
<body>
	<script>
		var CarFactory=function(x,p)
		{
			var count=0;		
			carAdd=function(price,qty)
			{
				count=count+qty;
				console.log(count);
				console.log(price*qty);
			};
			carMinus=function(price,qty)
			{
				console.log(count);
				console.log(count-qty);
				console.log(price*qty);
			};
			return
			 {
				add: carAdd(x,p);
				minus: carMinus(x,p);
				}
		};//carFactory()
		
		var carObj=new CarFactory(100,2);
		carObj.add;
		carObj.minus;
		//carObj.carAdd(500,23);
		
	</script>
</body>
</html>