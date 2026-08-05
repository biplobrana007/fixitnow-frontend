"use client";
import { CurrentUser } from "@/types/userType";
import React, { use } from "react";

import { CalendarDays, Mail, MapPin, Pencil, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MyProfile({ user }: { user: CurrentUser }) {
  const date = new Date(user.createdAt as string);

  return (
    <main className="min-h-screen bg-muted/30 px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 sm:gap-6">
        <header className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground">Account</p>
          <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Your profile
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground leading-6 sm:text-base">
            Manage your personal information and account details.
          </p>
        </header>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-col gap-5 p-4 sm:gap-6 sm:p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Avatar size="lg" className="size-16 shrink-0 sm:size-20">
                <AvatarImage
                  src={user.profilePhoto}
                  alt={`${user.name}'s profile photo`}
                />
                <AvatarFallback aria-label="User icon">
                  <User className="size-7 sm:size-8" aria-hidden="true" />
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col gap-1">
                <CardTitle className="truncate text-lg sm:text-xl">
                  {user.name}
                </CardTitle>
                <CardDescription className="truncate">
                  {user.role.toLowerCase()}
                </CardDescription>
                <Badge variant="default" className="mt-1 w-fit">
                  {user.status}
                </Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full md:w-auto">
              <Pencil data-icon="inline-start" />
              Edit profile
            </Button>
          </CardHeader>

          <Separator />

          <CardContent className="grid gap-5 p-4 pt-5 sm:grid-cols-2 sm:gap-6 sm:p-6 sm:pt-6">
            <div className="flex min-w-0 items-start gap-3">
              <Mail
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="break-all font-medium">{user.email}</span>
              </div>
            </div>

            <div className="flex min-w-0 items-start gap-3">
              <CalendarDays
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-sm text-muted-foreground">
                  Member since
                </span>
                <span className="font-medium">{date.toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
