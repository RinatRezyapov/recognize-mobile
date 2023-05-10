import {FC, ReactNode, createContext, useContext, useState} from 'react';
import {Button, Provider, Dialog, DialogHeader, DialogContent, DialogActions, Text} from '@react-native-material/core';

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
            {/* <DialogActions>
              <Button title="Cancel" compact variant="text" onPress={closeDialog} />
              <Button title="Ok" compact variant="text" onPress={closeDialog} />
            </DialogActions> */}
          </Dialog>
        )}
      </Provider>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
