import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../Types";

export enum USERS_ACTION {
  FETCH_USERS = "FETCH_USERS",
  SAVE_USERS = "SAVE_USERS",
  ADD_USER = "ADD_USER",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
  FAILED_FETCH_USERS = "FAILED_FETCH_USERS"
}

export type UserActionTypes =
  | PayloadAction<undefined>
  | PayloadAction<User>
  | PayloadAction<User["id"]>;

export const fetchUsers = (): PayloadAction<undefined> => ({
  type: USERS_ACTION.FETCH_USERS,
  payload: undefined
});

export const saveUsers = (users: User[]): PayloadAction<User[]> => ({
  type: USERS_ACTION.SAVE_USERS,
  payload: users
});

export const addUser = (user: User): PayloadAction<User> => ({
  type: USERS_ACTION.ADD_USER,
  payload: user
});

export const updateUser = (user: User): PayloadAction<User> => ({
  type: USERS_ACTION.UPDATE_USER,
  payload: user
});

export const deleteUser = (id: string): PayloadAction<User["id"]> => ({
  type: USERS_ACTION.DELETE_USER,
  payload: id
});

export const failedFetchUsers = (error: string): PayloadAction<string> => ({
  type: USERS_ACTION.FAILED_FETCH_USERS,
  payload: error
});
