
function add_to_cart(id)
{
	var key_id = 'product_' + id;
 	var x = window.localStorage.getItem(key_id);
 	x = x * 1 + 1;
 	window.localStorage.setItem(key_id, x);
}


//Calculate total number of products & display this in class 'output'
function number_of_products_in_cart()
{
	var total = 0;	

for(var i=0, len=localStorage.length; i<len; i++) 
{
	var key = localStorage.key(i);
	var value = localStorage[key];

	if(key.indexOf('product_') == 0)
	{
		total = total  + value*1;   
	}
}
	$('.output').html('('+ total +')');
	return total;
}

