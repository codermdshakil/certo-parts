import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrderRow = ({ manageOrder, index, refetch, setDeleteOrder }) => {

    const navigate = useNavigate();
    const { _id, productName, userName, status, phone } = manageOrder;

    const newStatus = { status: 'Shipped' }
    const handleStatus = id => {
        fetch(`https://secret-reaches-23415.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken')
                    signOut(auth);
                    return navigate('/');
                }
                return res.json();
            })
            .then(data => {
                refetch()
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-medium'>{userName}</td>
            <td className='font-medium'>{phone}</td>
            <td className='text-cyan-500 font-medium'>{productName}</td>
            <td>{status ? <button onClick={() => handleStatus(_id)} className='btn btn-xs border-0 bg-green-500 text-white'>{status === 'Shipped' ? <button className='btn btn-xs border-0  bg-blue-500 text-white'>{status}</button> : <p>{status}</p>}</button> : <p className='text-warning font-medium'>UnPaid</p>}</td>
            <td>
                {status ? " " :
                    <button onClick={() => setDeleteOrder(manageOrder)}>
                        <label setDeleteOrder={setDeleteOrder} htmlFor="orderDeleteModel" className="btn btn-sm border-0 bg-red-300 text-red-500  modal-button"><FontAwesomeIcon icon={faTrashCan} />
                        </label>
                    </button>
                }
            </td>
        </tr>
    );
};

export default ManageOrderRow;