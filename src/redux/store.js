import { createStore } from 'redux'
import Reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = composeWithDevTools();

const persistConfig = {
    key: 'root',
    storage: storage,
};


const persitedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persitedReducer,composeEnhancers);

export const persistor = persistStore(store);
export default store;