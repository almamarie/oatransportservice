import "./App.css";
import styles from "./App.module.css";
import FormController from "./components/formController/FormController";

function App() {
  return (
    <div className={styles.wrapper}>
      <FormController />
    </div>
  );
}

export default App;
