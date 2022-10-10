import ReactDom from 'react-dom';
import ConversorMoedas from '../components/ConversorMoeda';
import axiosMock from 'axios';
import { fireEvent, render } from '@testing-library/react';

describe('Teste do componente de conversão de moedas', () => {
  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDom.render(<ConversorMoedas />, div);
    ReactDom.unmountComponentAtNode(div);
  });

  it('Deve simular uma conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);

    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 4.564292, USD: 1.101049 } },
    });

    fireEvent.click(getByTestId('btn-converter'));

    const modal = await findByTestId('modal');

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD');
  });
});
