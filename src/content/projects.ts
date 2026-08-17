import type { Project } from '../types/content';

const media = `${import.meta.env.BASE_URL}media/`;
const image = `${media}projects/`;
const video = `${media}videos/`;

export const projects: Project[] = [
  {
    slug: 'real-time-patellar-tracking', title: 'Real-Time Patellar Tracking', subtitle: 'Master’s Thesis', year: 'Oct 2026 – Present', categories: ['Bioengineering', 'Robotics', 'Software', 'Research'],
    tags: ['Stretch sensors', 'Wearable sensing', 'Python', 'Signal processing'], featured: true,
    summary: 'Ongoing research into a wearable method for estimating patellar position during movement.',
    description: [
      'Inertial measurement units can estimate general gait characteristics but cannot accurately determine the position of specific anatomical landmarks such as the patella. Reliable patellar tracking could improve the control and evaluation of rehabilitation systems, including neuromuscular electrical stimulation.',
      'The research develops wearable stretch-sensor prototypes, compares them with reference motion data, and investigates repeatability, comfort and real-time estimation methods with input from patients, researchers and clinicians.'
    ],
    coverImage: image + 'patellar.svg', methods: ['Wearable stretch-sensor prototyping', 'Reference motion comparison', 'Real-time position estimation', 'Repeatability and comfort evaluation'],
    results: ['Ongoing Master’s research. The intended outcome is a validated wearable method for real-time gait monitoring and rehabilitation systems.']
  },
  {
    slug: 'optoblock', title: 'Optoblock', subtitle: 'Modular Organisation App', year: 'Jun 2026 – Present', categories: ['Software', 'Engineering', 'Research'],
    tags: ['Application development', 'Speech recognition', 'NLP', 'UI/UX'], featured: true,
    summary: 'A modular organisation app that lets people build a productivity system around their own needs.',
    description: [
      'Most productivity apps force users into a fixed structure, even though people organise their work, finances, reminders and personal projects in very different ways. Optoblock is a modular organisation app designed to let users build a system around their own needs.',
      'The application uses a draggable, tile-based interface and modular tools for tasks, notes, reminders and planning. A voice-driven “brain dump” converts unstructured speech into organised actions.'
    ],
    coverImage: image + 'optoblock.png', methods: ['Draggable tile-based interface', 'User-journey mapping', 'Voice-driven capture', 'Iterative testing and user feedback'],
    results: ['Developed a functioning modular application prototype combining flexible organisation with AI-assisted input.', 'Development continues through new modules, interface improvements and further user testing.']
  },
  {
    slug: 'high-speed-motion-rotation-tracker', title: 'High-Speed Video Motion and Rotation Tracker', year: 'July – August 2026', categories: ['Research', 'Software', 'Engineering'],
    tags: ['Python', 'OpenCV', 'High-speed imaging', 'Signal processing'], featured: false,
    summary: 'An interactive computer-vision workflow for measuring simultaneous translation and rotation in experimental footage.',
    description: [
      'Experimental objects can rotate and translate at the same time, making their movement difficult to measure manually from high-speed footage. A visible marker may also change position, scale or orientation throughout the video.',
      'The tool defines a circular tracking region and orientation reference, follows centre position and rotational angle frame by frame, and adds overlays so the analysis can be visually checked.'
    ],
    coverImage: image + 'rotational-tracking.svg', methods: ['Interactive tracking-region definition', 'Centre and angular tracking', 'Visual validation overlays', 'Time-series and CSV export'],
    results: ['Produces an annotated tracking video and CSV signals for direct comparison with magnetic sensors or other experimental measurements.']
  },
  {
    slug: 'window-cleaner', title: 'Window Cleaner', subtitle: 'Windows File Management App', year: 'Jul 2026 – Aug 2026', categories: ['Software', 'Engineering', 'Research'],
    tags: ['Python', 'Windows file system', 'Metadata analysis', 'GUI'], featured: false,
    summary: 'A transparent file-management utility for finding unnecessary files without hiding decisions from the user.',
    description: [
      'Windows computers can gradually become filled with old downloads, temporary files, oversized folders and forgotten documents. Existing cleaning tools can also make it difficult for users to understand what is being removed.',
      'Window Cleaner scans user-selected folders and organises files using type, size, location and age. Safeguards keep every move or deletion inspectable rather than making cleanup fully automatic.'
    ],
    coverImage: image + 'camera-trigger.svg', methods: ['User-selected folder scanning', 'File metadata classification', 'GUI development', 'Review-before-action safeguards'],
    results: ['Created a focused utility that makes computer cleanup more controlled, legible and transparent.']
  },
  {
    slug: 'csv-oscilloscope-video-generator', title: 'CSV-to-Oscilloscope Video Generator', year: 'July – August 2026', categories: ['Software', 'Research', 'Video'],
    tags: ['Python', 'CSV', 'Matplotlib', 'JSON'], featured: false,
    summary: 'A configurable tool that turns experimental time-series data into synchronisable oscilloscope-style video.',
    description: [
      'Static graphs are difficult to compare with slow-motion experimental footage because they do not show how a signal changes at the corresponding moment in the video.',
      'The application imports CSV signals, renders a moving trace, and provides controls for speed, plot range, timing, labels and resolution. Reusable JSON files retain experiment-specific settings.'
    ],
    coverImage: image + 'waveform.svg', methods: ['CSV signal import', 'Matplotlib animation', 'Video rendering', 'JSON configuration', 'Footage synchronisation'],
    results: ['Creates standard video files that can be synchronised with camera footage to compare physical movement with measured sensor behaviour.']
  },
  {
    slug: 'miniature-street-art', title: 'Miniature Street Art and 3D-Printed Objects', year: 'Feb 2026', categories: ['Digital Art', 'Engineering', 'Robotics'],
    tags: ['Blender', '3D modelling', 'CAD', '3D printing'], featured: false,
    summary: 'An ongoing collection translating digital designs into small physical artworks for public space.',
    description: [
      'Large-scale public artwork often requires significant space, materials and installation resources. This project explores how small 3D-printed objects can instead be used as accessible forms of street art, visual storytelling and personal expression.',
      'Miniature characters, objects and sculptural forms are modelled digitally, adapted for reliable printing, physically prototyped and refined. Placement and photography become part of how each piece acquires meaning.'
    ],
    coverImage: image + '3d street art.jpg', methods: ['Blender modelling', 'Mesh preparation', 'CAD', '3D printing', 'Site-responsive placement and photography'],
    results: ['Developed an expanding collection combining engineering, rapid prototyping and street-art-inspired expression.']
  },
  {
    slug: 'heads', title: 'Heads', subtitle: 'Digital graffiti in the landscape', year: 'Feb 2026 – Mar 2026', categories: ['Digital Art', 'Video'],
    tags: ['Projection art', 'Digital graffiti', 'Site-responsive installation', 'Moving image'], featured: false,
    summary: 'A site-responsive projection work created with a local digital art collective, blending digital figures into the surrounding landscape.',
    description: [
      'Heads was created as part of a local digital art collective exploring projection as a form of temporary digital graffiti. Rather than placing a permanent object in public space, the work used light and moving image to transform the character of the landscape.',
      'Projected heads appeared across outdoor surfaces so that the digital artwork could blend into the physical environment—and the textures, contours and atmosphere of the site could become part of the artwork in return.'
    ],
    coverImage: image + 'thin-film.svg', video: { type: 'local', src: video + 'Heads.mp4', poster: image + 'thin-film.svg' },
    methods: ['Site-responsive projection', 'Moving-image composition', 'Outdoor installation', 'Collective art practice'],
    results: ['Created and presented as a temporary digital-graffiti intervention with a local digital art collective.']
  },
  {
    slug: 'naive-tattoos', title: 'Naive Tattoos', subtitle: 'Tattoo studio website', year: '2026', categories: ['Software', 'Digital Art'],
    tags: ['Web design', 'Web development', 'Brand identity', 'Responsive design'], featured: false,
    summary: 'A distinctive portfolio website created for Naive Tattoos, a tattoo studio in Dresden.',
    description: [
      'I designed and built a website for Naive Tattoos, a tattoo studio in Dresden, the city where I was living. The site gives the studio a focused digital home while keeping its visual identity and artwork at the centre of the experience.',
      'The project translated the studio’s bold orange identity into a responsive web experience, making it easy for visitors to discover the work and connect with the studio.'
    ],
    coverImage: image + 'Orange logo.png', externalUrl: 'https://jjbees99.github.io/NaiveTattoo/',
    methods: ['Visual direction', 'Responsive interface design', 'Front-end development', 'GitHub Pages deployment'],
    results: ['Launched a live portfolio website for the Dresden tattoo studio.']
  },
  {
    slug: 'orb', title: 'ORB', subtitle: 'Biomimetic texture, light and movement', year: '2025', categories: ['Digital Art', 'Bioengineering', 'Video'],
    tags: ['TouchDesigner', 'Biomimicry', 'Installation', 'Moving image'], featured: false,
    summary: 'An ethereal digital artwork created for an exhibition at London’s Fabric nightclub.',
    description: [
      'Orb was one of five works I created to showcase at an exhibition in London’s Fabric nightclub, organised in collaboration with Unity Sounds, an inter-university arts collective. Positioned behind the main stage, the piece was designed to loom over the audience, deepening both the visual and auditory atmosphere of the event.',
      'With an ethereal aesthetic, Orb explored the fusion of layered textures drawn from natural references, particularly ripple-like patterns inspired by fluid and biological systems. By weaving these biomimetic textures into a digital form, the piece sought to evoke a sense of organic depth and movement, enhancing the immersive environment of the exhibition.'
    ],
    coverImage: image + 'hyperspectral.svg', video: { type: 'local', src: video + 'ORB.mp4', poster: image + 'hyperspectral.svg' }, collaborators: ['Unity Sounds'],
    methods: ['Layered generative textures', 'Biomimetic visual research', 'Large-scale moving-image installation'],
    results: ['Exhibited behind the main stage at Fabric, London.']
  },
  {
    slug: 'the-swarm', title: 'The Swarm', subtitle: 'Collective movement at architectural scale', year: 'Jan 2024 – Mar 2024', categories: ['Digital Art', 'Software', 'Robotics', 'Video'],
    tags: ['TouchDesigner', 'Python', 'Boids', 'Installation'], featured: true,
    summary: 'An award-winning digital installation inspired by the collective movement of swallows in flight.',
    description: [
      'The Swarm is a digital art installation inspired by the collective movement of swallows in flight. Awarded the People’s Choice Award at the 2024 Hackstarter competition at Imperial College London Hackspace, the piece reimagines digital graffiti by transforming disused spaces into dynamic, living environments.',
      'The work simulates a flock of 50,000 individual points, first prototyped through a Python implementation referencing the classic Boids algorithm, before being developed further in TouchDesigner. By translating natural flocking behaviours into a digital medium, The Swarm explores how biomimicry can enliven urban environments and reshape how we experience shared spaces.'
    ],
    coverImage: image + 'magnetic-oscillator.svg', video: { type: 'local', src: video + 'Swarm.mp4', poster: image + 'magnetic-oscillator.svg' },
    methods: ['Python prototyping', 'Boids flocking algorithm', 'TouchDesigner', 'Large-scale digital installation'],
    results: ['People’s Choice Award at the 2024 Hackstarter competition, Imperial College London Hackspace.']
  }
];
