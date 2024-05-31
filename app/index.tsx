import { useDispatch } from "react-redux";
import { Redirect } from "expo-router";
import { useEffect } from "react";

import { fetchUsers } from "../Redux/actions/users.action";

export default function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <Redirect href={"(Home)"} />;
}
