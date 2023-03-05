import styles from "../review.module.scss";
import { Link } from "react-router-dom";
import { LinksHierarchy } from "components";
interface ReviewHeaderProps {
  category:string,
  title:string,
  slug: string;
}
const ReviewHeader = ({ category,title, slug }: ReviewHeaderProps) => {
  const linksHierarchy=[{to:category.toLowerCase(),label:category},{to:`${category.toLowerCase()}/${slug}`,label:title}]
  return (
    <div className={styles.reviews__header}>
      <LinksHierarchy  links={linksHierarchy}/>
     
    </div>
  );
};

export default ReviewHeader;
