import { Link } from "react-router-dom";

import css from "./BannerComp.module.css";

const BannerComp = (props) => {
  const { bannerData } = props;
  return (
    <Link className={css.outerDiv} to={bannerData?.link}>
      <img src="/icons/banner.png" alt="banner" className={css.img} />
      
    </Link>
  );
};

export default BannerComp;
