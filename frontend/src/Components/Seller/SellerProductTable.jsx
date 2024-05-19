import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';
import { clearErrors, getSellerProducts } from '../../actions/productActions';
import Rating from '@mui/material/Rating';
// import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { useDispatch, useSelector } from 'react-redux';

const SellerProductTable = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {  products, error, loading } = useSelector((state) => state.sellerProducts);


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getSellerProducts());
    }, [dispatch, error, alert]);

    const columns = [
        {
            field: "id",
            headerName: "Product ID",
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 200,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img draggable="false" src={params.row.image} alt={params.row.name} className="w-full h-full rounded-full object-cover" />
                        </div>
                        {params.row.name}
                    </div>
                )
            },
        },
        {
            field: "category",
            headerName: "Category",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "stock",
            headerName: "Stock",
            type: "number",
            headerAlign: "left",
            align: "left",
            minWidth: 70,
            flex: 0.1,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.stock < 10 ? (
                                <span className="font-medium text-red-700 rounded-full bg-red-200 p-1 w-6 h-6 flex items-center justify-center">{params.row.stock}</span>
                            ) : (
                                <span className="">{params.row.stock}</span>
                            )
                        }
                    </>
                )
            },
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            minWidth: 100,
            headerAlign: "left",
            align: "left",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <span>₹{params.row.price}</span>
                );
            },
        },
        {
            field: "cprice",
            headerName: "Cutted Price",
            type: "number",
            minWidth: 100,
            headerAlign: "left",
            align: "left",
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <span>₹{params.row.cprice}</span>
                );
            },
        },
        {
            field: "rating",
            headerName: "Rating",
            type: "number",
            minWidth: 100,
            flex: 0.3,
            align: "left",
            headerAlign: "left",
            renderCell: (params) => {
                return <Rating readOnly value={params.row.rating} size="small" precision={0.5} />
            }
        },
    ];

    const rows = products.map((product) => ({
        id: product._id,
        name: product.name,
        image: product.images[0].url,
        category: product.category,
        stock: product.stock,
        price: product.price,
        cprice: product.cuttedPrice,
        rating: product.ratings,

    }));

    // products && products.forEach((item) => {
    //     rows.unshift({
    //         id: item._id,
    //         name: item.name,
    //         image: item.images[0].url,
    //         category: item.category,
    //         stock: item.stock,
    //         price: item.price,
    //         cprice: item.cuttedPrice,
    //         rating: item.ratings,
    //         isApproved: item.approveStatus,
    //         isAvailable: item.availableStatus,
    //     });
    // });


    return (
        <>
            <MetaData title="Admin Products | Flipkart" />

            {loading && <BackdropLoader />}

            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium uppercase">products</h1>
                <Link to="/seller/new_product" className="py-2 px-4 rounded shadow font-medium text-white bg-primary-blue hover:shadow-lg">New Product</Link>
            </div>
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

export default SellerProductTable