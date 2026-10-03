export const profile = {
  name: 'Haotian Chen',
  role: 'M.S. Student in Cyberspace Security',
  institution: 'University of Science and Technology of China',
  email: 'cht@my.swjtu.edu.cn',
  intro:
    'My research explores how LLM-based agents can develop persistent memory, personalized behavior, and grounded interactions within complex social and 3D environments.',
};

export const researchAreas = [
  {
    index: '01',
    title: 'LLM Agents',
    description: 'Autonomous and interactive agents powered by large language models, with an emphasis on reliable execution and evaluation.',
  },
  {
    index: '02',
    title: 'Memory & Personalization',
    description: 'Long-term memory, memory updating, selective retrieval, persona consistency, and personalized agent behavior.',
  },
  {
    index: '03',
    title: 'Social Simulation',
    description: 'Executable social environments where generated behaviors are grounded in consistent, traceable world-state transitions.',
  },
  {
    index: '04',
    title: '3D Intelligence',
    description: 'Multimodal models for structured 3D scene understanding, generation, reconstruction, and evaluation.',
  },
];

export const publications = [
  {
    year: '2026',
    title: 'When Does Exercise-Specific Joint Selection Help? An Audit of Evaluation and Control Design',
    authors: 'Haotian Chen, Jingkun Yu, Yuning Zhang, Bowen Ye',
    venue: 'arXiv preprint · cs.AI',
    href: 'https://arxiv.org/abs/2610.01188',
    image: '/images/papers/joint-selection-audit.png',
    imageAlt: 'Evaluation audit framework for exercise-specific joint selection',
    note: 'First author',
    summary: 'An evaluation audit of skeleton-based exercise correctness classification, separating estimands, subset structure, and temporal controls.',
  },
  {
    year: '2026',
    title: 'Auditing Action Settlement in LLM Agent Environments: Order, Progress, and Replay',
    authors: 'Haotian Chen, Bowen Ye, Yuning Zhang, Jingkun Yu',
    venue: 'arXiv preprint · cs.AI',
    href: 'https://arxiv.org/abs/2610.01138',
    image: '/images/papers/action-settlement.png',
    imageAlt: 'Snapshot-settlement contract for LLM agent environments',
    note: 'First author',
    summary: 'A typed settlement contract and audit framework for order sensitivity, useful progress, and replay consistency in multi-agent environments.',
  },
  {
    year: '2025',
    title: 'DPNet: Dynamic Pooling Network for Tiny Object Detection',
    authors: 'Luqi Gong, Haotian Chen, Yikun Chen, Tianliang Yao, Chao Li, Shuai Zhao, Guangjie Han',
    venue: 'IEEE Internet of Things Journal',
    href: 'https://arxiv.org/abs/2505.02797',
    image: '/images/papers/dpnet-framework.png',
    imageAlt: 'DPNet architecture with dynamic pooling and adaptive normalization',
    note: 'Co-first author',
    summary: 'Input-aware dynamic downsampling for more efficient tiny-object detection in unmanned aerial imagery.',
  },
  {
    year: '2025',
    title: 'Dance of Fireworks: An Interactive Broadcast Gymnastics Training System Based on Pose Estimation',
    authors: 'Haotian Chen, Ziyu Liu, Xi Cheng, Chuangqi Li',
    venue: 'arXiv preprint · cs.CV',
    href: 'https://arxiv.org/abs/2505.02690',
    image: '/images/papers/fireworks-system.png',
    imageAlt: 'Pipeline of the interactive broadcast gymnastics training system',
    note: 'First author',
    summary: 'A mobile pose-estimation system that links exercise feedback with responsive visual rewards.',
  },
];
