import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={game.background_image}
        alt={game.name}
      />
      <CardContent>
        <Typography variant="h5">{game.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
