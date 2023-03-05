import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IReviewDocument } from "pages/public/review/review.interface";
import styles from "./user-review.module.scss";
type UserReviewProps = {
  user: IReviewDocument["user"];
  rating: IReviewDocument["rating"];
  id: string;
  review: string;
  photo?: string;
};
const UserReview = ({ id, review, user, photo, rating }: UserReviewProps) => {
  const stars=React.useMemo(()=> Array.from({ length: 5 }).map((_, i) => (
    <li key={crypto.randomUUID()}>
      {i + 1 <= rating ? <AiFillStar /> : <AiOutlineStar />}
    </li>
  )),[])
  return (
    <div key={id} className={`${styles["user-review"]} flex gap-6px`}>
      <p className={styles["user-review__name"]}>{user?.name}</p>
      <figure className={styles["user-review__rating"]}>
        <ul className={`${styles["user-review__rating"]} flex-vt-ct`}>
          {stars}
        </ul> 
        {photo && (
          <img
            height={72}
            width={72}
            className={styles["user-review__img"]}
            src={photo}
            alt="user review "
          />
        )}
        <p className={styles["user-review__text"]}>{review}</p>
      </figure>
    </div>
  );
};

export default UserReview;
