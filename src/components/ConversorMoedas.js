import React, { Component } from 'react';
import { Alert, Button, Col, Container, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

class ConversorMoedas extends Component {
  render() {
    return (
      <div>
        <h1>Conversor de Moedas</h1>

        <Alert variant="danger" show={false}>
          Erro obtendo dados de conversão, tente novamente.
        </Alert>

        <Alert>
          <Form>
            <Container fluid="md">
              <Row>

                <Col sm="3">
                  <Form.Control placeholder="0" value={1} required />
                </Col>

                <Col sm="3">
                  <Form.Control as="select"></Form.Control>
                </Col>

                <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Col>

                <Col sm="3">
                  <Form.Control as="select"></Form.Control>
                </Col>

                <Col sm="2">
                <Button variant="success" type="submit">
                  <Spinner animation="border" size="sm" /> Converter
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
    )
  }
}

export default ConversorMoedas;
