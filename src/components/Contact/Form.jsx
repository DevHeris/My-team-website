import { useRef, useState } from "react";
import styles from "./Form.module.css";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cName, setCName] = useState("");
  const [title, setTitle] = useState("");

  const buttonRef = useRef();

  function formSubmitHandler(e) {
    e.preventDefault();

    if (email !== "" && name !== "" && message !== "") {
      setEmail("");
      setName("");
      setMessage("");
      setTitle("");
      setCName("");
    }
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={cName}
        onChange={(e) => setCName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        required="This field is required"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div>
        <button ref={buttonRef} onClick={formSubmitHandler}>
          submit
        </button>
      </div>
    </form>
  );
}

export default Form;
