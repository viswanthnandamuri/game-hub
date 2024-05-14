import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
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
              <Text fontSize="lg">{genre.name}</Text>

              {/* {genre.image_background} */}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
