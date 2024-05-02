import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormSidebar from './FormSlidebar';
import { useAlert } from 'react-alert';
import Profile from '../../images/Profile.png';
import BackdropLoader from '../Layouts/BackdropLoader';
import MetaData from '../Layouts/MetaData';
import { APPLY_SELLER_RESET } from '../../constants/sellerConstants';
import { clearErrors, applyForSelling } from '../../actions/sellerActions';

const SellerApplyForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const { loading, success, error } = useSelector((state) => state.newSeller);

   
    const [name, setName] = useState("");
    const[email,setEmail] = useState('');
    const[owner, setOwner] = useState("");
    const[gst, setGst] = useState("");
    const[contact, setContact] = useState("");
    const[type, setType] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const handleSellerImageChange = (e) =>{
        const files = Array.from(e.target.files);
        setImages([]);
        setImagesPreview([]);

        files.forEach((file) =>{
            const reader = new FileReader()
            reader.onload = () =>{
                if(reader.readyState === 2){
                    setImagesPreview((oldImages) => [...oldImages, reader.result]);
                    setImages((oldImages) => [...oldImages, reader.result]);
                }
            }
            reader.readAsDataURL(file);
        })
    }

    const applySellerHandler = (e) =>{
        e.preventDefault();
        const formData = new  FormData();

        formData.set("name", name);
        formData.set("email", email);
        formData.set("owner", owner);
        formData.set("gst", gst);
        formData.set("contact", contact);
        formData.set("type", type);

        images.forEach((image) => {
            formData.append("images", image)
        });

        dispatch(applyForSelling(formData));


    }

    useEffect(() =>{
        if(error){
            alert.error(error);
            dispatch(clearErrors);
        }
        if(success){
            alert.success("Applied Successfully");
            dispatch({ type: APPLY_SELLER_RESET });
            navigate('/')
        }
    }, [dispatch, error, success, navigate, alert])

    return (
        <>
            <MetaData title="Register | Flipkart" />

            {loading && <BackdropLoader />}

            <main className="w-full mt-12 sm:pt-20 sm:mt-0">

                {/* <!-- row --> */}
                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">

                    <FormSidebar
                        title="Looks like you want to become our seller partner"
                        tag="Apply  for the seller program "
                    />

                    {/* <!-- signup column --> */}
                    <div className="flex-1 overflow-hidden">

                        {/* <!-- personal info procedure container --> */}
                        <form
                            onSubmit={applySellerHandler}
                            encType="multipart/form-data"
                            className="p-5 sm:p-10"
                        >
                            <div className="flex flex-col gap-4 items-start">

                                {/* <!-- input container column --> */}
                                <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                                    <TextField
                                        fullWidth
                                        id="business-name"
                                        label="Business Name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Business Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="owner"
                                        label="Business Owner"
                                        name="owner"
                                        value={owner}
                                        onChange={(e) => setOwner(e.target.value)}
                                        // onChange={handleDataChange}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="gst"
                                        label="GST Number"
                                        name="gst"
                                        value={gst}
                                        onChange={(e) => setGst(e.target.value)}
                                        // onChange={handleDataChange}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="number"
                                        label="Contact Number"
                                        name="contact"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        // onChange={handleDataChange}
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        id="product"
                                        label="Product Type"
                                        name="type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        // onChange={handleDataChange}
                                        required
                                    />
                                </div>
                                {/* <!-- input container column --> */}

                                {/* <!-- gender input --> */}
                                {/* <div className="flex gap-4 items-center">
                                    <h2 className="text-md">Your Gender :</h2>
                                    <div className="flex items-center gap-6" id="radioInput">
                                        <RadioGroup
                                            row
                                            aria-labelledby="radio-buttons-group-label"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel name="gender" value="male" onChange={handleDataChange} control={<Radio required />} label="Male" />
                                            <FormControlLabel name="gender" value="female" onChange={handleDataChange} control={<Radio required />} label="Female" />
                                        </RadioGroup>
                                    </div>
                                </div> */}
                                {/* <!-- gender input --> */}

                                {/* <!-- input container column --> */}
                                {/* <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">
                                    <TextField
                                        fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        // value={password}
                                        // onChange={handleDataChange}
                                        required
                                    />
                                </div> */}
                                {/* <!-- input container column --> */}
                                <div className="flex gap-2 overflow-x-auto h-32 border rounded">
                                    {imagesPreview.map((image, i) => (
                                        <img draggable="false" src={image} alt="Product" key={i} className="w-full h-full object-contain" />
                                    ))}
                                </div>

                                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">
                                    {/* <Avatar
                                        alt="Avatar Preview"
                                        src={avatarPreview}
                                        sx={{ width: 56, height: 56 }}
                                    /> */}
                                    <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white w-full py-2 px-2.5 shadow hover:shadow-lg">
                                        <input
                                            type="file"
                                            name="images"
                                            accept="image/*"
                                            multiple
                                            onChange={handleSellerImageChange}
                                            className="hidden"
                                        />
                                        Choose File
                                    </label>
                                </div>
                                <button type="submit" className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium">Apply</button>
                            </div>

                        </form>
                        {/* <!-- personal info procedure container --> */}

                    </div>
                    {/* <!-- signup column --> */}
                </div>
                {/* <!-- row --> */}

            </main>


        </>
    )
}

export default SellerApplyForm
