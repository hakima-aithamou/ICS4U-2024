import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    return createBrowserClient("https://qxubjbalbpuigozdpvde.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4dWJqYmFsYnB1aWdvemRwdmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMzE1NTAsImV4cCI6MjAzMjYwNzU1MH0.qCWgz55wpawe0nxYPaLUXNdtk2sf8n-4xfEw395OQFI")
}