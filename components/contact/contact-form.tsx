import { SyntheticEvent, useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";
import Notification from "../ui/notification";

async function sendContactData(contactDetails: any) {
  const response = await axios.post("/api/contact", contactDetails);
  if (response.status !== 201) {
    throw new Error("Something went wrong!");
  }
  return response.data;
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus]: any = useState(); // 'pending, 'success', 'error'
  const [requestError, setRequestError]: any = useState();

  // useEffect(() => {
  //   if (requestStatus === "success" || requestStatus === "error") {
  //     const timer = setTimeout(() => {
  //       setRequestStatus(null);
  //       setRequestError(null);
  //     }, 3000);
  //     return () => clearInterval(timer);
  //   }
  // }, [requestStatus]);
  async function sendMessage(event: SyntheticEvent) {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: requestError,
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Message sent successfully",
    };
  }

  return (
    <section className={classes.contact} onSubmit={sendMessage}>
      <h1>How can I help you?</h1>
      <form className={classes.form} action="">
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
