#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base 
end
	
before do
	@product = Product.all
end

def split_orders_input orders_input
	hh = {}
	orders_input.each do |k,v|
		s = v.split(",")
			s.each do |item|
				s2 = item.split("-")
				hh[s2[0]] = s2[1]
			end
		return hh
	end
end

get '/' do
	erb  :index
end


get '/about' do
	erb  :about
end

get '/cart' do
	erb :cart
end

post '/cart' do
	orders_input = params[:order]
	@hh = split_orders_input orders_input
	erb :cart
end