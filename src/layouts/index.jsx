import './index.scss';
import { connect } from 'dva';
import NavLink from 'umi/NavLink';

function BasicLayout(props) {
  return (
    <section className="">
      <div className="content"> {props.children}</div>
      <nav className="footer">
        <ul className="ul">
          <NavLink to="/profile">
            <li className="li">
              <i className="iconfont icon-index"></i> <span>首页</span>
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="li">
              <i className="iconfont icon-find"></i> <span>发现</span>
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="li">
              <i className="iconfont icon-order"></i> <span>订单</span>
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="li">
              <i className="iconfont icon-mine"></i> <span>我的</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </section>
  );
}

export default BasicLayout;
