"use client";

import { useIntl, FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const intl = useIntl();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-10 shadow-lg shadow-black/5 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-8 space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {intl.formatMessage({ id: "login.title" })}
          </h1>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            <FormattedMessage id="login.subtitle" />
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <FormattedMessage id="login.emailLabel" />
            </label>
            <input
              type="email"
              placeholder={intl.formatMessage({ id: "login.emailPlaceholder" })}
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <FormattedMessage id="login.passwordLabel" />
            </label>
            <input
              type="password"
              placeholder={intl.formatMessage({ id: "login.passwordPlaceholder" })}
              className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>

          <Button type="submit" className="w-full py-3">
            <FormattedMessage id="login.submit" />
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <FormattedMessage id="login.helpText" />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
