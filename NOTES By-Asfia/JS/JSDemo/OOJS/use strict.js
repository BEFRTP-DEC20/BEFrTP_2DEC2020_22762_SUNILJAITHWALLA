Not Allowed in Strict Mode
Using a variable, without declaring it, is not allowed:

"use strict";
x = 3.14;                // This will cause an error


Objects are variables too.

Using an object, without declaring it, is not allowed:

"use strict";
x = {p1:10, p2:20};      // This will cause an error


Deleting a variable (or object) is not allowed.

"use strict";
var x = 3.14;
delete x;                // This will cause an error


Deleting a function is not allowed.

"use strict";
function x(p1, p2) {}; 
delete x;                // This will cause an error 


Duplicating a parameter name is not allowed:

"use strict";
function x(p1, p1) {};   // This will cause an error


Octal numeric literals are not allowed:

"use strict";
var x = 010;             // This will cause an error


Escape characters are not allowed:

"use strict";
var x = \010;            // This will cause an error


Writing to a read-only property is not allowed:

"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error


Writing to a get-only property is not allowed:

"use strict";
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error


Deleting an undeletable property is not allowed:

"use strict";
delete Object.prototype; // This will cause an error


The string "eval" cannot be used as a variable:

"use strict";
var eval = 3.14;         // This will cause an error


The string "arguments" cannot be used as a variable:

"use strict";
var arguments = 3.14;    // This will cause an error


The with statement is not allowed:

"use strict";
with (Math){x = cos(2)}; // This will cause an error


For security reasons, eval() is not allowed to create variables in the scope from which it was called:

"use strict";
eval ("var x = 2");
alert (x);               // This will cause an error


In function calls like f(), the this value was the global object. In strict mode, it is now undefined.