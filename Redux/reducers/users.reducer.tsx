import { PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../Types";
import { USERS_ACTION, UserActionTypes } from "../actions/users.action";

const initialState: UsersState = {
  data: [],
  loading: false,
  error: undefined
};

export default function (state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case USERS_ACTION.FETCH_USERS: {
      return {
        ...state,
        loading: true,
        error: undefined
      };
    }
    case USERS_ACTION.SAVE_USERS: {
      return {
        data: action.payload,
        loading: false,
        error: undefined
      };
    }
    case USERS_ACTION.FAILED_FETCH_USERS: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case USERS_ACTION.ADD_USER: {
      const newData = [...state.data, action.payload];

      return {
        ...state,
        data: newData
      };
    }
    case USERS_ACTION.UPDATE_USER: {
      const { id } = action.payload as User;
      const newData = state.data.map((user) => {
        if (user.id === id) {
          return action.payload;
        } else {
          return user;
        }
      });

      return {
        ...state,
        data: newData
      };
    }
    case USERS_ACTION.DELETE_USER: {
      const filteredUsers = state.data.filter((user) => user.id !== action.payload);

      return {
        ...state,
        data: filteredUsers
      };
    }
    default:
      return state;
  }
}
