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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
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
            {deleteProduct && <DeleteProductModal setdeleteProduct={setdeleteProduct} refetch={refetch} deleteProduct={deleteProduct}></DeleteProductModal> }
        </div>
    );
};

export default ManageProducts;