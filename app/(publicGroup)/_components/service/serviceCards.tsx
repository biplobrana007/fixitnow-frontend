"use client";
import { ServiceType } from "@/types/serviceType";
import { ServiceCard } from "./serviceCard";
import Container from "@/components/shared/container";

const ServiceCards = ({ services }: { services: ServiceType[] }) => {
  return (
    <Container className="max-sm:px-1 px-5">
      <div>
        <h2 className="text-center mt-5 font-bold text-2xl text-primary">
          Services
        </h2>
        <p className="text-center text-gray-500">
          Explore all the services here.
        </p>
      </div>
      <div className="grid grid-cols-1 py-10  lg:grid-cols-3 gap-5">
        {services?.map((service: ServiceType, idx: number) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
    </Container>
  );
};

export default ServiceCards;
