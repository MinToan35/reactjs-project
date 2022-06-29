import { useState, useEffect } from "react";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      showAlert(true, "success", "value changed");
      setIsEditing(false);
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setName("");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      //save to localhost

      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "item added to the list");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const handleClear = () => {
    setList([]);
    showAlert(true, "danger", "empty list");
  };
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "danger", "item removed");
  };
  const handleEdit = (id) => {
    setIsEditing(true);
    const newName = list.find((item) => item.id === id);
    setName(newName.title);
    setEditID(id);
    showAlert(true, "danger", "Is Editing");
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="grocery-body">
      <section className="section-center">
        <h1>Grocery Bud</h1>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form className="form-submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Food,..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button>{isEditing ? "Editing" : "Submit"}</button>
        </form>

        {list.length > 0 && (
          <div className="list-container">
            <ul className="list-item">
              {list.map((item) => {
                return (
                  <article key={item.id} className="list-info">
                    <li>{item.title}</li>
                    <div className="btn-container">
                      <button onClick={() => handleEdit(item.id)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button onClick={() => handleRemove(item.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </article>
                );
              })}
            </ul>
            <button className="clear" onClick={handleClear}>
              Clear All
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
