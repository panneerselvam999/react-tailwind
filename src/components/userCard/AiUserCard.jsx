// export default function AiUserCard() {
//     return (
//         <div className="w-full max-w-md bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-lg">
//             <div className="relative">
//                 <img src="/placeholder.svg" alt="Profile Photo" width={400} height={240} className="w-full h-60 object-cover" />
//                 <div className="absolute bottom-4 left-4 bg-gray-900 bg-opacity-50 rounded-full p-1">
//                     <div className="bg-green-500 rounded-full w-3 h-3" />
//                 </div>
//             </div>
//             <div className="p-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                     <div className="space-y-1">
//                         <h3 className="text-xl font-bold">Jane Doe</h3>
//                         <p className="text-gray-500 dark:text-gray-400">San Francisco, CA</p>
//                     </div>
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         Software Engineer
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         JavaScript
//                     </div>
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         React
//                     </div>
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         Node.js
//                     </div>
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         CSS
//                     </div>
//                     <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
//                         Git
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

//------------------------------------------------------------------------------------------------------

import cardDetails from "../../JsonData/userCard.json";

export default function AiUserCard() {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {cardDetails.userDate.map((user) => (
                <div
                    key={user.id}
                    className="m-6 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-950"
                >
                    <div>
                        <div className="relative">
                            <img
                                src={user.profile}
                                alt="Profile Photo"
                                width={400}
                                height={240}
                                className="h-60 w-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 rounded-full bg-gray-900 bg-opacity-50 p-1">
                                <div className="h-3 w-3 rounded-full bg-green-500" />
                            </div>
                        </div>
                        <div className="space-y-4 p-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {user.city}
                                    </p>
                                </div>
                                <div className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                    {user.description}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {user.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
