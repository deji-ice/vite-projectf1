import { users } from "../assets/data";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="container">
      {users.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
