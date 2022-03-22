import { ReactChild, ReactFragment, ReactPortal } from "react";
import { getDatabase } from "../src/database";

export const getServerSideProps = async () => {
  const mongodb = await getDatabase();
  console.log(getDatabase());
  const data = await mongodb
  .db()
  .collection("test")
  .find({games: { name: "Guitar Hero"}})
  .toArray();

  return {
    props: {
      games: data,
    },
  };
};

const Games = (props: {
  games: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) => {
  return <div>{props.games}</div>;
};

export default Games;
