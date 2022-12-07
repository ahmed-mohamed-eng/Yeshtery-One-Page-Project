import Logo from "./Logo";
import Infos from "./Infos";
import Offers from "./Offers";

import style from "./OffersAndInfo.module.css";

const OffersAndInfo = () => {
  return (
    <div className={style.offers_and_info}>
      <Logo />
      <Offers />
      <Infos />
    </div>
  );
};

export default OffersAndInfo;
