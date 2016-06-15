import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetailState from './contact-list-details-state';
import contactDetailController from './contact-details-controller';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-details-state-component', dependencies)
    .controller('ContactDetailController', contactDetailController)
      .config(contactDetailState);
