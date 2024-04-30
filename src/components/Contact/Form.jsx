import styles from "./Form.module.css";
function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email Address" />
      <input type="text" placeholder="Company Name" />
      <input
        type="text"
        placeholder="Title"
        required="This field is required"
      />
      <textarea placeholder="Message"></textarea>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
}

export default Form;
