import React from 'react'
import Link from 'next/link'

export default class Products {
  render(){
    
  return (
    <div>
      <ul>
        {Products.map((product, index) => {
          return (
            <li key={index} className={styles.items}>
              <Link href={product.path}>
                <img src={product.image} alt="product image" />
              </Link>
              <div className={styles.slider_costbox}>
                <h3>{product.cost}</h3>
                <a href="" className={styles.cart}>
                  <img src="/images/back.png" />
                  <i className="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
  }
  
}