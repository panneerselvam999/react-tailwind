// import React, { useState } from "react";

// const Password = () => {
//     const [length, setLength] = useState(4); // Corrected spelling here
//     const [result, setResult] = useState("");

//     const [options, setOptions] = useState({
//         upper: false,
//         lower: false,
//         number: false,
//         symbol: false,
//     });

//     const createPassword = () => {
//         const isAtleastOneTrue =
//             options.upper || options.lower || options.number || options.symbol;

//         if (!isAtleastOneTrue) {
//             return alert("Choose at least one option");
//         }

//         let charset = "";

//         if (options.upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         if (options.lower) charset += "abcdefghijklmnopqrstuvwxyz";
//         if (options.number) charset += "1234567890";
//         if (options.symbol) charset += "!@#$%^&*()_=+";

//         let finalPassword = ""; // Corrected spelling here
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random() * charset.length);
//             finalPassword += charset[randomIndex];
//         }

//         setResult(finalPassword); // Setting the result
//     };

//     const handleOptionChange = (event) => {

//         setOptions({
//             ...options,
//             [event.target.name]: event.target.checked,
//         });
//     };

//     const copyToClipboard = () => {
//         if (!result) {
//             return alert("First Create Password");
//         } else {
//             navigator.clipboard.writeText(result);
//             return alert("Password Copied...");
//         }
//     };

//     return (
//         <section className="flex h-screen w-screen items-center justify-center">
//             <div className="flex h-auto w-96 flex-col gap-6 rounded-md border p-5">
//                 <div className="w-full">
//                     <h3 className="text-center text-2xl font-bold text-blue-700">
//                         PASSWORD GENERATOR
//                     </h3>
//                 </div>
//                 <div>
//                     <label htmlFor="length">Password length:</label>
//                     <input
//                         type="number"
//                         id="length" // Corrected spelling here
//                         min={4}
//                         value={length}
//                         onChange={(e) => setLength(parseInt(e.target.value))} // Corrected spelling here
//                         className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//                     />
//                 </div>
//                 <div className="flex flex-col gap-3">
//                     <label htmlFor="uppercase" className="flex items-center">
//                         <input
//                             className="mr-2"
//                             onChange={(e) => handleOptionChange(e)}
//                             type="checkbox"
//                             id="uppercase"
//                             name="upper"
//                         />
//                         Include Uppercase
//                     </label>
//                     <label htmlFor="lowercase" className="flex items-center">
//                         <input
//                             className="mr-2"
//                             onChange={(e) => handleOptionChange(e)}
//                             type="checkbox"
//                             id="lowercase"
//                             name="lower"
//                         />
//                         Include Lowercase
//                     </label>
//                     <label htmlFor="number" className="flex items-center">
//                         <input
//                             className="mr-2"
//                             onChange={(e) => handleOptionChange(e)}
//                             type="checkbox"
//                             id="number"
//                             name="number"
//                         />
//                         Include Numbers
//                     </label>
//                     <label htmlFor="symbol" className="flex items-center">
//                         <input
//                             className="mr-2"
//                             onChange={(e) => handleOptionChange(e)}
//                             type="checkbox"
//                             id="symbol"
//                             name="symbol"
//                         />
//                         Include Symbols
//                     </label>
//                 </div>
//                 <div>
//                     <button
//                         className="select-none rounded bg-blue-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                         type="button"
//                         onClick={createPassword} // Added event handler
//                     >
//                         Generate Password
//                     </button>

//                     <div className="mt-4 flex">
//                         <input
//                             type="text"
//                             readOnly
//                             id="result"
//                             value={result}
//                             className="w-full rounded-l-md border"
//                         />
//                         <button
//                             onClick={() => copyToClipboard()}
//                             className="rounded-r-md bg-blue-600 p-2 font-bold text-white"
//                         >
//                             Copy
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Password;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Password = () => {
    const [result, setResult] = useState("");

    const [options, setOptions] = useState({
        length: 4,
        upper: false,
        lower: false,
        number: false,
        symbol: false,
    });

    const createPassword = () => {
        const isAtleastOneTrue = options.upper || options.lower || options.number || options.symbol;

        if (!isAtleastOneTrue) {
            alert("Choose at least one option");
            return;
        }

        let charset = "";

        if (options.upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (options.lower) charset += "abcdefghijklmnopqrstuvwxyz";
        if (options.number) charset += "1234567890";
        if (options.symbol) charset += "!@#$%^&*()_=+";

        let finalPassword = "";
        for (let i = 0; i < options.length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            finalPassword += charset[randomIndex];
        }

        setResult(finalPassword);
    };

    const handleOptionChange = (event) => {
        const { name, value, type, checked } = event.target;
        setOptions({
            ...options,
            [name]: type === "checkbox" ? checked : parseInt(value),
        });
    };

    const copyToClipboard = () => {
        if (!result) {
            toast.error("First Generate Password", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            navigator.clipboard.writeText(result);
            toast.success("Password Copied!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <section className="flex h-screen w-screen items-center justify-center">
            <div className="flex h-auto w-96 flex-col gap-6 rounded-md border p-5">
                <div className="w-full">
                    <h3 className="text-center text-2xl font-bold text-blue-700">
                        PASSWORD GENERATOR
                    </h3>
                </div>
                <div>
                    <label htmlFor="length">Password length:</label>
                    <input
                        type="number"
                        id="length"
                        name="length"
                        min={4}
                        value={options.length}
                        onChange={handleOptionChange}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="uppercase" className="flex items-center">
                        <input
                            className="mr-2"
                            onChange={handleOptionChange}
                            type="checkbox"
                            id="uppercase"
                            name="upper"
                        />
                        Include Uppercase
                    </label>
                    <label htmlFor="lowercase" className="flex items-center">
                        <input
                            className="mr-2"
                            onChange={handleOptionChange}
                            type="checkbox"
                            id="lowercase"
                            name="lower"
                        />
                        Include Lowercase
                    </label>
                    <label htmlFor="number" className="flex items-center">
                        <input
                            className="mr-2"
                            onChange={handleOptionChange}
                            type="checkbox"
                            id="number"
                            name="number"
                        />
                        Include Numbers
                    </label>
                    <label htmlFor="symbol" className="flex items-center">
                        <input
                            className="mr-2"
                            onChange={handleOptionChange}
                            type="checkbox"
                            id="symbol"
                            name="symbol"
                        />
                        Include Symbols
                    </label>
                </div>
                <div>
                    <button
                        className="select-none rounded bg-blue-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={createPassword}
                    >
                        Generate Password
                    </button>

                    <div className="mt-4 flex">
                        <input
                            type="text"
                            readOnly
                            id="result"
                            value={result}
                            className="w-full rounded-l-md border"
                        />
                        <button
                            onClick={copyToClipboard}
                            className="rounded-r-md bg-blue-600 p-2 font-bold text-white"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer
            // position="top-center"
            // autoClose={1000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="light"
            // transition={Bounce}
            />
        </section>
    );
};

export default Password;
