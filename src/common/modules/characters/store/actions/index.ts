import { createAction } from "@reduxjs/toolkit";

export const setCredentials = createAction<{
  data: any;
}>("root/setCharacters");
