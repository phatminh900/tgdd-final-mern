import { ROUTES } from "app-constants/navigation.constant";
import { IAuthContext } from "context/auth.context";
import { useNavigate } from "react-router-dom";
import styles from '../../order-history.module.scss'


type OrderHistoryGreetUserProps = {
  user: {
    name: string;
    email: string;
  };
  auth: IAuthContext|null;
};
const OrderHistoryGreetUser = ({ user, auth }: OrderHistoryGreetUserProps) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles["order-history__greeting"]} flex-space-between`}>
      <h3>
        Chào <span>{user.name}</span> -<span>{user.email}</span>
      </h3>
      <button
        onClick={() => {
          auth?.removeUserHandler();
          navigate(ROUTES.HOME_PAGE);
        }}
      >
        Thoát tài khoản
      </button>
    </div>
  );
};

export default OrderHistoryGreetUser;
