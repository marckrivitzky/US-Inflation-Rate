
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Card, Row, Col, InputGroup} from 'react-bootstrap'
import {HiArrowSmRight} from 'react-icons/hi'
import timeLine from "../assets/inflation3.png"

export default class MainPage extends React.Component{
	constructor(props){
		super(props)
			this.state = {
				amount: null,
				converted: null,
				when: 'Year:',
				slaveTrade: 22.31,
				warOf: 21.14,
				andrewJackson: 29.59,
				charlesDarwin: 31.95,
				migration: 36.99,
				kanNebAct: 33.47,
				lincoln: 17.25,
				hayes: 26.28,
				statueOfLib: 29.91,
				olympics: 33.47,
				roosevelt: 31.95,
				flu: 18.62,
				stockMarket: 16.44,
				wwIIStart: 20.23,
				wwIIEnd: 15.62,
				koreanWar: 11.67,
				MLK: 9.19,
				roeVWade: 6.33,
				grenada: 2.82,
				persianGulfWar: 2.15,
			}
		
	}

	convertSlaveTrade = () => {this.setState({converted: this.state.amount * this.state.slaveTrade, when: 'Year: 1808'})}
	convertWarOf = () => {this.setState({converted: this.state.amount * this.state.warOf, when: 'Year: 1812'})}
	convertAndrewJackson = () => {this.setState({converted: this.state.amount * this.state.andrewJackson, when: 'Year: 1828'})}
	convertDarwin = () => {this.setState({converted: this.state.amount * this.state.charlesDarwin, when: 'Year: 1835'})}
	convertMigration = () => {this.setState({converted: this.state.amount * this.state.migration, when: 'Year: 1845'})}
	convertKanNebAct = () => {this.setState({converted: this.state.amount * this.state.kanNebAct, when: 'Year: 1854'})}
	convertLincoln = () => {this.setState({converted: this.state.amount * this.state.lincoln, when: 'Year: 1865'})}
	convertHayes = () => {this.setState({converted: this.state.amount * this.state.hayes, when: 'Year: 1876'})}
	convertStatueOfLib = () => {this.setState({converted: this.state.amount * this.state.statueOfLib, when: 'Year: 1886'})}
	convertOlympics = () => {this.setState({converted: this.state.amount * this.state.olympics, when: 'Year: 1896'})}
	convertRoosevelt = () => {this.setState({converted: this.state.amount * this.state.roosevelt, when: 'Year: 1905'})}
	convertFlu = () => {this.setState({converted: this.state.amount * this.state.flu, when: 'Year: 1918'})}
	convertStockMarket = () => {this.setState({converted: this.state.amount * this.state.stockMarket, when: 'Year: 1929'})}
	convertwwIIStart = () => {this.setState({converted: this.state.amount * this.state.wwIIStart, when: 'Year: 1939'})}
	convertwwIIEnd = () => {this.setState({converted: this.state.amount * this.state.wwIIEnd, when: 'Year: 1945'})}
	convertKoreanWar = () => {this.setState({converted: this.state.amount * this.state.koreanWar, when: 'Year: 1950'})}
	convertMLK = () => {this.setState({converted: this.state.amount * this.state.MLK, when: 'Year: 1963'})}
	convertRoeVWade = () => {this.setState({converted: this.state.amount * this.state.roeVWade, when: 'Year: 1973'})}
	convertGrenada = () => {this.setState({converted: this.state.amount * this.state.grenada, when: 'Year: 1983'})}
	convertGulfWar = () => {this.setState({converted: this.state.amount * this.state.persianGulfWar, when: 'Year: 1990'})}

	 handleInputChangeAmount = (e) => {this.setState({ amount: e.target.value });}	

