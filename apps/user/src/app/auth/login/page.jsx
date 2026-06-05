"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { Button } from "@/components/ui/button";
import { createLoginSchema } from "@/schema/login.schema";
import { getApiErrorMessage, login } from "@/service/AuthService";

const LoginPage = () => {
  const intl = useIntl();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null);

  const loginSchema = useMemo(
    () => createLoginSchema(intl.formatMessage),
    [intl],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }) => {
    setStatus(null);

    try {
      await login(email, password);
      setStatus({
        type: "success",
        message: intl.formatMessage({ id: "login.success" }),
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          getApiErrorMessage(error) ??
          intl.formatMessage({ id: "login.failure" }),
      });
    }
  };

  return (
    <div className="min-h-screen bg-pm-bg text-pm-t1">
      <div className="flex min-h-screen items-center justify-center px-6 py-10">
        <main className="w-full max-w-md rounded-[32px] border border-pm-l2 bg-pm-s1 p-10 shadow-pm-lg">
          <div className="mb-8 space-y-3 text-center">
            <p className="eyebrow">Sign in to your account</p>
            <h1 className="text-3xl font-semibold tracking-tight text-pm-t1">
              {intl.formatMessage({ id: "login.title" })}
            </h1>
            <p className="text-sm leading-6 text-pm-t2">
              <FormattedMessage id="login.subtitle" />
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div>
              <label
                className="mb-2 block text-sm font-medium text-pm-t2"
                htmlFor="email"
              >
                <FormattedMessage id="login.emailLabel" />
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  onChange: () => setStatus(null),
                })}
                placeholder={intl.formatMessage({ id: "login.emailPlaceholder" })}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-pm-l2 bg-pm-s0 px-4 py-3 text-sm text-pm-t1 outline-none transition placeholder:text-pm-t4 focus:border-pm-accent focus:ring-2 focus:ring-pm-accent/20 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-pm-rose aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-pm-rose/20"
              />
              {errors.email ? (
                <p id="email-error" className="mt-2 text-sm text-pm-rose">
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-medium text-pm-t2"
                htmlFor="password"
              >
                <FormattedMessage id="login.passwordLabel" />
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    onChange: () => setStatus(null),
                  })}
                  placeholder={intl.formatMessage({
                    id: "login.passwordPlaceholder",
                  })}
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-pm-l2 bg-pm-s0 py-3 pl-4 pr-12 text-sm text-pm-t1 outline-none transition placeholder:text-pm-t4 focus:border-pm-accent focus:ring-2 focus:ring-pm-accent/20 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-pm-rose aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-pm-rose/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  disabled={isSubmitting}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-pm-t3 transition hover:text-pm-t1 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label={intl.formatMessage({
                    id: showPassword ? "login.hidePassword" : "login.showPassword",
                  })}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password ? (
                <p id="password-error" className="mt-2 text-sm text-pm-rose">
                  {errors.password.message}
                </p>
              ) : null}
            </div>

            {status ? (
              <div
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "error"
                    ? "border-pm-rose/30 bg-pm-rose/10 text-pm-rose"
                    : "border-pm-green/30 bg-pm-green/10 text-pm-green"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <Button
              type="submit"
              className="w-full gap-2"
              variant="default"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  <FormattedMessage id="login.submitting" />
                </>
              ) : (
                <FormattedMessage id="login.submit" />
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-pm-t3">
            <FormattedMessage id="login.helpText" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
