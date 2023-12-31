export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'skill',
      title: 'Skill',
      description: 'Name of skill',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Description of skill',
      type: 'text',
    },
    {
      name: 'level',
      title: 'Level',
      description: 'Level of skill',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
