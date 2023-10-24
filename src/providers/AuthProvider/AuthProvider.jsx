import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, user => {
			setLoading(false);
			setUser(user);
		});
		return () => unSubscribe();
	}, []);

	const createUser = ({ email, password }) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = ({ email, password }) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = ({ name, photoURL = 'ibb.com' }) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL,
		});
	};

	const logOutCurrentUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	const authData = {
		createUser,
		user,
		loading,
		setUser,
		loginUser,
		logOutCurrentUser,
		updateUserProfile,
	};

	return (
		<AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
