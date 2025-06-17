
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pdujorahbqieiomdbixf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdWpvcmFoYnFpZWlvbWRiaXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MDU2OTMsImV4cCI6MjA2NTA4MTY5M30.TnhitkPZPov4YaigkUQmoHkdFQJjzyInlrqELbnJ7gE"
export const supabase = createClient(supabaseUrl, supabaseKey);