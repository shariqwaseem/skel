import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducrs } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native';
import rootReducer from "./reducers";


const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export default store;
