import React from 'react'
import { productData } from '../itemsData/productsData' 
import BuildingItems from './BuildingNeedsFolder/BuildingItems'
import Footer from './Footer'

function Building() {
  return (
    <><div className='backGround'>
      <h1>Building & Construction</h1>
      <div style={{ margin: '20px 25px' }} id='Bricks'>
        <h2 className='shopSideHeading'>Bricks</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Bricks") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div style={{ margin: '20px 25px' }} id='Cement'>
        <h2 className='shopSideHeading'>Cement</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Cement") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div style={{ margin: '20px 25px' }} id='Iron'>
        <h2 className='shopSideHeading'>Iron</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Iron") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div style={{ margin: '20px 25px' }} id='Woods'>
        <h2 className='shopSideHeading'>Woods</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Woods") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div style={{ margin: '20px 25px' }} id='CrushedStone'>
        <h2 className='shopSideHeading'>Crushed stone</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Crushed stone") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
      <div style={{ margin: '20px 25px' }} id='Sand'>
        <h2 className='shopSideHeading'>Sand</h2>
        <div className='allItems'>
          {productData.map((i) => {
            if (i.category === "Sand") {
              return <BuildingItems id={i.id} key={i.id} itemname={i.itemname} imgUrl={i.imgUrl} price={i.price} oldprice={i.oldprice} offer={i.offer} />
            } else {
              return null
            }
          })}
        </div>
      </div>
    </div><Footer /></>
  )
}

export default Building

