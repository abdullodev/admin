import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

export function SignIn({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const naviagte = useNavigate();
  const formStore = useForm();

  const onSubmit = () => {
    naviagte("/dashboard");
  };

  return (
    <FormProvider {...formStore}>
      <form
        className={cn(
          "flex flex-col gap-6 bg-[var(--card)] rounded-md p-4",
          className
        )}
        {...props}
        onSubmit={formStore.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h1>
          <p className="text-balance text-sm text-muted-foreground dark:text-muted-foreground">
            Enter your email below to sign in to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-900 dark:text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border dark:border-gray-700"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className="text-gray-900 dark:text-white"
              >
                Password
              </Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline text-blue-500 dark:text-blue-400"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border dark:border-gray-700"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border dark:after:border-gray-700">
            <span className="relative z-10 bg-background px-2 text-muted-foreground dark:text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Button variant="outline" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Sign in with GitHub
          </Button>
        </div>
        <div className="text-center text-sm text-gray-900 dark:text-white">
          Don&apos;t have an account?{" "}
          <Link
            to={"/sign-up"}
            className="underline underline-offset-4 text-blue-500 dark:text-blue-400"
          >
            Sign up
          </Link>
        </div>
      </form>
    </FormProvider>
  );
}
