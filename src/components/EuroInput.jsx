import React, {useState} from 'react';

const EuroInput = () => {
    const [amount, setAmount] = useState('');

    const formatAmount = (value) => {
        const cleanValue = value.replace(/[^\d,]/g, '');

        const parts = cleanValue.split(',');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return parts.length > 1 ? integerPart + ',' + parts[1] : integerPart;
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatAmount(inputValue);

        setAmount(formattedValue);
    };
    return (
        <form>
            <label>
                Inserisci importo in euro:
                <input
                    type="text"
                    value={amount}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Invia</button>
        </form>
    );
};

export default EuroInput;
