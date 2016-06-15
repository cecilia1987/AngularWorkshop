class ContactListController {
  constructor(AddressBookService){
    AddressBookService.fetchContacts().then(
    response =>{
      this.contacts = response.data;
    })
  }
}

  export default [
    'AddressBookService',
    ContactListController
  ];


//     constructor() {
//         this.contacts = [
//             'ryan Howell',
//             'donna Murray',
//             'jack Fernandez',
//             'Nicholas Ward',
//             'Samuel Morris'
//         ];
//     }
// }
//
// export default [
//     ContactListController
// ];
