import styles from './index.scss';
import { connect } from 'dva';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <section>
      <div> {props.children}</div>
      <Link to="/profile">
        <i className="iconfont icon-index"></i> <span>首页</span>
        <i className="iconfont icon-find"></i> <span>发现</span>
        <i className="iconfont icon-order"></i> <span>订单</span>
        <i className="iconfont icon-mine"></i> <span>我的</span>
      </Link>
    </section>
  );
}

export default BasicLayout;
