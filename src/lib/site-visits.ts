import { supabase } from '@/lib/supabase'

/**
 * Contagem de visitas para exibição em tempo real.
 * Tenta `site_visits` primeiro; se a tabela não existir, usa `visitor_logs` (analytics atual).
 */
export async function getSiteVisitCount(): Promise<number> {
  const siteVisits = await supabase
    .from('site_visits')
    .select('*', { count: 'exact', head: true })

  if (!siteVisits.error && siteVisits.count != null) {
    return siteVisits.count
  }

  const logs = await supabase
    .from('visitor_logs')
    .select('*', { count: 'exact', head: true })

  return logs.count ?? 0
}
