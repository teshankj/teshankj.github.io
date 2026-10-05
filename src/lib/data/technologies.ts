export type Technology = {
	name: string;
	category: string;
	icon?: string;
};

export const technologyRows: Technology[][] = [
	[
		{
			name: 'Python',
			category: 'Programming',
			icon: 'simple-icons:python'
		},
		{
			name: 'PyTorch',
			category: 'Deep Learning',
			icon: 'simple-icons:pytorch'
		},
		{
			name: 'TensorFlow',
			category: 'Deep Learning',
			icon: 'simple-icons:tensorflow'
		},
		{
			name: 'Keras',
			category: 'Deep Learning',
			icon: 'simple-icons:keras'
		},
		{
			name: 'Scikit-learn',
			category: 'Machine Learning',
			icon: 'simple-icons:scikitlearn'
		},
		{
			name: 'Hugging Face',
			category: 'AI',
			icon: 'simple-icons:huggingface'
		},
		{
			name: 'NumPy',
			category: 'Scientific Computing',
			icon: 'simple-icons:numpy'
		},
		{
			name: 'Pandas',
			category: 'Data Science',
			icon: 'simple-icons:pandas'
		},
		{
			name: 'Jupyter',
			category: 'Development',
			icon: 'simple-icons:jupyter'
		}
	],

	[
		{
			name: 'OpenCV',
			category: 'Computer Vision',
			icon: 'simple-icons:opencv'
		},
		{
			name: 'MediaPipe',
			category: 'Computer Vision',
			icon: 'simple-icons:mediapipe'
		},
		{
			name: 'CLIP',
			category: 'Multimodal AI',
			icon: 'simple-icons:openai'
		},
		{
			name: 'TorchVision',
			category: 'Computer Vision',
			icon: 'simple-icons:pytorch'
		},
		{
			name: 'ONNX Runtime',
			category: 'Inference',
			icon: 'simple-icons:onnx'
		},
		{
			name: 'TFLite',
			category: 'Inference',
			icon: 'simple-icons:tensorflow'
		},
		{
			name: 'Ultralytics',
			category: 'Object Detection',
			icon: 'simple-icons:ultralytics'
		},
		{
			name: 'PIL',
			category: 'Image Processing',
			icon: 'simple-icons:python'
		},
		{
			name: 'PostgreSQL',
			category: 'Database',
			icon: 'simple-icons:postgresql'
		},
		{
			name: 'SQLite',
			category: 'Database',
			icon: 'simple-icons:sqlite'
		},
		{
			name: 'PyWavelets',
			category: 'Signal Processing',
			icon: 'simple-icons:python'
		}
	],

	[
		{
			name: 'Docker',
			category: 'Containers',
			icon: 'simple-icons:docker'
		},
		{
			name: 'DVC',
			category: 'MLOps',
			icon: 'simple-icons:dvc'
		},
		{
			name: 'MLflow',
			category: 'MLOps',
			icon: 'simple-icons:mlflow'
		},
		{
			name: 'FastAPI',
			category: 'Backend',
			icon: 'simple-icons:fastapi'
		},
		{
			name: 'Kubernetes',
			category: 'Infrastructure',
			icon: 'simple-icons:kubernetes'
		},
		{
			name: 'GitHub Actions',
			category: 'CI/CD',
			icon: 'simple-icons:githubactions'
		},
		{
			name: 'Git',
			category: 'Version Control',
			icon: 'simple-icons:git'
		},
		{
			name: 'Linux',
			category: 'Operating System',
			icon: 'simple-icons:linux'
		},
		{
			name: 'C / C++',
			category: 'Programming',
			icon: 'simple-icons:cplusplus'
		},
		{
			name: 'LTSpice',
			category: 'Circuit Simulation'
		},
		{
			name: 'SvelteKit',
			category: 'Web Development',
			icon: 'simple-icons:svelte'
		}
	]
];