var app=angular.module("examFormApp", []);
app.controller("examFormController",($scope)=>{
    $scope.form={};
    $scope.msg="";

    $scope.validate=function(value){
        alert(value.isNaN());
        // if(value.isNaN()){
        //     $scope.msg="please enter valid value";
        // }
    }
    
})
