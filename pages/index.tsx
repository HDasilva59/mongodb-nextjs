import { ReactChild, ReactFragment, ReactPortal } from "react";
import { getDatabase } from "../src/database";

export const getServerSideProps = async () => {
  const mongodb = await getDatabase();

  const games = await mongodb.db().collection("games").find().toArray();

  return {
    props: {
      games: games,
    },
  };
};

const Games = (props: {
  games: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
}) => {
  return <div>{props.games}</div>;
};

export default Games;
