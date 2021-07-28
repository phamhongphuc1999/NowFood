import { LIQOR } from "../assets/config/constant"
import NowSearch from "../components/shared/pages/NowSearch"
import React from 'react'

const categoryList = [
  'all', 'beer'
]

const Liquor = () => {
  return (
    <>
      <NowSearch
        categoryList={categoryList}
        type={LIQOR}
      />
    </>
  )
}

export default Liquor
