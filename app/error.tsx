"use client";

import { useEffect } from "react";

import { FC } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState title="Uh oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
