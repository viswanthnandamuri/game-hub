import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack objectFit="cover">
              <Image
                borderRadius={8}
                width={8}
                height={8}
                src={genre.image_background}
              />
              <Button
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>

              {/* {genre.image_background} */}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
