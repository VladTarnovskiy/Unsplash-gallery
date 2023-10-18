import { CardDefault } from "./Card";

interface Props {
  pictures: Card[];
}
export const Pictures = ({ pictures }: Props) => {
  return (
    <ul className="pictures-container w-full">
      {pictures.map((picture: Card) => (
        <CardDefault key={picture.id} picture={picture} />
      ))}
    </ul>
  );
};
