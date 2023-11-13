import { Errors } from '@hey/data/errors';
import response from '@hey/lib/response';
import createSupabaseClient from '@hey/supabase/createSupabaseClient';

import type { WorkerRequest } from '../types';

export default async (request: WorkerRequest) => {
  const id = request.query.id as string;

  if (!id) {
    return response({ success: false, error: Errors.NoBody });
  }

  try {
    const client = createSupabaseClient(request.env.SUPABASE_KEY);
    const { data } = await client
      .from('pro')
      .select('id')
      .eq('profile_id', id)
      .single();

    return response({ success: true, enabled: Boolean(data) });
  } catch (error) {
    throw error;
  }
};