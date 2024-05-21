import { Box, Button, ButtonGroup, Flex, HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              SetGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => SetGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <Flex>
              <Box marginRight={5}>
                <PlatformSelector
                  onselectedPlatform={(platform) =>
                    SetGameQuery({ ...gameQuery, platform })
                  }
                  selectedPlatform={gameQuery.platform}
                />
              </Box>
              <SortSelector
                setSortOrder={(sortOrder) =>
                  SetGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder}
              ></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
