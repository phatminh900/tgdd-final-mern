import React from "react";
import { Form } from "react-router-dom";
import AuthImg from "../../assets/imgs/login-signup-img/i1.png";
import styles from "./auth-component.module.scss";

interface AuthComponentProps {
  children: React.ReactNode;
  error: string | null;

  successMessage: string | null | undefined;
}
const AuthComponent = ({
  error,
  children,
  successMessage,
}: AuthComponentProps) => {
  return (
    <div className={styles.auth}>
      <img width={500} height={285} src={AuthImg} alt="address" />
      {error && (
        <div data-testid="auth-err" className={`${styles.error} error`}>
          {error || "User or password incorrect!"}
        </div>
      )}
      {successMessage && (
        <div data-testid="auth-success" className={styles.success}>
          {successMessage}
        </div>
      )}
      <Form className={styles.form} method="post">
        {children}
      </Form>
    </div>
  );
};

export default AuthComponent;
