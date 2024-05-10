import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { formatDate } from '../../utils/functions';
import MetaData from '../Layouts/MetaData';
// import BackdropLoader from '../Layouts/BackdropLoader';
import { clearErrors, getAllsellerOrders } from "../../actions/orderAction";

const SellerOrdersTable = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { orders, error } = useSelector((state) => state.sellerOrders);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllsellerOrders());
    }, [dispatch, error, alert]);

    

    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            minWidth: 200,
            flex: 1,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 150,
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.status === "Delivered" ? (
                                <span className="text-sm bg-green-100 p-1 px-2 font-medium rounded-full text-green-800">{params.row.status}</span>
                            ) : params.row.status === "Shipped" ? (
                                <span className="text-sm bg-yellow-100 p-1 px-2 font-medium rounded-full text-yellow-800">{params.row.status}</span>
                            ) : (
                                <span className="text-sm bg-purple-100 p-1 px-2 font-medium rounded-full text-purple-800">{params.row.status}</span>
                            )
                        }
                    </>
                )
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "amount",
            headerName: "Amount",
            type: "number",
            minWidth: 170,
            flex: 0.3,
            renderCell: (params) => {
                return (
                    <span>₹{params.row.amount.toLocaleString()}</span>
                );
            },
        },
        {
            field: "orderOn",
            headerName: "Order On",
            type: "Date",
            minWidth: 150,
            flex: 0.2,
        },
        // {
        //     field: "actions",
        //     headerName: "Actions",
        //     minWidth: 100,
        //     flex: 0.3,
        //     type: "number",
        //     sortable: false,
        //     renderCell: (params) => {
        //         return (
        //             <Actions editRoute={"order"} deleteHandler={deleteOrderHandler} id={params.row.id} />
        //         );
        //     },
        // },
    ];

    const rows = orders.map((order) => ({
        id: order._id,
        itemsQty: order.orderItems.length,
        amount: order.totalPrice,
        orderOn: formatDate(order.createdAt),
        status: order.orderStatus,
    }))

    // orders && orders.forEach((order) => {
    //     rows.unshift({
    //         id: order._id,
    //         itemsQty: order.orderItems.length,
    //         amount: order.totalPrice,
    //         orderOn: formatDate(order.createdAt),
    //         status: order.orderStatus,
    //     });
    // });
    return (
        <>
            <MetaData title="Admin Orders | Flipkart" />

            {/* {loading && <BackdropLoader />} */}

            <h1 className="text-lg font-medium uppercase">orders</h1>
            <div className="bg-white rounded-xl shadow-lg w-full" style={{ height: 470 }}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectIconOnClick
                    sx={{
                        boxShadow: 0,
                        border: 0,
                    }}
                />
            </div>
        </>
    )
}

export default SellerOrdersTable
