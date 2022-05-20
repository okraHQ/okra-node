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
  Reports
} from "./okra-client.js";

dotenv.config({ path: "../.env" });

const env = process.env.ENV;
const okraSecret = process.env.SECRET;

const client = new Reports(okraSecret, env);

async function get() {
  try {
    // const res = await client.getPayAutherizations({customer: '123'})
    const res = await client.get({ id: "6125e6d9697659860b6b2394" });
    console.log("GOOD", res);
    // const nextpage = await res.nextPage();
    await res.delete();
    console.log("NEXT PAGE", nextpage);
    const prevpage = await nextpage.prevPage();
    console.log("PREV PAGE", prevpage);
  } catch (error) {
    console.log("BAD", error);
  }
}

get();
