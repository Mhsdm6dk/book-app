export function reducer(state, action) {
    if(action.type=='timkiem'){
       return{
          ...state,
          timkiem:action.ten,
       }
    }
    else if(action.type=='themuser'){
       return{
          ...state,
          user:{
            username:action.username,
            password: action.password,
            id:action.id,
            name: action.name,
            email: action.email,
            address: action.address,
            telephone: action.telephone,
            admin:action.admin
          }
       }
    }
    else{
       return state;
    }
 }