import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"

import {chartData} from "../../dummyData"
import WidgetsSm from "../../components/widgetsSM/WidgetsSm"
import WidgetsLg from "../../components/widgetsLg/WidgetsLg"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="home-container">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={chartData} title="Sales Analytics" grid dataKey="Sales"/>
          <div className="homeWidgets">
            <WidgetsSm />
            <WidgetsLg />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home