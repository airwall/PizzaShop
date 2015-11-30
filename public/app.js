

function add_to_cart(id)
{
	var key_id = 'product_' + id;
 	var x = window.localStorage.getItem(key_id);
 	x = x * 1 + 1;
 	window.localStorage.setItem(key_id, x);

 	update_orders_button();
 	update_orders_form();
}


function update_orders_form()
{
	var nmbrform = order_form_input();
	$('#orders_form').val(nmbrform);
}


function update_orders_button()
{
	var text = 'Cart('+ number_of_products_in_cart() +')';
	$('#orders_btn').val(text);
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
	return total;
}

function order_form_input()
{
	
	var int_id = ""
	for(var i=0, len=localStorage.length; i<len; i++) 
{
	var key = localStorage.key(i);
	var value = localStorage[key];
	if(key.indexOf('product_') == 0)
	{
		int_id = int_id  + key.replace("product_","") +"-" + value + "," 
		
	}
	
}
		return int_id
}

function cancel_order()
{
	localStorage.clear();
	update_orders_button();
    update_orders_form();
    $('#cart').text('Your cart now is empty')

	return false;	
}