// @flow
import axios from "axios";

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const apiURL = 'https://dev-api.okra.ng/v1/'

module.exports = {
    getAuth: function(token, options, callback) {
    	var url = apiURL + 'products/auth/get';
	    const request = axios({
	      	method: 'POST',
		      url: url,
		      data: options,
		      headers: {"Authorization": `Bearer ${token}` }
		    });
		  
	      return request.then(response => {
		      if (response.data.status === "success") {
		        callback(null, response.data.data.auths)
		      } else {
		        callback(response.data.msg, null)
		      }
	    })
	},
	getTransactions: function(token, options, callback) {
    	var url = apiURL + 'products/transactions/get';
	    const request = axios({
	      	method: 'POST',
		      url: url,
		      data: options,
		      headers: {"Authorization": `Bearer ${token}` }
		    });
		  
	      return request.then(response => {
		      if (response.data.status === "success") {
		        callback(null, response.data.data.transactions)
		      } else {
		        callback(response.data.msg, null)
		      }
	    })
	},
	getBalance: function(token, options, callback) {
    	var url = apiURL + 'products/balance/get';
	    const request = axios({
	      	method: 'POST',
		      url: url,
		      data: options,
		      headers: {"Authorization": `Bearer ${token}` }
		    });
		  
	      return request.then(response => {
		      if (response.data.status === "success") {
		        callback(null, response.data.data.balances)
		      } else {
		        callback(response.data.msg, null)
		      }
	    })
	},
	getIdentity: function(token, options, callback) {
    	var url = apiURL + 'products/identity/get';
	    const request = axios({
	      	method: 'POST',
		      url: url,
		      data: options,
		      headers: {"Authorization": `Bearer ${token}` }
		    });
		  
	      return request.then(response => {
		      if (response.data.status === "success") {
		        callback(null, response.data.data.identities)
		      } else {
		        callback(response.data.msg, null)
		      }
	    })
	},
	getIncome: function(token, options, callback) {
    	var url = apiURL + 'products/income/get';
	    const request = axios({
	      	method: 'POST',
		      url: url,
		      data: options,
		      headers: {"Authorization": `Bearer ${token}` }
		    });
		  
	      return request.then(response => {
		      if (response.data.status === "success") {
		        callback(null, response.data.data.incomes)
		      } else {
		        callback(response.data.msg, null)
		      }
	    })
	},


}
