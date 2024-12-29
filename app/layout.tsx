import GameLayout from "@/components/layouts/GameLayout";
import { PropsWithChildren } from "react";
import NextSupabaseLayout from "@/components/layouts/NextSupabaseLayout";

type Props = PropsWithChildren<{
  layout?: "game" | "next-supabase";
}>

export default function RootLayout({
  children,
  layout = "game",
}: Props) {
  if (layout === "game") {
    return <GameLayout>{children}</GameLayout>;
  }

  return <NextSupabaseLayout>{children}</NextSupabaseLayout>;
}
