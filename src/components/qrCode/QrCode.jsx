// import React from "react";
// // import sampleQR from "../../../public/img/sampleQR.jpg"
// import sampleQR from "/img/sampleQR.jpg";

// const QrCode = () => {
//     return (
//         <div className="flex h-screen w-screen items-center justify-center">
//             <div className="rounded-lg border-2 border-blue-700 w-96 p-4">
//                 <div className="text-center">
//                     <h5 className="font-bold text-blue-600">QR CODE GENERATOR</h5>
//                     <img src={sampleQR} alt="" className="mx-auto h-40 w-40" />
//                     {/* <img src="img/sampleQR.jpg" alt="" /> */}
//                 </div>

//                 <div className="">
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="qrData" className="text-sm text-blue-700">
//                             Data for QR Code
//                         </label>
//                         <input
//                             type="text"
//                             id="qrData"
//                             className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
//                         />
//                     </div>
//                     <div className="flex flex-col gap-2 mt-3">
//                         <label htmlFor="imgSize" className="text-sm text-blue-700">
//                             QR Image size (eg.180)
//                         </label>
//                         <input
//                             type="number"
//                             id="imgSize"
//                             className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex justify-between mt-5">
//                     <button className="bg-blue-700 py-1 px-3 rounded-md text-white ">Generate QR Code</button>
//                     <button className="bg-green-700 py-1 px-3 rounded-md text-white ">Download QR Code</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QrCode;

//--------------------------------------------------------------------------------

// import { useState } from "react";
// import sampleQR from "/img/sampleQR.jpg";

// const QrCode = () => {
//     const [img, setImg] = useState(sampleQR);
//     const [loading, setLoading] = useState(false);
//     const [QRdata, setQRdata] = useState("React QR generator");
//     const [QRsize, setQRsize] = useState("150");

//     async function generateQR() {
//         setLoading(true);

//         try {
//             const url = `https://api.qrserver.com/v1/create-qr-code/?size=${QRsize}x${QRsize}&data=${encodeURIComponent(QRdata)}`;
//             setImg(url);
//         } catch (error) {
//             console.error("Error Generating QR code : " + error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     function downloadQR() {
//         const fileName = getDomainName(QRdata);
//         fetch(img)
//             .then((res) => {
//                 return res.blob();
//             })
//             .then((blob) => {
//                 const link = document.createElement("a");
//                 link.href = URL.createObjectURL(blob);
//                 // link.download = "QR-code.png";
//                 link.download = fileName;
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//             })
//             .catch((error) => {
//                 console.error("Error downloading   : " + error);
//             });
//     }
//     const getDomainName = (url) => {
//         try {
//             const parsedUrl = new URL(url);
//             const hostnameParts = parsedUrl.hostname.split(".");
//             // If the hostname has more than 2 parts, return the second-to-last part
//             // This will not work for domains like "co.uk", for which further handling might be needed
//             return hostnameParts.length > 2
//                 ? hostnameParts[hostnameParts.length - 2]
//                 : hostnameParts[0];
//         } catch (error) {
//             console.error("Invalid URL", error);
//             return null;
//         }
//     };

//     // const getDomainName = (url) => {
//     //     try {
//     //         const parsedUrl = new URL(url);
//     //         return parsedUrl.hostname;
//     //     } catch (error) {
//     //         console.error("Invalid URL", error);
//     //         return null;
//     //     }
//     // };
//     return (
//         <div className="flex h-screen w-screen items-center justify-center">
//             <div className="w-96 rounded-lg border-2 border-blue-700 p-4">
//                 <div className="text-center">
//                     <h5 className="font-bold text-blue-600">QR CODE GENERATOR</h5>
//                     <img src={img} alt="" className="mx-auto h-40 w-40" />
//                 </div>

