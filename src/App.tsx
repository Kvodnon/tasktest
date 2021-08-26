import React, { useEffect, useState } from 'react';
import Input from './components/Input';

function App() {
  const [ valuesData, setValuesData ] = useState<number[]>([]);
  
  const fillData = (): void => {
    const numberOfInputs: number = 10;
    const inputs: number[] = [];

    for (let i = 0; i < numberOfInputs; i++) {
     inputs.push(0);
    }

    setValuesData(inputs);
  }

  useEffect(() => {
    fillData();
  }, []);

  const handlerChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, dataset } = target;
    const newValue = Number(value).toFixed(2);
    const index = Number(dataset.index);

    valuesData[0] = Number(newValue) / (index + 1);

    setValuesData([...valuesData]);

    changeOtherInputs();
  }

  const changeOtherInputs = (): void => {
    const firstNumber = valuesData[0];

    setValuesData([...valuesData.map((_, index) => Number((firstNumber * (index + 1)).toFixed(2)))]);
  }

  const renderInputs = () => {
    return valuesData.map((value, index) => <Input onChange={handlerChange} index={index} key={`input-${index+1}`} value={value} /> );
  }

  return (
    <div>
      {renderInputs()}
    </div>
  );
}

export default App;
