import React from 'react';
import './index.scss';
import Link from 'umi/Link';
import ShoppingList from '../layouts/components/Box/index'
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(15)).map((_val, i) => ({
  icon:
    'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
  text: '美食',
}));
class Mine extends React.Component {
  render() {
    return (
      // <section>
      //     <Link to="/profile" > <i></i> <span>到个人页面</span></Link>
      //  </section>
      <div className="jh_page_home">
        {/* 头部 */}
        <header className="address">
          <div className="ad_content">
            <i className="iconfont icon-find"></i>
            <span>宝安区深圳市宝安区后瑞街道</span>
          </div>
        </header>
        {/* 搜索栏 */}
        <div className="search">
          <Link className="search_btn" to="/search">
            <i className="iconfont icon-find"></i>
            <span>搜索饿了么商家、商品名称</span>
          </Link>
        </div>
        {/* 美食分类 */}
        <div className="foodentry">
          <Grid
            data={data}
            isCarousel
            hasLine={false}
            columnNum={5}
            square={false}
            onClick={_el => console.log(_el)}
          />
        </div>
        {/* 小banner图 */}
        <div className="banner">
          <div className="ban_top">
            <h3>品质套餐</h3>
            <p>搭配齐全吃得好</p>
            <span>立即抢购 > </span>
            <img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" />
          </div>
          <div className="ban_button">
            <div className="text_left">
              <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" />
              <span className="first">超级会员</span>
              <span className="next"> · 每月领20元红包</span>
            </div>
            <div className="text_right">
              <Link to="/">立即开通 > </Link>
            </div>
          </div>
        </div>
        {/* 商家列表 */}
        <div className="storeList">推荐商家</div>
        <div className="home_filter">
          <div className="comprehensive">
            <Link to="/">综合排序</Link>
          </div>
          <div className="comprehensive">
            <Link to="/">距离最近</Link>
          </div>
          <div className="comprehensive">
            <Link to="/">品质联盟</Link>
          </div>
          <div className="comprehensive">
            <Link to="/">筛选</Link>
          </div>
        </div>
        <div className='shopping_list'>

        <ShoppingList />
        </div>
      </div>
    );
  }
}
export default Mine;
