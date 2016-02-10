
var ejs = require("ejs");

var mysql = require('./mysql.js');
var state=null;
var city=null;
var all_years=null;
var cal_data=null;
var city_data=null;
var all_services=null;
var nation_data=null;

function homepage(req,res) {

	
			var year=null;
	year=req.param("year");
	
	console.log("Year:-"+year);
	var query = "select * from homeless.city where city_id  in (19,38,43,44,34,37,42,33,1)  ;";
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				var getUser1 = "select distinct year from state_count order by year desc";
console.log(getUser1);
				mysql.fetchData(function(err, result) {
					if (err) {
						throw err;
					} else {
						if (result.length > 0) {
							for ( var j = 0; j < result.length; j++) {
								console.log("Years:- "+result[j].year);
							} ;
							all_years=result;
						}
					}
				}, getUser1);
				
				var getUser2 = "select * from service;";
				console.log(getUser2);
								mysql.fetchData(function(err, result) {
									if (err) {
										throw err;
									} else {
										if (result.length > 0) {
											for ( var j = 0; j < result.length; j++) {
												console.log("Services:- "+result[j].year);
											} ;
											all_services=result;
										}
									}
								}, getUser2);
				
				city = results;
				
				console.log(state);
				res.render('homepage', {
					city : city,
					all_years:all_years,
					all_services:all_services
					
				});
			
			}

		}
	}, query);

}



function register(req, res) {

	var firstName = req.param("firstname");
	var lastName = req.param("lastname");
	var emailid = req.param("email");
	var service = req.param("service");
	var city  =req.param("city1");
	console.log("MySQL"+mysql);

	var query = "insert into volunteer(firstname, lastname, emailid, service,city)"
			+ " values('"
			+ firstName
			+ "', '"
			+ lastName
			+ "', '"
			+ emailid
			+ "', '"
			+ service
			+ "','"
			+ city
			+ "');";
	console.log("Query is:" + query);

	mysql.fetchData(function(err, results) {
		if (err) {

			throw err;
		} else {
			console.log(results);
			ejs.renderFile('./views/Register.ejs', function(err, result) {
				// render on success
				if (!err) {
					res.end(result);
				}
				// render or error
				else {
					res.end('An error occurred');
					console.log(err);
				}
			});
		}
	}, query);
}



function stateDataForm(req,res) {
	ejs.renderFile('./views/stateData.ejs',function(err, result)
			{
	   // render on success
	   if (!err) 
	   {
	            res.end(result);
	   }
	   // render or error
	   else
	   {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });

}
function stateData(req,res) {
	
	var year=null;
	year=req.param("year");
	
	console.log("Year:-"+year);
	var query = "select st.statename,st.stateabbrv,sc.count,sc.year from state_count sc,state st where st.state_id=sc.stateid_sc  and  year='"+year+"';";
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				var getUser1 = "select distinct year from state_count order by year desc";
console.log(getUser1);
				mysql.fetchData(function(err, result) {
					if (err) {
						throw err;
					} else {
						if (result.length > 0) {
							for ( var j = 0; j < result.length; j++) {
								console.log("Years:- "+result[j].year);
							} ;
							all_years=result;
						}
					}
				}, getUser1);
				
				state = results;
				
				console.log(state);
				res.render('stateDataGraph', {
					state : state,
					all_years:all_years
					
				});
			
			}

		}
	}, query);

	
}

function national(req,res) {
	
	var query = "select * from nation_data;" ;
   
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				
				
				nation_data = results;
				
				console.log(state);
				res.render('nationalData', {
					nation_data : nation_data
					
					
				});
			
			}

		}
	}, query);

	
}



function countyServices(req,res) {
	var service_data=null;
	var cityName=null;
	cityName=req.param("cityName");
	var serviceId=req.param("serviceId");
	console.log("City:-"+cityName);
	var query = "select  s.*,c.*,m.* from serviceinfo s,city c,service m where s.cityid_si=c.city_id and s.serviceid_si=m.serviceid and cityid_si=(select city_id from city where cityname='"+cityName+"') and serviceid_si='" + serviceId +"';" ;
   
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				
				
				service_data = results;
				
				console.log(state);
				res.render('countyServices', {
					service_data : service_data,
					
					
				});
			
			}

		}
	}, query);

	
}
	
