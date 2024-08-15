import { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './Modal';

let showAlert = null; // Variable para almacenar la función de mostrar alerta

export const Alert = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const openModal = (alertTitle, alertMessage) => {
        setTitle(alertTitle);
        setMessage(alertMessage);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    // Guardamos la referencia de openModal para poder usarla fuera del componente
    showAlert = openModal;

    return (
        <div>
            <Modal
                isVisible={isModalVisible}
                onClose={closeModal}
                title={title}
                message={message}
            />
        </div>
    );
};

export const showAlertModal = (title, message) => {
    if (showAlert) {
        showAlert(title, message);
    }
};
