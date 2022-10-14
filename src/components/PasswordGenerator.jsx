import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Character';
import { COPY_FAIL, COPY_SUCCESS } from './Message';
import Form from './Form';

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <div className="generator">
                <h2 className="generator__header">
                    Password Generator
                </h2>
                <div className="generator__password">
                    <h3>{password}</h3>
                    <button className="copy__btn">
                        <i className="far fa-clipboard"></i>
                    </button>
                </div>
                <Form />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
}

export default PasswordGenerator;
