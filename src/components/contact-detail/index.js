import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ContactDetailController from './contact-detail-controller';
import contactDetailState from './contact-detail-state';
import roboHashDirective from 'components/directives/robo-hash-directive';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-detail', dependencies)
    .controller('ContactDetailController', ContactDetailController)
    .directive('RoboHashDirective',roboHashDirective)
    .config(contactDetailState);
