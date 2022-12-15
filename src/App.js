
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleRemoveNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' || prev.length === 1 ? '0' : prev.slice(0, -1)}`)
  }

  const handleSumNumbers = () => {
    let sum = 0;
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      if (currentNumber.slice(-1) === "%") {
        sum = Number(firstNumber) * (1+Number(currentNumber.slice(0, -1))/100);
      } else {
        sum = Number(firstNumber) + Number(currentNumber);
      }
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {
    let sum = 0;
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      if (currentNumber.slice(-1) === "%") {
        sum = Number(firstNumber) * (1-Number(currentNumber.slice(0, -1))/100);
      } else {
        sum = Number(firstNumber) - Number(currentNumber);
      }
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleTimesNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }



  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          case '*':
            handleTimesNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleOnClear} color='secondary'/>
          <Button label="⌫" onClick={handleRemoveNumber} variant='secondary' color='secondary'/>
          <Button label="%" onClick={() => handleAddNumber('%')} color='secondary'/>
          <Button label="/" onClick={handleDivideNumbers} color='secondary'/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={handleTimesNumbers} color='secondary'/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers} color='secondary'/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers} color='secondary'/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="00" onClick={() => handleAddNumber('00')}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals} color='secondary'/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
