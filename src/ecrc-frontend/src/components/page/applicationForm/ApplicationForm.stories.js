import React from "react";
import { MemoryRouter } from "react-router-dom";

import ApplicationForm from "./ApplicationForm";

export default {
  title: "ApplicationForm",
  component: ApplicationForm
};

const header = {
  name: "Criminal Record Check"
};

const applicant = {
  firstName: "Robert",
  middleName: "Norman",
  lastName: "Ross",
  birthPlace: "",
  birthDate: "1942-10-29",
  sex: "Male",
  bcDLNumber: "",
  phoneNumber: "",
  emailAddress: "",
  street: "123 Somewhere",
  city: "Here",
  province: "British Columbia",
  postalCode: "V9V 9V9",
  country: "Canada",
  applicantPosition: "",
  organizationFacility: ""
};

const setApplicant = app => {
  console.log(app);
};

const org = {
  defaultScheduleTypeCd: "WBSD"
};

const page = {
  header,
  applicant,
  org,
  setApplicant
};

export const NonScheduleD = () => (
  <MemoryRouter>
    <ApplicationForm
      page={{ ...page, org: { defaultScheduleTypeCd: "WBSC" } }}
    />
  </MemoryRouter>
);

export const ScheduleD = () => (
  <MemoryRouter>
    <ApplicationForm page={page} />
  </MemoryRouter>
);
