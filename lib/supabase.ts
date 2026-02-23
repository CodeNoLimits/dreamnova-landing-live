// Supabase Auth Stub
export const supabase = {
  auth: {
    signIn: async () => {
      console.log("[STUB] Redirecting to Supabase OAuth...");
      return { user: { id: "nova-148-user" }, error: null };
    },
    signOut: async () => {
      console.log("[STUB] Signing out...");
    }
  }
};
