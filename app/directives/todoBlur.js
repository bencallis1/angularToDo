/**
 * Created by bencallis1 on 7/3/15.
 */
'use strict';

/**
 * Directive that executes an expression when the element it is applied to loses focus
 */
angularToDoApp.directive('todoBlur', function () {
    return function (scope, elem, attrs) {
        elem.bind('blur', function () {
            scope.$apply(attrs.todoBlur);
        });

        scope.$on('$destroy', function () {
            elem.unbind('blur');
        });
    };
});