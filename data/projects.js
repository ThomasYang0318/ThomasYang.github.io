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
      id: 'nebula',
      title: 'Nebula Market',
      href: 'projects/nebula.html',
      meta: 'Flutter · Blockchain · Product',
      description: 'A blockchain-based marketplace for issuing, verifying, tracking, and transferring NFT-backed software licenses.',
      tags: ['Flutter', 'Web3', 'Smart Contract', 'NFT'],
      linkLabel: 'Read project',
      placeholder: true,
      videos: [
        { title: 'Nebula Market demo', youtubeId: 'H5aj_MFhBm4' }
      ],
      images: [
        {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Nebula Market project yet'
        }
      ]
    },
    otherLabel: 'Other software projects',
    otherProjects: [
      {
        id: 'mijing',
        title: 'Mijing — Deep Travel Discovery',
        type: 'Mobile product',
        description: 'Map-based exploration and swipe-card discovery.',
        href: 'projects/project.html?id=mijing',
        linkLabel: 'Read project →',
        tags: ['Mobile UX', 'Maps', 'Travel Discovery'],
        details: [
          'Mijing explores a mobile travel-discovery flow that helps users move from broad map exploration to specific destination ideas.',
          'The experience combines location-based browsing with swipeable recommendation cards to keep discovery visual, lightweight, and easy to continue.'
        ],
        links: [
          { label: 'View presentation ↗', url: 'https://canva.link/z82jjk7alag1ze0' }
        ],
        image: {
          src: 'assets/images/project-placeholder-dog-en.jpg',
          alt: 'No image available for the Mijing project yet'
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
        { title: 'OpenGL lighting demo', youtubeId: '56LOqgYDw74' },
        { title: 'OpenGL OBJ loader demo', youtubeId: 'pkUp02u5Pzg' }
      ],
      images: [
        {
          src: 'assets/images/projects/visual/opengl-rendering.jpg',
          alt: 'OpenGL rendering competition scenes with lighting and texturing'
        },
        {
          src: 'assets/images/projects/visual/opengl-system-overview.jpg',
          alt: 'OpenGL OBJ loader, shader and material system, and lighting comparison'
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
