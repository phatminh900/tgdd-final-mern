
import React from 'react';


const DynamicIndex = React.lazy(() => import('./pages\index'));
const DynamicIndex = React.lazy(() => import('./pages\private\index'));
const DynamicIndex = React.lazy(() => import('./pages\private\order-history\index'));
const DynamicOrderHistoryTest = React.lazy(() => import('./pages\private\order-history\__tests__\order-history.test'));
const DynamicOrderDetailProductInfoTest = React.lazy(() => import('./pages\private\order-history\order-detail-specific\__test__\order-detail-product-info.test'));
const DynamicOrderDetailSpecificTest = React.lazy(() => import('./pages\private\order-history\order-detail-specific\__test__\order-detail-specific.test'));
const DynamicOrderDetailUserInfoTest = React.lazy(() => import('./pages\private\order-history\order-detail-specific\__test__\order-detail-user-info.test'));
const DynamicOrderDetailProductInfoComponent = React.lazy(() => import('./pages\private\order-history\order-detail-specific\order-detail-product-info.component'));
const DynamicOrderDetailSpecificContainer = React.lazy(() => import('./pages\private\order-history\order-detail-specific\order-detail-specific.container'));
const DynamicOrderDetailTotalComponent = React.lazy(() => import('./pages\private\order-history\order-detail-specific\order-detail-total.component'));
const DynamicOrderDetailUserInfoComponent = React.lazy(() => import('./pages\private\order-history\order-detail-specific\order-detail-user-info.component'));
const DynamicOrderUserHistoryTest = React.lazy(() => import('./pages\private\order-history\order-history-details\__tests__\order-user-history.test'));
const DynamicOrderHistoryGreetUserSmallTest = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user-small.test'));
const DynamicOrderHistoryGreetUserTest = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user.test'));
const DynamicOrderHistoryGreetUserSmallComponent = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user-small.component'));
const DynamicOrderHistoryGreetUserComponent = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user.component'));
const DynamicOrderHistoryNavigateComponent = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-navigate\order-history-navigate.component'));
const DynamicUserHistoryListPurchasedTest = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-user-list-purchased\__test__\user-history-list-purchased.test'));
const DynamicOrderHistoryUserListPurchased = React.lazy(() => import('./pages\private\order-history\order-history-details\order-history-user-list-purchased\order-history-user-list-purchased'));
const DynamicOrderUserHistoryComponent = React.lazy(() => import('./pages\private\order-history\order-history-details\order-user-history.component.'));
const DynamicOrderUserHistoryHook = React.lazy(() => import('./pages\private\order-history\order-history-details\order-user-history.hook'));
const DynamicOrderHistoryContainer = React.lazy(() => import('./pages\private\order-history\order-history.container'));
const DynamicOrderHistoryHook = React.lazy(() => import('./pages\private\order-history\order-history.hook'));
const DynamicOrderHistoryInterface = React.lazy(() => import('./pages\private\order-history\order-history.interface'));
const DynamicUserPersonalInformationTest = React.lazy(() => import('./pages\private\order-history\user-personal-information\__test__\user-personal-information.test'));
const DynamicUserPersonalInformationComponent = React.lazy(() => import('./pages\private\order-history\user-personal-information\user-personal-information.component'));
const DynamicUserPersonalInformationHook = React.lazy(() => import('./pages\private\order-history\user-personal-information\user-personal-information.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\index'));
const DynamicIndex = React.lazy(() => import('./pages\public\cart\index'));
const DynamicCartTest = React.lazy(() => import('./pages\public\cart\__test__\cart.test'));
const DynamicCartDiscountComponent = React.lazy(() => import('./pages\public\cart\cart-discount\cart-discount.component'));
const DynamicCartItemColorItemTest = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item-color-item.test'));
const DynamicCartItemColorListTest = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item-color-list.test'));
const DynamicCartItemHookTest = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item-hook.test'));
const DynamicCartItemImgBoxSpec = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item-img-box.spec'));
const DynamicCartItemPromotionTest = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item-promotion.test'));
const DynamicCartItemTest = React.lazy(() => import('./pages\public\cart\cart-item\__test__\cart-item.test'));
const DynamicCartItemColorBtnComponent = React.lazy(() => import('./pages\public\cart\cart-item\cart-item-color-btn.component'));
const DynamicCartItemColorItemComponent = React.lazy(() => import('./pages\public\cart\cart-item\cart-item-color-item.component'));
const DynamicCartItemColorListComponent = React.lazy(() => import('./pages\public\cart\cart-item\cart-item-color-list.component'));
const DynamicCartItemImgBoxComponent = React.lazy(() => import('./pages\public\cart\cart-item\cart-item-img-box.component'));
const DynamicCartItemPromotionComponent = React.lazy(() => import('./pages\public\cart\cart-item\cart-item-promotion.component'));
const DynamicCartItemContainer = React.lazy(() => import('./pages\public\cart\cart-item\cart-item.container'));
const DynamicCartItemHook = React.lazy(() => import('./pages\public\cart\cart-item\cart-item.hook'));
const DynamicCartListHookTest = React.lazy(() => import('./pages\public\cart\cart-list\__test__\cart-list-hook.test'));
const DynamicCartListTest = React.lazy(() => import('./pages\public\cart\cart-list\__test__\cart-list.test'));
const DynamicCartListComponent = React.lazy(() => import('./pages\public\cart\cart-list\cart-list.component'));
const DynamicCartListHook = React.lazy(() => import('./pages\public\cart\cart-list\cart-list.hook'));
const DynamicCartNothingComponent = React.lazy(() => import('./pages\public\cart\cart-nothing\cart-nothing.component'));
const DynamicCartSummaryComponent = React.lazy(() => import('./pages\public\cart\cart-summary\cart-summary.component'));
const DynamicCartSummaryHook = React.lazy(() => import('./pages\public\cart\cart-summary\cart-summary.hook'));
const DynamicCartTemporarySummaryHookTest = React.lazy(() => import('./pages\public\cart\cart-temporary-summary\__test__\cart-temporary-summary.hook.test'));
const DynamicCartTemporarySummaryComponent = React.lazy(() => import('./pages\public\cart\cart-temporary-summary\cart-temporary-summary.component'));
const DynamicCartTemporarySummaryHook = React.lazy(() => import('./pages\public\cart\cart-temporary-summary\cart-temporary-summary.hook'));
const DynamicCartUserInfoHookTest = React.lazy(() => import('./pages\public\cart\cart-user-info\__test__\cart-user-info.hook.test'));
const DynamicCartUserInfoTest = React.lazy(() => import('./pages\public\cart\cart-user-info\__test__\cart-user-info.test'));
const DynamicCartUserInfoComponent = React.lazy(() => import('./pages\public\cart\cart-user-info\cart-user-info.component'));
const DynamicCartUserInfoHook = React.lazy(() => import('./pages\public\cart\cart-user-info\cart-user-info.hook'));
const DynamicCartContainer = React.lazy(() => import('./pages\public\cart\cart.container'));
const DynamicCartHook = React.lazy(() => import('./pages\public\cart\cart.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\error\index'));
const DynamicErrorPageContainer = React.lazy(() => import('./pages\public\error\error-page.container'));
const DynamicIndex = React.lazy(() => import('./pages\public\forgotPassword\index'));
const DynamicForgotPasswordHookTest = React.lazy(() => import('./pages\public\forgotPassword\__test__\forgot-password.hook.test'));
const DynamicForgotPasswordTest = React.lazy(() => import('./pages\public\forgotPassword\__test__\forgot-password.test'));
const DynamicForgotPasswordContainer = React.lazy(() => import('./pages\public\forgotPassword\forgot-password.container'));
const DynamicForgotPasswordHook = React.lazy(() => import('./pages\public\forgotPassword\forgot-password.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\home\index'));
const DynamicHomeRecommendItemTest = React.lazy(() => import('./pages\public\home\__tests__\home-recommend-item.test'));
const DynamicHomeRecommendListTest = React.lazy(() => import('./pages\public\home\__tests__\home-recommend-list.test'));
const DynamicHomeRecommendItemComponent = React.lazy(() => import('./pages\public\home\home-recommend-item.component'));
const DynamicHomeRecommendListComponent = React.lazy(() => import('./pages\public\home\home-recommend-list.component'));
const DynamicHomeContainer = React.lazy(() => import('./pages\public\home\home.container'));
const DynamicHomeHook = React.lazy(() => import('./pages\public\home\home.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\laptops\index'));
const DynamicLaptopItemComponent = React.lazy(() => import('./pages\public\laptops\laptop-item.component'));
const DynamicLaptopsListComponent = React.lazy(() => import('./pages\public\laptops\laptops-list.component'));
const DynamicLaptopsContainer = React.lazy(() => import('./pages\public\laptops\laptops.container'));
const DynamicLaptopsHooks = React.lazy(() => import('./pages\public\laptops\laptops.hooks'));
const DynamicIndex = React.lazy(() => import('./pages\public\login\index'));
const DynamicLoginContainer = React.lazy(() => import('./pages\public\login\login.container'));
const DynamicLoginHook = React.lazy(() => import('./pages\public\login\login.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\NotFound\index'));
const DynamicNotFoundComponent = React.lazy(() => import('./pages\public\NotFound\NotFound.component'));
const DynamicIndex = React.lazy(() => import('./pages\public\phones\index'));
const DynamicPhoneHeaderComponent = React.lazy(() => import('./pages\public\phones\phone-header\phone-header.component'));
const DynamicPhoneItemComponent = React.lazy(() => import('./pages\public\phones\phone-item\phone-item.component'));
const DynamicPhoneItemHook = React.lazy(() => import('./pages\public\phones\phone-item\phone-item.hook'));
const DynamicPhoneListComponent = React.lazy(() => import('./pages\public\phones\phone-list\phone-list.component'));
const DynamicPhonesContainer = React.lazy(() => import('./pages\public\phones\phones.container'));
const DynamicPhonesHooks = React.lazy(() => import('./pages\public\phones\phones.hooks'));
const DynamicIndex = React.lazy(() => import('./pages\public\product\index'));
const DynamicProducHookTest = React.lazy(() => import('./pages\public\product\__tests__\produc-hook.test'));
const DynamicProductTest = React.lazy(() => import('./pages\public\product\__tests__\product.test'));
const DynamicProductCarouselListTest = React.lazy(() => import('./pages\public\product\product-carousel\__tests__\product-carousel-list.test'));
const DynamicProductCarouselMainTest = React.lazy(() => import('./pages\public\product\product-carousel\__tests__\product-carousel-main.test'));
const DynamicProductCarouselListComponent = React.lazy(() => import('./pages\public\product\product-carousel\product-carousel-list.component'));
const DynamicProductCarouselMainComponent = React.lazy(() => import('./pages\public\product\product-carousel\product-carousel-main.component'));
const DynamicProductCarouselContainer = React.lazy(() => import('./pages\public\product\product-carousel\product-carousel.container'));
const DynamicProductInfoCarouselComponent = React.lazy(() => import('./pages\public\product\product-carousel\product-info-carousel\product-info-carousel.component'));
const DynamicProductConfigurationCarouselComponent = React.lazy(() => import('./pages\public\product\product-carousel\productconfiguration-carousel\product-configuration-carousel.component'));
const DynamicProductAddedToCartComponent = React.lazy(() => import('./pages\public\product\product-checkout\product-added-to-cart\product-added-to-cart.component'));
const DynamicProductCheckoutListColorComponent = React.lazy(() => import('./pages\public\product\product-checkout\product-checkout-list-color\product-checkout-list-color.component'));
const DynamicProductCheckoutComponent = React.lazy(() => import('./pages\public\product\product-checkout\product-checkout.component'));
const DynamicProductCheckoutHook = React.lazy(() => import('./pages\public\product\product-checkout\product-checkout.hook'));
const DynamicProductColorComponent = React.lazy(() => import('./pages\public\product\product-color\product-color.component'));
const DynamicProductConfigurationComponent = React.lazy(() => import('./pages\public\product\product-configuration\product-configuration.component'));
const DynamicProductGeneralInformation = React.lazy(() => import('./pages\public\product\product-general-information\product-general-information'));
const DynamicProductHeaderComponent = React.lazy(() => import('./pages\public\product\product-header\product-header.component'));
const DynamicProductInfoComponent = React.lazy(() => import('./pages\public\product\product-info\product-info.component'));
const DynamicProductLinksComponent = React.lazy(() => import('./pages\public\product\product-links\product-links.component'));
const DynamicProductModalComponent = React.lazy(() => import('./pages\public\product\product-modal\product-modal.component'));
const DynamicProductOverviewComponent = React.lazy(() => import('./pages\public\product\product-overview\product-overview.component'));
const DynamicUseProductOverviewHook = React.lazy(() => import('./pages\public\product\product-overview\useProductOverview.hook'));
const DynamicProductPriceComponent = React.lazy(() => import('./pages\public\product\product-price\product-price.component'));
const DynamicProductPromotionsComponent = React.lazy(() => import('./pages\public\product\product-promotion\product-promotions.component'));
const DynamicProductNoReviewComponent = React.lazy(() => import('./pages\public\product\product-review\product-no-review.component'));
const DynamicProductReviewRatingComponents = React.lazy(() => import('./pages\public\product\product-review\product-review-rating.components'));
const DynamicProductReviewRatingHook = React.lazy(() => import('./pages\public\product\product-review\product-review-rating.hook'));
const DynamicProductReviewComponent = React.lazy(() => import('./pages\public\product\product-review\product-review.component'));
const DynamicProductReviewHook = React.lazy(() => import('./pages\public\product\product-review\product-review.hook'));
const DynamicProductReviewInterface = React.lazy(() => import('./pages\public\product\product-review\product-review.interface'));
const DynamicProductReviewsStarsComponent = React.lazy(() => import('./pages\public\product\product-review\product-reviews-stars.component'));
const DynamicProductStorageComponent = React.lazy(() => import('./pages\public\product\product-storage\product-storage.component'));
const DynamicProductContainer = React.lazy(() => import('./pages\public\product\product.container'));
const DynamicProductHook = React.lazy(() => import('./pages\public\product\product.hook'));
const DynamicProductImport = React.lazy(() => import('./pages\public\product\product.import'));
const DynamicProductInterface = React.lazy(() => import('./pages\public\product\product.interface'));
const DynamicIndex = React.lazy(() => import('./pages\public\resetPassword\index'));
const DynamicResetPasswordContainer = React.lazy(() => import('./pages\public\resetPassword\reset-password.container'));
const DynamicResetPasswordHook = React.lazy(() => import('./pages\public\resetPassword\reset-password.hook'));
const DynamicIndex = React.lazy(() => import('./pages\public\review\index'));
const DynamicReviewHookTest = React.lazy(() => import('./pages\public\review\__test__\review.hook.test'));
const DynamicReviewDetailContainer = React.lazy(() => import('./pages\public\review\review-detail\review-detail.container'));
const DynamicReviewFilterComponent = React.lazy(() => import('./pages\public\review\review-detail\review-filter.component'));
const DynamicReviewPaginationComponent = React.lazy(() => import('./pages\public\review\review-detail\review-pagination.component'));
const DynamicReviewHeaderComponent = React.lazy(() => import('./pages\public\review\review-header\review-header.component'));
const DynamicReviewOverviewComponent = React.lazy(() => import('./pages\public\review\review-overview\review-overview.component'));
const DynamicReviewContainer = React.lazy(() => import('./pages\public\review\review.container'));
const DynamicReviewHook = React.lazy(() => import('./pages\public\review\review.hook'));
const DynamicReviewInterface = React.lazy(() => import('./pages\public\review\review.interface'));
const DynamicSharedLayout = React.lazy(() => import('./pages\public\shared-layout\shared-layout'));
const DynamicIndex = React.lazy(() => import('./pages\public\signup\index'));
const DynamicSignupContainer = React.lazy(() => import('./pages\public\signup\signup.container'));
const DynamicSignupHook = React.lazy(() => import('./pages\public\signup\signup.hook'));


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: 'D:\', element: <DynamicIndex />, index: true},
      { path: 'D:\private', element: <DynamicIndex />, index: true},
      { path: 'D:\private\order-history', element: <DynamicIndex />, index: true},
      { path: 'D:\private\order-history\__tests__\order-history.test', element: <DynamicOrderHistoryTest />, },
      { path: 'D:\private\order-history\order-detail-specific\__test__\order-detail-product-info.test', element: <DynamicOrderDetailProductInfoTest />, },
      { path: 'D:\private\order-history\order-detail-specific\__test__\order-detail-specific.test', element: <DynamicOrderDetailSpecificTest />, },
      { path: 'D:\private\order-history\order-detail-specific\__test__\order-detail-user-info.test', element: <DynamicOrderDetailUserInfoTest />, },
      { path: 'D:\private\order-history\order-detail-specific\order-detail-product-info.component', element: <DynamicOrderDetailProductInfoComponent />, },
      { path: 'D:\private\order-history\order-detail-specific\order-detail-specific.container', element: <DynamicOrderDetailSpecificContainer />, },
      { path: 'D:\private\order-history\order-detail-specific\order-detail-total.component', element: <DynamicOrderDetailTotalComponent />, },
      { path: 'D:\private\order-history\order-detail-specific\order-detail-user-info.component', element: <DynamicOrderDetailUserInfoComponent />, },
      { path: 'D:\private\order-history\order-history-details\__tests__\order-user-history.test', element: <DynamicOrderUserHistoryTest />, },
      { path: 'D:\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user-small.test', element: <DynamicOrderHistoryGreetUserSmallTest />, },
      { path: 'D:\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user.test', element: <DynamicOrderHistoryGreetUserTest />, },
      { path: 'D:\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user-small.component', element: <DynamicOrderHistoryGreetUserSmallComponent />, },
      { path: 'D:\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user.component', element: <DynamicOrderHistoryGreetUserComponent />, },
      { path: 'D:\private\order-history\order-history-details\order-history-navigate\order-history-navigate.component', element: <DynamicOrderHistoryNavigateComponent />, },
      { path: 'D:\private\order-history\order-history-details\order-history-user-list-purchased\__test__\user-history-list-purchased.test', element: <DynamicUserHistoryListPurchasedTest />, },
      { path: 'D:\private\order-history\order-history-details\order-history-user-list-purchased\order-history-user-list-purchased', element: <DynamicOrderHistoryUserListPurchased />, },
      { path: 'D:\private\order-history\order-history-details\order-user-history.component.', element: <DynamicOrderUserHistoryComponent />, },
      { path: 'D:\private\order-history\order-history-details\order-user-history.hook', element: <DynamicOrderUserHistoryHook />, },
      { path: 'D:\private\order-history\order-history.container', element: <DynamicOrderHistoryContainer />, },
      { path: 'D:\private\order-history\order-history.hook', element: <DynamicOrderHistoryHook />, },
      { path: 'D:\private\order-history\order-history.interface', element: <DynamicOrderHistoryInterface />, },
      { path: 'D:\private\order-history\user-personal-information\__test__\user-personal-information.test', element: <DynamicUserPersonalInformationTest />, },
      { path: 'D:\private\order-history\user-personal-information\user-personal-information.component', element: <DynamicUserPersonalInformationComponent />, },
      { path: 'D:\private\order-history\user-personal-information\user-personal-information.hook', element: <DynamicUserPersonalInformationHook />, },
      { path: 'D:\public', element: <DynamicIndex />, index: true},
      { path: 'D:\public\cart', element: <DynamicIndex />, index: true},
      { path: 'D:\public\cart\__test__\cart.test', element: <DynamicCartTest />, },
      { path: 'D:\public\cart\cart-discount\cart-discount.component', element: <DynamicCartDiscountComponent />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item-color-item.test', element: <DynamicCartItemColorItemTest />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item-color-list.test', element: <DynamicCartItemColorListTest />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item-hook.test', element: <DynamicCartItemHookTest />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item-img-box.spec', element: <DynamicCartItemImgBoxSpec />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item-promotion.test', element: <DynamicCartItemPromotionTest />, },
      { path: 'D:\public\cart\cart-item\__test__\cart-item.test', element: <DynamicCartItemTest />, },
      { path: 'D:\public\cart\cart-item\cart-item-color-btn.component', element: <DynamicCartItemColorBtnComponent />, },
      { path: 'D:\public\cart\cart-item\cart-item-color-item.component', element: <DynamicCartItemColorItemComponent />, },
      { path: 'D:\public\cart\cart-item\cart-item-color-list.component', element: <DynamicCartItemColorListComponent />, },
      { path: 'D:\public\cart\cart-item\cart-item-img-box.component', element: <DynamicCartItemImgBoxComponent />, },
      { path: 'D:\public\cart\cart-item\cart-item-promotion.component', element: <DynamicCartItemPromotionComponent />, },
      { path: 'D:\public\cart\cart-item\cart-item.container', element: <DynamicCartItemContainer />, },
      { path: 'D:\public\cart\cart-item\cart-item.hook', element: <DynamicCartItemHook />, },
      { path: 'D:\public\cart\cart-list\__test__\cart-list-hook.test', element: <DynamicCartListHookTest />, },
      { path: 'D:\public\cart\cart-list\__test__\cart-list.test', element: <DynamicCartListTest />, },
      { path: 'D:\public\cart\cart-list\cart-list.component', element: <DynamicCartListComponent />, },
      { path: 'D:\public\cart\cart-list\cart-list.hook', element: <DynamicCartListHook />, },
      { path: 'D:\public\cart\cart-nothing\cart-nothing.component', element: <DynamicCartNothingComponent />, },
      { path: 'D:\public\cart\cart-summary\cart-summary.component', element: <DynamicCartSummaryComponent />, },
      { path: 'D:\public\cart\cart-summary\cart-summary.hook', element: <DynamicCartSummaryHook />, },
      { path: 'D:\public\cart\cart-temporary-summary\__test__\cart-temporary-summary.hook.test', element: <DynamicCartTemporarySummaryHookTest />, },
      { path: 'D:\public\cart\cart-temporary-summary\cart-temporary-summary.component', element: <DynamicCartTemporarySummaryComponent />, },
      { path: 'D:\public\cart\cart-temporary-summary\cart-temporary-summary.hook', element: <DynamicCartTemporarySummaryHook />, },
      { path: 'D:\public\cart\cart-user-info\__test__\cart-user-info.hook.test', element: <DynamicCartUserInfoHookTest />, },
      { path: 'D:\public\cart\cart-user-info\__test__\cart-user-info.test', element: <DynamicCartUserInfoTest />, },
      { path: 'D:\public\cart\cart-user-info\cart-user-info.component', element: <DynamicCartUserInfoComponent />, },
      { path: 'D:\public\cart\cart-user-info\cart-user-info.hook', element: <DynamicCartUserInfoHook />, },
      { path: 'D:\public\cart\cart.container', element: <DynamicCartContainer />, },
      { path: 'D:\public\cart\cart.hook', element: <DynamicCartHook />, },
      { path: 'D:\public\error', element: <DynamicIndex />, index: true},
      { path: 'D:\public\error\error-page.container', element: <DynamicErrorPageContainer />, },
      { path: 'D:\public\forgotPassword', element: <DynamicIndex />, index: true},
      { path: 'D:\public\forgotPassword\__test__\forgot-password.hook.test', element: <DynamicForgotPasswordHookTest />, },
      { path: 'D:\public\forgotPassword\__test__\forgot-password.test', element: <DynamicForgotPasswordTest />, },
      { path: 'D:\public\forgotPassword\forgot-password.container', element: <DynamicForgotPasswordContainer />, },
      { path: 'D:\public\forgotPassword\forgot-password.hook', element: <DynamicForgotPasswordHook />, },
      { path: 'D:\public\home', element: <DynamicIndex />, index: true},
      { path: 'D:\public\home\__tests__\home-recommend-item.test', element: <DynamicHomeRecommendItemTest />, },
      { path: 'D:\public\home\__tests__\home-recommend-list.test', element: <DynamicHomeRecommendListTest />, },
      { path: 'D:\public\home\home-recommend-item.component', element: <DynamicHomeRecommendItemComponent />, },
      { path: 'D:\public\home\home-recommend-list.component', element: <DynamicHomeRecommendListComponent />, },
      { path: 'D:\public\home\home.container', element: <DynamicHomeContainer />, },
      { path: 'D:\public\home\home.hook', element: <DynamicHomeHook />, },
      { path: 'D:\public\laptops', element: <DynamicIndex />, index: true},
      { path: 'D:\public\laptops\laptop-item.component', element: <DynamicLaptopItemComponent />, },
      { path: 'D:\public\laptops\laptops-list.component', element: <DynamicLaptopsListComponent />, },
      { path: 'D:\public\laptops\laptops.container', element: <DynamicLaptopsContainer />, },
      { path: 'D:\public\laptops\laptops.hooks', element: <DynamicLaptopsHooks />, },
      { path: 'D:\public\login', element: <DynamicIndex />, index: true},
      { path: 'D:\public\login\login.container', element: <DynamicLoginContainer />, },
      { path: 'D:\public\login\login.hook', element: <DynamicLoginHook />, },
      { path: 'D:\public\NotFound', element: <DynamicIndex />, index: true},
      { path: 'D:\public\NotFound\NotFound.component', element: <DynamicNotFoundComponent />, },
      { path: 'D:\public\phones', element: <DynamicIndex />, index: true},
      { path: 'D:\public\phones\phone-header\phone-header.component', element: <DynamicPhoneHeaderComponent />, },
      { path: 'D:\public\phones\phone-item\phone-item.component', element: <DynamicPhoneItemComponent />, },
      { path: 'D:\public\phones\phone-item\phone-item.hook', element: <DynamicPhoneItemHook />, },
      { path: 'D:\public\phones\phone-list\phone-list.component', element: <DynamicPhoneListComponent />, },
      { path: 'D:\public\phones\phones.container', element: <DynamicPhonesContainer />, },
      { path: 'D:\public\phones\phones.hooks', element: <DynamicPhonesHooks />, },
      { path: 'D:\public\product', element: <DynamicIndex />, index: true},
      { path: 'D:\public\product\__tests__\produc-hook.test', element: <DynamicProducHookTest />, },
      { path: 'D:\public\product\__tests__\product.test', element: <DynamicProductTest />, },
      { path: 'D:\public\product\product-carousel\__tests__\product-carousel-list.test', element: <DynamicProductCarouselListTest />, },
      { path: 'D:\public\product\product-carousel\__tests__\product-carousel-main.test', element: <DynamicProductCarouselMainTest />, },
      { path: 'D:\public\product\product-carousel\product-carousel-list.component', element: <DynamicProductCarouselListComponent />, },
      { path: 'D:\public\product\product-carousel\product-carousel-main.component', element: <DynamicProductCarouselMainComponent />, },
      { path: 'D:\public\product\product-carousel\product-carousel.container', element: <DynamicProductCarouselContainer />, },
      { path: 'D:\public\product\product-carousel\product-info-carousel\product-info-carousel.component', element: <DynamicProductInfoCarouselComponent />, },
      { path: 'D:\public\product\product-carousel\productconfiguration-carousel\product-configuration-carousel.component', element: <DynamicProductConfigurationCarouselComponent />, },
      { path: 'D:\public\product\product-checkout\product-added-to-cart\product-added-to-cart.component', element: <DynamicProductAddedToCartComponent />, },
      { path: 'D:\public\product\product-checkout\product-checkout-list-color\product-checkout-list-color.component', element: <DynamicProductCheckoutListColorComponent />, },
      { path: 'D:\public\product\product-checkout\product-checkout.component', element: <DynamicProductCheckoutComponent />, },
      { path: 'D:\public\product\product-checkout\product-checkout.hook', element: <DynamicProductCheckoutHook />, },
      { path: 'D:\public\product\product-color\product-color.component', element: <DynamicProductColorComponent />, },
      { path: 'D:\public\product\product-configuration\product-configuration.component', element: <DynamicProductConfigurationComponent />, },
      { path: 'D:\public\product\product-general-information\product-general-information', element: <DynamicProductGeneralInformation />, },
      { path: 'D:\public\product\product-header\product-header.component', element: <DynamicProductHeaderComponent />, },
      { path: 'D:\public\product\product-info\product-info.component', element: <DynamicProductInfoComponent />, },
      { path: 'D:\public\product\product-links\product-links.component', element: <DynamicProductLinksComponent />, },
      { path: 'D:\public\product\product-modal\product-modal.component', element: <DynamicProductModalComponent />, },
      { path: 'D:\public\product\product-overview\product-overview.component', element: <DynamicProductOverviewComponent />, },
      { path: 'D:\public\product\product-overview\useProductOverview.hook', element: <DynamicUseProductOverviewHook />, },
      { path: 'D:\public\product\product-price\product-price.component', element: <DynamicProductPriceComponent />, },
      { path: 'D:\public\product\product-promotion\product-promotions.component', element: <DynamicProductPromotionsComponent />, },
      { path: 'D:\public\product\product-review\product-no-review.component', element: <DynamicProductNoReviewComponent />, },
      { path: 'D:\public\product\product-review\product-review-rating.components', element: <DynamicProductReviewRatingComponents />, },
      { path: 'D:\public\product\product-review\product-review-rating.hook', element: <DynamicProductReviewRatingHook />, },
      { path: 'D:\public\product\product-review\product-review.component', element: <DynamicProductReviewComponent />, },
      { path: 'D:\public\product\product-review\product-review.hook', element: <DynamicProductReviewHook />, },
      { path: 'D:\public\product\product-review\product-review.interface', element: <DynamicProductReviewInterface />, },
      { path: 'D:\public\product\product-review\product-reviews-stars.component', element: <DynamicProductReviewsStarsComponent />, },
      { path: 'D:\public\product\product-storage\product-storage.component', element: <DynamicProductStorageComponent />, },
      { path: 'D:\public\product\product.container', element: <DynamicProductContainer />, },
      { path: 'D:\public\product\product.hook', element: <DynamicProductHook />, },
      { path: 'D:\public\product\product.import', element: <DynamicProductImport />, },
      { path: 'D:\public\product\product.interface', element: <DynamicProductInterface />, },
      { path: 'D:\public\resetPassword', element: <DynamicIndex />, index: true},
      { path: 'D:\public\resetPassword\reset-password.container', element: <DynamicResetPasswordContainer />, },
      { path: 'D:\public\resetPassword\reset-password.hook', element: <DynamicResetPasswordHook />, },
      { path: 'D:\public\review', element: <DynamicIndex />, index: true},
      { path: 'D:\public\review\__test__\review.hook.test', element: <DynamicReviewHookTest />, },
      { path: 'D:\public\review\review-detail\review-detail.container', element: <DynamicReviewDetailContainer />, },
      { path: 'D:\public\review\review-detail\review-filter.component', element: <DynamicReviewFilterComponent />, },
      { path: 'D:\public\review\review-detail\review-pagination.component', element: <DynamicReviewPaginationComponent />, },
      { path: 'D:\public\review\review-header\review-header.component', element: <DynamicReviewHeaderComponent />, },
      { path: 'D:\public\review\review-overview\review-overview.component', element: <DynamicReviewOverviewComponent />, },
      { path: 'D:\public\review\review.container', element: <DynamicReviewContainer />, },
      { path: 'D:\public\review\review.hook', element: <DynamicReviewHook />, },
      { path: 'D:\public\review\review.interface', element: <DynamicReviewInterface />, },
      { path: 'D:\public\shared-layout\shared-layout', element: <DynamicSharedLayout />, },
      { path: 'D:\public\signup', element: <DynamicIndex />, index: true},
      { path: 'D:\public\signup\signup.container', element: <DynamicSignupContainer />, },
      { path: 'D:\public\signup\signup.hook', element: <DynamicSignupHook />, },
    ]
  }
]

