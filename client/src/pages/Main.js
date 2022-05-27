import React, {  } from 'react';
import { Modal1 } from '../components/Modal/Modals'
import ModifyPassword from '../components/Sign/ModifyPassword'
import ModifyUsername from '../components/Sign/ModifyUsername'

function Main() {

  return (
    <>
      <div>Main</div>
      <Modal1 />
      <ModifyPassword />
      <br />
      <ModifyUsername />
    </>
  );
}

export default Main;
