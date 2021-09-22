import { createContext, useContext, useState } from 'react';

export function useProvideViewModel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return {
    model: {
      title,
      content,
    },
    operations: {
      setTitle,
      setContent,
    },
  };
}

export const ViewModelContext = createContext<null | ReturnType<typeof useProvideViewModel>>(null);

export const useViewModel = () => {
  return useContext(ViewModelContext);
};
