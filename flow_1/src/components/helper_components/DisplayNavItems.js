import { Link } from "react-router-dom";

const DisplayNavItems = ({ items }) => {
    return (
        <div className="space-y-2">
            {
                items.map(item => {
                    return<Link to={item.link}>
                    <button className="flex items-center gap-1 hover:bg-secondary w-full py-2 px-4 rounded-md hover:scale-105 transition duration-100" >
                        <img src={item.src} className="w-6 h-6" alt={item.name} />
                        <h1 className="text-xs text-white">{item.name}</h1>
                    </button>
                    </Link> 
                })
            }

        </div>
    );
}

export default DisplayNavItems;