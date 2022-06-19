import axios from "axios";
import { Component } from "react";

class AddMobile extends Component{

	state = {
		brand : "",
		model : "",
		capacity : "",
		price : ""
	}

	onBrandChange = (e) => {
		this.setState({
			brand : e.target.value
		})
	}
	onModelChange = (e) => {
		this.setState({
			model : e.target.value
		})
	}
	onPriceChange = (e) => {
		this.setState({
			price : e.target.value
		})
	}
	onCapacityChange = (e) => {
		this.setState({
			capacity : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			brand : this.state.brand,
			model : this.state.model,
			capacity : this.state.capacity,
			price : this.state.price,
		}

		axios.post("http://localhost:8081/api/v1/mobile", data)
		.then(
			(res) => { console.log("SUCCESS "+res) }
		)
		.catch(
			(err) => { console.log("ERROR : "+err) }
		)

	}


	render(){
		return(
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<form id="add-mobile-form" onSubmit={this.handleSubmit}>
						<div className="mb-3">
							<label htmlFor="brand" className="form-label">Brand</label>
							<input type="text" onChange={this.onBrandChange} className="form-control" id="brand"/>
						</div>
						<div className="mb-3">
							<label htmlFor="model" className="form-label">Model</label>
							<input type="text" onChange={this.onModelChange} className="form-control" id="model"/>
						</div>
						<div className="mb-3">
							<label htmlFor="capacity" className="form-label">Capacity</label>
							<input type="text" onChange={this.onCapacityChange} className="form-control" id="capacity"/>
						</div>
						<div className="mb-3">
							<label htmlFor="price" className="form-label">Price</label>
							<input type="text" onChange={this.onPriceChange} className="form-control" id="price"/>
						</div>
						<button id="btn-submit" type="submit" className="btn btn-primary">Add</button>
					</form>
				</div>
			</div>
		)
	}

}

export default AddMobile;