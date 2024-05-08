import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BackdropLoader from '../Layouts/BackdropLoader';
import MetaData from '../Layouts/MetaData';
import { useAlert } from 'react-alert';
import { REMOVE_APPLICATION_DETAILS, UPDATE_APPLICATION_STATUS_RESET } from '../../constants/sellerConstants';
import { clearErrors, getApplicationDetails, updateStatus } from '../../actions/sellerActions';

const UpdataApplication = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();


    const { loading, application, error } = useSelector(state => state.applicationDelails);
    const { isUpdated, error: updateError, loading: updateLoading } = useSelector((state) => state.applicationStatus);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [owner, setOwner] = useState("");
    const [gst, setGst] = useState("");
    const [contact, setContact] = useState("");
    const [type, setType] = useState("");
    const [address, setAdderss] = useState("");
    const [location, setLocation] = useState("");
    const [oldImages, setOldImages] = useState([]);
    const [status, setStatus] = useState("");

    const applicationId = params.id;

    const updateStatusSubmitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.set("status", status);

        dispatch(updateStatus(applicationId, formData));
    }

    useEffect(() => {
        if (application && application._id !== applicationId) {
            dispatch(getApplicationDetails(applicationId));
        } else {
            setName(application.name);
            setEmail(application.email);
            setOwner(application.owner);
            setGst(application.gst);
            setContact(application.contact);
            setType(application.type);
            setAdderss(application.address);
            setLocation(application.location);
            setOldImages(application.images);
            setStatus(application.status);

        }


        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors());
        }

        if(isUpdated){
            alert.success("User Updates Successfully");
            dispatch({ type: UPDATE_APPLICATION_STATUS_RESET });
            dispatch({ type: REMOVE_APPLICATION_DETAILS });
            navigate("/admin/users");
        }
    }, [dispatch, error, applicationId, application, alert,updateError, navigate, isUpdated])


    return (
        <>
            <MetaData title="Admin: Update Product | Flipkart" />

            {loading && <BackdropLoader />}

            {updateLoading && <BackdropLoader />}

            <form encType="multipart/form-data" onSubmit={updateStatusSubmitHandler} className="flex flex-col sm:flex-row bg-white rounded-lg shadow p-4" id="mainform">

                <div className="flex flex-col gap-3 m-2 sm:w-1/2">
                    <TextField
                        label="Business Name"
                        variant="outlined"
                        size="small"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Business Email"
                        variant="outlined"
                        size="small"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Business Owner"
                        variant="outlined"
                        size="small"
                        required
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <div className="flex justify-between">
                        <TextField
                            label="GST Number"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            value={gst}
                            onChange={(e) => setGst(e.target.value)}
                        />
                        <TextField
                            label="Contact Number"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <TextField
                        label="Business Type"
                        variant="outlined"
                        size="small"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Status"
                        select
                        fullWidth
                        variant="outlined"
                        required
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <MenuItem value={"Processing"}>Processing</MenuItem>
                        <MenuItem value={"active"}>Active</MenuItem>
                        <MenuItem value={"dismissed"}>Dismissed</MenuItem>
                    </TextField>

                    <TextField
                        label="Business Address"
                        variant="outlined"
                        size="small"
                        required
                        value={address}
                        onChange={(e) => setAdderss(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="Business Location"
                        variant="outlined"
                        size="small"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                </div>

                <div className="flex flex-col gap-2 m-2 sm:w-1/2">

                    <h2 className="font-medium">ID Images</h2>
                    <div className="flex gap-2 overflow-x-auto h-32 border rounded">
                        {oldImages && oldImages.map((image, i) => (
                                <img draggable="false" src={image.url} alt="Product" key={i} className="w-full h-full object-contain" />
                            ))}
                    </div>

                    <div className="flex justify-end">
                        <input form="mainform" type="submit" className="bg-primary-orange uppercase w-1/3 p-3 text-white font-medium rounded shadow hover:shadow-lg cursor-pointer" value="Update" />
                    </div>

                </div>

            </form>

        </>
    )
}

export default UpdataApplication
