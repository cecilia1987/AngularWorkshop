import template from './contact-list-details.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetail', {
          url:'/details/:name',
              views: {
                main: {
                    template: template,
                    controller: 'ContactDetailController as contactDetailController'
                }
            }
        });
}

export default [
    '$stateProvider',
    contactListRoute
];
