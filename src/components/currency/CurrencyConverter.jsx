import React from "react";
import img from "/img/Currency-bro.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertAmount] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getExchangeRate = async () => {
            let url = `https://api.exchangerate-api.com/v4/latest/${from}`;

            const res = await axios.get(url);

            setExchangeRate(res.data.rates[to]);
            setOptions(Object.keys(res.data.rates));
        };
        getExchangeRate();
    }, [from, to]);

    useEffect(() => {
        setConvertAmount((amount * exchangeRate).toFixed(2));
    }, [amount, exchangeRate]);

    return (
        <section className="flex h-screen w-screen items-center justify-center">
            <div className="h-auto w-3/4 rounded-md border p-5 md:w-1/2 lg:w-2/5">
                <div className="border">
                    <img src={img} alt="" className="mx-auto h-60 w-60" />
                </div>
                <div>
                    <h3 className="text-center text-3xl font-bold uppercase text-blue-700">
                        currency converter
                    </h3>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="amt">Amount:</label>
                        <input
                            type="number"
                            id="amt"
                            min={0}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter Amount"
                        />
                    </div>
                    <div>
                        <label htmlFor="from">From Currency:</label>
                        <select
                            name="from"
                            id="from"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        >
                            {options.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="to">To Currency:</label>
                        <select
                            name="from"
                            id="from"
                            value={to}
                            onChange={(e) => setFrom(e.target.value)}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                        >
                            {options.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-center border py-4">
                    <p className="text-blue-500">
                        {amount} {from} is equal to {convertedAmount} {to}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CurrencyConverter;
