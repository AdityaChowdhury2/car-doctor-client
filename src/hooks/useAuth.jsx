import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const useAuth = () => {
	const allAuthData = useContext(AuthContext);
	return allAuthData;
};

export default useAuth;
