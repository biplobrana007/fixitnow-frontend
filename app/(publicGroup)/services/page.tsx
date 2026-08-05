import React from "react";
import { getAllService } from "@/services/getAllService";
import ServiceCards from "../_components/service/serviceCards";
import { ServiceType } from "@/types/serviceType";

const ServicePage = async () => {
  const services = await getAllService();
  return (
    <div>
      <ServiceCards services={services as ServiceType[]}></ServiceCards>
    </div>
  );
};

export default ServicePage;
