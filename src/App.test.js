import ReactDom from 'react-dom';
import ConversorMoedas from './components/ConversorMoedas';

test('Deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDom.render(<ConversorMoedas />, div);
  ReactDom.unmountComponentAtNode(div);
});
