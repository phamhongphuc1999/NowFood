import React from 'react'
import { FOOD } from '../assets/config/constant'
import Layout from '../layouts/Layout'
import * as styles from '../assets/css/pages/food.module.css'
import NowSearch from '../components/food/NowSearch'

const Food = () => {
  return (
    <Layout action={FOOD}>
      <div className={styles.nowBanner} style={{ position: 'fixed', top: '70px' }}>
        <div className={styles.container}>
          <NowSearch />
        </div>
      </div>
      <div className={styles.mainHome}>

      </div>
    </Layout>
  )
}

export default Food
