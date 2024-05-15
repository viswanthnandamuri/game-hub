import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onselectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ onselectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              as={Button}
              key={platform.id}
              onClick={() => onselectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
