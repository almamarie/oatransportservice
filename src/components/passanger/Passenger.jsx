import styles from "./Passenger.module.css";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { useRef, useState } from "react";
// 1.www.oatransportservice.gh
// 2.Then display interface
// 3.name of client
// 4.phone number
// 4.5 number of tickets
// 5.destinations
// Accra, Kumasi and sunyani
// 6.fare ( based on the destinations and time of departure is appear)
// 7.⁠ ⁠Date to travel
// 8.⁠ ⁠Payment (momo)
// 9.⁠ ⁠Acknowledgement of receipt

const Passenger = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const firstNameRef = useRef("");

  const changeHandler = (name) => {
    return (value) => {
      if (!value) return;
      else
        setData((prev) => {
          const newData = { ...prev };
          newData[name] = value;

          validateFormHandler(newData);
          return newData;
        });

      console.log(data);
    };
  };

  const validateFormHandler = (newData) => {
    if (Object.values(newData).includes("")) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  };
  const nextHandler = () => {
    sessionStorage.setItem("userData", JSON.stringify(data));
    props.formControls.nextForm();
  };
  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>Personal Info</h3>
      <Input
        data={{
          onChange: changeHandler("firstName"),
          ref: firstNameRef,
          name: "first name",
          label: "first name",
          type: "text",
        }}
      />
      <Input
        data={{
          onChange: changeHandler("lastName"),
          name: "last name",
          label: "last name",
          type: "text",
        }}
      />
      <Input
        data={{
          onChange: changeHandler("phoneNumber"),
          name: "phone number",
          label: "phone number",
          type: "tel",
        }}
      />

      <div className={styles["btn-wrapper"]}>
        <Button
          onClick={nextHandler}
          disabled={!formIsValid}
          className={styles.btn}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default Passenger;

// Web page.
