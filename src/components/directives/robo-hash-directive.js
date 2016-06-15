import template from './robo-hash-directive.html'

function RoboHashDirective(){
  return{
    restrict:'E',
    scope:{
      email:'<',
      width: '@',
      heigth: '@'
    },
    template:template,
    controller: 'RoboHashController as roboHashController',
    bindToController: true
  };
}

export default[
  RoboHashDirective
]
//<img src="https://robohash.org/contact.email.png">
