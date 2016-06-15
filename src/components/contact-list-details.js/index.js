import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactDetailState from './contact-list-details';
import contactDetailController from './contact-list-details';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-details-state-component', dependencies)
    .controller('ContactDetailController', contactDetailController)
      .config(contactDetailState);
