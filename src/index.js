import dotenv from "dotenv";
import {
  OkraClient,
  Accounts,
  Banks,
  Customers,
  Balance,
  Wallet,
  Sandbox,
  Auth,
  Reports,
  Liabilities
} from "./okra-client.js";

dotenv.config({ path: "../.env" });

const env = process.env.ENV;
const okraSecret = process.env.SECRET;

const client = new Liabilities(okraSecret, env);

async function get() {
  try {
    // const res = await client.getPayAutherizations({customer: '123'})
    const res = await client.get({ from: "2022-01-02", to: "2022-05-01" });
    console.log("GOOD", res);
    const nextpage = await res.nextPage();
    // await res.delete();
    console.log("NEXT PAGE", nextpage);
    const prevpage = await nextpage.prevPage();
    console.log("PREV PAGE", prevpage);
  } catch (error) {
    console.log("BAD", error);
  }
}

get();
