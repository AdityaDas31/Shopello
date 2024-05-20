import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';
import Actions from './Actions';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';
import { clearErrors, getAllApplication } from '../../actions/sellerActions';
import { useDispatch, useSelector } from 'react-redux';

const SellerApplyTable = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, applications, error } = useSelector((state) => state.applications);

    useEffect(()=>{
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllApplication());
    },[dispatch, error, alert])

    const columns = [
        {
            field: "id",
            headerName: "Application ID",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "name",
            headerName: "Business Name",
            minWidth: 200,
            flex: 0.1,
            renderCell: (params) => {
                return (
                    <div className="flex items-center gap-2">
                        {/* <div className="w-10 h-10 rounded-full">
                            <img draggable="false" src={params.row.image} alt={params.row.name} className="w-full h-full rounded-full object-cover" />
                        </div> */}
                        {params.row.name}
                    </div>
                )
            },
        },
        {
            field: "email",
            headerName: "Business Email",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "owner",
            headerName: "Business Owner",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "gst",
            headerName: "GST No.",
            minWidth: 100,
            flex: 1,
        },
        {
            field: "contact",
            headerName: "Business Contact",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "type",
            headerName: "Business Type",
            minWidth: 100,
            flex: 0.1,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 100,
            flex: 0.1,
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
                        editRoute={"seller"}
                        // deleteHandler={deleteProductHandler}
                        id={params.row.id}
                    />
                );
            },
        },
    ];

    const rows = [];

    applications && applications.forEach((item) => {
        rows.unshift({
            id: item._id,
            name: item.name,
            email: item.email,
            owner: item.owner,
            gst: item.gst,
            contact: item.contact,
            type: item.type,
            status: item.status

        })
    })

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
    )
}

export default SellerApplyTable
