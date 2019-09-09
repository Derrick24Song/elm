import styles from './index.scss';


function BasicLayout(props) {
  return (
    <section>
     <div> {props.children}</div>
    </section>
  );
}

export default BasicLayout;
