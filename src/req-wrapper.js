import axios from "axios";

class RequsetWrapper {

async post(baseUrl, options, secret) {
    return axios({
      method: "POST",
      url: baseUrl,
      data: options,
      headers: { Authorization: `Bearer ${secret}` }
    });
  }

async put(baseUrl, options, secret) {
    return axios({
      method: "PUT",
      url: baseUrl,
      data: options,
      headers: { Authorization: `Bearer ${secret}` }
    });
  }

async get(baseUrl, options, secret) {
    let urlQueryParams = "?";
    for (const key in options) {
      urlQueryParams = `${urlQueryParams}${key}=${options[key]}&`;
    }
    const url = baseUrl + urlQueryParams;
    return axios({
      method: "GET",
      url,
      headers: { Authorization: `Bearer ${secret}` }
    });
  }

async delete(baseUrl, options, secret) {
    return axios({
      method: "DELETE",
      url: baseUrl,
      headers: { Authorization: `Bearer ${secret}` }
    });
  }

async requestHanlder(method, url, options, secret) {
    try {
      const request = await this[method.toLowerCase()](url, options, secret);
      const response =
        request.data.data.data != undefined
          ? request.data.data.data
          : request.data.data;
      // create next page method
      if (
        response.pagination != null &&
        response.pagination.hasNextPage === true
      ) {
        const nextPage = async () => {
          const pageNum = response.pagination.nextPage;
          options.page = pageNum;
          return this.requestHanlder(method, url, options, secret);
        };
        response.nextPage = nextPage;
      }
      // create previous page method
      if (
        response.pagination != null &&
        response.pagination.hasPrevPage === true
      ) {
        const prevPage = async () => {
          const pageNum = response.pagination.prevPage;
          options.page = pageNum;
          return this.requestHanlder(method, url, options, secret);
        };
        response.prevPage = prevPage;
      }
      return response;
    } catch (error) {
      if (error.response != undefined) {
        throw {
          error_payload: error.response.data,
          http_error_code: error.response.status
        };
      } else {
        throw error;
      }
    }
  }
}
export default RequsetWrapper;
