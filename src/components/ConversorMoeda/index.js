import React, { useState } from 'react';
import './ConversorMoeda.css';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from '../ListarMoedas';

function ConversorMoedas() {
  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);
  const [formValidado, setFormValidado] = useState(false);

  function handleValor(event) {
    setValor(event.target.value.replace(/\D/g, ''));
  }

  function handleMoedaDe(event) {
    setMoedaDe(event.target.value);
  }

  function handleMoedaPara(event) {
    setMoedaPara(event.target.value);
  }

  function converter(event) {
    event.preventDefault();
    setFormValidado(true);

    if (event.currentTarget.checkValidity() === true) {
      alert('CORRETO');
      // TODO implementar a chamada ao Fixer.io
    }
  }

  return (
    <div>
      <h1>Conversor de Moedas</h1>

      <Alert variant="danger" show={false}>
        Erro obtendo dados de conversão, tente novamente.
      </Alert>

      <Alert>
        <Form onSubmit={converter} noValidate validated={formValidado}>
          <Container fluid="md">
            <Row>
              <Col sm="3">
                <Form.Control
                  placeholder="0"
                  value={valor}
                  onChange={handleValor}
                  required
                />
              </Col>

              <Col sm="3">
                <Form.Control
                  as="select"
                  value={moedaDe}
                  onChange={handleMoedaDe}
                >
                  <ListarMoedas />
                </Form.Control>
              </Col>

              <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Col>

              <Col sm="3">
                <Form.Control
                  as="select"
                  value={moedaPara}
                  onChange={handleMoedaPara}
                >
                  <ListarMoedas />
                </Form.Control>
              </Col>

              <Col sm="2">
                <Button variant="success" type="submit">
                  <span className={exibirSpinner ? null : 'hidden'}>
                    <Spinner animation="border" size="sm" />
                  </span>
                  <span className={exibirSpinner ? 'hidden' : null}>
                    Converter
                  </span>
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>

        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>

          <Modal.Body>Reaultado da Conversão</Modal.Body>

          <Modal.Footer>
            <Button variant="success">Nova Conversão</Button>
          </Modal.Footer>
        </Modal>
      </Alert>
    </div>
  );
}

export default ConversorMoedas;
