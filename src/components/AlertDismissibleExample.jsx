import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh No! Login Failed!</Alert.Heading>
                <p>
                  Try again
                </p>
            </Alert>
        );
    }

}

export default AlertDismissibleExample;