const DisplayNavItems = ({ items }) => {
    return (
        <div className="space-y-2">
            {
                items.map(item => {
                    return <button className="flex items-center gap-2 hover:bg-secondary w-full py-2 px-4 rounded-md hover:scale-105 transition duration-100" >
                        <img src={item.src} className="w-6 h-6" alt={item.name} />
                        <h1 className="text-xs text-white">{item.name}</h1>
                    </button>
                })
            }

        </div>
    );
}

export default DisplayNavItems;