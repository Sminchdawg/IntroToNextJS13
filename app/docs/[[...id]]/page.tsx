import styles from "./style.module.css";

const DocsPage = ({ params }) => {
  console.log("params", params);
  return <div className={styles.title}>docs page</div>;
};

export default DocsPage;
