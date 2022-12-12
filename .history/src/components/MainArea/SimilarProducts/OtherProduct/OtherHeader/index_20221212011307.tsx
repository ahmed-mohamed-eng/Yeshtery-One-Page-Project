import styles from "./OtherHeader.module.css";

export interface OtherHeaderProps {
  imgSrc: string;
}

const OtherHeader = () => {
  return (
    <div className={styles.other_header}>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default OtherHeader;
