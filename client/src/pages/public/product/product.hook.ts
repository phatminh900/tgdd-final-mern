import { useReducer, useEffect, useState, useCallback } from "react";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "store/hooks.store";
import { omit } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { ICartProductDocument } from "store/cart/cartProductDocument";
import { cartSliceAction } from "store/cart/cart-slice";
import useWindowDimensions from "hooks/useWindowDimensions";
import { ICurrentProduct } from "./product.interface";

export interface ProductProps extends ICurrentProduct {}

enum ProductModalAction {
  TOGGLE_MODAL = "TOGGLE_MODAL",
  OPEN_CHECKOUTMODAL = "OPEN_CHECKOUTMODAL",
  CLOSE_CHECKOUTMODAL = "CLOSE_CHECKOUTMODAL",
}

export interface InitialStateProductModal {
  isOpenCheckoutModal: boolean;
  isOpenModal: boolean;
}
const initialState: InitialStateProductModal = {
  isOpenCheckoutModal: false,
  isOpenModal: false,
};

const productModalReducer = (
  state: InitialStateProductModal,
  action: { type: ProductModalAction }
) => {
  switch (action.type) {
    case ProductModalAction.TOGGLE_MODAL:
      return { ...state, isOpenModal: !state.isOpenModal };

    case ProductModalAction.OPEN_CHECKOUTMODAL: {
      return { ...state, isOpenCheckoutModal: true, isOpenModal: false };
    }
    case ProductModalAction.CLOSE_CHECKOUTMODAL: {
      return { ...state, isOpenCheckoutModal: false };
    }
    default: {
      return initialState;
    }
  }
};

const useProductHook = (currentProduct: IPhoneDocument | ILaptopDocument) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const [productModalState, dispatchProductModalState] = useReducer(
    productModalReducer,
    initialState
  );
  const { width } = useWindowDimensions();

  const [isProductAdded, setIsProductAdded] = useState(false);
  const [currentHighlightsImgNumber, setCurrentHighlightsImgNumber] =
    useState(0);

  const [currentColor, setCurrentColor] = useState(currentProduct?.colors[0]);

  const slidesImgs = currentProduct?.imgs.imgHighlights;
  const linksColor = Object.keys(
    omit(currentProduct?.imgs, [
      "imgHighlights",
      "imgConfiguration",
      "imgGeneralInformation",
    ])
  ).map((key) => ({ id: uuidv4(), title: key, hash: key }));
  const links = [
    {
      id: uuidv4(),
      title: "Điểm nổi bậc",
      hash: "hightlight",
    },
    ...linksColor,
    {
      id: uuidv4(),
      title: "Thông số kĩ thuật",
      hash: "configurations",
    },
    {
      id: uuidv4(),
      title: "Thông tin sản phẩm",
      hash: "general-information",
    },
  ];

  const onSetCurrentHighlightsImgNumber = (number: number) => {
    setCurrentHighlightsImgNumber(number);
  };
  const onToggleModal = () => {
    dispatchProductModalState({ type: ProductModalAction.TOGGLE_MODAL });
  };

  const onOpenCheckoutModal = () =>
    dispatchProductModalState({ type: ProductModalAction.OPEN_CHECKOUTMODAL });
  const oCloseCheckoutModal = () =>
    dispatchProductModalState({ type: ProductModalAction.CLOSE_CHECKOUTMODAL });

  const addToCart = (product: ICartProductDocument) => {
    setIsProductAdded(true);
    oCloseCheckoutModal();
    onToggleModal();
    //
    dispatch(cartSliceAction.addToCart(product));
    // dispatch(cartSliceAction.addToCart(product));
  };

  const changeCurrentStorage = (e: React.MouseEvent) => {
    const currentProductUrl = (e.target as HTMLDivElement).dataset.url!;
    navigate(location.pathname.replace(slug!, currentProductUrl));
  };
  const changeCurrentColor = (color: string) => {
    setCurrentColor(color);
  };

  function onOpenProductCarousel() {
    // @ts-ignore this===tab
    navigate(location.pathname + `#${this}`);
    dispatchProductModalState({ type: ProductModalAction.CLOSE_CHECKOUTMODAL });
    dispatchProductModalState({ type: ProductModalAction.TOGGLE_MODAL });
  }
  // Product added
  useEffect(() => {
    if (isProductAdded && width > 1200) {
      document
        .querySelector(".cart-section")
        ?.scrollIntoView({ behavior: "smooth" });
      const timer = setTimeout(() => {
        setIsProductAdded(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  });

  // prevent scroll when model is open
  if (productModalState.isOpenModal) {
    document.body.style.overflowY = "hidden";
    document.body.style.height = "100vh";
  }
  if (!productModalState.isOpenModal) {
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
  }
  return {
    productModalState,
    currentColor,
    isProductAdded,
    slidesImgs,
    onToggleModal,
    currentHighlightsImgNumber,
    onSetCurrentHighlightsImgNumber,
    onOpenCheckoutModal,
    addToCart,
    linksColor,
    changeCurrentStorage,
    changeCurrentColor,
    setIsProductAdded,
    width,
    onOpenProductCarousel,
    links,
  };
};
export default useProductHook;
