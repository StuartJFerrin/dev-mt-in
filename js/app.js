angular.module('socialApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/initial-view.html"
            })
            .state('update',{
                url:'/update',
                templateUrl:"../views/update.html"
            })
            .state('contact',{
                url:'/profile',
                controller: 'profileCtrl',
                templateUrl: "../views/landing-page.html"
            })
            .state('friends-view',{
                url:'/friends',
                templateUrl: "../views/friends-view.html"
            })
            .state('friend-profile',{
                url:'/friend-profile',
                // /:id',
                controller: 'friendCtrl',
                templateUrl: "../views/friend-profile.html"
            })
            .state('search',{
                url:'/search',
                templateUrl: "../views/search.html"
            })
            $urlRouterProvider.otherwise("/")
            });