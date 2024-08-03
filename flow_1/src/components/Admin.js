import DisplayNavItems from "./DisplayNavItems";
import Logo from "./Logo";

const Admin = () => {

    const firstBlockItems = [
        {
            name: "Dashboard",
            src: "dashboard.svg"
        },
        {
            name: "Books",
            src: "book.svg"
        },
        {
            name: "Owners",
            src: "owner.svg"
        },
        {
            name: "Other",
            src: "other.svg"
        },
        {
            name: "Other",
            src: "other.svg"
        }
    ]
    const secondBlockItems = [
        {
            name: "Notification",
            src: "notification.svg"
        },
        {
            name: "Setting",
            src: "setting.svg"
        },
        {
            name: "Log in as book owner",
            src: "user.svg"
        }
    ]

    return (
        <div className="admin-container">
            <navbar className="admin-navbar">
                <div className="flex  gap-3 items-center">
                    <img src="menu.svg" className="w-5 h-5" alt="logo" />
                    <Logo src="blue_logo2.svg" />
                </div>
                <hr className="mt-8 mb-6"></hr>
                <DisplayNavItems items={firstBlockItems} />
                <hr className="my-4"></hr>
                <DisplayNavItems items={secondBlockItems} />
                <button className="absolute bottom-3 bg-gray-300 bg-opacity-50 w-44 mx-auto flex items-center justify-center gap-2 p-2 rounded-md">
                    <img src="logout.svg" className="w-5 h-5" alt="logout button" />
                    <h1 className="text-white">Log out</h1>
              </button>

            </navbar>

            <main className="admin-main">

            </main>
        </div>
    );
}

export default Admin;