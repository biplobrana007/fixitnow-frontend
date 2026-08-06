"use server";

import { BookingPayloadType } from "@/types/bookingType";
import { cookies } from "next/headers";

export const createBooking = async ({
  bookingNotes,
  selectedDate,
  selectedSlot,
  serviceId,
}: {
  bookingNotes: string;
  selectedDate: Date | undefined;
  selectedSlot: string;
  serviceId: string;
}) => {
  const payload: BookingPayloadType = {
    serviceId: serviceId,
    bookingTime: selectedDate?.toISOString() ?? "",
    bookingSlot: selectedSlot,
    note: bookingNotes,
  };
  console.log("booking time", payload);
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "user not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  return await result.data;
};
