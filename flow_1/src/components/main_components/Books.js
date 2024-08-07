import DashboardFilters from "../helper_components/DashboardFilters";

const Books = ({ data }) => {

    const rows = data || [
        {
            "no": 1,
            "author": "Harry",
            "owner": "Abebe T",
            "category": "Fiction",
            "bookname": "Dertogada",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 2,
            "author": "Harry",
            "owner": "Samuel K",
            "category": "Science Fiction",
            "bookname": "Galactic Odyssey",
            "status": "Active",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 3,
            "author": "Harry",
            "owner": "Maya S",
            "category": "Non-Fiction",
            "bookname": "Understanding Quantum Physics",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 4,
            "author": "Harry",
            "owner": "John D",
            "category": "Fantasy",
            "bookname": "Dragon's Realm",
            "status": "Active",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 5,
            "author": "Harry",
            "owner": "Lara B",
            "category": "Mystery",
            "bookname": "The Hidden Clue",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 6,
            "author": "Harry",
            "owner": "Emma R",
            "category": "Historical",
            "bookname": "The Ancient Chronicles",
            "status": "Active",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 7,
            "author": "Harry",
            "owner": "Michael J",
            "category": "Biography",
            "bookname": "Life of a Legend",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 8,
            "author": "Harry",
            "owner": "Sophia L",
            "category": "Self-Help",
            "bookname": "Master Your Mindset",
            "status": "Active",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 9,
            "author": "Harry",
            "owner": "Oliver P",
            "category": "Romance",
            "bookname": "Love's Journey",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 10,
            "author": "Harry",
            "owner": "Isabella W",
            "category": "Adventure",
            "bookname": "Exploring New Worlds",
            "status": "Active",
            "profilepic": "profile_picture.avif"
        },
        {
            "no": 11,
            "author": "Harry",
            "owner": "James H",
            "category": "Horror",
            "bookname": "The Haunting",
            "status": "Inactive",
            "profilepic": "profile_picture.avif"
        }
    ]



    return (
        <div className="bg-white px-8 pt-10  rounded-xl">
            <DashboardFilters />
            <table className="w-full mt-4 ">

                <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "20%" }} />
                </colgroup>

                <tr className="text-gray-500 font-extralight text-sm border-b-2 border-gray-100 ">
                    <td className="p-2">No.</td>
                    <td className=" mr-5">Author</td>
                    <td>Owner</td>
                    <td>Category</td>
                    <td>Book Name</td>
                    <td>Status</td>
                </tr>
                {
                    rows.map(row => {
                        return <tr className="text-sm mt-2 border-b-2 border-gray-100">
                            <td className="p-4">{row.no}</td>
                            <td className="p-4">{row.author}</td>
                            <td>
                                <div className="flex gap-2 items-center">
                                    <img src={row.profilepic} className="w-6 h-6 rounded-full" />
                                    <h1 className="">{row.owner}</h1>
                                </div>
                            </td>
                            <td className="text-gray-500">{row.category}</td>
                            <td className="text-gray-500">{row.bookname}</td>
                            <td>
                                <div className="flex gap-2 items-center bg-green-200 rounded-lg">
                                    <img src="active.svg" className="w-5 h-5"/>
                                    <div>{row.status}</div>
                                </div>
                            </td>
                        </tr>
                    })
                }

            </table>
        </div>
    );
}

export default Books;