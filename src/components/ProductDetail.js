
import React, {Component} from 'react'

class ProductDetail extends Component {
  render(){
    var {match} = this.props
    console.log(match)
    return (
      <div>
          <h1>Đây là sản phẩm {match.params.slug}</h1>
      </div>
    );
  }
}

export default ProductDetail;
