import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './index.css';

const Converter = () => {
  
    const [fromCurrensy, setFromCurrensy] = useState('RUB');
    const [toCurrensy, setToCurrensy] = useState('USD');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);
    const dataRef = useRef({})


    useEffect(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_t1DrNgsrM6Tu0734petasVopGwlT1wMgqZcrpApJ')
            .then(res => res.json())
            .then(json => {
               
                dataRef.current = json.data;
                onChangeToPrice(1);
            }).catch((err) => {
                console.warn(err);
                alert('не удалось получить информацию');
            });

    }, [])


    const onChangeFromPrice = (value) => {
        const price = value / dataRef.current[fromCurrensy];
        const result = price * dataRef.current[toCurrensy]
        setFromPrice(value);
        setToPrice(result.toFixed(3));
    }

    const onChangeToPrice = (value) => {
        const result = (dataRef.current[fromCurrensy] / dataRef.current[toCurrensy]) * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value);
    }


    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrensy]);


    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrensy]);

    return (
        <div className="App">
            <div>
                <span>У меня есть </span>
                <Block
                    value={fromPrice}
                    currency={fromCurrensy}
                    onChangeCurrency={setFromCurrensy}
                    onChangeValue={onChangeFromPrice} />
                <p>1 {fromCurrensy} = {((dataRef.current[toCurrensy] / dataRef.current[fromCurrensy]) * 1).toFixed(3)} {toCurrensy}</p>
            </div>
            <div>
                <span>Хочу приобрести</span>
                <Block
                    value={toPrice}
                    currency={toCurrensy}
                    onChangeCurrency={setToCurrensy}
                    onChangeValue={onChangeToPrice} />
                <p>1 {toCurrensy} = {((dataRef.current[fromCurrensy] / dataRef.current[toCurrensy]) * 1).toFixed(3)} {fromCurrensy};</p>
            </div>

        </div>
    );
}

export default Converter;
