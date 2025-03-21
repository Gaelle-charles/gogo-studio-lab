import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxfdrouzljfjnmitgdct.supabase.co'; // Remplacez par votre URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZmRyb3V6bGpmam5taXRnZGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MjExODEsImV4cCI6MjA1ODA5NzE4MX0.RXssrgh_PLem2XKL7yfiA5ddNuBNF0LHPslJJKR30wQ'; // Remplacez par votre clé publique
export const supabase = createClient(supabaseUrl, supabaseKey);
