class ContactDetailController {
    constructor($stateParams,AddressBookService) {
        this.myService=AddressBookService;
        var details=this.myService.idContacts($stateParams.id);
        if(details)
         details.then(response =>{
           this.contact= response.data;
         });
        }

      /* let [firstName, lastName] = $stateParams.name.split(' ');

        this.contact = {
            first_name: firstName,
            last_name: lastName
        };*/

    saveOrEdit(){
      this.myService.saveOrEdit(this.contact);
      }
}

export default [
    '$stateParams',
    'AddressBookService',
    ContactDetailController
];
