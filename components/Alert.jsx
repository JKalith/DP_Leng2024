import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from 'styles/alerts.module.css';
import { alertService } from 'services';
import Modal from './Modal';
export { Alert };

function Alert() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter();
    const [alert, setAlert] = useState(null);

    const openModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };

    useEffect(() => {
        // subscribe to new alert notifications
        const subscription = alertService.alert.subscribe(alert => setAlert(alert));

        // unsubscribe when the component unmounts
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        // clear alert on location change
        alertService.clear();
    }, [router]);

    useEffect(() => {
        if (alert) {
            openModal(); // Abre el modal cuando se establece el alert
        }
    }, [alert]); // Este efecto se ejecuta cuando cambia el estado 'alert'

    if (!alert) return null;

    return (
        <div>
            <Modal isVisible={isModalVisible} onClose={closeModal}>
                <h2>Este es un modal</h2>
                <p>Contenido del modal aquí.</p>
            </Modal>
          
        </div>
    );
}
