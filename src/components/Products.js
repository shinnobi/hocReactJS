
import React, {Component} from 'react'
import { NavLink,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail'

class Products extends Component {
  render(){
    var products = [{
      id: 1,
      slug: 'iphone-X',
      name:'iphone X',
      price : 45000
    },
    {id: 2,
      slug: 'samsung-IX',
    name:'SamSung IX',
    price : 55000
  },
  {id: 3,
    slug: 'iphone-XI',
    name:'iphone XI',
    price : 66000
  },]
  var {match} = this.props
  var url = match.url
  var result = products.map((product,index)=>{
    return (
      <NavLink to={`${url}/${product.slug}`} key ={index}>
        <li className="list-group-item" key ={index}>{product.id} - {product.name} - {product.price}</li>
      </NavLink>
    )
  })
    return (
      <div>
          <h1>Đây là trang Products</h1>

          <div className = "container">
       <div className= "row">
         <ul className="list-group">
          {result}
         </ul>
       </div>
      <div className="row">
          <Route path= "/products/:slug" component={ProductDetail}/>

      </div>
          </div>
      </div>
    );
  }
}

export default Products;
