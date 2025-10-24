// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Cartev112', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Carter Whitworth', description: '', imageURL: '' },
  social: {
    linkedin: 'carter-whitworth',

    email: 'cwhit1129@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.usercontent.google.com/u/0/uc?id=1pVFYXFHfmDFhVjYz5aKGEX8Iyl_g2HZ1&export=download', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Pytorch,'
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'UT',
      position: 'Research Assistant',
      from: 'October 2024',
      to: 'Present',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],

  educations: [
    {
      institution: 'University of Tennessee Knoxville',
      degree: 'B.S. in Computer Engineering',
      from: '2024',
      to: 'Present',
    }
  



export default CONFIG;
