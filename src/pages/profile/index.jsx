import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import Link from 'umi/link';
class Mine extends React.Component {
  render() {
    return (
      <section>
        <header className="header">
          <section>
            <Link to="/login">
              <h1>登录/注册</h1>
            </Link>

            <h6>
              <i></i>
              <span>登录后享受更多特权</span>
            </h6>
          </section>
        </header>
      </section>
    );
  }
}
export default Mine;
