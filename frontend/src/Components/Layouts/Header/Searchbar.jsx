import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
// import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import { MdSettingsVoice } from "react-icons/md";
// import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Mic.css';

const Searchbar = () => {
    const [keyword, setKeyword] = useState("");
    const [isListening, setIsListening] = useState(false);
    // const [audioContext, setAudioContext] = useState(null);

    // const navigate = useNavigate();

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-IN';

        recognition.onstart = () => {
            setIsListening(true);
            document.getElementById('search-input').classList.add('listening');
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setKeyword(transcript);
        };

        recognition.onend = () => {
            setIsListening(false);
            document.getElementById('search-input').classList.remove('listening');
        };

        recognition.start();

    }

    const handleSubmit = (e) => { }

    useEffect(() => {
        if(isListening){
            startListening();
        }
    }, [isListening]);

    return (
        <form onSubmit={handleSubmit} className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Search for products, brands and more" />
            <button type="button" id="search-input" className="text-primary-blue mx-2" onClick={() => setIsListening(!isListening)}>{!isListening? <MicIcon /> : <MdSettingsVoice className='text-primary-green' size={20}/>} </button>
            <button type="submit" className="text-primary-blue"><SearchIcon /></button>
        </form>
    )
}

export default Searchbar