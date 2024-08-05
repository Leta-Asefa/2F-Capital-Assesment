import DoughNutChart from "../helper_components/DoughNutChart";
import Income from "../helper_components/Income";
import LineChart from "../helper_components/LineChart";
import LiveBookStatus from "../helper_components/LiveBookStatus";

const Dashboard = () => {
    const now = new Date();

    function formatDate(date) {
        const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
        const dateFormatter = new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
        const timeFormatter = new Intl.DateTimeFormat('en-GB', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
  
        const day = dayFormatter.format(date);
        const formattedDate = dateFormatter.format(date);
        let time = timeFormatter.format(date);
  
        // Replace ":" with "."
        time = time.replace(':', '.');
  
        return `${day}, ${formattedDate}, ${time}`;
      }
  
      const formattedDate = formatDate(now);
    return (
        <div className="dashboard-container">
            <div className="dashboard-left">
                <div >
                    <h1 className=" px-4 font-inter text-xl mt-8">This Month Statistics</h1>
                    <h2 className=" px-4 text-sm text-gray-400">{formatDate(now)}</h2>
                </div>

                <Income thismonth="9460.00" lastmonth="25658.00"/>
                <DoughNutChart/>

            </div>
            <div className="dashboard-right">
          <LiveBookStatus />
          <LineChart/>
            </div>
        </div>
    );
}

export default Dashboard;