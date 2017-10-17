(function (){
var app = angular.module('ShoppingList',[]);
app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
function ShoppingListCheckOffService(){
	var service = this;

	var toBuy = [
			{ name: "cookies", quantity: 10 },
			{ name: "ItemA", quantity: 8 },
			{ name: "ItemB", quantity: 6 },
			{ name: "ItemC", quantity: 4 },
			{ name: "ItemD", quantity: 2 }
	];

	var bought = [];

	service.addToBuy = function(itemName,quantity){
		var item = {
			name : itemName,
			quantity: quantity
		};
		toBuy.push(item);
	};

	service.addToBought = function(index){
		var boughtItem = toBuy.splice(index,1);
		var newItem = {
			name: boughtItem[0].name,
			quantity: boughtItem[0].quantity
		};
		console.log(newItem);
		bought.push(newItem);

	};
	service.getToBuy = function(){
		return toBuy;
	};
	service.getBought = function(){
		return bought;
	};
}

app.controller('ToBuyController',ToBuyController);
ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope,ShoppingListCheckOffService){
	var toBuyList = this;

	toBuyList.items = ShoppingListCheckOffService.getToBuy();

	toBuyList.itemName = "";
	toBuyList.quantity = "";

	toBuyList.addItem = function(){
		ShoppingListCheckOffService.addToBuy(toBuyList.itemName,toBuyList.quantity);
	};
	toBuyList.addToBought = function(index){
		ShoppingListCheckOffService.addToBought(index);
	};

};


app.controller('AlreadyBoughtController',AlreadyBoughtController);
AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

function AlreadyBoughtController($scope,ShoppingListCheckOffService){
	var boughtList = this;
	boughtList.items = ShoppingListCheckOffService.getBought();
};




})();