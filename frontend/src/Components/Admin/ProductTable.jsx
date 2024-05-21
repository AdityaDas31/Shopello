import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import { useAlert } from "react-alert";
import { Link, useNavigate } from 'react-router-dom';
import { clearErrors, getAdminProduct, approveProduct, availableProduct } from '../../actions/productActions';
import Rating from '@mui/material/Rating';
// import { DELETE_PRODUCT_RESET } from '../../constants/productConstants';
import Actions from './Actions';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_APPROVE_RESET, PRODUCT_AVAILABLE_RESET } from '../../constants/productConstants'

const ProductTable = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    // const { enqueueSnackbar } = useSnackbar();

    const { products, error } = useSelector((state) => state.products);
    const { error: approveError, isApproved, loading, isAvailable } = useSelector((state) => state.product);
    // const { loading, isDeleted, error: deleteError } = useSelector((state) => state.product);

    const approveProductHandler = (id) => {
        dispatch(approveProduct(id));
        window.location.reload();
    }

    const availableProductHandler = (id) => {
        dispatch(availableProduct(id));
        window.location.reload();
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (approveError) {
            alert.error(approveError);
            dispatch(clearErrors);
        }

        if (isApproved) {
            alert.success("Product Approve Successfully");
            navigate("/admin/products");
            dispatch({ type: PRODUCT_APPROVE_RESET });

        }

        if (isAvailable) {
            alert.success("Product Available Successfully");
            navigate("/admin/products");
            dispatch({ type: PRODUCT_AVAILABLE_RESET });

        }

        dispatch(getAdminProduct());
    }, [dispatch, error, alert, isApproved, navigate, approveError, isAvailable]);





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
                    <span>₹{params.row.price.toLocaleString()}</span>
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
                    <span>₹{params.row.cprice.toLocaleString()}</span>
                );
            },
        },
        {
            field: "rating",
            headerName: "Rating",
            type: "number",
            minWidth: 100,
            flex: 0.1,
            align: "left",
            headerAlign: "left",
            renderCell: (params) => {
                return <Rating readOnly value={params.row.rating} size="small" precision={0.5} />
            }
        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 100,
            flex: 0.3,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Actions
                        editRoute={"product"}
                        // deleteHandler={deleteProductHandler}
                        id={params.row.id}
                    />
                );
            },
        },
        {
            field: "activity",
            headerName: "Activity",
            minWidth: 100,
            flex: 0.3,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className='flex justify-between items-center gap-3'>
                        {/* <button className='text-red-600 hover:bg-red-200 p-1 rounded-full bg-red-100' onClick={() => approveProductHandler(params.id)}
                        >
                        {params.row.isApproved ? <DoneIcon fontSize='medium' /> : <CloseIcon fontSize='medium' />}
                        </button> */}

                        {
                            params.row.isApproved ?
                                <Tooltip title="Product Approved" placement="top-start" arrow>
                                    <button className='text-green-600 hover:bg-green-200 p-1 rounded-full bg-green-100' onClick={() => approveProductHandler(params.id)}><DoneIcon fontSize='medium' /></button>
                                </Tooltip> :
                                <Tooltip title="Product Not Approved" placement="top-start" arrow>
                                    <button className='text-red-600 hover:bg-red-200 p-1 rounded-full bg-red-100' onClick={() => approveProductHandler(params.id)}><CloseIcon fontSize='medium' /></button>
                                </Tooltip>
                        }

                        {
                            params.row.isAvailable ?
                                <Tooltip title="Product Available" placement="top-start" arrow>
                                    <button className='text-green-600 hover:bg-green-200 p-1 rounded-full bg-green-100' onClick={() => availableProductHandler(params.id)}><ToggleOnIcon fontSize='medium' /></button>
                                </Tooltip> :
                                <Tooltip title="Product Available" placement="top-start" arrow>
                                    <button className='text-red-600 hover:bg-red-200 p-1 rounded-full bg-red-100' onClick={() => availableProductHandler(params.id)}><ToggleOffIcon fontSize='medium' /></button>
                                </Tooltip>
                        }

                        {/* <button className='text-red-600 hover:bg-red-200 p-1 rounded-full bg-red-100'><ToggleOffIcon fontSize='medium' /></button> */}
                    </div>
                );
            },
        },
    ];

    const rows = [];

    products && products.forEach((item) => {
        rows.unshift({
            id: item._id,
            name: item.name,
            image: item.images[0].url,
            category: item.category,
            stock: item.stock,
            price: item.price,
            cprice: item.cuttedPrice,
            rating: item.ratings,
            isApproved: item.approveStatus,
            isAvailable: item.availableStatus,
        });
    });

    return (
        <>
            <MetaData title="Admin Products | Shopello" />

            {loading && <BackdropLoader />}

            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium uppercase">products</h1>
                <Link to="/admin/new_product" className="py-2 px-4 rounded shadow font-medium text-white bg-primary-blue hover:shadow-lg">New Product</Link>
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
    );
};

export default ProductTable;