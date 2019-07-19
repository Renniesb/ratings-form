var app = angular.module('plunker', ['rzSlider']);

app.controller('MainCtrl', function($scope) {

    $scope.count = 0;

    $scope.changeCount = function(selected){
        if(selected){
            $scope.count++;
        }
        else {
            $scope.count--;
        }
    };

    $scope.setActive = function(item, list){
        list.some(function(item){
            if(item.active){
                return item.active = false;
            }
        });
        item.active = true;
    };

    $scope.slider = {
        maxValue: 5,
        options: {
            floor: 0,
            ceil: 5,
            showTicksValues: true
        }
    };

    $scope.slider2 = {
        maxValue: 5,
        options: {
            floor: 0,
            ceil: 5,
            showTicksValues: true
        }
    };

    $scope.slider3 = {
        maxValue: 5,
        options: {
            floor: 0,
            ceil: 5,
            showTicksValues: true
        }
    };


    $scope.standouts = [
        {name: "Accurate Timekeeping", changetoggle: function(product){console.log(product); product.toggleClass(".bg-green")}, toggle: false},
        {name: "High Quality",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Durable",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Elegant",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Good Weight",changetoggle: function(product){product.toggle = !product.toggle}, toggle: false},
        {name: "Versatile", changetoggle: function(product){product.toggle = !product.toggle},toggle: false},
        {name: "Looks Expensive", changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Attracts Compliments",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Unique",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Great Gift",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false},
        {name: "Great Value",changetoggle: function(product){product.toggle = !product.toggle} ,toggle: false}
    ];

    $scope.ageRanges = ["Under 18", "18 - 24","25 - 34",
        "35 - 44", "45 - 54","55 - 64","65+"];

    $scope.selectedIndex;
    $scope.select = function(index){
        $scope.selectedIndex = index;
    };


    $scope.boughtFor = ['Personal Use', 'Gift'];

    $scope.boughtForIndex;
    $scope.selectBoughtFor = function(index){
        $scope.boughtForIndex  = index;
    };

});
