import React from "react";
import styles from "./Reservation.module.css";
import { destinations } from "../utils/destinations";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

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

const Reservation = (props) => {
  const prevHandler = () => {
    props.formControls.prevForm();
  };
  const nextHandler = () => {
    props.formControls.nextForm();
  };
  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>Ticket Reservation</h3>
      <div className={styles["select-wrapper"]}>
        <label className={styles.label} htmlFor="from">
          From:
        </label>
        <select className={styles.select}>
          <option selected disabled className={styles.option} name="default">
            -- Please select --
          </option>
          {destinations.map((dest, index) => {
            return (
              <option className={styles.option} name={dest} key={index}>
                {dest}
              </option>
            );
          })}
        </select>
      </div>

      <div className={styles["select-wrapper"]}>
        <label className={styles.label} htmlFor="to">
          To:
        </label>
        <select className={styles.select}>
          <option selected disabled className={styles.option} name="default">
            -- Please select --
          </option>
          {destinations.map((dest, index) => {
            return (
              <option className={styles.option} name={dest} key={index}>
                {dest}
              </option>
            );
          })}
        </select>
      </div>

      <Input
        data={{
          type: "number",
          label: "Number 0f Tickets",
          name: "numberOfTickets",
          other: { min: 1, max: 5 },
        }}
      >
        number of tickets
      </Input>

      <Input
        data={{
          type: "date",
          label: "Date of Travel",
          name: "travelDate",
        }}
      >
        number of tickets
      </Input>

      <div className={styles["btn-wrapper"]}>
        <Button onClick={prevHandler} className={styles.btn}>
          Prev
        </Button>

        <Button onClick={nextHandler} className={styles.btn}>
          Save and continue
        </Button>
      </div>
    </form>
  );
};

export default Reservation;
