import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addExpenseAction, setIncomeAction } from "store/expense/expense-slice";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  matcher: isAnyOf(setIncomeAction, addExpenseAction),
  effect: async (action, listenerAPI) => {
    console.log("store value", listenerAPI.getState())
  }
})