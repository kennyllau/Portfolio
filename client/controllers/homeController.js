myApp.controller('homeController', function($scope, $routeParams, $location, $ocLazyLoad){
	
 	$scope.myInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function(i) {
		// var newWidth = 600 + slides.length + 1;
		slides.push({
	  		image: 'assets/images/apps/'+i+'.png',
	  		text: ['Pokehorizon','Stock Screener','Appointment Scheduler','Ping Pong', 'Ninja Gold'][slides.length % 5],
	  		id: currIndex++
		});
	};

  // $scope.randomize = function() {
  //   var indexes = generateIndexesArray();
  //   assignNewIndexesToSlides(indexes);
  // };

  for (var i = 0; i < 5; i++) {
    $scope.addSlide(i);
  }

  // Randomize logic below

  // function assignNewIndexesToSlides(indexes) {
  //   for (var i = 0, l = slides.length; i < l; i++) {
  //     slides[i].id = indexes.pop();
  //   }
  // }

  // function generateIndexesArray() {
  //   var indexes = [];
  //   for (var i = 0; i < currIndex; ++i) {
  //     indexes[i] = i;
  //   }
  //   return shuffle(indexes);
  // }

  // http://stackoverflow.com/questions/962802#962890
  // function shuffle(array) {
  //   var tmp, current, top = array.length;

  //   if (top) {
  //     while (--top) {
  //       current = Math.floor(Math.random() * (top + 1));
  //       tmp = array[current];
  //       array[current] = array[top];
  //       array[top] = tmp;
  //     }
  //   }

  //   return array;
  // }

})