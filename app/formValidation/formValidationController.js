bookmyshowApp.controller('formValidationController',
    function formValidationController($scope) {
    
     $scope.searchText = {};
    
     //given default array
     $scope.array1 = [7000,7001,7002,7003,7004,7005];
    
     //regexp pattern to match the numerical input
     $scope.pattern = /^\d+(,\d+)*(,\d+-\d+)*$|^(\d+-\d+)(,\d+-\d+)*(,\d+)*(,\d+-\d+)*$|^\d+(,\d+-\d+)(,\d+)*$/ ;
     $scope.onSubmit = function(){
       
         $scope.array2 = [];
         $scope.result =  [];
         $scope.intersection = [];
         
         //to convert search string into array
         var arr = $scope.searchText.value.split(",");
         for(var i=0; i<arr.length ; i++){
             
            if(isNaN(Number(arr[i]))){
                var arr2 = arr[i].split("-");
                var x = Number(arr2[0]);
                var y = Number(arr2[1]);
                var temp =0;
                if(y < x)
                {
                    temp = x;
                    x=y;
                    y=temp;
                }
                for(var j=x; j<=y; j++){
                $scope.array2.push(j);
                }
            }
            else{
                $scope.array2.push(Number(arr[i]));
            }
         }
         //to find the unique values
         $scope.result = _.difference($scope.array2,$scope.array1);
         
         //to find the duplicate values
         $scope.intersection = _.intersection($scope.array1,$scope.array2);
    };
});