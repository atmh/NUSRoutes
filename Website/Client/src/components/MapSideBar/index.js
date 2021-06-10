import Customization from "./Customization/";
import InputSection from "./InputSection/";
import Routes from "./Routes/";
import { useState } from "react";

const MapSideBar = ({ routeRecommedations, setRoute, startAndEnd }) => {
  const [arrivalTime, setArrivalTime] = useState(false);
  const [distance, setDistance] = useState(false);
  const [differentService, setDifferentService] = useState(false);
  const [bfs, setBfs] = useState(false);
  const obj = new Date();
  let [hour, minute] = obj.toLocaleTimeString("it-IT").split(/:| /);
  let [ monthNow, dateNow, yearNow] = obj.toLocaleDateString("en-US").split("/");
  const today = obj.getDay();
  const [time, setTime] = useState(hour + minute);
  const [date, setDate] = useState(parseInt(dateNow));
  const [month, setMonth] = useState(parseInt(monthNow));
  const [year, setYear] = useState(parseInt(yearNow));
  const [isOpen, setIsOpen] = useState(false);
  const [day, setDay] = useState(today);

  return (
    <div>
      <InputSection startAndEnd={startAndEnd} time={time} date={date} month={month} year={year} day={day}/>
      <Customization
        setTime={setTime}
        setArrivalTime={setArrivalTime}
        setDistance={setDistance}
        setDifferentService={setDifferentService}
        setBfs={setBfs}
        setDate={setDate}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setMonth={setMonth}
        setYear={setYear}
        setDay={setDay}
      />
      <Routes routeRecommedations={routeRecommedations} setRoute={setRoute} isOpen={isOpen} arrivalTime={arrivalTime}
        distance={distance}
        differentService={differentService}
        bfs={bfs}
        />
    </div>
  );
};

export default MapSideBar;
