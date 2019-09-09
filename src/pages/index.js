import React from 'react';
import styles from './index.scss'
import { connect } from 'dva';
import Link from 'umi/link';
class Mine extends React.Component {
  render () { 
    return(
    // <section>
    //     <Link to="/profile" > <i></i> <span>到个人页面</span></Link>
    //  </section>
    <div className={styles.jh_page_home}>
      <header className={styles.address}>
        <div className='ad_content'>
          <i></i><span>深圳市宝安区</span>
        </div>
      </header>
    </div>
     )
     
}
}
export default Mine
