import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searcText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
