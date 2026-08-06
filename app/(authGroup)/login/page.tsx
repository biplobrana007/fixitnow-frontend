import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginForm } from "../_components/loginForm";
import Container from "@/components/shared/container";

const LoginPage = () => {
  return (
    <Container className="">
      <div className=" min-h-screen border flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-primary mb-10">Welcome Back!</h2>
      <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm></LoginForm>
      </CardContent>
    </Card>
    </div>
    </Container>
  );
};

export default LoginPage;
