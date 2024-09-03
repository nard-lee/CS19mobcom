
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://btjwlzwjeoqkmobrdafg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0andsendqZW9xa21vYnJkYWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NzkzOTQsImV4cCI6MTk2NDM1NTM5NH0.ZUKFqjSxRqRisZk5_wjgWAOmIUKMGuWsUBm5x_hvrKE';

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
