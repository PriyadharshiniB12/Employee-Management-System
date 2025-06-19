// import React from 'react'

// const FooterComponent = () => {
//   return (
//     <div>
//         <footer className='footer'>
//             <span>All rights reserved - 2025</span>

//         </footer>
//     </div>
//   )
// }

// export default FooterComponent

import React from 'react';

const FooterComponent = () => {
  return (
    <footer
      className="text-white text-center py-3"
      style={{
        backgroundColor: '#0d3b66',
        borderTop: '2px solid #e0e0e0',
        marginTop: 'auto',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <div className="container">
        <span>&copy; 2025 Employee Management System. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default FooterComponent;