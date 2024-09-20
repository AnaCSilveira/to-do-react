import "./App.css";
import { StyledDiv } from "./App.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledH1 } from "./App.styled";
import { StyledTask } from "./App.styled";
import { StyledH2 } from "./App.styled";
import { Styledbutton } from "./App.styled";
import { StyledInput } from "./App.styled";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { StyledUl } from "./App.styled";
import { StyledIconTrash } from "./App.styled";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    setTaskList((currentTaskList) => {
      const newList = [
        ...currentTaskList,
        { value: inputValue, checked: false },
      ];
      setInputValue("");
      return newList;
    });
  };

  const handleDelete = (index) => {
    setTaskList((currentTaskList) => {
      const deleted = [
        ...currentTaskList.slice(0, index),
        ...currentTaskList.slice(index + 1),
      ];
      return deleted;
    });
  };

  const handleChecked = (index, newValue) => {
    setTaskList((currentTaskList) => {
      const newItem = currentTaskList[index];
      newItem.checked = newValue;

      return [
        ...currentTaskList.slice(0, index),
        newItem,
        ...currentTaskList.slice(index + 1),
      ];
    });
  };

  return (
    <StyledDiv>
      <StyledH1>Organize Your Day!</StyledH1>
      <StyledTask>
        <StyledH2>Add Your To Do List</StyledH2>
        <br />
        <div>
          <StyledInput
            placeholder="what you need to do?"
            onChange={handleChange}
            value={inputValue}
          />
          <Styledbutton onClick={handleAddTask}>
            <FontAwesomeIcon icon={faPlus} />
          </Styledbutton>
        </div>
        <StyledUl>
          {taskList.map((listItem, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    handleChecked(index, event.target.checked);
                  }}
                  checked={listItem.checked}
                />
                {listItem.value}
                <StyledIconTrash
                  icon={faTrash}
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
              </li>
            );
          })}
        </StyledUl>
      </StyledTask>
    </StyledDiv>
  );
}

export default App;
