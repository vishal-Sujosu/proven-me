"use client";

import { useIntl, FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const intl = useIntl();

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

          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-pm-t2">
                <FormattedMessage id="login.emailLabel" />
              </label>
              <input
                type="email"
                placeholder={intl.formatMessage({ id: "login.emailPlaceholder" })}
                className="w-full rounded-2xl border border-pm-l2 bg-pm-s0 px-4 py-3 text-sm text-pm-t1 outline-none transition focus:border-pm-accent focus:ring-2 focus:ring-pm-accent/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-pm-t2">
                <FormattedMessage id="login.passwordLabel" />
              </label>
              <input
                type="password"
                placeholder={intl.formatMessage({ id: "login.passwordPlaceholder" })}
                className="w-full rounded-2xl border border-pm-l2 bg-pm-s0 px-4 py-3 text-sm text-pm-t1 outline-none transition focus:border-pm-accent focus:ring-2 focus:ring-pm-accent/20"
              />
            </div>

            <Button type="submit" className="w-full" variant="secondary">
              <FormattedMessage id="login.submit" />
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
