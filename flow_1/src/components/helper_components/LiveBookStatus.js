import DashboardFilters from "./DashboardFilters";

const LiveBookStatus = ({ data }) => {
  
    const rows = data || [
        {
            no: 1,
            bookno: 6460,
            owner: "Abebe T",
            profilepic: 'profile_picture.avif',
            status: 'Rented',
            price: 40
        },
        {
            no: 2,
            bookno: 6461,
            owner: "Dawit T",
            profilepic: 'profile_picture.avif',
            status: 'Rented',
            price: 50
        },
        {
            no: 3,
            bookno: 6462,
            owner: "Henok S",
            profilepic: 'profile_picture.avif',
            status: 'Rented',
            price: 140
        },
        {
            no: 4,
            bookno: 6464,
            owner: "Kiros B",
            profilepic: 'profile_picture.avif',
            status: 'Active',
            price: 40
        },
        {
            no: 2,
            bookno: 6461,
            owner: "Samuel T",
            profilepic: 'profile_picture.avif',
            status: 'Active',
            price: 50
        },
        {
            no: 3,
            bookno: 6462,
            owner: "Birhanu T",
            profilepic: 'profile_picture.avif',
            status: 'Active',
            price: 140
        }
    ]

    const getBullet = (status) => <div className={`rounded-full w-3 h-3 ${status === 'Rented' ? 'bg-orange' : 'bg-green-500'}`}></div>

    return (
        <div className="bg-white px-8 rounded-xl">
            <DashboardFilters />

            {/* The Table */}
            <div className="">
                <h1 className="font-semibold text-lg ">Live Book Status</h1>
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
                        <td className=" mr-5">Book No.</td>
                        <td>Owner</td>
                        <td>Status</td>
                        <td>Price</td>
                    </tr>
                    {
                        rows.map(row => {
                            return <tr className="text-sm mt-2 border-b-2 border-gray-100">
                                <td className="p-4">{row.no}</td>
                                <td> <h1 className="bg-gray-100 text-center rounded-sm mr-5"> {row.bookno} </h1> </td>
                                <td>
                                    <div className="flex gap-2 items-center">
                                        <img src={row.profilepic} className="w-6 h-6 rounded-full" />
                                        <h1 className="">{row.owner}</h1>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex gap-2 items-center">
                                        <div>{getBullet(row.status)}</div>
                                        <div>{row.status}</div>
                                    </div>
                                </td>
                                <td>{row.price} Birr</td>
                            </tr>
                        })
                    }

                </table>
            </div>

        </div>
    );
}

export default LiveBookStatus;


