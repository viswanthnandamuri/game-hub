import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";

import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  setSortOrder: (sortOrder: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ setSortOrder, sortOrder }: Props) => {
  const OrderMapping = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = OrderMapping.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order By:{currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSortOrder("Relevance")}>
            Relevance
          </MenuItem>
          <MenuItem onClick={() => setSortOrder("-added")}>Date Added</MenuItem>
          <MenuItem onClick={() => setSortOrder("name")}>Name</MenuItem>
          <MenuItem onClick={() => setSortOrder("-released")}>
            Release Date
          </MenuItem>
          <MenuItem onClick={() => setSortOrder("-metacritic")}>
            Popularity
          </MenuItem>
          <MenuItem onClick={() => setSortOrder("-rating")}>
            Average Rating
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
