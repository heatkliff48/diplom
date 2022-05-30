import React, { useState } from 'react';
import NoteBookItem from '../NoteBookItem/NoteBookItem';


const NoteBookForm = () => {
  

  return (
    <div>
      <h1>Ввод координат</h1>
      {notebook.map((el) => (
        <>
          <NoteBookItem id={el.id} name={el.name} key={el.id} tags={el.tags} />{' '}
        </>
      ))}
    </div>
  );
};

export default NoteBookForm;