	render(){
		let arrows = <HiArrowSmRight size={90} color={'white'} />
		return(
			<div className="container">
				<div className="container-position">
				
					<Card style={{width: "max-content", position: 'relative', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'rgb(6, 64, 27)', border:'7px solid rgb(6, 64, 27)'}}>
						<h1 className="title-labels">US Inflation Calculator</h1>
						<div className="form">
							<br/>
							<Row>
							<Form.Group as={Col} controlId="formGridZip">
								<h3 className="title-labels">{this.state.when}</h3>
								{/* <Form.Label >US Currency Amount</Form.Label> */}
									<InputGroup style={{width: '300px'}} className="mb-3">
								    	<InputGroup.Text>$</InputGroup.Text>
								  	 		 <Form.Control  type="number" value={ this.state.amount } onChange={ this.handleInputChangeAmount }  />
								    	<InputGroup.Text>.00</InputGroup.Text>
								 	 </InputGroup>
							</Form.Group>
							<Col>
								{arrows}
							</Col>
						

							<Form.Group as={Col} controlId="formGridZip">
								<h3 className="title-labels">Present Day</h3>
								{/* <Form.Label>{this.state.where}</Form.Label> */}
									<InputGroup style={{width: '300px'}} className="mb-3">
								    	<InputGroup.Text>$</InputGroup.Text>
								  	 		 <Form.Control disabled="true" type="number" value={ this.state.converted }  />
								    	
								 	 </InputGroup>
							</Form.Group>
							</Row>
						</div>

						<br/>	
						<div className="home-page-body">
						
							<Card style={{width: 'fit-content', position: 'relative', marginLeft: 'auto', marginRight: 'auto', border: '7px solid white'}}>
								<img src={timeLine} width={'100%'} alt='map' id="my-timeline" />
								<button className="btn btn-success" id="slave-trade-button" onClick={()=>{this.convertSlaveTrade();}}>1808</button>
								<button className="btn btn-success" id="war-of-button" onClick={()=>{this.convertWarOf();}}>1812</button>
								 <button className="btn btn-success" id="jackson-button" onClick={()=>{this.convertAndrewJackson();}}>1828</button>
								<button className="btn btn-success" id="darwin-button" onClick={()=>{this.convertDarwin();}}>1835</button>
								<button className="btn btn-success" id="migration-button" onClick={()=>{this.convertMigration();}}>1845</button>
								<button className="btn btn-success" id="kan-neb-act-button" onClick={()=>{this.convertKanNebAct();}}>1854</button>
								<button className="btn btn-success" id="lincoln-button" onClick={()=>{this.convertLincoln();}}>1865</button>
								<button className="btn btn-success" id="hayes-button" onClick={()=>{this.convertHayes();}}>1876</button>
								<button className="btn btn-success" id="statue-of-liberty-button" onClick={()=>{this.convertStatueOfLib();}}>1886</button>
								<button className="btn btn-success" id="olympics-button" onClick={()=>{this.convertOlympics();}}>1896</button>	
								<button className="btn btn-success" id="roosevelt-button" onClick={()=>{this.convertRoosevelt();}}>1905</button>
								<button className="btn btn-success" id="flu-button" onClick={()=>{this.convertFlu();}}>1918</button>
								<button className="btn btn-success" id="stock-market-button" onClick={()=>{this.convertStockMarket();}}>1929</button>							
								<button className="btn btn-success" id="wwII-start-button" onClick={()=>{this.convertwwIIStart();}}>1939</button>
								<button className="btn btn-success" id="wwII-end-button" onClick={()=>{this.convertwwIIEnd();}}>1945</button>
								<button className="btn btn-success" id="korean-war-button" onClick={()=>{this.convertKoreanWar();}}>1950</button>
								<button className="btn btn-success" id="MLK-button" onClick={()=>{this.convertMLK();}}>1963</button>
								<button className="btn btn-success" id="roe-v-wade-button" onClick={()=>{this.convertRoeVWade();}}>1973</button>
								<button className="btn btn-success" id="grenada-button" onClick={()=>{this.convertGrenada();}}>1983</button>
								<button className="btn btn-success" id="gulf-war-button" onClick={()=>{this.convertGulfWar();}}>1990</button> 
							</Card>

						</div>
						<br />
						
				</Card>

				</div>

			</div>
		);
	}

}