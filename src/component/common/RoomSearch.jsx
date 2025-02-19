import React , {useEffect , useState} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import ApiService from "../../service/ApiService";


const RoomSearch = ({handleSearchResult}) => {

    const [startDate , setStartDate] = useState(null);
    const [endDate , setEndDate] = useState(null);
    const [roomType , setRoomType] = useState('');
    const [roomTypes , setRoomTypes] = useState([]);
    const [error , setError] = useState('');

    useEffect( () => {
        const fetchRoomTypes = async  () => {

            try{
                   const types  = await ApiService.getRoomTypes();
                   setRoomTypes(types);
            }catch(err){
                console.log(err.message);
                
            }
        }
        fetchRoomTypes();
    },[])
    

    const showError = (message , timeOut = 5000) => {
        setError(message);
        setTimeout( () => {
            setError('');
        },timeOut)
    }


    const handleInternalSearch = async  () => {
        if(!startDate || !endDate || !roomType){
             showError("Please Select all fields");
             return false;
        }

    try{
          const formattedStartDate = startDate ? startDate.toISOString().split('T')[0]: null;
          const formattedEndDate = endDate ? endDate.toISOString().split('T')[0]: null;

          const response = await ApiService.getAvailableRoomsByDateAndType( formattedStartDate , formattedEndDate, roomType);

          if(response.setStatusCode === 200){
            if(response.roomList.length === 0){
                showError("Room is not currently Available for the room type and selected date range");
                return;
            }

            handleSearchResult(response.roomList);
            setError('');
          }

    }catch(err){
           showError(err.response.date.message)
    }
}


    return (
        <section>
          <div className="search-container">
            <div className="search-field">
              <label>Check-in Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Check-in Date"
              />
            </div>
            <div className="search-field">
              <label>Check-out Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Check-out Date"
              />
            </div>
    
            <div className="search-field">
              <label>Room Type</label>
              <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option disabled value="">
                  Select Room Type
                </option>
                {roomTypes.map((roomType) => (
                  <option key={roomType} value={roomType}>
                    {roomType}
                  </option>
                ))}
              </select>
            </div>
            <button className="home-search-button" onClick={handleInternalSearch}>
              Search Rooms
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </section>
      );

}

export default RoomSearch; 