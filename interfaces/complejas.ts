(() => {

    interface Client {
        
        name: string,
        age?: number,
        address: Address,
        getFullAddress?( id:string ):string;
    }

    interface Address {
    
        id: number,
        zip: string,
        city: string
        
    }

    const client: Client = {
        name: 'Aru',
        age: 23,
        address: {
            id: 123,
            zip: 'KYS',
            city: 'Ottawa',

        }
    };

    const client2: Client = {
        name: 'Nako',
        age: 23,
        address:{
            id: 123,
            zip: 'KYS',
            city: 'Ottawa',
        }
    }
    





})();