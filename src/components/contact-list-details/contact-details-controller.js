import template from './contact-list-details.html';

class ContactDetailController {

  constructor($stateParameters){
    let[name,surname]=$stateParameters.name.split(' ');
    this.contact={
      first_name:name,
      last_name:surname
      };
    }
  }

export default[
  '$stateParameters',
  ContactDetailController
];
