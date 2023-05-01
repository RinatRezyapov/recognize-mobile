import {Button, Snackbar} from '@react-native-material/core';
import {FC, ReactNode, createContext, useState} from 'react';

export const SnackbarContext = createContext({
  openSnackbar: (message: string) => {},
});

interface IProps {
  children: ReactNode;
}

const SnackbarProvider: FC<IProps> = ({children}) => {
  const [state, setState] = useState({
    open: false,
    message: '',
  });

  const openSnackbar = (message: string) => {
    setState({
      open: true,
      message,
    });
  };

  const closeSnackbar = () => {
    setState({
      open: false,
      message: '',
    });
  };

  return (
    <SnackbarContext.Provider value={{openSnackbar}}>
      {children}
      {state.open && (
        <Snackbar
          message={state.message}
          action={<Button variant="text" title="Dismiss" color="#BB86FC" compact onPress={closeSnackbar} />}
          style={{position: 'absolute', start: 16, end: 16, bottom: 16}}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
