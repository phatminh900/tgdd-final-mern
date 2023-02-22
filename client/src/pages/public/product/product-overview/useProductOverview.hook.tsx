import React from 'react'
import { GiAlliedStar, GiNotebook } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const useProductOverview = (linksColor: { id: string; hash: string; title: string }[],imgColorsCover:string[]) => {
    const productCarouselListTab = [
        {
          id: uuidv4(),
          icon: <GiAlliedStar />,
          title: "Điểm nổi bật",
        },
        // colors
        ...linksColor.map((linkColor, i) => ({
          id: uuidv4(),
          icon: (
            <img
              width={40}
              height={40}
              src={imgColorsCover[i]}
              alt="Product color "
            />
          ),
          title: linkColor.title,
        })),
        {
          id: uuidv4(),
          icon: <FiBox />,
          title: "Thông số kĩ thuật",
        },
        
      ];
      return productCarouselListTab
    
}

export default useProductOverview