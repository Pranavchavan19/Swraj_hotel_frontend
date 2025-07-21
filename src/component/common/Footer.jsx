

// const FooterComponent = () => {
     
//     return(
//         <footer className="bg-[#e0f2f1]">
//             <span className="my-footer">
//                 Swaraj Hotel | All Rights Reserved  &copy; {new Date().getFullYear()}
//             </span>
//         </footer>
//     )
// }

// export default FooterComponent;







import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-[#e0f2f1] py-4">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-gray-700">
          Swaraj Hotel | All Rights Reserved &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
