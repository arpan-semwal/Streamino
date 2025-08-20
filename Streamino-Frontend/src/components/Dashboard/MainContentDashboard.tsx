import CardSection from "../Card/CardSection";
import DashboardCatLive from "./DashboardCatLive";

const MainContentDashboard : React.FC = () => {
	return(
		<div>
			<div className="flex flex-col w-full">
				<CardSection/>
				<DashboardCatLive/>
			</div>
		</div>
	);
	
}

export default MainContentDashboard;