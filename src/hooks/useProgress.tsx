import { useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export function useProgress() {
  const { user } = useAuth();

  const trackVisit = useCallback(async (section: string, itemId: string) => {
    if (!user) return;
    await supabase.from("user_progress").upsert(
      { user_id: user.id, section, item_id: itemId, visited_at: new Date().toISOString() },
      { onConflict: "user_id,section,item_id" }
    );
  }, [user]);

  const markComplete = useCallback(async (section: string, itemId: string) => {
    if (!user) return;
    await supabase.from("user_progress").upsert(
      { user_id: user.id, section, item_id: itemId, completed: true, visited_at: new Date().toISOString() },
      { onConflict: "user_id,section,item_id" }
    );
  }, [user]);

  return { trackVisit, markComplete };
}
