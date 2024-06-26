import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import { clearErrors, getAllUsers, deleteUser } from '../../actions/userActions';
import { DELETE_USER_RESET } from '../../constants/userConstants';
import Actions from './Actions';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

const UserTable = () => {

    const dispatch = useDispatch();
    // const { enqueueSnackbar } = useSnackbar();
    const alert = useAlert();
    const [searchQuery, setSearchQuery] = useState('');

    const { users, error } = useSelector((state) => state.users);
    const { loading, isDeleted, error: deleteError } = useSelector((state) => state.profile);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }
        if (isDeleted) {
            alert.success("User Deleted Successfully");
            dispatch({ type: DELETE_USER_RESET });
        }
        dispatch(getAllUsers());
    }, [dispatch, error, alert, deleteError, isDeleted]);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const columns = [
        {
            field: "name",
            headerName: "Name",
            minWidth: 200,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img draggable="false" src={params.row.avatar} alt={params.row.name} className="w-full h-full rounded-full object-cover" />
                        </div>
                        {params.row.name}
                    </div>
                )
            },
        },
        {
            field: "email",
            headerName: "Email",
            minWidth: 200,
            flex: 0.2,
        },
        {
            field: "role",
            headerName: "Role",
            minWidth: 100,
            flex: 0.2,
            renderCell: (params) => {
                return (
                    <>
                        {
                            params.row.role === "admin" ? (
                                <span className="text-sm bg-green-100 p-1 px-2 font-medium rounded-full text-green-800 capitalize">{params.row.role}</span>
                            ) : params.row.role === "seller" ? (
                                <span className="text-sm bg-blue-200 p-1 px-2 font-medium rounded-full text-blue-800 capitalize">{params.row.role}</span>
                            ) : (
                                <span className="text-sm bg-purple-100 p-1 px-2 font-medium rounded-full text-purple-800 capitalize">{params.row.role}</span>
                            )
                        }
                    </>
                )
            },
        },
        {
            field: "registeredOn",
            headerName: "Registered On",
            type: "Date",
            minWidth: 150,
            flex: 0.2,
        },
        {
            field: "actions",
            headerName: "Actions",
            minWidth: 200,
            flex: 0.3,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Actions editRoute={"user"} deleteHandler={deleteUserHandler} id={params.row.id} name={params.row.name} />
                );
            },
        },
    ];


    const rows = searchQuery ? (
        filteredUsers.map((item) => ({
            id: item._id,
            name: item.name,
            avatar: item.avatar.url,
            email: item.email,
            role: item.role,
            registeredOn: new Date(item.createdAt).toISOString().substring(0, 10),
        }))
    ) : (
        []
    );

    !searchQuery && users && users.forEach((item) => {
        rows.unshift({
            id: item._id,
            name: item.name,
            avatar: item.avatar.url,
            email: item.email,
            role: item.role,
            registeredOn: new Date(item.createdAt).toISOString().substring(0, 10),
        });
    });

    return (
        <>
            <MetaData title="Admin Users | Shopello" />

            {loading && <BackdropLoader />}

            {/* <h1 className="text-lg font-medium uppercase">users</h1> */}
            <div className="flex justify-between items-center gap-2 sm:gap-12">
                <h1 className="text-lg font-medium uppercase">user</h1>
                <input type="text" placeholder="User Email" value={searchQuery} onChange={handleSearchChange}  className="outline-none border-0 rounded p-2 w-full shadow hover:shadow-lg" />
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

export default UserTable;