import Header from "./h-header";
import Swiper from "./h-swiper";
import Fenzu from "./h-fenzu";
import Introduce from "./h-introduce";
import Hkong from "./h-kong";
class Home extends React.Component{
	render(){
		return(
			<div style={stylesheets.hbigbox}>
				<content style={stylesheets.content}>
					<Header />
					<Swiper />
					<Fenzu />
					<Introduce />
					<Hkong />
				</content>
			</div>
		)
	}
}
export default Home;

