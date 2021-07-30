import React from 'react'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import * as styles from '../../assets/css/pages/food.module.css'
import HeaderCollection from '../shared/collections/HeaderCollection'
import CollectionDetail from '../shared/collections/CollectionDetail'
import { collection } from '../../demo-data/food/collection'
import RestaurantList from '../shared/collections/RestaurantList'
import { near } from '../../demo-data/food/near'
import { sale } from '../../demo-data/food/topSale'
import { Container } from '@material-ui/core'

const titles = ['near', 'topSale', 'bestRate', 'fast']

const MainFood = ({ className }) => {
  const { t } = useTranslation()

  return (
    <Container>
      <div className={cx(className, styles.mainHome)}>
        <HeaderCollection action={t('food')}
          address="P. Tôn Đức Thắng, Quốc Tử Giám, Đống Đa, Hà Nội, Việt Nam" />
        <CollectionDetail data={collection} />
        <RestaurantList
          titles={titles.map((element, index) => t(element))}
          actions={[near, sale, near, sale]}
        />
      </div>
    </Container>
  )
}

export default MainFood
