
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ghdtzptreezztmvzzceg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoZHR6cHRyZWV6enRtdnp6Y2VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2OTQ1MjQsImV4cCI6MjAzMzI3MDUyNH0.AtblY3wYRQ0MvD0cbJ_cecT2c0BUAt47FVY2rsRypEA"
const supabase = createClient(supabaseUrl, supabaseKey)

let { data, error } = await supabase
  .from('Sign-In')
  .select('*')


console.log(data)
