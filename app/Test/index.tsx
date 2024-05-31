import { Link } from "expo-router";

export default function Page() {
  return (
    <>
      <p>Test page</p>
      <Link href={{ pathname: "Home" }}>Go to Home dir</Link>
    </>
  );
}
