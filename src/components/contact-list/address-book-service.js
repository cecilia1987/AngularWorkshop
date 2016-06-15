class AddressBookService{

  constructor($http){
    this._http = $http;
  }

 fetchContacts(){
      return this._http.get('http://localhost:3000/api/Contacts');
  }

  idContacts(id){
    if(id){
      return this._http.get('http://localhost:3000/api/Contacts/' + id);
    }else{
      return null;
    }
  }

  saveOrEdit(contact){
      if(contact.id){
        this._http.put('http://localhost:3000/api/Contacts/' + contact.id, contact);
      }else{
        this._http.post('http://localhost:3000/api/Contacts/', contact);
      }
  }
}

export default[
  '$http',
  AddressBookService
];
