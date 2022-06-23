import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import Layout from "../layout/Layout";
import TabsLayout from "../layout/TabsLayout";
import CustomRangeSlider from "../components/CustomRangeSlider";
import CampaignTable from "./CampaignTable";
const CampaignForm = () => {
  // Form components to be addedf orm components directory once api is integrated
  const [campaignFormData, setCampaignFormData] = useState({
    //TODO: names to be changed when api is known
    client_name: "",
    campaign_title: "",
    budget: [],
    milk_capacity: [],
    animal_type: "",
    breed: "",
    QC_status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e) => {
    setCampaignFormData({
      ...campaignFormData,
      [e.target.name]: e.target.value,
    });
    console.log(campaignFormData);
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Create Campaign</h1>
      <form
        className="w-full flex flex-col gap-5 p-5 md:p-0 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="md:w-1/3 flex flex-col gap-5">
          <CustomInput
            id="campaign-input-01"
            label="Client"
            type="text"
            name="client_name"
            onChangeProp={handleChange}
          />
          <CustomInput
            id="campaign-input-02"
            label="Campaign Title"
            type="text"
            name="campaign_title"
            onChangeProp={handleChange}
          />
        </div>
        <div>
          <p>Criteria</p>
        </div>
        <div className="bg-primaryGra flex flex-col gap-5 w-full h-auto p-2 bg-primaryGray">
          <CustomRangeSlider
            id="campaign-input-03"
            label="Budget"
            name="budget"
            handleChangeProp={handleChange}
          />
          <CustomRangeSlider
            id="campaign-input-04"
            label="Milk Capacity Approx Litres"
            name="milk_capacity"
            handleChangeProp={handleChange}
          />
          {/* <CustomDatePicker /> */}
        </div>
      </form>
    </>
  );
};
const CampaignsPage = () => {
  return (
    <Layout>
      <div>
        <TabsLayout
          headings={["Create Campaign", "On-going Campaign"]}
          components={[<CampaignForm />, <CampaignTable />]}
        />
      </div>
    </Layout>
  );
};
export default CampaignsPage;
