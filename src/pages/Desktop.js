import Featured from "../Component/Featured";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import ImageLayout from "../Component/ImageLayout";
import Navbar from "../Component/Navbar";
import Partners from "../Component/Partners";
import Provide from "../Component/Provide";
import Suggestions from "../Component/Suggestions";
import Support from "../Component/Support";
import UpcomingEvents from "../Component/UpcomingEvents";
import UpcomingProgrammes from "../Component/UpcomingProgrammes";

const Desktop = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Provide />
      <UpcomingProgrammes />
      <UpcomingEvents />
      <Suggestions />
      <Support />

      <Featured />
      <ImageLayout />
      <Partners />
      <Footer />
    </>
    // <div className="w-full relative bg-white h-[6473px] overflow-hidden text-left text-base text-darkolivegreen-100 font-inter">
    //   <div className=" mx-auto bg-white  h-[187px] overflow-hidden">
    //     <header className="w-[85%] mx-auto">

    //   <div className=" flex flex-row items-center justify-start gap-[50px] text-center text-[8px]">
    //       <div className="w-[100px] relative h-[100px] overflow-hidden shrink-0">
    //         <div className="absolute top-[calc(50%_-_45px)] left-[calc(50%_-_50px)] w-[100px] flex flex-col items-center justify-start gap-2.5">
    //           <img
    //             className="self-stretch relative max-w-full overflow-hidden h-[49px] shrink-0 object-cover"
    //             alt=""
    //             src="/image-8@2x.png"
    //           />
    //           <i className="w-[86px] relative flex font-semibold items-center justify-center">{`Nigeria Subsidiary of ESO Global Collaborative `}</i>
    //         </div>
    //       </div>
    //       <div className="w-[535px] relative rounded-3xs bg-lightgreen-300 h-10 text-left text-base text-gray">
    //         <img
    //           className="absolute top-[calc(50%_-_12px)] left-[491px] w-6 h-6 overflow-hidden"
    //           alt=""
    //           src="/actionsearch.svg"
    //         />
    //         <div className="absolute top-[8px] left-[20px] tracking-[0.5px] leading-[24px]">
    //           Search for Programmes and Events
    //         </div>
    //       </div>
    //     </div>

    //     <div className="  mx-auto flex flex-row items-center justify-start gap-[148px]">
    //       <div className="flex flex-row items-center justify-center gap-5">
    //         <div className="bg-darkolivegreen-100 flex flex-row items-center justify-center py-3 px-5 text-white">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             HOME
    //           </div>
    //         </div>
    //         <div className="w-0.5 relative bg-darkolivegreen-100 h-5" />
    //         <div className="flex flex-row items-center justify-center py-[8.5px] px-5 gap-5">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             OUR COMMUNITY
    //           </div>
    //           <img
    //             className="w-6 relative h-[23px] overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconarrow-drop-downoutlined.svg"
    //           />
    //         </div>
    //         <div className="w-0.5 relative bg-darkolivegreen-100 h-5" />
    //         <div className="flex flex-row items-center justify-center py-[8.5px] px-5 gap-5">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             PROGRAMMES AND EVENTS
    //           </div>
    //           <img
    //             className="w-6 relative h-[23px] overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconarrow-drop-downoutlined.svg"
    //           />
    //         </div>
    //         <div className="w-0.5 relative bg-darkolivegreen-100 h-5" />
    //         <div className="flex flex-row items-center justify-center py-3 px-5">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             ABOUT US
    //           </div>
    //         </div>
    //       </div>
    //       <div className="rounded-8xs border-darkolivegreen-100 border-[1px] border-solid flex flex-row items-center justify-center py-3 px-[50px]">
    //         <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //           SIGN IN
    //         </div>
    //       </div>
    //     </div>
    //     </header>

    //   </div>

    //   <div className="absolute top-[1168px] left-[431px] flex flex-col items-end justify-start">
    //     <div className="self-stretch h-[39px]" />
    //   </div>
    //   <div className="absolute top-[3437px] left-[calc(50%_-_620px)] w-[1240px] flex flex-col items-start justify-start gap-[30px] text-13xl">
    //     <div className="self-stretch flex flex-row items-center justify-center gap-[113px]">
    //       <div className="flex flex-row items-center justify-center gap-1.5">
    //         <div className="w-[454px] relative font-semibold flex items-center shrink-0">
    //           Featured Enterprise Support Organizations (ESOs)
    //         </div>
    //         <div className="w-[70px] relative bg-darkolivegreen-100 h-[5px] [transform:_rotate(-90deg)]" />
    //       </div>
    //       <div className="w-[662px] relative text-xs text-gray flex items-center shrink-0">
    //         Meet our curated group of trusted partners dedicated to empowering
    //         businesses like yours. These exceptional organizations offer a wide
    //         range of expertise, from strategic consulting to technical
    //         implementation, to help you achieve your goals. With their extensive
    //         experience and proven track record, our ESOs are committed to
    //         providing top-notch support and guidance every step of the way.
    //         Whether you're looking to drive innovation, improve efficiency, or
    //         scale your operations, our Featured ESOs are here to help you
    //         succeed
    //       </div>
    //     </div>

    //     <div className="self-stretch flex flex-row items-center justify-start gap-[36.3px] text-center text-base text-gray">
    //       <div className="w-[219px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-white border-darkolivegreen-200 border-[1px] border-solid box-border h-[197px] overflow-hidden shrink-0">
    //         <img
    //           className="absolute top-[30px] left-[calc(50%_-_68.5px)] w-[137px] h-[52px] object-cover"
    //           alt=""
    //           src="/image-6@2x.png"
    //         />
    //         <div className="absolute top-[97px] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px]">
    //           Bridge-Tailor Consulting
    //         </div>
    //         <div className="absolute top-[128px] left-[17px] flex flex-row items-center justify-start gap-1.5 text-left text-xs text-black">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlocation-onoutlined.svg"
    //           />
    //           <div className="w-[152px] relative flex items-center shrink-0">
    //             Netherlands – Amsterdam
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[219px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-white border-darkolivegreen-200 border-[1px] border-solid box-border h-[197px] overflow-hidden shrink-0">
    //         <img
    //           className="absolute top-[30px] left-[calc(50%_-_68.5px)] w-[137px] h-[52px] object-cover"
    //           alt=""
    //           src="/image-61@2x.png"
    //         />
    //         <div className="absolute top-[97px] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px]">
    //           Bridge-Tailor Consulting
    //         </div>
    //         <div className="absolute top-[128px] left-[17px] flex flex-row items-center justify-start gap-1.5 text-left text-xs text-black">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlocation-onoutlined.svg"
    //           />
    //           <div className="w-[152px] relative flex items-center shrink-0">
    //             Netherlands – Amsterdam
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[219px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-white border-darkolivegreen-200 border-[1px] border-solid box-border h-[197px] overflow-hidden shrink-0">
    //         <img
    //           className="absolute top-[30px] left-[calc(50%_-_68.5px)] w-[137px] h-[52px] object-cover"
    //           alt=""
    //           src="/image-62@2x.png"
    //         />
    //         <div className="absolute top-[97px] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px]">
    //           Bridge-Tailor Consulting
    //         </div>
    //         <div className="absolute top-[128px] left-[17px] flex flex-row items-center justify-start gap-1.5 text-left text-xs text-black">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlocation-onoutlined.svg"
    //           />
    //           <div className="w-[152px] relative flex items-center shrink-0">
    //             Netherlands – Amsterdam
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[219px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-white border-darkolivegreen-200 border-[1px] border-solid box-border h-[197px] overflow-hidden shrink-0">
    //         <img
    //           className="absolute top-[30px] left-[calc(50%_-_68.5px)] w-[137px] h-[52px] object-cover"
    //           alt=""
    //           src="/image-63@2x.png"
    //         />
    //         <div className="absolute top-[97px] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px]">
    //           Bridge-Tailor Consulting
    //         </div>
    //         <div className="absolute top-[128px] left-[17px] flex flex-row items-center justify-start gap-1.5 text-left text-xs text-black">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlocation-onoutlined.svg"
    //           />
    //           <div className="w-[152px] relative flex items-center shrink-0">
    //             Netherlands – Amsterdam
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[219px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-white border-darkolivegreen-200 border-[1px] border-solid box-border h-[197px] overflow-hidden shrink-0">
    //         <img
    //           className="absolute top-[30px] left-[calc(50%_-_68.5px)] w-[137px] h-[52px] object-cover"
    //           alt=""
    //           src="/image-6@2x.png"
    //         />
    //         <div className="absolute top-[97px] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px]">
    //           Bridge-Tailor Consulting
    //         </div>
    //         <div className="absolute top-[128px] left-[17px] flex flex-row items-center justify-start gap-1.5 text-left text-xs text-black">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlocation-onoutlined.svg"
    //           />
    //           <div className="w-[152px] relative flex items-center shrink-0">
    //             Netherlands – Amsterdam
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-[5852px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(49,_101,_65,_0.87),_#316541)] w-[1440px] h-[621px] overflow-hidden text-white">
    //     <div className="absolute top-[128px] left-[575px] w-[252px] flex flex-col items-start justify-start gap-[30px]">
    //       <div className="self-stretch relative font-semibold">
    //         Get Involved
    //       </div>
    //       <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
    //         <div className="self-stretch relative">
    //           Enterprise Support Organizations
    //         </div>
    //         <div className="self-stretch relative">Businesses</div>
    //         <div className="self-stretch relative">Programmes</div>
    //         <div className="self-stretch relative">Events</div>
    //       </div>
    //     </div>
    //     <div className="absolute top-[128px] left-[927px] flex flex-col items-start justify-start gap-[30px]">
    //       <div className="self-stretch relative font-semibold">Contact Us</div>
    //       <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
    //         <div className="flex flex-row items-center justify-start gap-2.5">
    //           <img className="w-5 relative h-5" alt="" src="/frame-93.svg" />
    //           <div className="relative">
    //             No. 2834 Water Carington Drive, Egbeda, Lome
    //           </div>
    //         </div>
    //         <div className="flex flex-row items-center justify-start gap-2.5">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconmark-email-unreadoutlined.svg"
    //           />
    //           <div className="relative">info@esonigerialpy.org</div>
    //         </div>
    //         <div className="flex flex-row items-center justify-start gap-2.5">
    //           <img
    //             className="w-5 relative h-5 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconlanguageoutlined.svg"
    //           />
    //           <div className="relative">www.esonigeria.ng</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="absolute top-[105px] left-[100px] w-[282px] flex flex-col items-start justify-start gap-5">
    //       <img
    //         className="w-[250px] relative h-[130px] object-cover"
    //         alt=""
    //         src="/image-81@2x.png"
    //       />
    //       <div className="self-stretch relative">
    //         We are a collective of business professionals that bring values to
    //         your company with global scales experiences. Lorem ipsum dolor sit
    //         amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    //         ut labore et dolore magna aliqua. Ut enim ad minim veniam
    //       </div>
    //     </div>
    //     <div className="absolute top-[361px] left-[575px] flex flex-row items-center justify-center gap-[100px]">
    //       <div className="w-[252px] relative font-semibold flex items-center shrink-0">
    //         Connect with Us
    //       </div>
    //       <div className="flex flex-row items-center justify-start gap-[30px]">
    //         <img
    //           className="w-5 relative h-5 overflow-hidden shrink-0"
    //           alt=""
    //           src="/magex.svg"
    //         />
    //         <img
    //           className="w-5 relative h-5 overflow-hidden shrink-0"
    //           alt=""
    //           src="/icbaselinefacebook.svg"
    //         />
    //         <img
    //           className="w-5 relative h-5 overflow-hidden shrink-0"
    //           alt=""
    //           src="/mdilinkedin.svg"
    //         />
    //         <img
    //           className="w-5 relative h-5 overflow-hidden shrink-0"
    //           alt=""
    //           src="/mingcuteyoutubefill.svg"
    //         />
    //       </div>
    //     </div>
    //     <div className="absolute top-[582px] left-[calc(50%_-_157px)] flex flex-row items-center justify-start gap-2.5 text-xs">
    //       <img
    //         className="w-4 relative h-4 overflow-hidden shrink-0"
    //         alt=""
    //         src="/phcopyright.svg"
    //       />
    //       <div className="relative">
    //         2024 All Rights Reserved. Powered By ESO Nigeria
    //       </div>
    //     </div>
    //   </div>
    //   <img
    //     className="absolute top-[187px] left-[calc(50%_-_720px)] w-[1440px] h-[790px] overflow-hidden object-contain"
    //     alt=""
    //     src="/frame-82@2x.png"
    //   />
    //   <div className="absolute top-[1077px] left-[100px] w-[1240px] flex flex-col items-start justify-start gap-[50px] text-xs text-gray">
    //     <div className="w-[326px] flex flex-col items-start justify-start gap-3">
    //       <div className="self-stretch relative">
    //         Expert Solutions for Your Success
    //       </div>
    //       <div className="relative text-13xl font-semibold text-darkolivegreen-100">
    //         What We Provide
    //       </div>
    //     </div>
    //     <div className="self-stretch flex flex-row items-center justify-start gap-[65px] text-5xl text-darkolivegreen-100">
    //       <div className="w-[370px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[261px] overflow-hidden shrink-0">
    //         <div className="absolute top-[calc(50%_-_99.5px)] left-[calc(50%_-_136px)] w-[270px] flex flex-col items-start justify-start gap-6">
    //           <img
    //             className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
    //             alt=""
    //             src="/materialsymbolseventnote.svg"
    //           />
    //           <div className="self-stretch flex flex-col items-end justify-start gap-3">
    //             <div className="self-stretch relative font-semibold">
    //               Detailed Information
    //             </div>
    //             <div className="self-stretch relative text-base text-gray">
    //               We provide extensive information about each (ESOs) and its
    //               programmes, for you to make informed decisions
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[370px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[261px] overflow-hidden shrink-0">
    //         <div className="absolute top-[calc(50%_-_99.5px)] left-[calc(50%_-_136px)] w-[270px] flex flex-col items-start justify-start gap-6">
    //           <img
    //             className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
    //             alt=""
    //             src="/mdieventstar.svg"
    //           />
    //           <div className="self-stretch flex flex-col items-end justify-start gap-3">
    //             <div className="self-stretch relative font-semibold">
    //               Reliable Programmes
    //             </div>
    //             <div className="self-stretch relative text-base text-gray">
    //               All Enterprise support organizations (ESOs)and their
    //               programmes on this platform have been carefully verified
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[370px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[261px] overflow-hidden shrink-0">
    //         <div className="absolute top-[calc(50%_-_99.5px)] left-[calc(50%_-_144px)] flex flex-col items-start justify-start gap-6">
    //           <img
    //             className="w-[60px] relative h-[60px] overflow-hidden shrink-0"
    //             alt=""
    //             src="/materialsymbolseventupcoming.svg"
    //           />
    //           <div className="self-stretch flex flex-col items-end justify-start gap-3">
    //             <div className="w-[285px] relative font-semibold inline-block">
    //               Upcoming Programmes
    //             </div>
    //             <div className="w-[285px] relative text-base text-gray inline-block">
    //               Use our advanced search feature to find upcoming
    //               entrepreneurship events and programmes and sign-up for
    //               updates.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-[1492px] left-[-280px] rounded-[1000px] bg-lightgreen-100 w-[2000px] h-[2000px]" />
    //   <div className="absolute top-[1554px] left-[100px] flex flex-row items-end justify-start gap-[797px] text-xs text-gray">
    //     <div className="w-[326px] flex flex-col items-start justify-start gap-3">
    //       <div className="self-stretch relative">
    //         Expert Solutions for Your Success
    //       </div>
    //       <div className="relative text-13xl font-semibold text-darkolivegreen-100">
    //         Upcoming Programmes
    //       </div>
    //     </div>
    //     <div className="flex flex-row items-center justify-center gap-3 text-base text-darkolivegreen-100">
    //       <div className="relative font-medium">Explore All</div>
    //       <img
    //         className="w-6 relative h-6 overflow-hidden shrink-0"
    //         alt=""
    //         src="/iconnavigationarrowforward.svg"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute top-[1650px] left-[100px] flex flex-row items-center justify-start gap-6 text-gray">
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute top-[2185px] left-[calc(50%_-_174px)] rounded-8xs border-darkolivegreen-100 border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-8 text-xl">
    //     <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //       FIND MORE PROGRAMMES
    //     </div>
    //   </div>
    //   <div className="absolute top-[2282px] left-[100px] flex flex-row items-end justify-start gap-[797px] text-xs text-gray">
    //     <div className="w-[326px] flex flex-col items-start justify-start gap-3">
    //       <div className="self-stretch relative">
    //         Expert Solutions for Your Success
    //       </div>
    //       <div className="self-stretch relative text-13xl font-semibold text-darkolivegreen-100">
    //         Upcoming Events
    //       </div>
    //     </div>
    //     <div className="flex flex-row items-center justify-center gap-3 text-base text-darkolivegreen-100">
    //       <div className="relative font-medium">Explore All</div>
    //       <img
    //         className="w-6 relative h-6 overflow-hidden shrink-0"
    //         alt=""
    //         src="/iconnavigationarrowforward.svg"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute top-[2378px] left-[100px] flex flex-row items-center justify-start gap-6 text-gray">
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //     <div className="w-[340px] relative shadow-[0px_2px_6px_2px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-400 h-[475px] overflow-hidden shrink-0">
    //       <div className="absolute top-[219px] left-[12px] font-medium whitespace-pre-wrap flex items-center w-[198px]">
    //         Enterprise Africa Network Inaugural Cohort Fellowship Programme
    //       </div>
    //       <div className="absolute top-[288px] left-[12px] text-xs flex items-center w-[90px]">
    //         MSME Africa
    //       </div>
    //       <div className="absolute top-[315px] left-[12px] text-sm font-medium flex items-center w-[163px]">
    //         Started on: July 8, 2024
    //       </div>
    //       <div className="absolute top-[219px] left-[266px] flex flex-row items-start justify-start text-center text-3xs text-success-default">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#3cc13b] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 px-2">
    //           <div className="relative leading-[16px] font-medium">
    //             On-going
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[407px] left-[0px] bg-white w-[340px] h-[68px] overflow-hidden text-white">
    //         <div className="absolute top-[11px] left-[170px] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-4">
    //           <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //             VIEW DETAILS
    //           </div>
    //         </div>
    //         <b className="absolute top-[calc(50%_-_6px)] left-[12px] text-3xs flex text-darkolivegreen-100 items-center w-[134px]">
    //           Deadline: July 26, 2024
    //         </b>
    //       </div>
    //       <div className="absolute top-[380px] left-[12px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/left-icon.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">Months</div>
    //         </div>
    //       </div>
    //       <div className="absolute top-[380px] left-[90px] flex flex-row items-start justify-start text-center text-3xs text-darkolivegreen-100">
    //         <div className="rounded [background:linear-gradient(rgba(255,_255,_255,_0.9),_rgba(255,_255,_255,_0.9)),_#316541] border-success-light border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1">
    //           <img
    //             className="w-4 relative h-4 overflow-hidden shrink-0"
    //             alt=""
    //             src="/iconactionaccountcircle.svg"
    //           />
    //           <div className="relative leading-[16px] font-medium">
    //             In-Person and Virtual
    //           </div>
    //         </div>
    //       </div>
    //       <b className="absolute top-[315px] left-[234px] flex text-darkolivegreen-100 text-right items-center w-[94px]">
    //         Free
    //       </b>
    //       <img
    //         className="absolute top-[0px] left-[calc(50%_-_170px)] w-[340px] h-[207px] overflow-hidden object-cover"
    //         alt=""
    //         src="/frame-38@2x.png"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute top-[2913px] left-[calc(50%_-_174px)] rounded-8xs border-darkolivegreen-100 border-[1px] border-solid box-border w-[349px] h-[47px] flex flex-row items-center justify-center py-3 px-8 text-xl">
    //     <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //       FIND MORE EVENTS
    //     </div>
    //   </div>
    //   <div className="absolute top-[3020px] left-[100px] rounded-xl bg-lightgreen-400 w-[1240px] h-[317px] overflow-hidden text-xs">
    //     <div className="absolute top-[30px] left-[30px] text-13xl font-semibold flex items-center w-[326px]">
    //       Let's Personalize it
    //     </div>
    //     <div className="absolute top-[75px] left-[30px] text-black">
    //       Tell us what you're into and we'll suggest more
    //     </div>
    //     <div className="absolute top-[114px] left-[30px] flex flex-row items-center justify-start gap-3 text-center text-gray">
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Agriculture and Food
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">Business</div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Oil and Gas
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Information and Communication Technology
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-darkolivegreen-100 flex flex-row items-center justify-center py-2.5 px-5 text-white">
    //         <div className="relative leading-[16px] font-medium">
    //           Environment
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Supply Chain Services
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">Energy</div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">Energy</div>
    //       </div>
    //     </div>
    //     <div className="absolute top-[174px] left-[30px] flex flex-row items-center justify-start gap-3 text-center text-gray">
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Financial Services
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-darkolivegreen-100 border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5 text-white">
    //         <div className="relative leading-[16px] font-medium">
    //           Infrastructure and Facilities Development
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Water and Sanitation
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Pre-Revenue
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">
    //           Pre-Revenue
    //         </div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">Ideation</div>
    //       </div>
    //       <div className="rounded-xl bg-white border-gainsboro border-[1px] border-solid flex flex-row items-center justify-center py-2.5 px-5">
    //         <div className="relative leading-[16px] font-medium">Ideation</div>
    //       </div>
    //     </div>
    //     <div className="absolute top-[240px] left-[calc(50%_-_590px)] rounded-8xs bg-white border-darkolivegreen-100 border-[1px] border-solid box-border w-[156px] h-[47px] flex flex-row items-center justify-center py-3 px-8 text-base">
    //       <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //         SUBMIT
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-[3802px] left-[calc(50%_-_174px)] rounded-8xs border-darkolivegreen-100 border-[1px] border-solid box-border w-[349px] h-[47px] flex flex-row items-center justify-center py-3 px-8 text-xl">
    //     <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //       VIEW ALL
    //     </div>
    //   </div>
    //   <div className="absolute top-[5490px] left-[calc(50%_-_720px)] bg-lightgreen-200 w-[1440px] h-[362px] overflow-hidden text-xs text-gray">
    //     <div className="absolute top-[calc(50%_-_151px)] left-[calc(50%_-_620px)] w-[1240px] flex flex-col items-start justify-start gap-[30px]">
    //       <div className="w-[326px] flex flex-col items-start justify-start gap-3">
    //         <div className="self-stretch relative">
    //           Expert Solutions for Your Success
    //         </div>
    //         <div className="self-stretch relative text-13xl font-semibold text-darkolivegreen-100">
    //           Our Partners
    //         </div>
    //       </div>
    //       <img
    //         className="self-stretch relative max-w-full overflow-hidden h-[206px] shrink-0 object-cover"
    //         alt=""
    //         src="/image-7@2x.png"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute top-[3949px] left-[calc(50%_-_620px)] w-[1240px] flex flex-row items-center justify-center gap-[113px] text-13xl">
    //     <div className="flex flex-row items-center justify-center gap-1.5">
    //       <div className="w-[454px] relative font-semibold flex items-center shrink-0">
    //         Featured Articles
    //       </div>
    //       <div className="w-[70px] relative bg-darkolivegreen-100 h-[5px] [transform:_rotate(-90deg)]" />
    //     </div>
    //     <div className="w-[662px] relative text-xs text-gray flex items-center shrink-0">
    //       Our featured articles showcase the expertise and perspectives of our
    //       team, providing timely and informative content to help you stay ahead
    //       of the curve. Explore our curated collection of stories, analysis, and
    //       commentary to gain a deeper understanding of the topics that matter
    //       most.
    //     </div>
    //   </div>
    //   <div className="absolute top-[4149px] left-[calc(50%_-_620px)] flex flex-row items-center justify-center gap-[65px] text-center">
    //     <div className="w-[370px] relative shadow-[0px_2px_6px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[383px]">
    //       <img
    //         className="absolute top-[-100px] left-[calc(50%_-_155px)] rounded-5xs-5 w-[310px] h-[207px] object-cover"
    //         alt=""
    //         src="/image-9@2x.png"
    //       />
    //       <div className="absolute top-[137px] left-[calc(50%_-_155px)] font-medium flex items-center justify-center w-[310px]">
    //         How to make money from Agronomy
    //       </div>
    //       <div className="absolute top-[171px] left-[30px] text-xs text-gray flex items-center justify-center w-[310px]">
    //         Capitalise on the precision farming revolution by offering services
    //         like soil testing, crop monitoring, and precision irrigation
    //         management. Learn how to invest in the right technology and market
    //         your services to farmers
    //       </div>
    //       <div className="absolute top-[306px] left-[calc(50%_-_84px)] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-8 text-left text-white">
    //         <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //           READ MORE
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[370px] relative shadow-[0px_2px_6px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[383px]">
    //       <img
    //         className="absolute top-[-100px] left-[calc(50%_-_155px)] rounded-5xs-5 w-[310px] h-[207px] object-cover"
    //         alt=""
    //         src="/image-9@2x.png"
    //       />
    //       <div className="absolute top-[137px] left-[calc(50%_-_155px)] font-medium flex items-center justify-center w-[310px]">
    //         How to make money from Agronomy
    //       </div>
    //       <div className="absolute top-[171px] left-[30px] text-xs text-gray flex items-center justify-center w-[310px]">
    //         Capitalise on the precision farming revolution by offering services
    //         like soil testing, crop monitoring, and precision irrigation
    //         management. Learn how to invest in the right technology and market
    //         your services to farmers
    //       </div>
    //       <div className="absolute top-[306px] left-[calc(50%_-_84px)] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-8 text-left text-white">
    //         <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //           READ MORE
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[370px] relative shadow-[0px_2px_6px_rgba(0,_0,_0,_0.15),_0px_1px_2px_rgba(0,_0,_0,_0.3)] rounded-3xs bg-lightgreen-300 h-[383px]">
    //       <img
    //         className="absolute top-[-100px] left-[calc(50%_-_155px)] rounded-5xs-5 w-[310px] h-[207px] object-cover"
    //         alt=""
    //         src="/image-9@2x.png"
    //       />
    //       <div className="absolute top-[137px] left-[calc(50%_-_155px)] font-medium flex items-center justify-center w-[310px]">
    //         How to make money from Agronomy
    //       </div>
    //       <div className="absolute top-[171px] left-[30px] text-xs text-gray flex items-center justify-center w-[310px]">
    //         Capitalise on the precision farming revolution by offering services
    //         like soil testing, crop monitoring, and precision irrigation
    //         management. Learn how to invest in the right technology and market
    //         your services to farmers
    //       </div>
    //       <div className="absolute top-[306px] left-[calc(50%_-_84px)] rounded-8xs bg-darkolivegreen-100 border-white border-[1px] border-solid box-border h-[47px] flex flex-row items-center justify-center py-3 px-8 text-left text-white">
    //         <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //           READ MORE
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-[4592px] left-[calc(50%_-_180px)] rounded-8xs border-darkolivegreen-100 border-[1px] border-solid box-border w-[349px] h-[47px] flex flex-row items-center justify-center py-3 px-8 text-xl">
    //     <div className="relative tracking-[1.25px] leading-[16px] font-semibold">
    //       FIND MORE ARTICLES
    //     </div>
    //   </div>
    //   <div className="absolute top-[4739px] left-[95px] rounded-xl bg-lightgreen-400 w-[1240px] h-[651px] overflow-hidden text-13xl">
    //     <div className="absolute top-[30px] left-[30px] font-semibold flex items-center w-[326px]">
    //       Our Creative Archive
    //     </div>
    //     <div className="absolute top-[75px] left-[30px] text-xs text-black">
    //       A collection of Creative Excellence
    //     </div>
    //     <div className="absolute top-[121px] left-[30px] flex flex-row items-center justify-start gap-5">
    //       <div className="w-[280px] flex flex-col items-start justify-start gap-5">
    //         <img
    //           className="w-[280px] relative h-[294px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-134@2x.png"
    //         />
    //         <img
    //           className="w-[280px] relative h-[186px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-135@2x.png"
    //         />
    //       </div>
    //       <div className="w-[280px] flex flex-col items-start justify-start gap-5">
    //         <img
    //           className="w-[280px] relative h-[186px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-1351@2x.png"
    //         />
    //         <img
    //           className="w-[280px] relative h-[294px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-1341@2x.png"
    //         />
    //       </div>
    //       <div className="w-[280px] flex flex-col items-start justify-start gap-5">
    //         <img
    //           className="w-[280px] relative h-[294px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-134@2x.png"
    //         />
    //         <img
    //           className="w-[280px] relative h-[186px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-135@2x.png"
    //         />
    //       </div>
    //       <div className="w-[280px] flex flex-col items-start justify-start gap-5">
    //         <img
    //           className="w-[280px] relative h-[186px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-1351@2x.png"
    //         />
    //         <img
    //           className="w-[280px] relative h-[294px] overflow-hidden shrink-0 object-cover"
    //           alt=""
    //           src="/frame-1341@2x.png"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Desktop;
