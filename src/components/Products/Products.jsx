import 'boxicons'
import { ProductsData } from '../../data/Products'
import styles from './styles.module.scss'

function Products () {
  return (
    <div className={styles.products}>
      {ProductsData.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>
              {product.name} - ${product.price}
            </p>
            <button onClick={() => console.log(product)}>
              Add to cart <box-icon type="solid" name="cart-add"></box-icon>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products