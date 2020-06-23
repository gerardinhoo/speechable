// import React from 'react';
// import "./Therapist.css"

// const TherapistInfo = () => {
//   return (
//     <div className="therapist">
//         <img src="https://content.thriveglobal.com/wp-content/uploads/2019/06/1_5e9-ACkKGRZUeuVYkeoycw.jpeg" alt="" />
//         <div class='therapist-name'>Therapist</div>
//     </div>
//   )
// }

// export default TherapistInfo;


import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const TherapistInfo = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", marginLeft: "20rem" }}>
        <MDBCardTitle style={{backgroundColor:"red"}}>Card title</MDBCardTitle>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
        <MDBCardBody>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default TherapistInfo;