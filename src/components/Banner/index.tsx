import styles from "./Banner.module.css";

type BannerProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Banner = ({ ...props }: BannerProps) => {
  return <img className={styles.banner} {...props} />;
};

export default Banner;