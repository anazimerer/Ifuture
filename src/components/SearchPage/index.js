import React, { useState, useEffect } from "react";
import { getRestaurants } from "../../functions/axios";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import { OutlinedInput } from "@material-ui/core";

import useInputValue from '../../hooks/useInput'

const SearchPage = () => {
	const [searchInput, setSearchInput]=useState("")
	const [statusSearch, setStatusSearch]=useState(true)
	const [listOfRestaurants, setListOfRestaurants]=useState()

	useEffect( ()  =>{
		(async () => {		
			const response= await getRestaurants()
			setListOfRestaurants(response)	
		 })()			
		
	}, [])
	
	console.log(listOfRestaurants)

	let mapOfRestaurants=""
	if (listOfRestaurants !== undefined){
		mapOfRestaurants=listOfRestaurants.map((rest)=>{
			return (
			<>
			<p>{rest.name}</p>
			<p>{rest.category}</p>
			</>
			);
		})
	}	

	let filteredList=""
	const filterList=()=>{
		console.log("search "+ searchInput)
		if (mapOfRestaurants !== ""){		
			filteredList= mapOfRestaurants.filter((restaurant) =>{
				if (restaurant.name === searchInput){
					return true
				}		
			})
		}else{
			alert('lista vazia')
		}	
	}	

	const handleChangeSearchInput=(event)=>{
		setSearchInput(event.target.value)
		filterList()
	}

  	return(
		<Container
		style={{ border: "1px solid red", height: "100vh" }}
		maxWidth="md"
	  	>
			<AppBar></AppBar>
			<div>
				<br />
				<br />
    		    <OutlinedInput
    		      type="text"
    		      name="searchInput"  
				  value={searchInput}
				  placeholder="Restaurante"
    		      pattern=""
    		      title="Esse campo só aceita letras" 
				  onChange={handleChangeSearchInput}
				  onChange={filterList}
    		    /> 				
				{filteredList}
			</div>
		</Container>
	);
};

export default SearchPage;
