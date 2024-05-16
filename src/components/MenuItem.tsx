import { MenuItems } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItems;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="bg-stone-100 flex justify-between items-center">
      <div>
        <CardHeader>
          <CardTitle>{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold">
          {menuItem.price.toFixed(0)}Rs
        </CardContent>
      </div>
      <div className="mr-9">
        <Button className="cursor-pointer" onClick={addToCart}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default MenuItem;
