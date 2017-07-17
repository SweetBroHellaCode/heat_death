angular.module('heatDeathApp').controller('storyModalController', function
StoryModalController($scope, $http) {

	// Story Object
	$scope.storyObject = {
		theJanitor: "",
		dreamingStars: "",
		byDust: "",
		notesToMyself: "",
		theFinalCourse: "",
		theGreatestTreasure: "",
		currentUserStory: "Signals Detected"
	};
		
	// Load a story from firebase
	$scope.loadStoryObject = function(storyName, storyToUpdate) {
		$http({
				method: 'GET',
				url: '/getStory?story=' + storyName
			}).then(function successCallback(response) {
					console.log(response)
					$scope.storyObject.currentUserStory = response.data
					storyToUpdate = response.data
				// when the response is available
				}, function errorCallback(response) {
					console.log(response)
			});
	}

	// Swap the story selection on user input
	$scope.getCurrentStory = function(story) {
		console.log(story)
		if (story == "theJanitor") {
				$scope.loadStoryObject("the_janitor", $scope.storyObject.theJanitor);
		} else if (story == "dreamingStars") {
				$scope.loadStoryObject("dreaming_stars", $scope.storyObject.dreamingStars)
		} else if (story == "byDust") {
				$scope.loadStoryObject("by_dust", $scope.storyObject.byDust)
		} else if (story == "theFinalCourse") {
				$scope.loadStoryObject("the_final_course", $scope.storyObject.the_final_course)
		} else if (story == "theGreatestTreature") {
				$scope.loadStoryObject("the_greatest_treasure", $scope.storyObject.theGreatestTreasure)
		} else if (story == "notesToMyself") {
				$scope.loadStoryObject("notes_to_myself", $scope.storyObject.notesToMyself)
		}
			
	} 

});

