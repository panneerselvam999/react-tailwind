// import { useState } from "react";
// import diet from "/img/Diet-amico.svg";

// const BMI = () => {
//     const [height, setHeight] = useState("");
//     const [weight, setWeight] = useState("");
//     const [bmi, setBmi] = useState(null);
//     const [bmiStatus, setBmiStatus] = useState("");
//     const [errorMsg, setErrorMsg] = useState("");

//     const calculateBMI = () => {
//         const isValidHight = /^-?\d+$/.test(height);
//         const isValidWeight = /^-?\d+$/.test(weight);

//         if (isValidHight && isValidWeight) {
//             const heightInMeters = height / 100;
//             const bmiVal = weight / (heightInMeters * heightInMeters);
//             setBmi(bmiVal.toFixed(2));

//             if (bmiVal < 16) {
//                 setBmiStatus("Severe Thinness");
//             } else if (bmiVal > 16 && bmiVal < 17) {
//                 setBmiStatus("Moderate Thinness");
//             } else if (bmiVal >= 17 && bmiVal < 18.5) {
//                 setBmiStatus("Mild Thinness");
//             } else if (bmiVal >= 18.5 && bmiVal < 25) {
//                 setBmiStatus("Normal Thinness");
//             } else if (bmiVal >= 25 && bmiVal < 30) {
//                 setBmiStatus("Overweight");
//             } else if (bmiVal >= 30 && bmiVal < 35) {
//                 setBmiStatus("Obese Class I");
//             } else if (bmiVal >= 35 && bmiVal < 40) {
//                 setBmiStatus("Obese Class II");
//             } else {
//                 setBmiStatus("Obese Class II");
//             }
//             setErrorMsg("");
//         } else {
//             setBmi(null);
//             setBmiStatus("");
//             setErrorMsg("* Please enter valid value");
//         }
//     };

//     const clear = () => {
//         setHeight("");
//         setWeight("");
//         setBmi(null);
//         setBmiStatus("");
//         setErrorMsg("");
//     };

//     return (
//         <section className="flex h-screen w-screen items-center justify-center">
//             <div className="flex rounded-xl border xl:w-1/2">
//                 <div className="xl:w-1/2">
//                     <div>
//                         <img className="h-96 w-96" src={diet} alt="Diet illustration" />
//                     </div>
//                 </div>

//                 <div className="flex flex-col justify-between border-l-2 p-5 xl:w-1/2">
//                     <div>
//                         <p className="text-center text-3xl font-bold text-blue-600">
//                             BMI CALCULATOR
//                         </p>
//                     </div>
//                     <div>
//                         <div>
//                             <label
//                                 htmlFor="height"
//                                 className="mb-2 block text-sm font-medium text-gray-900"
//                             >
//                                 Height (cm)
//                             </label>
//                             <input
//                                 type="number"
//                                 id="height"
//                                 min={0}
//                                 value={height}
//                                 onChange={(e) => setHeight(e.target.value)}
//                                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//                                 placeholder="Enter height"
//                                 required
//                             />
//                         </div>
//                         <div className="mt-4">
//                             <label
//                                 htmlFor="weight"
//                                 className="mb-2 block text-sm font-medium text-gray-900"
//                             >
//                                 Weight (Kg)
//                             </label>
//                             <input
//                                 type="number"
//                                 id="weight"
//                                 min={0}
//                                 value={weight}
//                                 onChange={(e) => setWeight(e.target.value)}
//                                 className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//                                 placeholder="Enter weight"
//                                 required
//                             />
//                         </div>
//                     </div>
//                     <div className="flex justify-center gap-5">
//                         <button
//                             className="select-none rounded bg-blue-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                             onClick={calculateBMI}
//                         >
//                             Calculate BMI
//                         </button>
//                         <button
//                             className="select-none rounded bg-red-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                             onClick={clear}
//                         >
//                             Clear
//                         </button>
//                     </div>
//                     <div className="rounded border text-center h-16">
//                         {bmi !== null && (
//                             <div>
//                                 <h4>Your BMI is: {bmi}</h4>
//                                 <p className="">BMI status: {bmiStatus}</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BMI;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef } from "react";
import diet from "/img/Diet-amico.svg";

const BMI = () => {
    const heightRef = React.useRef(null);
    const weightRef = React.useRef(null);

    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState("");

    const calculateBMI = () => {
        const height = heightRef.current.value;
        const weight = weightRef.current.value;

        const isValidHight = /^-?\d+$/.test(height);
        const isValidWeight = /^-?\d+$/.test(weight);

        if (isValidHight && isValidWeight) {
            const heightInMeters = height / 100;
            const bmiVal = weight / (heightInMeters * heightInMeters);
            setBmi(bmiVal.toFixed(2));

            if (bmiVal < 16) {
                setBmiStatus("Severe Thinness");
            } else if (bmiVal > 16 && bmiVal < 17) {
                setBmiStatus("Moderate Thinness");
            } else if (bmiVal >= 17 && bmiVal < 18.5) {
                setBmiStatus("Mild Thinness");
            } else if (bmiVal >= 18.5 && bmiVal < 25) {
                setBmiStatus("Normal Thinness");
            } else if (bmiVal >= 25 && bmiVal < 30) {
                setBmiStatus("Overweight");
            } else if (bmiVal >= 30 && bmiVal < 35) {
                setBmiStatus("Obese Class I");
            } else if (bmiVal >= 35 && bmiVal < 40) {
                setBmiStatus("Obese Class II");
            } else {
                setBmiStatus("Obese Class II");
            }
        } else {
            setBmi(null);
            setBmiStatus("");
        }
    };

    const clear = () => {
        heightRef.current.value = "";
        weightRef.current.value = "";
        setBmi(null);
        setBmiStatus("");
    };

    return (
        <section className="flex h-screen w-screen items-center justify-center">
            <div className="flex rounded-xl border xl:w-1/2">
                <div className="hidden  sm:block xl:w-1/2">
                    <div className="h-full w-full flex items-center justify-center">
                        <img
                            className=" sm:h-72 sm:w-72 md:h-96 md:w-96"
                            src={diet}
                            alt="Diet illustration"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-5 sm:border-l-2 p-5 xl:w-1/2">
                    <div>
                        <p className="text-center text-xl md:text-3xl font-bold text-blue-600">
                            BMI CALCULATOR
                        </p>
                    </div>
                    <div>
                        <div>
                            <label
                                htmlFor="height"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Height (cm)
                            </label>
                            <input
                                type="number"
                                id="height"
                                min={0}
                                ref={heightRef}
                                // value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter height"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="weight"
                                className="mb-2 block text-sm font-medium text-gray-900"
                            >
                                Weight (Kg)
                            </label>
                            <input
                                type="number"
                                id="weight"
                                min={0}
                                ref={weightRef}
                                // value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter weight"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-5">
                        <button
                            className="select-none rounded bg-blue-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={calculateBMI}
                        >
                            Calculate BMI
                        </button>
                        <button
                            className="select-none rounded bg-red-500 px-6 py-1 text-center align-middle font-sans text-base text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={clear}
                        >
                            Clear
                        </button>
                    </div>
                    <div className="h-16 rounded border text-center">
                        {bmi !== null && (
                            <div>
                                <h4>Your BMI is: {bmi}</h4>
                                <p className="">BMI status: {bmiStatus}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BMI;
