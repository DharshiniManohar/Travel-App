
// import React from 'react';
// import '../styles/GroupTour.css'; 
// import groupImage1 from '../assets/tour11.gif'; 
// import groupImage2 from '../assets/tour22.gif';
// import groupImage3 from '../assets/tour33.gif';
// import groupImage4 from '../assets/tour44.gif';

// const GroupTour = () => {
//   return (
//     <div className="group-tour-container">
        
//       <h2 className="group-tour-heading">    Best Tours</h2>
//       <div className="group-tour">
//         <div className="image-container">
//           <img src={groupImage1} alt="Group Tour 1" />
//         </div>
//         <div className="image-container">
//           <img src={groupImage2} alt="Group Tour 2" />
//         </div>
//         <div className="image-container">
//           <img src={groupImage3} alt="Group Tour 3" />
//         </div>
//         <div className="image-container">
//           <img src={groupImage4} alt="Group Tour 4" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupTour;









// src/components/GroupTour.js
import React from 'react';
import '../styles/GroupTour.css'; // Ensure the path is correct based on your file structure
import groupImage1 from '../assets/tour11.gif'; // Replace with actual image paths
import groupImage2 from '../assets/tour22.gif';
import groupImage3 from '../assets/tour33.gif';
import groupImage4 from '../assets/tour44.gif';

const GroupTour = () => {
  return (
    <div className="group-tour-container">
      <h2 className="group-tour-heading">Best Tours</h2>
      <div className="group-tour">
        <div className="imagegroup-container">
          <div className="floating-tab">Dreams of Maldives Tour</div>
          <img src={groupImage1} alt="Group Tour 1" />
        </div>
        <div className="imagegroup-container">
          <div className="floating-tab">Grand Europe Group Tour</div>
          <img src={groupImage2} alt="Group Tour 2" />
        </div>
        <div className="imagegroup-container">
          <div className="floating-tab">Thailand Fun Group Tour</div>
          <img src={groupImage3} alt="Group Tour 3" />
        </div>
        <div className="imagegroup-container">
          <div className="floating-tab">Golden Triangle Tour</div>
          <img src={groupImage4} alt="Group Tour 4" />
        </div>
      </div>
    </div>
  );
};

export default GroupTour;
