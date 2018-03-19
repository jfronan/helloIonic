app.controller('draggable', function($scope, $cordovaCamera) {


    var onDraggableEvent = function(evt, data) {
      if (evt.name == 'draggable:start') {
        $scope.OffsetDifferenceTop = data.y - data.element[0].offsetTop;
        $scope.OffsetDifferenceLeft = data.x - data.element[0].offsetLeft;
      } else if (evt.name == 'draggable:end') {
        
        $scope.setPosition(data);
      }
    }
  
    $scope.$on('draggable:start', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);
    $scope.setPosition = function(data) {
     var theStyle = data.element[0].style;
     theStyle.top = (data.y - $scope.OffsetDifferenceTop) + 'px';
     theStyle.left = (data.x - $scope.OffsetDifferenceLeft) + 'px';
    }
  });