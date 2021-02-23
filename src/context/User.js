import React, {useContext, useState} from 'react';

export const UserContext = React.createContext();

const UserHandler = ({children}) => {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [photo, updatePhoto] = useState(null);
  const [telefono, updateTelefono] = useState('');
  
  return (
    <UserContext.Provider
      value={{
        name,
        updateName,
        email,
        updateEmail,
        photo,
        updatePhoto,
        telefono,
        updateTelefono,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserHandler;

type IUser = {
  name?: String,
  updateName?: Function,
  email?: String,
  updateEmail?: Function,
  photo?: String,
  updatePhoto?: Function,
  telefono?: String,
  updateTelefono?: Function,
};

export const useUserInformation = (): IUser => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de UserHandler');
  }

  return context;
};
