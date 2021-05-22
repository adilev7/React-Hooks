import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import Item from "./Item";

const List = () => {
  const [items, setItems] = useState([]);

  // Get darkTheme (boolean) value from ThemeContext via the useContext hook.
  const { darkTheme } = useContext(ThemeContext);

  /* ====== CREATE ====== */
  // Create a new item with default values
  const handleCreate = () => {
    const idx = items.length + 1;
    // Sets state
    setItems((prevItems) => [
      ...prevItems,
      {
        _id: idx,
        title: `title${idx}`,
        text: `this is item ${idx}`,
        edit: "none",
      },
    ]);
  };
  /* ==================== */

  return (
    <div className={`list ${darkTheme ? "bg-dark" : "bg-light"}`}>
      {items.length ? (
        items.map((item) => (
          // Pass current item + the 'setItems' method, in order to change the parent's state from the child component.
          <Item key={item._id} item={item} setItems={setItems}></Item>
        ))
      ) : (
        <div className={`empty-state ${darkTheme ? "bg-dark" : "bg-light"}`}>
          <div>There are no items in this list.</div>
          <div className='emoji'>:(</div>
          <div>Click the button below to create a new item!</div>
        </div>
      )}
      <button className='btn btn-primary' onClick={handleCreate}>
        + Create new item
      </button>
    </div>
  );
};

export default List;
