import React from 'react';
import CheckingRenderChild from './formInputs/CheckingRenderChild';
import PreviewTitle from './formInputs/PreviewTitle';
import PreviewContent from './formInputs/PreviewContent';
import TitleAndContent from './formInputs/TitleAndContent';
import { useProvideViewModel, ViewModelContext } from './formInputs/ViewModel';

function ViewModelExamplePage() {
  return (
    <>
      <ViewModelContext.Provider value={useProvideViewModel()}>
        <TitleAndContent />
        <PreviewTitle />
        <PreviewContent />
        <CheckingRenderChild />
      </ViewModelContext.Provider>
    </>
  );
}

export default ViewModelExamplePage;