//                 <div className="">
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="qrData" className="text-sm text-blue-700">
//                             Data for QR Code
//                         </label>
//                         <input
//                             type="text"
//                             id="qrData"
//                             onChange={(e) => setQRdata(e.target.value)}
//                             className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
//                         />
//                     </div>
//                     <div className="mt-3 flex flex-col gap-2">
//                         <label htmlFor="imgSize" className="text-sm text-blue-700">
//                             QR Image size (eg.180)
//                         </label>
//                         <input
//                             type="number"
//                             id="imgSize"
//                             onChange={(e) => setQRsize(e.target.value)}
//                             className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
//                         />
//                     </div>
//                 </div>
//                 <div className="mt-5 flex justify-between">
//                     {loading ? (
//                         <button
//                             disabled
//                             type="button"
//                             className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             <svg
//                                 aria-hidden="true"
//                                 role="status"
//                                 className="me-3 inline h-4 w-4 animate-spin text-white"
//                                 viewBox="0 0 100 101"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                                     fill="#E5E7EB"
//                                 />
//                                 <path
//                                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                                     fill="currentColor"
//                                 />
//                             </svg>
//                             Loading...
//                         </button>
//                     ) : (
//                         <button
//                             onClick={generateQR}
//                             disabled={loading}
//                             className="rounded-md bg-blue-700 px-3 py-1 text-white"
//                         >
//                             Generate QR Code
//                         </button>
//                     )}

//                     <button
//                         onClick={downloadQR}
//                         className="rounded-md bg-green-700 px-3 py-1 text-white"
//                     >
//                         Download QR Code
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QrCode;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useRef, useState } from "react";
import sampleQR from "/img/sampleQR.jpg";

const QrCode = () => {
    const qrDataRef = useRef("React QR generator");
    const qrSizeRef = useRef("150");

    const [img, setImg] = useState(sampleQR);
    const [loading, setLoading] = useState(false);

    console.count("before");

    function generateQR() {
        const QRdata = qrDataRef.current.value;
        const QRsize = qrSizeRef.current.value;

        console.count("Generate QR fun ");
        setLoading(true);

        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${QRsize}x${QRsize}&data=${encodeURIComponent(QRdata)}`;
            setImg(url);
        } catch (error) {
            console.error("Error Generating QR code : " + error);
        } finally {
            setLoading(false);
        }
    }

    function downloadQR() {
        console.count("download QR fun ");
        const fileName = getDomainName(qrDataRef.current.value);
        fetch(img)
            .then((res) => {
                return res.blob();
            })
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error downloading   : " + error);
            });
    }
    const getDomainName = (url) => {
        console.count("Get domain name");

        try {
            const parsedUrl = new URL(url);
            const hostnameParts = parsedUrl.hostname.split(".");
            return hostnameParts.length > 2
                ? hostnameParts[hostnameParts.length - 2]
                : hostnameParts[0];
        } catch (error) {
            console.error("Invalid URL", error);
            return null;
        }
    };

    console.count("final re render");
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="w-96 rounded-lg border-2 border-blue-700 p-4">
                <div className="text-center">
                    <h5 className="font-bold text-blue-600">QR CODE GENERATOR</h5>
                    <img src={img} alt="" className="mx-auto h-40 w-40" />
                </div>

                <div className="">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="qrData" className="text-sm text-blue-700">
                            Data for QR Code
                        </label>
                        <input
                            type="text"
                            id="qrData"
                            ref={qrDataRef}
                            className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
                        />
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                        <label htmlFor="imgSize" className="text-sm text-blue-700">
                            QR Image size (eg.180)
                        </label>
                        <input
                            type="number"
                            id="imgSize"
                            ref={qrSizeRef}
                            className="rounded-md border-2 border-blue-500 p-1 focus:border-blue-700"
                        />
                    </div>
                </div>
                <div className="mt-5 flex justify-between">
                    {loading ? (
                        <button
                            disabled
                            type="button"
                            className="me-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="me-3 inline h-4 w-4 animate-spin text-white"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Loading...
                        </button>
                    ) : (
                        <button
                            onClick={generateQR}
                            // disabled={loading}
                            className="rounded-md bg-blue-700 px-3 py-1 text-white"
                        >
                            Generate QR Code
                        </button>
                    )}

                    <button
                        onClick={downloadQR}
                        className="rounded-md bg-green-700 px-3 py-1 text-white"
                    >
                        Download QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QrCode;
