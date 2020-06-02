/* eslint-disable camelcase */
import axios from "axios";
import Okra from "../src/api";
import config from "../src/config";

jest.mock("axios");

require("dotenv").config();

const token = "AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.";

describe("api", () => {
  const payload = { id: "7a4099cc4b2" };
  const errorMessage = "Error Message";
  let okra;

  beforeEach(() => {
    axios.mockReset();
  });

  describe("getAuth", () => {
    beforeEach(() => {
      okra = Okra({ token });
    });

    describe("when the request callback passes", () => {
      beforeEach(() => {
        axios.mockResolvedValue({ data: { records: {} } });
      });

      it("should return results and no error", () => {
        okra.getAuth(payload, (error, response) => {
          expect(error).toBeNull();
          expect(response).toEqual({ records: {} });
        });

        expect(axios).toHaveBeenCalledWith({
          url: `${config.apiURL}/getAuth`,
          method: "POST",
          data: payload
        });
      });
    });

    describe("when the request callback fails", () => {
      beforeEach(() => {
        axios.mockRejectedValue(new Error(errorMessage));
      });

      it("should return an error and no results", () => {
        okra.getAuth(payload, (error, response) => {
          expect(error.message).toEqual(errorMessage);
          expect(response).toBeNull();
        });

        expect(axios).toHaveBeenCalledWith({
          url: `${config.apiURL}/getAuth`,
          method: "POST",
          data: payload
        });
      });
    });

    describe("when the request promise passes", () => {
      beforeEach(() => {
        axios.mockResolvedValue({ data: { records: {} } });
      });

      it("should return results and no error", async () => {
        try {
          const response = await okra.getAuth(payload);

          expect(response).toEqual({ records: {} });
        } catch (error) {
          expect(error).toBeNull();
        }

        expect(axios).toHaveBeenCalledWith({
          url: `${config.apiURL}/getAuth`,
          method: "POST",
          data: payload
        });
      });
    });

    describe("when the request promise fails", () => {
      beforeEach(() => {
        axios.mockRejectedValue(new Error(errorMessage));
      });

      it("should return an error and no results", async () => {
        try {
          await okra.getAuth(payload);
        } catch (error) {
          expect(error.message).toEqual(errorMessage);
        }

        expect(axios).toHaveBeenCalledWith({
          url: `${config.apiURL}/getAuth`,
          method: "POST",
          data: payload
        });
      });
    });
  });

  describe("getBanks", () => {
    beforeEach(() => {
      okra = Okra();
    });

    describe("when the request callback passes", () => {
      beforeEach(() => {
        axios.mockResolvedValue({ data: { records: {} } });
      });

      it("should return results and no error", () => {
        okra.getBanks((error, response) => {
          expect(error).toBeNull();
          expect(response).toEqual({ records: {} });
        });

        expect(axios).toHaveBeenCalledWith({
          url: `${config.apiURL}/banks`,
          method: "GET"
        });
      });
      // TBC
    });
  });
});
