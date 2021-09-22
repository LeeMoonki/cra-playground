import React from 'react';
import CheckingRenderChild from './formInputs/CheckingRenderChild';
import Preview from './formInputs/Preview';
import TitleAndContent from './formInputs/TitleAndContent';
import { useProvideViewModel, ViewModelContext } from './formInputs/ViewModel';

function ViewModelExamplePage() {
  return (
    <>
      <ViewModelContext.Provider value={useProvideViewModel()}>
        <TitleAndContent />
        <Preview />
        <CheckingRenderChild />
      </ViewModelContext.Provider>
    </>
  );
}

export default ViewModelExamplePage;
