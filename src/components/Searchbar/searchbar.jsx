import React, { useContext } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60px;
  background-color: #eee;
  align-items: center;
  margin-top: 100px;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  .icon {
    font-size: 50px;
  }
`;

const Input = styled.input`
  font-size: 1.6em;
  border-radius: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
  background-color: #eee;
  width: 50%;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Logo = styled(SearchOutlinedIcon)`
  padding: 10px;
`;

const Searchbar = () => {
  const { origData, setGameData, category, input, setInput } =
    useContext(AuthContext);
  function inputHandler(e) {
    setInput(e.target.value);
    const searchedWord = e.target.value;
    if (e.target.value === "") {
      const filterGamesByCategory = [];
      var flag = 0;
      if (category.action) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Action") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.adventure) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Adventure") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.arcade) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Arcade") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.puzzle) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Puzzle") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.shooting) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Shooting") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      setGameData(filterGamesByCategory);
      if (!flag) {
        setGameData(origData);
      }
    } else {
      const filterGamesByCategory = [];
      flag = 0;
      if (category.action) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Action") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.adventure) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Adventure") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.arcade) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Arcade") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.puzzle) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Puzzle") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.shooting) {
        flag = 1;
        for (i = 0; i < origData.length; i++) {
          if (origData[i].category === "Shooting") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (!flag) {
        for (i = 0; i < origData.length; i++) {
          filterGamesByCategory.push(origData[i]);
        }
      }
      const newFilter = filterGamesByCategory.filter((value) => {
        return value.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setGameData(newFilter);
    }
  }
  return (
    <React.Fragment>
      <Container>
        <Logo className="icon" />
        <Input
          value={input}
          onChange={(e) => inputHandler(e)}
          placeholder="Search your Game"
        />
      </Container>
    </React.Fragment>
  );
};

export default Searchbar;
