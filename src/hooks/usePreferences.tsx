import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

interface Preferences {
  selected_stream: string | null;
  academic_stage: string | null;
}

export function usePreferences() {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setPreferences(null);
      setIsLoading(false);
      return;
    }

    const fetchPreferences = async () => {
      const { data } = await supabase
        .from("user_preferences")
        .select("selected_stream, academic_stage")
        .eq("user_id", user.id)
        .maybeSingle();

      setPreferences(data || null);
      setIsLoading(false);
    };

    fetchPreferences();
  }, [user]);

  const savePreferences = useCallback(
    async (updates: Partial<Preferences>) => {
      if (!user) return;

      const { data, error } = await supabase
        .from("user_preferences")
        .upsert(
          { user_id: user.id, ...updates },
          { onConflict: "user_id" }
        )
        .select("selected_stream, academic_stage")
        .single();

      if (!error && data) {
        setPreferences(data);
      }
    },
    [user]
  );

  return { preferences, isLoading, savePreferences };
}
