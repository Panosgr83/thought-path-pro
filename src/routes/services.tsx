import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  loader: () => redirect({ to: "/ypiresies", throw: true }),
});
