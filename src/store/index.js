import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./middlewares/logger-middleware";

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({serializableCheck: false}).prepend(loggerMiddleware.middleware),
});

const persistore = persistStore(store);

export {store, persistore}