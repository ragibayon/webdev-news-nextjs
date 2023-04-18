import style from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={style.title}>
        <span>WebDev</span> News
      </h1>
      <p className={style.description}>
        Keep up to date with the latest web dev news
      </p>
    </header>
  );
};

export default Header;
