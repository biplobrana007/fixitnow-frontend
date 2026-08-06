"use client";

import * as React from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ServiceDetailsType } from "@/types/serviceType";

type TimeSlot = { value: string; label: string; available: boolean };

const timeSlots: TimeSlot[] = [
  { value: "09:00", label: "9:00 AM – 11:00 AM", available: true },
  { value: "11:30", label: "11:30 AM – 1:30 PM", available: true },
  { value: "14:00", label: "2:00 PM – 4:00 PM", available: false },
  { value: "16:30", label: "4:30 PM – 6:30 PM", available: true },
];

const formatDate = (date: Date | undefined) =>
  date
    ? date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Choose a date";

export function ServiceDetails({
  serviceDetails,
}: {
  serviceDetails: ServiceDetailsType;
}) {
  const [service, setService] = React.useState(serviceDetails?.service);

  const today = React.useMemo(() => {
    const value = new Date();
    value.setHours(0, 0, 0, 0);
    return value;
  }, []);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = React.useState("");
  const [isConfirmed, setIsConfirmed] = React.useState(false);

  const canBook = Boolean(selectedDate && selectedSlot && service.isAvailable);
  const selectedTime = timeSlots.find((slot) => slot.value === selectedSlot);

  const handleBooking = async () => {
    console.log(selectedDate, selectedSlot, service.id, service.technicianId);
  };

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div id="top" className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10">
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="capitalize">{service?.category?.categoryName}</span>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{service?.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="flex flex-col gap-8">
              <section className="relative overflow-hidden rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:px-10 sm:py-12">
                <div className="relative z-10 max-w-2xl">
                  <Badge className="mb-5 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10">
                    {service?.category?.categoryName}
                  </Badge>
                  <h1 className="max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    {service?.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-primary-foreground/80 sm:text-lg">
                    {service?.description}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                    <span className="flex items-center gap-2">
                      <Clock3 className="size-4" /> {service?.duration} hour
                      service
                    </span>
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="size-4" /> Fixed-price booking
                    </span>
                  </div>
                </div>
              </section>

              <section id="reviews" className="flex flex-col gap-5">
                <Card>
                  <CardHeader className="flex-row items-center justify-between">
                    <div>
                      <CardTitle>Meet your technician</CardTitle>
                      <CardDescription>
                        Experienced, vetted, and ready to help.
                      </CardDescription>
                    </div>
                    <Avatar className="size-12">
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        BH
                      </AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <div className="flex items-center gap-2 font-medium">
                      <UserRound className="size-4 text-primary" />{" "}
                      {service?.technician?.name}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="size-4 fill-current text-primary" />{" "}
                      {serviceDetails?.averageRating.toFixed(1)}
                    </div>
                    <Badge variant="secondary">Verified professional</Badge>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium text-primary">
                      Customer reviews
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                      What customers are saying
                    </h2>
                  </div>
                  <div className="grid gap-3">
                    {service?.technician?.technicianReviews.map((review) => (
                      <Card key={`${review.customer}-${review?.comment}`}>
                        <CardContent className="flex flex-col gap-4 pt-6">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="size-10">
                                <AvatarFallback>
                                  {review?.customer?.name
                                    .slice(0, 2)
                                    .toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {review?.customer?.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Verified customer
                                </p>
                              </div>
                            </div>
                            <div
                              className="flex items-center gap-1"
                              aria-label={`${review?.rating} out of 5 stars`}
                            >
                              {Array.from({ length: 5 }, (_, index) => (
                                <Star
                                  key={index}
                                  className={`size-4 ${
                                    index < review.rating
                                      ? "fill-current text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="ml-1 text-sm font-medium">
                                {review?.rating}.0
                              </span>
                            </div>
                          </div>
                          <Separator />
                          <blockquote className="text-sm leading-6 text-muted-foreground">
                            “{review?.comment}”
                          </blockquote>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            <Card className="lg:sticky lg:top-6">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle>Book this service</CardTitle>
                    <CardDescription>
                      Select a time that works for you.
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold">
                      ${service?.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      per visit
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                {!service?.isAvailable && (
                  <Alert variant="destructive">
                    <AlertTitle>Currently unavailable</AlertTitle>
                    <AlertDescription>
                      Please check back soon for new availability.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">1. Select a date</h3>
                    <span className="text-xs text-muted-foreground">
                      Your local time
                    </span>
                  </div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setSelectedSlot("");
                    }}
                    disabled={{ before: today }}
                    className="mx-auto rounded-lg border"
                  />
                </div>
                <Separator />
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-medium">2. Select a time slot</h3>
                  <RadioGroup
                    value={selectedSlot}
                    onValueChange={setSelectedSlot}
                    aria-label="Available time slots"
                  >
                    {timeSlots.map((slot) => (
                      <label
                        key={slot.value}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-3 text-sm transition-colors has-data-checked:border-primary has-data-checked:bg-accent has-disabled:cursor-not-allowed has-disabled:opacity-50"
                      >
                        <RadioGroupItem
                          value={slot.value}
                          disabled={
                            !slot.available ||
                            !selectedDate ||
                            !service.isAvailable
                          }
                        />
                        <span className="flex-1">{slot.label}</span>
                        {!slot.available && (
                          <span className="text-xs text-muted-foreground">
                            Unavailable
                          </span>
                        )}
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Selected slot</span>
                  <span className="font-medium">
                    {selectedDate && selectedTime
                      ? `${selectedDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}, ${selectedTime.label}`
                      : "Not selected"}
                  </span>
                </div>
                <Button
                  size="lg"
                  disabled={!canBook}
                  onClick={() => setIsConfirmed(true)}
                >
                  Continue to booking <CalendarDays data-icon="inline-end" />
                </Button>
                <p className="text-center text-xs leading-5 text-muted-foreground">
                  You won&apos;t be charged until the booking is confirmed.
                </p>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> Available across your
            local service area <span aria-hidden="true">·</span> Response within
            60 minutes
          </div>
        </div>
      </main>

      <Dialog open={isConfirmed} onOpenChange={setIsConfirmed}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Review your booking</DialogTitle>
            <DialogDescription>
              Your service is almost booked. Review the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 rounded-lg bg-muted p-4 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Service</span>
              <span className="font-medium">{service?.title}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Technician</span>
              <span className="font-medium">{service?.technician?.name}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">When</span>
              <span className="text-right font-medium">
                {formatDate(selectedDate)}
                <br />
                {selectedTime?.label}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Total</span>
              <span className="font-semibold">${service?.price}</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmed(false)}>
              Back
            </Button>
            <Button onClick={() => (setIsConfirmed(false), handleBooking())}>
              <Check data-icon="inline-start" /> Confirm booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
