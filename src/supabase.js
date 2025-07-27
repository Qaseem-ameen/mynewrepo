import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jqiqgbzistlervevloem.supabase.co'; // رابط المشروع
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxaXFnYnppc3RsZXJ2ZXZsb2VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NTQwMTcsImV4cCI6MjA2OTAzMDAxN30.X2lTUorvqtiKHAtlTM6jWH8NWahwIMh9H_InfhvfYC0'; // مفتاح public من settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);