function homelessFacts(req,res) {

	ejs.renderFile('./views/infographics.ejs',function(err, result)
			{
	   // render on success
	   if (!err) 
	   {
	            res.end(result);
	   }
	   // render or error
	   else
	   {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}


function californiaData(req,res) {
	
	var cityName=null;
	cityName=req.param("cityName");
	//var city_data;
	
	console.log("city:-"+cityName);
	var query = "select cat.*,info.*,c.* from category cat,categoryinfo info,city c  where cat.categoryId=info.categoryid_ci and info.cityid_ci=c.city_id and c.cityname='"+cityName+"';";
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				var getUser1 = "select distinct year from state_count order by year desc";
console.log(getUser1);
				mysql.fetchData(function(err, result) {
					if (err) {
						throw err;
					} else {
						if (result.length > 0) {
							for ( var j = 0; j < result.length; j++) {
								console.log("Years:- "+result[j].year);
							} ;
							var getUser2 = "select cat.*,info.*,c.* from category cat,categoryinfo info,city c  where cat.categoryId=info.categoryid_ci and info.cityid_ci=c.city_id and c.cityname='"+cityName+"'and year='2013'and CategoryName='age'";
							console.log(getUser2);
											mysql.fetchData(function(err, result1) {
												if (err) {
													throw err;
												} else {
													if (result1.length > 0) {
														for ( var j = 0; j < result1.length; j++) {
															console.log("************:- "+result1[j].categorytype);
														} ;
														city_data=result1;
														for ( var j = 0; j < city_data.length; j++) {
															console.log("************CITYYYYYYY:- "+city_data[j].categorytype);
														} ;			
														
														res.render('californiaData', {
															cal_data : cal_data,
															all_years:all_years,
															city_data : city_data
															
														});
															
													}
												}
											}, getUser2);
							
										
											all_years=result;
							
						}
					}
				}, getUser1);
				
		
					
				cal_data = results;
				
				
			
			
			}

		}
	}, query);

	
}

function californiaDataCategoryWise(req,res) {
	
	
	var city=req.param("city");
	var year=req.param("year");
	var categoryType=req.param("categoryType");
	var query;
	
	console.log("city:-"+city);
	console.log("category:-"+categoryType);
console.log("Year"+year);
	if (categoryType!='veterans') {
	query = "select cat.*,info.*,c.* from category cat,categoryinfo info,city c  where cat.categoryId=info.categoryid_ci and info.cityid_ci=c.city_id and c.cityname='"+city+"'and year='"+year+"'and CategoryName='"+categoryType+"';";
	}
	else {
		query= "select cat.*,info.*,c.* from category cat,categoryinfo info,city c  where cat.categoryId=info.categoryid_ci and info.cityid_ci=c.city_id and c.cityname='"+city+"'and CategoryName='"+categoryType+"';";
		
	}
	console.log("Query is:" + query);
	
	
	mysql.fetchData(function(err, results) {
		if (err) {
			throw err;
		} else {
			if (results.length > 0) {
				for ( var i = 0; i < results.length; i++) {
					console.log(results[i].count);
				} 
				var getUser1 = "select distinct year from state_count order by year desc";
console.log(getUser1);
				mysql.fetchData(function(err, result) {
					if (err) {
						throw err;
					} else {
						if (result.length > 0) {
							for ( var j = 0; j < result.length; j++) {
								console.log("Years:- "+result[j].year);
							} ;
							all_years=result;
						}
					}
				}, getUser1);
				
				city_data = results;
				
				console.log(state);
				res.render('californiaData', {
					city_data : city_data,
					all_years:all_years,
					cal_data : cal_data
				});
			
			}

		}
	}, query);

	
}

exports.national=national;
exports.register=register;
exports.homelessFacts=homelessFacts;
exports.californiaDataCategoryWise=californiaDataCategoryWise;
exports.californiaData=californiaData;
exports.homepage=homepage;
exports.stateDataForm=stateDataForm;
exports.stateData=stateData;
exports.countyServices=countyServices;