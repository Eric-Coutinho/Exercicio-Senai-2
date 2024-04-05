import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export const AlertComponent = (show) => {
    const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>Erro</Alert.Heading>
        <p>
          Não foi possível achar personagens nessa página.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fechar
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}