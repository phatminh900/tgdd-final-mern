import { useEffect } from "react";
import { ROUTES } from "app-constants/navigation.constant";
import { IAuthContext, useAuth } from "context/auth.context";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { JWTKEY } from "app-constants/browser.constatnt";
import { IUser } from "context/auth.context";
const useOrderHistoryHook = (auth:IAuthContext|null)=> {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = auth?.user;
  useEffect(() => {
    if (!user || !Cookies.get(JWTKEY))
      navigate(`${ROUTES.LOGIN}`, {
        replace: true,
        state: { prevPath: pathname },
      });
  }, [navigate, user, pathname]);

  return user
};

export default useOrderHistoryHook;
