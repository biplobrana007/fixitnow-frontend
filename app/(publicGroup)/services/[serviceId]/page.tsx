import Container from "@/components/shared/container";
import React from "react";
import {  ServiceDetails } from "../../_components/service/serviceDetails";
import { ServiceDetailsType } from "@/types/serviceType";
import { getServiceById } from "@/services/getServiceById";


const ServiceDetailsPage = async ({ params }: { params: Promise<{ serviceId: string }> }) => {
    const serviceId = (await params).serviceId

    const service = await getServiceById(serviceId as string) as ServiceDetailsType
    
  return (
    <Container className="max-sm:px-1 px-6">
     <ServiceDetails serviceDetails={service} ></ServiceDetails>
    </Container>
  );
};

export default ServiceDetailsPage;
