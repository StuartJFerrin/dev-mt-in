<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

DevMtIn
===============

##Objective
By the end of this week you will have created a functional DevMountain social network that allows you to connect with other students and graduates. Along the way you will learn the core concepts of AngularJS, as well as learning how to access outside API's for data.

##Day One: Data binding, repeating, filtering.

###Step 1: Installing and including AngularJS.
To start things off we first need to include the Angular source code in our `index.html`, you can find this at https://cdnjs.com/libraries/angular.js . Scroll down until you see `https://cdnjs.cloudflare.com/ajax/libs/angular.js/_VERSIONNUMBER_/angular.js` and copy that link into a script tag at the bottom of your `<body>`.

Now that we have included the Angular script, our next step is to set up the bones of our first Angular application. The first step is to create an `app.js` file, inside this file we need to initialize our new Angular app which we will call 'devMtIn'.

```javascript
angular.module('devMtIn', []);
```
Be sure to include your `app.js` file in your `index.html` **underneath** the Angular script. If included above the Angular script, the app will not function. Our last step in including Angular in our new app is to add the `ng-app` attribute to our HTML. This attribute should be added to our `<html>` tag and should reference the name of our app. `<html ng-app="devMtIn">`.

Now we are ready to launch our app using `http-server` or `live-server`. You should see the page laid out with the included HTML and CSS, check the console to make sure there are no errors.

###Step 2: Creating and including a controller.
Now that Angular is up and running, let's actually *do* something with it. For this, we need a controller. A controller is the glue that Angular uses to connect your code to the view. To create our controller, let's create another new file called `homeCtrl.js`.

Inside of `homeCtrl.js` we will need to create a new controller on an `angular.module`, give that controller a name, and pass in a callback function that takes in the `$scope` parameter.
```javascript
angular.module('devMtIn')
.controller('homeCtrl', function( $scope ) {
	
});
```
Remember that we don't want to pass our `angular.module` an array here! When you pass in an array, you are declaring an entire new module rather than extending your current one. Now all we need to do is include the script in a new script tag and add the `ng-controller` attribute to our `<body>` tag and pass it "homeCtrl".

To test that everything is working so far, create a property on your `$scope` called 'myProfile' and set it equal to an object containing `name: _YOUR NAME_`. Inside of your HTML replace the header 'Your Name' with `{{ myProfile.name }}`. If everything is working you should see your name at the top of the page.

###Step 3: Data binding and repeating over data.
What you've just done in the above step is called data binding, we are binding the information inside of our controller to our view using the handlebars (`{{ }}`) notation. This binding can handle more than just displaying static data, it can also process simple evaluations.

To demonstrate this let's change our HTML name header to this: `{{ myProfile.name || 'Your Name' }}`. Now if you set `myProfile.name` to an empty string in your controller you will see the page is displaying the string 'Your Name' instead of the value of `myProfile.name`.

Let's add some data to repeat over, add a new property to your `myProfile` object named 'friends'.
```javascript
$scope.myProfile = {
	  name: 'John Doe'
	, friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
}
```

To repeat over this data we need to add an `ng-repeat` directive as an attribute to our `<div class="friendList"` and tell it to repeat over each 'friend' in `myProfile.friends`. Then inside of that div, in place of 'My Friends' we need to bind each friend to our view.
```html
<div class="friendList" ng-repeat="friend in myProfile.friends">
	<span class="closeBtn"></span>
	{{ friend.name }}
	<br />
	<div class="secondConnection friendList">
		My Second Connections
	</div>
</div>
```
Once you refresh the page you should see a list of your current friends' names.

###Step 4: ng-model and filtering.
So far we have bound data to our view from our controller, but there is no interactivity. None of our input boxes or buttons do anything, and all of our data is static on our controller. To begin to change that we need to utilize Angular's built in `ng-model` directive.

What `ng-model` does is create a two way data-binding from our controller to our view. This means that any changes made to the data by either the controller or the user will be reflected in both places. To demonstrate this let's add an `ng-model` attribute on our 'name' input box and pass it the value `myProfile.name`. Inside of your controller, delete the `name` property of `myProfile`.

Once you refresh the page, try typing your name into the input box you adjusted. You should see the header update as you type. What Angular is doing here is looking at your `$scope.myProfile` object, seeing that it doesn't contain a `name` property, and so creates that property for us.

Now we have some interactivity! Let's take it a step further by using `ng-model` to filter our data. To do this we will need to add a new `ng-model` to our 'Find Friends' input box named 'findFriend.name'. Angular will create the `findFriend` object on our `$scope` and assign the new property `name` to whatever value is inside the input box.

To use this to filter data takes only one more step. Inside of the friend list `ng-repeat` attribute add a new filter and pass it the value of `findFriend.name`. This should look something like this:
```html
<div class="friendList" ng-repeat="friend in myProfile.friends | filter : findFriend.name">
```
After refreshing the page you should now be able to type into the 'Find Friends' box and see your friend's list filter in real time.

Well done! You've finished your first day of AngularJS, now you have the knowledge to allow users to dynamically update the `$scope`, use filters, and use data binding. Tomorrow we'll be covering services, event handlers, and using services to save data to the browser.