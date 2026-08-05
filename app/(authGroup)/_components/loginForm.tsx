"use client";

import { useActionState, } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import loginAction from "../_actions/loginAction";
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    {}
  );

  return (
    <form action={action} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          disabled={pending}
          required
        />
      </div>

      {state?.error?.email && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {state?.error?.email}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          disabled={pending}
          required
        />
      </div>

      {state?.error?.password && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {state?.error?.password}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-semibold hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
