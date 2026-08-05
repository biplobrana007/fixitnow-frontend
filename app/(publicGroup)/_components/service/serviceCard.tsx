"use client";
import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ServiceType } from "@/types/serviceType";


export function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <Badge variant="outline" className="gap-1.5 capitalize">
            {service.category?.categoryName}
          </Badge>
          {service?.isAvailable ? (
            <Badge variant="outline" className="border-primary/30 text-primary">
              <CheckCircle2 data-icon="inline-start" aria-hidden="true" />
              Available now
            </Badge>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <CardTitle className="text-xl font-semibold tracking-tight sm:text-2xl">
              {service?.title}
            </CardTitle>
            <CardDescription className="mt-2 max-w-xl text-sm leading-6 sm:text-base">
              {service?.description}
            </CardDescription>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              {`${service?.price}`}{" "}
              <span className="text-gray-600 text-sm">TK</span>
            </p>
            <p className="text-xs text-muted-foreground">starting price</p>
          </div>
        </div>
      </CardHeader>

      <Separator></Separator>

      <CardContent className="flex flex-col gap-5 px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg bg-muted/60 p-3 text-sm">
            <Clock3
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />

            <div>
              <span className="min-w-0 truncate">{`${service?.duration}`}</span>
              <span className="text-gray-500">hrs</span>
            </div>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Star
              className="size-4 fill-current text-amber-500"
              aria-hidden="true"
            />
            <span>{service?.averageRating}.0</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/60 p-3 text-sm">
            <MapPin
              className="size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="min-w-0 truncate">
              {service.technician?.technicianProfile.location}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
          <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
          Flexible scheduling available
        </p>
        <Button className="w-full sm:w-auto">View Details</Button>
      </CardFooter>
    </Card>
  );
}
