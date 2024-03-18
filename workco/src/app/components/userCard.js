 export const UserCardOnline = ({userName, activity}) => {
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10 pt-2 px-10" >
            {/* <Image src="/../../../public/logo3.png" width={500} height={500} alt="Picture of the author"/> */}
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userName}</h5>
                <span class="text-sm text-green-600 dark:text-gray-400">{activity}</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="/room/49FJ9gs85bwkj4d8dgyr98" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Room</a>
                </div>
            </div>
        </div>
    );
}

export const UserCardOffline = ({userName}) => {
    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10 pt-2 px-10" >
            {/* <Image src="/../../../public/logo3.png" width={500} height={500} alt="Picture of the author"/> */}
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userName}</h5> 
                <span class="text-sm text-red-500 dark:text-gray-400">Away right now</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Reminder</a>
                </div>
            </div>
        </div>
    );
}