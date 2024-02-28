// import React, { useState } from 'react';
// import { Form, Button } from 'semantic-ui-react';

// const Prayer = ({ handlePrayer, generatedPrayer }) => {
//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!generatedPrayer.trim()) {
//             alert("Please fill in this field.");
//             return;
//         };
//         handlePrayer(generatedPrayer);
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group>
//                 <Form.TextArea 
//                     placeholder='Your generated Prayer will appear here.'
//                     width={16}
//                     value={generatedPrayer}
//                     readOnly
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Button primary>Next</Button>
//             </Form.Group>
//         </Form>
//     );
// };

// export default Prayer;