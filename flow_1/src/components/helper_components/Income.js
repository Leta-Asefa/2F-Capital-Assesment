const Income = ({thismonth,lastmonth}) => {
    return (
        <div className="px-3 mt-8 ">
            <div className="shadow-custom px-3 py-5">
                <div className="w-full flex justify-between items-center px-0 text-gray-500 border-b-2 border-gray-200 pb-2 mb-3">
                    <h1 className="text-lg">Income</h1>
                    <h2 className="text-xs bg-gray-100 p-1 rounded-md text-gray-500">This month</h2>
                </div>

                <div className="flex justify-between items-baseline">
                    <h1 className="text-2xl font-bold">ETB{thismonth} </h1>
                    <h1 className="flex justify-between items-center">
                        <img src="down-arrow.svg" className="w-4 h-4" alt="arrow" />
                        <h2 className="text-orange font-bold text-sm">1.5%</h2>
                    </h1>
                </div>

                <h1 className="text-xs mt-3 text-gray-400">Compared to ETB9460 last month</h1>

                <h1 className="text-xs mt-2 text-gray-500 flex justify-between font-semibold">
                    <h2>Last Month Income</h2>
                    <h2>ETB{lastmonth}</h2>
                </h1>
            </div>
        </div>
    );
}

export default Income;