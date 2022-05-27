import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import DeleteProductModal from './DeleteProductModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {

    const [deleteProduct, setdeleteProduct] = useState(null);

    const { data: allproducts, isLoading, refetch } = useQuery('productsall', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/parts`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div class="overflow-x-auto bg-slate-200 rounded-xl mb-5">
                <table class="table table-zebra lg:w-11/12  md:mx-10 my-10 mx-auto custom_shadow mb-10 rounded-xl w-full "
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproducts.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                setdeleteProduct={setdeleteProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteProduct && <DeleteProductModal setdeleteProduct={setdeleteProduct} refetch={refetch} deleteProduct={deleteProduct}></DeleteProductModal>}
        </div>
    );
};

export default ManageProducts;