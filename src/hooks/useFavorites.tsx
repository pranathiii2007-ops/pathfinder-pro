import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFavorites = useCallback(async () => {
    if (!user) { setFavorites([]); return; }
    setIsLoading(true);
    const { data } = await supabase
      .from("favorite_careers")
      .select("career_id")
      .eq("user_id", user.id);
    setFavorites(data?.map((f) => f.career_id) || []);
    setIsLoading(false);
  }, [user]);

  useEffect(() => { fetchFavorites(); }, [fetchFavorites]);

  const toggleFavorite = async (careerId: string, careerName: string) => {
    if (!user) return false;
    const isFav = favorites.includes(careerId);
    if (isFav) {
      await supabase.from("favorite_careers").delete().eq("user_id", user.id).eq("career_id", careerId);
      setFavorites((prev) => prev.filter((id) => id !== careerId));
    } else {
      await supabase.from("favorite_careers").insert({ user_id: user.id, career_id: careerId, career_name: careerName });
      setFavorites((prev) => [...prev, careerId]);
    }
    return true;
  };

  const isFavorite = (careerId: string) => favorites.includes(careerId);

  return { favorites, isLoading, toggleFavorite, isFavorite };
}
