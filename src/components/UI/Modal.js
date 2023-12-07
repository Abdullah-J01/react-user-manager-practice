import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onDismiss}></div>;
};

const ErrorModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onDismiss}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onDismiss={props.onDismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          onDismiss={props.onDismiss}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
