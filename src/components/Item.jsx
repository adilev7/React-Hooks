import { useEffect } from "react";

const Item = ({ item, setItems }) => {
  const deleteItem = (item) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  const updateItem = (item, itemProp) => {
    setItems((prevItems) => {
      return (prevItems = prevItems.map((prevItem) =>
        prevItem === item
          ? (prevItem = { ...prevItem, edit: itemProp })
          : prevItem
      ));
    });
  };
  useEffect(() => {
    document.querySelector(`.item-${item._id} .${item.edit}Wrap input`) &&
      document
        .querySelector(`.item-${item._id} .${item.edit}Wrap input`)
        .focus();
  }, [item._id, item.edit]);

  return (
    <div className={`item item-${item._id}`}>
      <button
        className='btn btn-danger delete pb-1'
        onClick={() => deleteItem(item)}>
        <span>&times;</span>
      </button>
      <div className='titleWrap'>
        {item.edit === "title" ? (
          <input
            type='text'
            defaultValue={item.title}
            onBlur={(e) => {
              setItems((prevItems) => {
                return prevItems.map((prevItem) => {
                  if (prevItem === item) {
                    prevItem = {
                      ...prevItem,
                      title: e.target.value,
                      edit: "none",
                    };
                  }
                  return prevItem;
                });
              });
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                setItems((prevItems) => {
                  return prevItems.map((prevItem) => {
                    if (prevItem === item) {
                      prevItem = {
                        ...prevItem,
                        title: e.target.value,
                        edit: "none",
                      };
                    }
                    return prevItem;
                  });
                });
              }
            }}></input>
        ) : (
          <h4>{item.title}</h4>
        )}
        <button
          className='btn btn-sm'
          onClick={() => updateItem(item, "title")}>
          Edit
        </button>
      </div>
      <div className='textWrap'>
        {item.edit === "text" ? (
          <input
            type='text'
            defaultValue={item.text}
            onBlur={(e) => {
              setItems((prevItems) => {
                return prevItems.map((prevItem) => {
                  if (prevItem === item) {
                    prevItem = {
                      ...prevItem,
                      text: e.target.value,
                      edit: "none",
                    };
                  }
                  return prevItem;
                });
              });
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                setItems((prevItems) => {
                  return prevItems.map((prevItem) => {
                    if (prevItem === item) {
                      prevItem = {
                        ...prevItem,
                        text: e.target.value,
                        edit: "none",
                      };
                    }
                    return prevItem;
                  });
                });
              }
            }}></input>
        ) : (
          <p>{item.text}</p>
        )}
        <button className='btn btn-sm' onClick={() => updateItem(item, "text")}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Item;
