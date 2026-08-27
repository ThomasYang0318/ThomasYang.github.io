// Edit this file to add projects, change copy, or add carousel images.
// Image paths are relative to the website root. The renderer adjusts them for
// pages inside /projects automatically.

export const projectTracks = [
  {
    id: 'software',
    index: '01',
    name: 'Software Engineering',
    description: 'Product-focused applications, connected services, and software systems built around real user flows.',
    featured: {
      id: 'mijing',
      title: 'Mijing — Deep Travel Discovery',
      href: 'projects/project.html?id=mijing&v=20260827-5',
      meta: 'UI/UX Design · Product Planning · Travel Discovery',
      description: 'A story-led map experience for recording moods and discovering the memories attached to places.',
      tags: ['UI/UX Design', 'Product Planning', 'Flutter', 'Maps'],
      linkLabel: 'Read project',
      mediaClass: 'presentation-media',
      details: [
        'Mijing is a travel-discovery concept that turns a map into a record of human experience. Instead of showing only where a place is, it helps people understand what happened there and why that place mattered to someone.',
        'The product is shaped around two ideas: “Record Mood” lets people attach feelings and memories to a visit, while “Find a Story in the Place” helps the next visitor discover those experiences through the map or swipeable recommendation cards.',
        'My role covered UI/UX design and product planning. I organized the product into personal, friend, and community layers, then designed how people post, revisit places, browse profiles, follow recommendations, and continue exploring.'
      ],
      overviewFacts: [
        { label: 'Core problem', value: 'Travel tools show destinations, but rarely preserve the emotion and story behind a visit.' },
        { label: 'Product model', value: 'A social map with personal, friend, and community layers—plus swipe-based discovery.' },
        { label: 'My role', value: 'UI/UX Design and Product Planning.' }
      ],
      links: [
        { label: 'View presentation ↗', url: 'https://canva.link/z82jjk7alag1ze0' }
      ],
      videos: [
        {
          title: 'Mijing introduction',
          youtubeId: 'zAio6N_cqA4',
          autoplay: true,
          muted: true
        }
      ],
      images: [
        {
          src: 'assets/images/projects/software/mijing/story/discovery-paths.jpg',
          alt: 'Mijing product overview showing its map-based and swipe-card discovery experiences'
        },
        {
          src: 'assets/images/projects/software/mijing/story/audience-model.jpg',
          alt: 'Mijing personal, friend, and community map modes'
        },
        {
          src: 'assets/images/projects/software/mijing/story/swipe-card-flow.jpg',
          alt: 'Mijing swipe-card interface for discovering place-based stories'
        }
      ],
      caseStudy: {
        title: 'How Mijing works',
        intro: 'Follow the product from its core idea to the three social map layers and the final swipe-based discovery flow.',
        chapters: [
          {
            id: 'concept',
            index: '01',
            label: 'Product concept',
            title: 'From finding a place to understanding why it matters.',
            description: 'Mijing treats every destination as a container for emotion, memory, and story. The experience starts with two complementary ways to explore and three levels of social distance.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/concept-record-mood.jpg', alt: 'Mijing core concept beside the map interface', eyebrow: 'Core promise', title: 'Record Mood. Find a Story in the Place.', description: 'The concept connects a physical location with the feeling and personal story attached to it.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/discovery-paths.jpg', alt: 'Mijing map-based and swipe-card discovery paths', eyebrow: 'Discovery model', title: 'Two ways to start exploring', description: 'Use the map when location matters, or swipe through story cards when inspiration comes first.' },
              { src: 'assets/images/projects/software/mijing/story/audience-model.jpg', alt: 'Mijing personal friend and community audience model', eyebrow: 'Social model', title: 'Three levels of social distance', description: 'Personal, friend, and community views control whose memories and recommendations appear.' }
            ]
          },
          {
            id: 'personal',
            index: '02',
            label: 'Personal layer',
            title: 'Turn visits into a personal memory map.',
            description: 'The personal layer is the starting point: people can see where they have been, add a new place-based story, and return to their own history through the profile.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/personal-entry.jpg', alt: 'Mijing entry into the personal map layer', eyebrow: 'Layer switcher', title: 'Enter the personal view', description: 'The bottom navigation keeps personal, friend, and community contexts visible at all times.' },
              { src: 'assets/images/projects/software/mijing/story/personal-mode.jpg', alt: 'Mijing personal map mode highlighted', eyebrow: 'Personal map', title: 'See your own travel footprint', description: 'Visited locations become a visual history rather than a disconnected list.' },
              { src: 'assets/images/projects/software/mijing/story/personal-map-anatomy.jpg', alt: 'Annotated Mijing personal map interface', eyebrow: 'Interface anatomy', title: 'One map, three primary actions', description: 'Post, Profile, and Visited Place form the main personal loop.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/personal-post-entry.jpg', alt: 'Mijing post action highlighted on the personal map', eyebrow: 'Post entry', title: 'Start a story from the map', description: 'The post action begins with location, keeping every memory anchored to a real place.' },
              { src: 'assets/images/projects/software/mijing/story/post-creation-flow.jpg', alt: 'Mijing multi-step post creation flow', eyebrow: 'Post flow', title: 'Attach mood and context', description: 'The creation flow captures the place, content, and settings needed to share a meaningful visit.' },
              { src: 'assets/images/projects/software/mijing/story/personal-profile-entry.jpg', alt: 'Mijing profile action highlighted on the personal map', eyebrow: 'Profile entry', title: 'Move from map to personal history', description: 'The profile provides a second path into the places and stories a person has recorded.' },
              { src: 'assets/images/projects/software/mijing/story/profile-flow.jpg', alt: 'Mijing profile and personal history screens', eyebrow: 'Profile flow', title: 'Review past stories and places', description: 'Personal content is organized so memories can be revisited after the trip.' }
            ]
          },
          {
            id: 'friend',
            index: '03',
            label: 'Friend layer',
            title: 'Discover places through people you already trust.',
            description: 'Friend mode expands the map beyond the individual. Familiar people become discovery signals, helping users understand who visited a place before opening its details.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/friend-entry.jpg', alt: 'Mijing entry into the friend map layer', eyebrow: 'Layer switcher', title: 'Move into the friend layer', description: 'A clear mode change prevents personal records and friend activity from becoming mixed.' },
              { src: 'assets/images/projects/software/mijing/story/friend-avatars.jpg', alt: 'Friend avatars displayed on the Mijing map', eyebrow: 'Map signal', title: 'People become discovery cues', description: 'Friend avatars show where activity exists before the user opens a specific story.' },
              { src: 'assets/images/projects/software/mijing/story/friend-mode.jpg', alt: 'Mijing friend mode highlighted on the map', eyebrow: 'Friend map', title: 'Browse the network geographically', description: 'The map connects social context with physical distance and direction.' },
              { src: 'assets/images/projects/software/mijing/story/place-detail-flow.jpg', alt: 'Mijing transition from recommendation to place details', eyebrow: 'Place details', title: 'Turn a social cue into a destination', description: 'Selecting a place leads into practical details and the stories associated with it.' }
            ]
          },
          {
            id: 'community',
            index: '04',
            label: 'Community layer',
            title: 'Look beyond the familiar and find an unexpected story.',
            description: 'Community mode introduces broader discovery. It balances nearby place posts with random recommendations so exploration can remain relevant without becoming predictable.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/community-entry.jpg', alt: 'Mijing entry into the community map layer', eyebrow: 'Layer switcher', title: 'Open the community view', description: 'The third map layer separates public discovery from personal and friend activity.' },
              { src: 'assets/images/projects/software/mijing/story/community-discovery.jpg', alt: 'Annotated Mijing community recommendation interface', eyebrow: 'Recommendation model', title: 'Nearby stories and unexpected suggestions', description: 'Specific-place posts provide context while random recommendations create serendipity.', wide: true },
              { src: 'assets/images/projects/software/mijing/story/community-mode.jpg', alt: 'Mijing community mode with random recommendation highlighted', eyebrow: 'Community map', title: 'Surface a story outside the network', description: 'Community content helps users encounter places they would not find through friends alone.' },
              { src: 'assets/images/projects/software/mijing/story/community-posts.jpg', alt: 'Mijing nearby community post list', eyebrow: 'Community posts', title: 'Continue from map to story list', description: 'A location-specific feed gives users a focused way to compare nearby experiences.' }
            ]
          },
          {
            id: 'swipe',
            index: '05',
            label: 'Swipe discovery',
            title: 'Keep exploration lightweight when the user has no destination yet.',
            description: 'Swipe cards provide a second entry point into Mijing. A person can react quickly to a place story, then move into deeper details only when something feels relevant.',
            images: [
              { src: 'assets/images/projects/software/mijing/story/swipe-card-flow.jpg', alt: 'Mijing swipe-card interaction with dislike and like states', eyebrow: 'Card interaction', title: 'Decide with a simple gesture', description: 'Swipe left to pass or right to save interest, reducing the effort required to keep exploring.', wide: true }
            ]
          }
        ]
      },
      featureTour: {
        title: 'Try the product map',
        intro: 'Now that the system is clear, select a hotspot on the map—or use the feature buttons—to inspect each function at a larger scale.',
        image: {
          src: 'assets/images/projects/software/mijing/story/personal-map-anatomy.jpg',
          alt: 'Annotated Mijing personal map with post, profile, visited-place, personal, friend, and community controls'
        },
        items: [
          {
            id: 'personal-mode',
            label: 'Personal Mode',
            x: 45.9,
            y: 85.4,
            description: 'Focus the map on your own visited places—the personal layer for recording mood over time.',
            image: {
              src: 'assets/images/projects/software/mijing/story/personal-mode.jpg',
              alt: 'Mijing personal map mode highlighted'
            }
          },
          {
            id: 'post',
            label: 'Post',
            x: 41.5,
            y: 17.9,
            description: 'Create a place-based post that records the mood, memory, and story connected to a visit.',
            image: {
              src: 'assets/images/projects/software/mijing/story/post-creation-flow.jpg',
              alt: 'Mijing post creation flow'
            }
          },
          {
            id: 'profile',
            label: 'Profile',
            x: 58.5,
            y: 17.9,
            description: 'Review personal posts and visited places through a profile designed as a record of travel experiences.',
            image: {
              src: 'assets/images/projects/software/mijing/story/profile-flow.jpg',
              alt: 'Mijing profile and personal record flow'
            }
          },
          {
            id: 'visited-place',
            label: 'Visited Place',
            x: 50.7,
            y: 67.8,
            description: 'Open a visited place to revisit its details and the stories connected to that location.',
            image: {
              src: 'assets/images/projects/software/mijing/story/place-detail-flow.jpg',
              alt: 'Mijing visited-place details and story view'
            }
          },
          {
            id: 'friend-mode',
            label: 'Friend Mode',
            x: 50.1,
            y: 85.4,
            description: 'Reveal friends and their activity on the map to discover meaningful places through people you know.',
            image: {
              src: 'assets/images/projects/software/mijing/story/friend-mode.jpg',
              alt: 'Mijing friend mode with friend avatars displayed on the map'
            }
          },
          {
            id: 'community-mode',
            label: 'Community Mode',
            x: 54.3,
            y: 85.4,
            description: 'Explore community stories and unexpected place recommendations beyond your immediate network.',
            image: {
              src: 'assets/images/projects/software/mijing/story/community-mode.jpg',
              alt: 'Mijing community mode with a recommended place-based post'
            }
          }
        ]
      }
    },
    otherLabel: 'Other software projects',
    otherProjects: [
      {
        id: 'nebula',
        title: 'Nebula Market',
        type: 'Blockchain product',
        description: 'A marketplace for issuing, verifying, tracking, and transferring NFT-backed software licenses.',
        href: 'projects/nebula.html',
        linkLabel: 'Read project →',
        tags: ['Flutter', 'Web3', 'Smart Contract', 'NFT'],
        videos: [
          { title: 'Nebula Market demo', youtubeId: 'H5aj_MFhBm4' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Nebula Market project yet'
        }
      },
      {
        id: 'local-ai-chatbot',
        title: 'Local AI Chatbot',
        type: 'AI · Networking',
        description: 'iPhone client, TCP server, and a locally hosted Ollama model.',
        href: 'projects/project.html?id=local-ai-chatbot',
        linkLabel: 'Read project →',
        tags: ['Python', 'TCP', 'Ollama', 'iOS'],
        details: [
          'This project connects an iPhone chat client to a TCP server that forwards requests to a locally hosted Ollama language model.',
          'It demonstrates a complete local-AI communication path, from the mobile interface and network protocol to model inference and response delivery.'
        ],
        videos: [
          { title: 'Local AI chatbot demo', youtubeId: '4jLwm5LyvbU' }
        ],
        image: {
          src: 'assets/images/projects/software/local-ai-chatbot.png',
          alt: 'Local AI chatbot architecture connecting an iPhone client, TCP server, and Ollama',
          className: 'media-contain'
        }
      },
      {
        id: 'stock-assistant',
        title: 'Stock Assistant',
        type: 'AI application',
        description: 'LINE Bot integrating market-data services and AI APIs.',
        href: 'projects/project.html?id=stock-assistant',
        linkLabel: 'Read project →',
        tags: ['LINE Bot', 'API Integration', 'Market Data', 'AI'],
        details: [
          'Stock Assistant brings market information and AI-assisted responses into a familiar LINE conversation interface.',
          'The project focuses on coordinating multiple external services, formatting financial data clearly, and keeping the interaction concise for mobile users.'
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://canva.link/cksdxkj3eizbnmc' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Stock Assistant project yet'
        }
      }
    ]
  },
  {
    id: 'embedded',
    index: '02',
    name: 'Embedded Systems & Hardware',
    description: 'Sensing hardware, edge platforms, and intelligent physical systems designed as complete products.',
    reverse: true,
    featured: {
      id: 'wearable',
      title: 'Smart Wearable Resistance Training System',
      href: 'projects/wearable.html',
      meta: 'Embedded AI · Wearable · Sensing',
      description: 'A wearable system combining IMU and optical sensing, edge intelligence, movement analysis, and real-time mobile feedback.',
      tags: ['IMU', 'CNN', 'Luckfox Pico Zero', 'Flutter'],
      linkLabel: 'Read project',
      videos: [
        { title: 'Smart wearable resistance training system demo', youtubeId: 'DJ7WR7n6QPM' }
      ],
      images: [
        {
          src: 'assets/images/projects/embedded/wearable-system-architecture.png',
          alt: 'Wearable sensing architecture connecting optical sensors and an IMU to a Luckfox Pico Zero and smartphone'
        }
      ]
    },
    otherLabel: 'Other hardware projects',
    shortGrid: true,
    otherProjects: [
      {
        id: 'two-dices',
        title: 'Two Dices',
        type: 'Digital logic',
        description: 'Digital logic and a seven-segment display circuit.',
        href: 'projects/project.html?id=two-dices',
        linkLabel: 'Read project →',
        tags: ['Digital Logic', 'Seven-segment Display', 'Hardware'],
        details: [
          'Two Dices is a hardware project that implements dice behavior with digital logic and displays the resulting values on seven-segment displays.',
          'The work emphasizes circuit planning, component-level integration, and translating a simple interaction into a reliable physical output.'
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://canva.link/svid0oqvjhe7g9v' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Two Dices project yet'
        }
      }
    ]
  },
  {
    id: 'visual',
    index: '03',
    name: 'Visual Computing',
    description: 'Rendering, image processing, computer vision, and multimedia work that turns computation into visual output.',
    featured: {
      id: 'opengl',
      title: 'OpenGL 3D Rendering System',
      href: 'projects/opengl.html',
      meta: 'C++ · OpenGL · Rendering',
      description: 'A custom rendering pipeline covering OBJ loading, mesh construction, shaders, materials, lighting, and texturing.',
      tags: ['C++', 'OpenGL', 'Shader', '3D Rendering'],
      linkLabel: 'Read project',
      videos: [
        { title: 'Stage 1 — OBJ loader and mesh construction', youtubeId: 'ttChRcuhHQU' },
        { title: 'Stage 2 — Shaders and materials', youtubeId: 'pkUp02u5Pzg' },
        { title: 'Stage 3 — Lighting and texturing', youtubeId: '56LOqgYDw74' }
      ],
      images: [
        {
          src: 'assets/images/projects/visual/opengl-rendering.jpg',
          alt: 'OpenGL rendering competition scenes with lighting and texturing'
        },
        {
          src: 'assets/images/projects/visual/opengl-system-overview.jpg',
          alt: 'OpenGL OBJ loader, shader and material system, and lighting comparison'
        },
        {
          src: 'assets/images/projects/visual/opengl-final-love-you-partner.png',
          alt: 'Love You Partner final OpenGL scene with warm fireplace lighting'
        },
        {
          src: 'assets/images/projects/visual/opengl-final-weeping-angel.png',
          alt: 'Weeping Angel final OpenGL scene in a dark stone interior'
        }
      ]
    },
    otherLabel: 'Other visual projects',
    otherProjects: [
      {
        id: 'sign-language-recognition',
        title: 'Sign Language Recognition',
        type: 'Computer vision',
        description: 'CNN-based image classification and evaluation.',
        href: 'projects/project.html?id=sign-language-recognition',
        linkLabel: 'Read project →',
        tags: ['CNN', 'Image Classification', 'Computer Vision'],
        details: [
          'This project applies a convolutional neural network to recognize sign-language images as a supervised image-classification task.',
          'The workflow covers dataset preparation, model training, prediction, and evaluation of how reliably visual gestures can be separated into classes.'
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://canva.link/toy3dx1uzj7d3de' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Sign Language Recognition project yet'
        }
      },
      {
        id: 'mini-photoshop',
        title: 'Mini Photoshop',
        type: 'Image processing',
        description: 'Scaling, contrast, Gaussian blur, and Sobel filtering.',
        href: 'projects/project.html?id=mini-photoshop',
        linkLabel: 'Read project →',
        tags: ['Image Processing', 'Gaussian Blur', 'Sobel Filter'],
        details: [
          'Mini Photoshop implements a focused set of image-processing operations to make the underlying pixel transformations visible and understandable.',
          'The project includes image scaling, contrast adjustment, Gaussian blur, and Sobel edge detection as small, testable processing modules.'
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Mini Photoshop project yet'
        }
      },
      {
        id: 'blender-match-move',
        title: 'Blender VFX / Match Move',
        type: 'Multimedia',
        description: '3D character integration with live-action footage.',
        href: 'projects/project.html?id=blender-match-move',
        linkLabel: 'Read project →',
        tags: ['Blender', 'Match Move', 'VFX', '3D'],
        details: [
          'This multimedia project uses match moving to align a virtual camera with live-action footage before integrating a 3D character into the scene.',
          'The final result combines camera tracking, 3D placement, lighting, and compositing so the digital subject follows the motion and perspective of the original shot.'
        ],
        videos: [
          { title: 'Blender match move result', youtubeId: '7tjHvwdO8zc' }
        ],
        image: {
          src: 'assets/images/projects/visual/blender-match-move.jpg',
          alt: 'Blender match move workflow and final character integration',
          className: 'media-contain media-dark'
        }
      }
    ]
  }
];

export const featuredProjects = Object.fromEntries(
  projectTracks.map(track => [track.featured.id, track.featured])
);

export const projectLookup = Object.fromEntries(
  projectTracks.flatMap(track => [
    [track.featured.id, { ...track.featured, discipline: track.name }],
    ...track.otherProjects.map(project => [project.id, {
      ...project,
      discipline: track.name,
      images: project.images || [project.image]
    }])
  ])
);
