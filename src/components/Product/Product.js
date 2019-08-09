import React from 'react';
import '../Product/Product.css'
import { Link } from 'react-router-dom';

function product(props){
    return (
        <article className="card product-item">
                    <header className="card__header">
                        <h1 className="product__title">
                        </h1>
                    </header>
                    <div className="card__image">
                        <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg"></img>
                        {/* <img src="<%= product.imageUrl %>" alt="<%= product.title %>"> */}
                    </div>
                    <div class="card__content">
                        <h2 class="product__price">{ props.title }</h2>
                        <p class="product__description">
                        { props.description }
                        </p>
                    </div>
                    <div class="card__actions">
                        <Link to={`/products/${props.id}`} className="btn btn-outline-success">Детали</Link>
                        {/* <% if (authenticated) { %>
                    <form action="cart/" method="post">
                        <input type="hidden" name="productId" value="<%= product._id %>">
                        <input type="hidden" value="<%= csrfToken %>" name="_csrf">
                        <input type="submit" class="btn btn-outline-success" value="В корзину">
                    </form>
                    <% } %> */}
                    </div>
                </article>
        // <article className={ cardProductItem }>
        //         <header class="card__header">
        //             <h1 class="product__title">
        //                 { props.name }
        //             </h1>
        //         </header>
        //         <div className="card__image">
        //             <img src="<%= product.imageUrl %>" alt="<%= product.title %>"></img>
        //         </div>
        //         <div className="card__content">
        //             <h2 class="product__price">$
        //                 { props.price }
        //             </h2>
        //             <p className="product__description">
        //                 { props.description }
        //             </p>
        //         </div>
        //         <div className="card__actions">
        //             <Link to={`/products/${props.id}`} className="btn btn-outline-success">Детали</Link>
        //             {/* <% if (authenticated) { %>
        //             <form action="cart/" method="post">
        //                 <input type="hidden" name="productId" value="<%= product._id %>">
        //                 <input type="hidden" value="<%= csrfToken %>" name="_csrf">
        //                 <input type="submit" className="btn btn-outline-success" value="В корзину">
        //             </form>
        //             <% } %> */}
        //         </div>
        //     </article>
    )
}


export default product;