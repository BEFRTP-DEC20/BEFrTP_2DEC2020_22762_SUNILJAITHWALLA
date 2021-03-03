var dwightSalary = (function(){ 
     var salary = 60000; 
 function changeBy(amount)
		{ salary += amount; }
		return { 
			raise: function(x) 
			{ changeBy(x); },
			lower: function(x) 
			{ changeBy(x); },
			currentAmount: function() { return salary; } 
			}; 
			})(); 
			
			alert(dwightSalary.currentAmount()); // $60,000
			dwightSalary.raise(100);
			alert(dwightSalary.currentAmount()); // $65,000 
			dwightSalary.lower(-3444); 
			dwightSalary.lower(3799); 
			alert(dwightSalary.currentAmount()); // $55,000 
			dwightSalary.changeBy(10000) // TypeError: undefined is not a function