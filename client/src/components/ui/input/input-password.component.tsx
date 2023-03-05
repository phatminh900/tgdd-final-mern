import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { InputProps } from "./input.component";
import styles from "./input.module.scss";
interface InputPasswordProps extends Omit<InputProps, "type"> {
  placeholder: string;
  name?: string;
}
const InputPassword = ({
  value,
  label,
  id,
  placeholder,
  className,
  name,
  onChange,
}: InputPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  let content = (
    <input
      data-testid='input-password'
      onChange={onChange}
      defaultValue={value}
      className={`${styles.input} ${className}`}
      type={isShowPassword ? "text" : "password"}
      id={id}
      name={name}
      placeholder={placeholder}
      required
      minLength={6}
    />
  );
  if (!onChange) {
    <input
      defaultValue={value}
      className={`${styles.input} ${className}`}
      type={isShowPassword ? "text" : "password"}
      id={id}
      placeholder={placeholder}
      required
      minLength={6}
    />;
  }
  return (
    <>
      {content}
      <button
      aria-label="show-password"
        tabIndex={-1}
        type="button"
        className={styles.showPassword}
        onClick={() => setIsShowPassword((prev) => !prev)}
      >
        {!isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
    </>
  );
};

export default InputPassword;
