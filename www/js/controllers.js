angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$ionicPopup, $timeout) {

})

.controller('BuyController',function($scope,$stateParams,$ionicPopover,$state){
  // .fromTemplate() method
  $scope.sortData = {};
  $scope.book = {};
  $scope.bookData={
    data : [
    { id : '1', title : 'Java Complete Reference, Ninth Edition', author : 'Herbert Schildt', publication : 'TataMacgrawHill', isbn : '9845659878512', price : '350', condition : 'old', category : '2', image : 'java.jpg' },
    { id : '2', title : 'Meluha', author : 'Amish', publication : 'R.R.Sheth & Co.', isbn : '9789351221074', price : '195', condition : 'old', category : '4', image : 'meluha.jpg' },
    { id : '3', title : 'PHP:for Absolute Beginner', author : 'Json Lengstorf', publication : 'Pearson', isbn : '9856325987451', price : '400', condition : 'new', category : '2', image : 'php.jpg' },
    { id : '4', title : 'Object Oriented Programming with C++', author : 'Blagurusammy', publication : 'TataMacgrawHill', isbn : '9745863201452', price : '330', condition : 'old', category : '2', image : 'c++.jpeg' },
    { id : '5', title : 'NodeJs for PHP Developers', author : 'Denial Rosewelt', publication : 'Pearson', isbn : '9685741425379', price : '280', condition : 'new', category : '2', image : 'node.jpg' }
  ]
};
$scope.sortBy = function(){
  console.log($scope.sortData);
  $scope.closePopover();
};
$ionicPopover.fromTemplateUrl('templates/bookSorting.html', {
  scope: $scope
}).then(function(popover) {
  $scope.popover = popover;
});

 $scope.openPopover = function($event) {
   $scope.popover.show($event);
 };
 $scope.closePopover = function() {
   $scope.popover.hide();
 };

 $scope.showBookDetail=function(Bid){
   $scope.id = Bid;
   $state.go('app.bookDetail',{ 'idForDetail' : $scope.id});
 }

})

.controller('BookDetailController',function($scope,$stateParams,$state,$http){
  $scope.bookData={
    data : [
    { id : '1', title : 'Java Complete Reference, Ninth Edition', author : 'Herbert Schildt', publication : 'TataMacgrawHill', isbn : '9845659878512', price : '350', condition : 'old', category : '2', image : 'java.jpg' },
    { id : '2', title : 'Meluha', author : 'Amish', publication : 'R.R.Sheth & Co.', isbn : '9789351221074', price : '195', condition : 'old', category : '4', image : 'meluha.jpg' },
    { id : '3', title : 'PHP:for Absolute Beginner', author : 'Json Lengstorf', publication : 'Pearson', isbn : '9856325987451', price : '400', condition : 'new', category : '2', image : 'php.jpg' },
    { id : '4', title : 'Object Oriented Programming with C++', author : 'Blagurusammy', publication : 'TataMacgrawHill', isbn : '9745863201452', price : '330', condition : 'old', category : '2', image : 'c++.jpeg' },
    { id : '5', title : 'NodeJs for PHP Developers', author : 'Denial Rosewelt', publication : 'Pearson', isbn : '9685741425379', price : '280', condition : 'new', category : '2', image : 'node.jpg' }
  ]
};
  $scope.id = $stateParams.idForDetail;
  $scope.init = function(){
      for(var i=0;i<$scope.bookData.data.length;i++){
        if($scope.bookData.data[i].id==$scope.id){
          $scope.book = {
            id : $scope.id,
            title : $scope.bookData.data[i].title,
            author : $scope.bookData.data[i].author,
            publication : $scope.bookData.data[i].publication,
            isbn : $scope.bookData.data[i].isbn,
            price : $scope.bookData.data[i].price,
            condition : $scope.bookData.data[i].condition,
            category : $scope.bookData.data[i].category,
            image : $scope.bookData.data[i].image
          }
        }
      }
  }
})


.controller('SellController',function($scope){
  $scope.changeColor = function(){
    alert('hi');
    document.getElementByID('categorLabel').style.color='#000';
  }
})

.controller('ProfileController',function($scope, $ionicPopup){

  $scope.updateName = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.newName">',
      title: 'Enter Name',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.newName) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.newName;
            }
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
   };

   $scope.updateAddress = function() {
     $scope.data = {};

     // An elaborate, custom popup
     var myPopup = $ionicPopup.show({
       template: '<textarea ng-model="data.newAddress"> </textarea>',
       title: 'Enter Address',
       scope: $scope,
       buttons: [
         { text: 'Cancel' },
         {
           text: '<b>Save</b>',
           type: 'button-positive',
           onTap: function(e) {
             if (!$scope.data.newAddress) {
               //don't allow the user to close unless he enters wifi password
               e.preventDefault();
             } else {
               return $scope.data.newAddress;
             }
           }
         }
       ]
     });

     myPopup.then(function(res) {
       console.log('Tapped!', res);
     });
    };
});
