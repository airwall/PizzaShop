class AddProducts < ActiveRecord::Migration
  def change

  	Product.create  :title => 'Hawaiian', 
  					:description => 'This is Hawaiian pizza', 
  					:price => 72,
  					:size => 30,
  					:is_spicy => false,
  					:is_veg => false,
  					:is_best_offer => true,
  					:path_to_image => '/img/1.png'

  	Product.create  :title => 'Pepperoni', 
  					:description => 'Nice pepperoni pizza', 
  					:price => 78,
  					:size => 30,
  					:is_spicy => true,
  					:is_veg => false,
  					:is_best_offer => true,
  					:path_to_image => '/img/2.png'

  	Product.create  :title => 'Vegetarian', 
  					:description => 'Amazing vegeterian pizza', 
  					:price => 75,
  					:size => 30,
  					:is_spicy => false,
  					:is_veg => true,
  					:is_best_offer => false,
  					:path_to_image => '/img/3.png'	  					
  end
end
