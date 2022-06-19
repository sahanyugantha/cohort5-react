import axios from "axios";
import { Component } from "react";

//http://localhost:8081/api/v1/mobile
class Home extends Component{

	state = {
		error : null,
		isLoaded : false,
		items : []
	}

	componentDidMount(){
		axios.get("http://localhost:8081/api/v1/mobile")
		.then(
			(result) => {
				this.setState({
					isLoaded : true,
					items : result.data
				})
			},
			(error) => {
				this.setState({
					isLoaded : true,
					error : error
				})
			}
		)
	}

	render(){
		const {error, isLoaded, items} = this.state;

		if(error){
			return(
				<h1>Error : {error.message}</h1>
			)
		} else if(!isLoaded){
			return(
				<h1>Loading...</h1>
			)
		} else {
			return(
				<div className="content">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<table className="table table-dark table-hover">
								<thead>
									<tr>
										<td>Brand</td>
										<td>Model</td>
										<td>Capacity</td>
										<td>Price</td>
									</tr>
								</thead>
								<tbody>
									{items.map(item => (
										<tr key="{item.id}">
											<td>{item.brand}</td>
											<td>{item.model}</td>
											<td>{item.capacity}</td>
											<td>{item.price}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Home;


