// import AiUserCard from "./components/userCard/AiUserCard";
// import UserCard from "./components/userCard/UserCard";
// import QrCode from "./components/qrCode/QrCode";
// import BMI from "./components/BMI/BMI";
// import CurrencyConverter from "./components/currency/CurrencyConverter";
// import Password from "./components/password/Password";
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/home/Home";
// import SlickTwo from "./components/Carousel/SlickTwo";
// import CarouselSlick from "./components/Carousel/CarouselSlick";
// // import DarkMode from "./components/DarkMode/DarkMode";

// export default function App() {
//   return (
//     <div className="w-screen">
//       <Home />
//       <Routes>
//         <Route path="usercard1" element={<UserCard />} />
//         <Route path="bmi" element={<BMI />} />
//         <Route path="carousel1" element={<CarouselSlick />} />
//         <Route path="carousel2" element={<SlickTwo />} />
//         <Route path="password" element={<Password />} />
//         <Route path="qrCode" element={<QrCode />} />
//         <Route path="currency" element={<CurrencyConverter />} />
//         <Route path="usercard2" element={<AiUserCard />} />


//         {/* <UserCard /> */}
//         {/* <AiUserCard />  */}
//         {/* <QrCode /> */}
//         {/* <BMI /> */}
//         {/* <CurrencyConverter /> */}
//         {/* <Password /> */}
//         {/* <DarkMode /> */}
//         {/* <CarouselSlick /> */}
//         {/* <SlickTwo /> */}
//       </Routes>
//     </div>
//   );
// }


import AiUserCard from "./components/userCard/AiUserCard";
import UserCard from "./components/userCard/UserCard";
import QrCode from "./components/qrCode/QrCode";
import BMI from "./components/BMI/BMI";
import CurrencyConverter from "./components/currency/CurrencyConverter";
import Password from "./components/password/Password";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SlickTwo from "./components/Carousel/SlickTwo";
import CarouselSlick from "./components/Carousel/CarouselSlick";
// import DarkMode from "./components/DarkMode/DarkMode";

export default function App() {
  return (
    <div className="w-screen">
      <Home />
      <Routes>
        <Route path="usercard1" element={<UserCard />} />
        <Route path="bmi" element={<BMI />} />
        <Route path="carousel1" element={<CarouselSlick />} />
        <Route path="carousel2" element={<SlickTwo />} />
        <Route path="password" element={<Password />} />
        <Route path="qrCode" element={<QrCode />} />
        <Route path="currency" element={<CurrencyConverter />} />
        <Route path="usercard2" element={<AiUserCard />} />


        {/* <UserCard /> */}
        {/* <AiUserCard />  */}
        {/* <QrCode /> */}
        {/* <BMI /> */}
        {/* <CurrencyConverter /> */}
        {/* <Password /> */}
        {/* <DarkMode /> */}
        {/* <CarouselSlick /> */}
        {/* <SlickTwo /> */}
      </Routes>
    </div>
  );
}
