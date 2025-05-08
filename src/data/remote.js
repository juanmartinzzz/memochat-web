import supabase from '../integrations/supabase'

const remote = {
  profile: {
    getById: async ({id}) => {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single()
      return data
    },
    getByEmail: async ({email}) => {
      const { data, error } = await supabase.from('profiles').select('*').eq('email', email).single()
      return data
    },
    upsert: async ({profile}) => {
      const { data, error } = await supabase.from('profiles').upsert(profile, {
        onConflict: 'email',
        ignoreDuplicates: true
      }).select()
      return data
    }
  },
  careerType: {
    getAll: async () => {
      const { data, error } = await supabase.from('career_types').select('*')
      return data
    },
    getById: async ({id}) => {
      const { data, error } = await supabase.from('career_types').select('*').eq('id', id)
      return data
    },
    upsert: async ({careerType}) => {
      const { data, error } = await supabase.from('career_types').upsert(careerType, {
        onConflict: 'id',
        ignoreDuplicates: true
      }).select().single()
      return data
    },
    delete: async ({id}) => {
      const { data, error } = await supabase.from('career_types').delete().eq('id', id)
      return data
    }
  },
  chapters: {
    getAll: async () => {
      const { data, error } = await supabase.from('chapters').select('*').order('order_index', { ascending: true })
      return data
    },
    getById: async ({id}) => {
      const { data, error } = await supabase.from('chapters').select('*').eq('id', id)
      return data
    },
    upsert: async ({chapter}) => {
      const { data, error } = await supabase.from('chapters').upsert(chapter, {
        onConflict: 'id',
        ignoreDuplicates: true
      }).select().single()
      return data
    },
    delete: async ({id}) => {
      const { data, error } = await supabase.from('chapters').delete().eq('id', id)
      return data
    },
    getAllForLifeStory: async ({lifeStoryId}) => {
      const { data, error } = await supabase.from('chapters').select('*').eq('life_story_id', lifeStoryId)
      return data
    }
  },
  lifeStory: {
    getById: async ({id}) => {
      const { data, error } = await supabase.from('life_stories').select('*').eq('id', id)
      return data
    },
    upsert: async ({lifeStory}) => {
      const dataToUpsert = {
        status: 'draft',
        ...lifeStory
      }

      try {
        const { data, error } = await supabase.from('life_stories').upsert(dataToUpsert, {
          onConflict: 'id',
          ignoreDuplicates: true
        }).select().single()
        return data
      } catch (error) {
        console.log({error})
        return null
      }
    }
  },
  lifeStoryChapter: {
    upsert: async ({lifeStoryChapter}) => {
      try {
        const { data, error } = await supabase.from('life_story_chapters').upsert(lifeStoryChapter, {
          onConflict: 'life_story_id, chapter_id',
          ignoreDuplicates: true
        }).select().single()
        return data
      } catch (error) {
        console.log({error})
        return null
      }
    }
  }
}

export default remote