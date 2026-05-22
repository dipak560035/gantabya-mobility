// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeaf } from "@fortawesome/free-solid-svg-icons";

// export default function Support() {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
//        <div className="text-center mb-16">
//             <h1 className="text-4xl text-green-500 md:text-5xl font-bold mb-12">
//                 Suppo
//                 <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00e676] to-[#0055ff]">
//                 rt
//                 </span>
//             </h1>
//         </div>
      
        
       
   
        
      
//         <div className="border border-zinc-700 w-100 h-55 rounded-xl  flex flex-col items-center justify-center text-center px-10  hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.40)]
//                           duration-300 group">
//           <FontAwesomeIcon  icon={faLeaf}  className="text-[#00d84f] size-15" />
//           <h1 className="text-white text-[30px] font-normal mb-8">Warranty </h1>
//           <h2 className="text-zinc-400 font-medium"> 3-year vehicle + 5-year battery warranty on all models. </h2>
//         </div>

       
   

      
        
      
//     </div>
//   );
// }



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faCircleNodes, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl text-green-500 md:text-5xl font-bold mb-12">
          Suppo
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#00e676] to-[#0055ff]">
            rt
          </span>
        </h1>
      </div>

        <div className="flex justify-center items-center w-full px-4 gap-7">
            
            <div className="border border-zinc-700 w-full
            max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
            text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
            <FontAwesomeIcon icon={faLeaf} className="text-[#00d84f]" />
            <h1 className="text-white text-[30px] font-normal mb-2">Warranty</h1>
            <h2 className="text-zinc-400 font-medium ">
            3-year vehicle + 5-year battery warranty on all models.
            </h2>
            </div>



            <div className="border border-zinc-700 w-full
                max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
                text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
                <FontAwesomeIcon icon={faCircleNodes} className="text-[#00d84f] size-5xl" />
                <h1 className="text-white text-[30px] font-normal mb-2">Service Centers</h1>
                <h2 className="text-zinc-400 font-medium">
                    25+ authorized centers across Nepal for hassle-free servicing.
                </h2>
            </div>

            <div className="border border-zinc-700 w-full
                max-w-107.5 h-50 py-6 rounded-xl flex flex-col items-center justify-center
                text-center px-10 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-300 group">
                <FontAwesomeIcon icon={faUsers} className="text-[#00d84f] size-5xl" />
                <h1 className="text-white text-[30px] font-normal mb-2">24/7 Support</h1>
                <h2 className="text-zinc-400 font-medium">
                    Call or chat with our support team for anytime.
                </h2>
            </div>

      </div>

    </div>
  );
}