export const profile = {
  name: 'Haotian Chen',
  role: 'M.S. Student in Cyberspace Security',
  institution: 'University of Science and Technology of China',
  email: 'htchen@mail.ustc.edu.cn',
  links: {
    scholar: 'https://scholar.google.com/citations?user=F_D2Ea4AAAAJ&hl=en',
    github: 'https://github.com/Leo-Chen-cs',
    arxiv: 'https://arxiv.org/search/cs?searchtype=author&query=Chen%2C+Haotian',
  },
  intro:
    'My research explores how LLM-based agents can develop persistent memory, personalized behavior, and grounded interactions within complex social and 3D environments.',
};

export const researchAreas = [
  {
    index: '01',
    title: 'Reliable & Auditable LLM Agents',
    description: 'Evaluation and control for tool-using and multi-agent systems, with an emphasis on action semantics, order sensitivity, progress attribution, replayability, and failure diagnosis.',
  },
  {
    index: '02',
    title: 'Long-Term Memory & Personalization',
    description: 'Mechanisms for agents to acquire, update, retrieve, and forget long-term memories while preserving user preferences, temporal consistency, and controllable behavior.',
  },
  {
    index: '03',
    title: 'Multi-Agent & Social Simulation',
    description: 'Executable environments for studying coordination, interaction, and emergent behavior through traceable world-state transitions and reproducible counterfactual experiments.',
  },
  {
    index: '04',
    title: 'Embodied & 3D Intelligence',
    description: 'Multimodal models that connect vision, language, and geometry for tiny-object perception, pose understanding, 3D scene reasoning, and embodied decision-making.',
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
