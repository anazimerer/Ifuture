import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import styled from "styled-components";

const MenuContainer = styled.div`
  max-height: 2.625rem;
  margin-top: 0.75rem;

  span {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    color: #e8222e;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "22.5rem",
    height: "2.625rem",
    marginBottom: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
    justifyContent: "Flex-start",
  },
}));

export default function SingleLineGridList({
  restaurants,
  categoryFilter,
  setCategoryFilter,
}) {
  const classes = useStyles();
  const rest = [...new Set(restaurants.map((item) => item.category))];

  const handleClickCategoty = (category) => {
    if (category === categoryFilter) {
      setCategoryFilter();
    } else {
      setCategoryFilter(category);
    }
  };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {rest.map((category) => (
          <MenuContainer>
            <span
              onClick={() => handleClickCategoty(category)}
              style={{
                cursor: "pointer",
                color: category === categoryFilter ? "red" : "black",
              }}
            >
              {category}
            </span>
          </MenuContainer>
        ))}
      </GridList>
    </div>
  );
}
