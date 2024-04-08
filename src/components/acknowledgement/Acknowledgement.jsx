import React from "react";
import styles from "./Acknowledgement.module.css";

const Acknowledgement = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  return (
    <div className={styles.wrapper}>
      <h3>Reservation Received</h3>
      <p>
        {`Dear Mr. ${userData.lastName}, your ticket has been reserved successfully.`}
      </p>
    </div>
  );
};

export default Acknowledgement;
