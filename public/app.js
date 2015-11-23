
function something()
{

	var x =window.localStorage.getItem('cc');
	
	x = x * 1 + 1;

	window.localStorage.setItem('cc', x);

	alert(x);	
	
}


function add_to_cart(id)
{

	var key_id = 'product_' + id;
 	var x = window.localStorage.getItem(key_id);
 	x = x * 1 + 1;
 	window.localStorage.setItem(key_id, x);


}


