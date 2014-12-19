'use strict';

angular.module('twcTestApp')
.run(function($templateCache) {
  $templateCache.put('editbutton.html', '<div class="editbutton">Show areas</div>');
})
.directive('editbutton', function () {
	return {
		templateUrl: 'editbutton.html',
		restrict: 'E',
		replace: true,
		link: function postLink(scope, element) {
			element.on('click', function(){					
				var sections = angular.element(document.getElementsByTagName('section'));
				sections.toggleClass('editMode');
				
				if(!element.hasClass('active')) {
					element.addClass('active');
					element.text('Hide areas');
					element.data().editmode = true;
					sections.append('<div class="edittags">area ###</div>');
				} else {
					element.removeClass('active');
					element.text('Show areas');
					element.data().editmode = false;
					angular.element(document.getElementsByClassName('edittags')).remove();
				}
			});
		}
	};
});