export const pages = [
  { route: 'D:\' },
  { route: 'D:\private' },
  { route: 'D:\private\order-history' },
  { route: 'D:\private\order-history\__tests__\order-history.test' },
  { route: 'D:\private\order-history\order-detail-specific\__test__\order-detail-product-info.test' },
  { route: 'D:\private\order-history\order-detail-specific\__test__\order-detail-specific.test' },
  { route: 'D:\private\order-history\order-detail-specific\__test__\order-detail-user-info.test' },
  { route: 'D:\private\order-history\order-detail-specific\order-detail-product-info.component' },
  { route: 'D:\private\order-history\order-detail-specific\order-detail-specific.container' },
  { route: 'D:\private\order-history\order-detail-specific\order-detail-total.component' },
  { route: 'D:\private\order-history\order-detail-specific\order-detail-user-info.component' },
  { route: 'D:\private\order-history\order-history-details\__tests__\order-user-history.test' },
  { route: 'D:\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user-small.test' },
  { route: 'D:\private\order-history\order-history-details\order-history-greet-user\__test__\order-history-greet-user.test' },
  { route: 'D:\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user-small.component' },
  { route: 'D:\private\order-history\order-history-details\order-history-greet-user\order-history-greet-user.component' },
  { route: 'D:\private\order-history\order-history-details\order-history-navigate\order-history-navigate.component' },
  { route: 'D:\private\order-history\order-history-details\order-history-user-list-purchased\__test__\user-history-list-purchased.test' },
  { route: 'D:\private\order-history\order-history-details\order-history-user-list-purchased\order-history-user-list-purchased' },
  { route: 'D:\private\order-history\order-history-details\order-user-history.component.' },
  { route: 'D:\private\order-history\order-history-details\order-user-history.hook' },
  { route: 'D:\private\order-history\order-history.container' },
  { route: 'D:\private\order-history\order-history.hook' },
  { route: 'D:\private\order-history\order-history.interface' },
  { route: 'D:\private\order-history\user-personal-information\__test__\user-personal-information.test' },
  { route: 'D:\private\order-history\user-personal-information\user-personal-information.component' },
  { route: 'D:\private\order-history\user-personal-information\user-personal-information.hook' },
  { route: 'D:\public' },
  { route: 'D:\public\cart' },
  { route: 'D:\public\cart\__test__\cart.test' },
  { route: 'D:\public\cart\cart-discount\cart-discount.component' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item-color-item.test' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item-color-list.test' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item-hook.test' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item-img-box.spec' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item-promotion.test' },
  { route: 'D:\public\cart\cart-item\__test__\cart-item.test' },
  { route: 'D:\public\cart\cart-item\cart-item-color-btn.component' },
  { route: 'D:\public\cart\cart-item\cart-item-color-item.component' },
  { route: 'D:\public\cart\cart-item\cart-item-color-list.component' },
  { route: 'D:\public\cart\cart-item\cart-item-img-box.component' },
  { route: 'D:\public\cart\cart-item\cart-item-promotion.component' },
  { route: 'D:\public\cart\cart-item\cart-item.container' },
  { route: 'D:\public\cart\cart-item\cart-item.hook' },
  { route: 'D:\public\cart\cart-list\__test__\cart-list-hook.test' },
  { route: 'D:\public\cart\cart-list\__test__\cart-list.test' },
  { route: 'D:\public\cart\cart-list\cart-list.component' },
  { route: 'D:\public\cart\cart-list\cart-list.hook' },
  { route: 'D:\public\cart\cart-nothing\cart-nothing.component' },
  { route: 'D:\public\cart\cart-summary\cart-summary.component' },
  { route: 'D:\public\cart\cart-summary\cart-summary.hook' },
  { route: 'D:\public\cart\cart-temporary-summary\__test__\cart-temporary-summary.hook.test' },
  { route: 'D:\public\cart\cart-temporary-summary\cart-temporary-summary.component' },
  { route: 'D:\public\cart\cart-temporary-summary\cart-temporary-summary.hook' },
  { route: 'D:\public\cart\cart-user-info\__test__\cart-user-info.hook.test' },
  { route: 'D:\public\cart\cart-user-info\__test__\cart-user-info.test' },
  { route: 'D:\public\cart\cart-user-info\cart-user-info.component' },
  { route: 'D:\public\cart\cart-user-info\cart-user-info.hook' },
  { route: 'D:\public\cart\cart.container' },
  { route: 'D:\public\cart\cart.hook' },
  { route: 'D:\public\error' },
  { route: 'D:\public\error\error-page.container' },
  { route: 'D:\public\forgotPassword' },
  { route: 'D:\public\forgotPassword\__test__\forgot-password.hook.test' },
  { route: 'D:\public\forgotPassword\__test__\forgot-password.test' },
  { route: 'D:\public\forgotPassword\forgot-password.container' },
  { route: 'D:\public\forgotPassword\forgot-password.hook' },
  { route: 'D:\public\home' },
  { route: 'D:\public\home\__tests__\home-recommend-item.test' },
  { route: 'D:\public\home\__tests__\home-recommend-list.test' },
  { route: 'D:\public\home\home-recommend-item.component' },
  { route: 'D:\public\home\home-recommend-list.component' },
  { route: 'D:\public\home\home.container' },
  { route: 'D:\public\home\home.hook' },
  { route: 'D:\public\laptops' },
  { route: 'D:\public\laptops\laptop-item.component' },
  { route: 'D:\public\laptops\laptops-list.component' },
  { route: 'D:\public\laptops\laptops.container' },
  { route: 'D:\public\laptops\laptops.hooks' },
  { route: 'D:\public\login' },
  { route: 'D:\public\login\login.container' },
  { route: 'D:\public\login\login.hook' },
  { route: 'D:\public\NotFound' },
  { route: 'D:\public\NotFound\NotFound.component' },
  { route: 'D:\public\phones' },
  { route: 'D:\public\phones\phone-header\phone-header.component' },
  { route: 'D:\public\phones\phone-item\phone-item.component' },
  { route: 'D:\public\phones\phone-item\phone-item.hook' },
  { route: 'D:\public\phones\phone-list\phone-list.component' },
  { route: 'D:\public\phones\phones.container' },
  { route: 'D:\public\phones\phones.hooks' },
  { route: 'D:\public\product' },
  { route: 'D:\public\product\__tests__\produc-hook.test' },
  { route: 'D:\public\product\__tests__\product.test' },
  { route: 'D:\public\product\product-carousel\__tests__\product-carousel-list.test' },
  { route: 'D:\public\product\product-carousel\__tests__\product-carousel-main.test' },
  { route: 'D:\public\product\product-carousel\product-carousel-list.component' },
  { route: 'D:\public\product\product-carousel\product-carousel-main.component' },
  { route: 'D:\public\product\product-carousel\product-carousel.container' },
  { route: 'D:\public\product\product-carousel\product-info-carousel\product-info-carousel.component' },
  { route: 'D:\public\product\product-carousel\productconfiguration-carousel\product-configuration-carousel.component' },
  { route: 'D:\public\product\product-checkout\product-added-to-cart\product-added-to-cart.component' },
  { route: 'D:\public\product\product-checkout\product-checkout-list-color\product-checkout-list-color.component' },
  { route: 'D:\public\product\product-checkout\product-checkout.component' },
  { route: 'D:\public\product\product-checkout\product-checkout.hook' },
  { route: 'D:\public\product\product-color\product-color.component' },
  { route: 'D:\public\product\product-configuration\product-configuration.component' },
  { route: 'D:\public\product\product-general-information\product-general-information' },
  { route: 'D:\public\product\product-header\product-header.component' },
  { route: 'D:\public\product\product-info\product-info.component' },
  { route: 'D:\public\product\product-links\product-links.component' },
  { route: 'D:\public\product\product-modal\product-modal.component' },
  { route: 'D:\public\product\product-overview\product-overview.component' },
  { route: 'D:\public\product\product-overview\useProductOverview.hook' },
  { route: 'D:\public\product\product-price\product-price.component' },
  { route: 'D:\public\product\product-promotion\product-promotions.component' },
  { route: 'D:\public\product\product-review\product-no-review.component' },
  { route: 'D:\public\product\product-review\product-review-rating.components' },
  { route: 'D:\public\product\product-review\product-review-rating.hook' },
  { route: 'D:\public\product\product-review\product-review.component' },
  { route: 'D:\public\product\product-review\product-review.hook' },
  { route: 'D:\public\product\product-review\product-review.interface' },
  { route: 'D:\public\product\product-review\product-reviews-stars.component' },
  { route: 'D:\public\product\product-storage\product-storage.component' },
  { route: 'D:\public\product\product.container' },
  { route: 'D:\public\product\product.hook' },
  { route: 'D:\public\product\product.import' },
  { route: 'D:\public\product\product.interface' },
  { route: 'D:\public\resetPassword' },
  { route: 'D:\public\resetPassword\reset-password.container' },
  { route: 'D:\public\resetPassword\reset-password.hook' },
  { route: 'D:\public\review' },
  { route: 'D:\public\review\__test__\review.hook.test' },
  { route: 'D:\public\review\review-detail\review-detail.container' },
  { route: 'D:\public\review\review-detail\review-filter.component' },
  { route: 'D:\public\review\review-detail\review-pagination.component' },
  { route: 'D:\public\review\review-header\review-header.component' },
  { route: 'D:\public\review\review-overview\review-overview.component' },
  { route: 'D:\public\review\review.container' },
  { route: 'D:\public\review\review.hook' },
  { route: 'D:\public\review\review.interface' },
  { route: 'D:\public\shared-layout\shared-layout' },
  { route: 'D:\public\signup' },
  { route: 'D:\public\signup\signup.container' },
  { route: 'D:\public\signup\signup.hook' },
]
