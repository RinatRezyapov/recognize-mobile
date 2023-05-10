import {Dialog, DialogContent, DialogHeader, Provider} from '@react-native-material/core';
import {FC, ReactNode, createContext, useContext, useState} from 'react';

export const DialogContext = createContext({
  openDialog: (title: string, component: JSX.Element) => {},
  closeDialog: () => {},
});

export const useDialog = () => useContext(DialogContext);

interface IProps {
  children: ReactNode;
}

const DialogProvider: FC<IProps> = ({children}) => {
  const [state, setState] = useState<{open: boolean; title: string; component: JSX.Element | null}>({
    open: false,
    title: '',
    component: null,
  });

  const openDialog = (title: string, component: JSX.Element) => {
    setState({
      open: true,
      title,
      component,
    });
  };

  const closeDialog = () => {
    setState({
      open: false,
      title: '',
      component: null,
    });
  };

  return (
    <DialogContext.Provider value={{openDialog, closeDialog}}>
      <Provider>
        {children}
        {state.open && (
          <Dialog visible={state.open} onDismiss={closeDialog}>
            <DialogHeader title={state.title} />
            <DialogContent>{state.component}</DialogContent>
          </Dialog>
        )}
      </Provider>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
