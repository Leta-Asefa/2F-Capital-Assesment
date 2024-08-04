const Income = () => {
    return (
        <div className="px-3 mt-10 ">
            <div className="shadow-custom px-3 py-5">
                <div className="w-full flex justify-between items-center px-4 text-gray-500 border-b-2 border-gray-200 pb-2 mb-3">
                    <h1 className="text-xl">Income</h1>
                    <h2 className="text-xs bg-gray-100 p-1 rounded-md text-gray-600">This month</h2>
                </div>

                <div className="flex justify-between items-baseline">
                    <h1 className="text-3xl font-bold">ETB9460.00 </h1>
                    <h1 className="flex justify-between items-center">
                        <img src="down-arrow.svg" className="w-5 h-5" alt="arrow" />
                        <h2 className="text-orange font-bold">1.5%</h2>
                    </h1>
                </div>

                <h1 className="text-sm mt-3 text-gray-400">Compared to ETB9460 last month</h1>

                <h1 className="text-sm mt-2 text-gray-500 flex justify-between font-semibold">
                    <h2>Last Month Income</h2>
                    <h2>ETB25658.00</h2>
                </h1>
            </div>
        </div>
    );
}

export default Income;