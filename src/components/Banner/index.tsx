import styles from "./Banner.module.css";

const Banner = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img className={styles.banner} {...props} />;
};

export default Banner;
