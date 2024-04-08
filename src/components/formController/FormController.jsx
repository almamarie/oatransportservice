import React, { useState } from "react";
import styles from "./FormController.module.css";
import Passenger from "../passanger/Passenger";
import Reservation from "../reservation/Reservation";
import Acknowledgement from "../acknowledgement/Acknowledgement";

const FormController = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const nextForm = () => {
    setCurrentForm((prev) => {
      let newLoc = prev + 1;
      if (newLoc > forms.length - 1) newLoc = 0;
      return newLoc;
    });
  };

  const prevForm = () => {
    setCurrentForm((prev) => {
      let newLoc = prev - 1;
      if (newLoc < 0) newLoc = 0;
      return newLoc;
    });
  };

  const formControls = { nextForm, prevForm };

  const forms = [
    <Passenger formControls={formControls} />,
    <Reservation formControls={formControls} />,
    <Acknowledgement />,
  ];

  return <div className={styles.form}>{forms[currentForm]}</div>;
};

export default FormController;
