import React from 'react';
import styles from './index.scss'
import { connect } from 'dva';
import Link from 'umi/link';
class Mine extends React.Component {
  render () { 
    return(
    <section>
        <Link to="/profile" > <i></i> <span>到个人页面</span></Link>
                  
     </section>
     )
     
}
}
export default Mine
