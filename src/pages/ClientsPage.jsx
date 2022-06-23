import React from "react";
import { useState } from "react";
import { ADDCLIENT } from "../api/constants";
import Layout from "../layout/Layout";
import TabsLayout from "../layout/TabsLayout";
import ClientTable from "./ClientTable";
import axios from 'axios'

const ClientForm = () => {
  const [client_name, setName] = useState("");
  const [mobile_number, setContact] = useState("");
  const [descriptions, setDescription] = useState("");
  const [data, setData] = useState([])

  const token = localStorage.getItem("token");
  console.log(token)
  console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: ADDCLIENT,
      method: "post",
      headers: { "Authorization": `Bearer ${token}` },
      data: {
        client_name, mobile_number, descriptions
      }
    })
      .then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  };
  return (
    <>
      <form
        className="w-full flex flex-col gap-5 p-5 md:p-0 mt-5 md:w-1/3"
      >
        Name
        <input
          className="border border-primaryBlack px-3 py-2 focus:border-primaryBlue outline-none w-full "
          placeholder="Enter Name"
          onChange={e => setName(e.target.value)}
        />
        Mobile Number
        <input
          className="border border-primaryBlack px-3 py-2 focus:border-primaryBlue outline-none w-full "
          placeholder="Enter Mobile Number"
          onChange={e => setContact(e.target.value)}
        />
        Description
        <input
          className="border border-primaryBlack px-3 py-2 focus:border-primaryBlue outline-none w-full "
          placeholder="Enter Description"
          onChange={e => setDescription(e.target.value)}
        />
        <div className="flex gap-5">
          <button
            type="submit"
            className="px-3 w-full py-2 text-primaryWhite bg-primaryBlue mt-4"
            onClick={handleSubmit}
          >Submit</button>
          <button
            type="submit"
            className="px-3 w-full py-2 text-primaryWhite bg-primaryBlue mt-4"
          >Cancel</button>
        </div>
      </form>
    </>
  );
};

const ClientsPage = () => {
  return (
    <Layout>
      <div>
        <TabsLayout
          headings={["Add Client", "Cients View"]}
          components={[<ClientForm />, <ClientTable />]}
        />
      </div>
    </Layout>
  );
};

export default ClientsPage;
