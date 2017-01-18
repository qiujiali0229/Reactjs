import Intop from "./h-in-top";
import Xhtmx from "./h-xhtm";
import Major from "./h-major";
import Nine from "./h-nine";
class Introduce extends React.Component{
	render(){
		return (
			<div style={Introducestyle.instyle}>
				<Intop />
				<Xhtmx />
				<Major />
				<Nine />
			</div>
		)
	}
}
export default Introduce;