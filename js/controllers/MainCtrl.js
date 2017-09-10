
angular.module('socialApp').controller('MainCtrl', [
    '$scope',
    
    function friendArray ($scope) {
        $scope.array = [ 
            {name: "Nightcrawler",
            tagline: "Kurt Wagner",
            bio: "Rough childhood but is awesome",
            profilePic: img src="https://s-media-cache-ak0.pinimg.com/736x/9d/20/8d/9d208df32bb1077d143045257c6466d0--super-heros-xmen.jpg"
        },
             {name: "Wolverine",
            tagline: "Logan",
            bio: "Really old",
            profilePic: img src="https://s-media-cache-ak0.pinimg.com/736x/9d/20/8d/9d208df32bb1077d143045257c6466d0--super-heros-xmen.jpg"
        }
        ];
        
        $scope.getLimits = function (array) {
            return [
                Math.floor(array.length / 2) + 1,
                -Math.floor(array.length / 2)
            ];
        };
    }
]);