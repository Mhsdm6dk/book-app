import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { reducer} from '../reducers/index'; // giá trị trả về từ combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
};

const pReducer = persistReducer(persistConfig, reducer);
const it={
    timkiem:'',
    user:{
        username:"",
        password:"",
        id:0,
        name: "",
        email: "",
        address: "",
        telephone: "",
        order: [],
        admin:""
    }
}
export const store = createStore(pReducer,it);
export const persistor = persistStore(store);