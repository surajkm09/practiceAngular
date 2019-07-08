var app  =angular.module('mainApp',[]);


app.controller('demoController',function($scope){
    $scope.greeting ="Hello world";
});


app.filter('upperCase',function(){
    return function(input,parameters){
        var output = input.toUpperCase();
        
        if(parameters ==='reverse')
        {
            var reversedInput =""; 
            for(let i=0 ;i<output.length ;i++){
                reversedInput = output.charAt(i) + reversedInput ;
            }
            output = reversedInput;
        }

        return output ; 
    };
});