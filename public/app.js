
function something()
{

	var x =window.localStorage.getItem('cc');
	
	x = x * 1 + 1;

	window.localStorage.setItem('cc', x);

	alert(x);	
	
}


function add_to_cart(id)
{

	var keyid = 'product_' + id;
 	var x = window.localStorage.getItem(keyid);
 	x = x * 1 + 1;
 	window.localStorage.setItem(keyid, x);

 	for(var i in localStorage)
		{
		    console.log(localStorage[i]);
		}
		
		var total = 0; //Total numbers of products ordered
		for(var i=0, len=localStorage.length; i<len; i++) {
		    var key = localStorage.key(i);
		    var value = localStorage[key];
		    total = total  + value*1;
		    console.log("Total = " + total);
		}
}

