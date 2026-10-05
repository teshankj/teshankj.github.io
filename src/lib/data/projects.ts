export type Project = {
	title: string;
	subtitle: string;
	description: string;
	image?: string;
	tags: string[];
	metrics?: {
		value: string;
		label: string;
	}[];
	github?: string;
	demo?: string;
};

export type ProjectGroup = {
	number: string;
	title: string;
	description: string;
	projects: Project[];
};

export const projectGroups: ProjectGroup[] = [

	{
		number: '01',
		title: 'End-to-End Systems',
		description:
			'Applied AI systems designed around the complete machine learning lifecycle — from data and training to inference, APIs, and deployment.',
		projects: [
			{
				title: 'WasteVision',
				subtitle: 'Computer Vision Waste Detection',
				description:
					'A computer vision system for automated waste classification and detection, designed as an end-to-end ML project with experiment tracking, data versioning, containerization, and deployment.',
				image: '/images/WASTE.png',
					tags: [
					'MobileNetV3',
					'PyTorch',
					'DVC',
					'MLflow',
					'Docker',
					'FastAPI'
				],
				metrics: [
					{
						value: 'CV',
						label: 'Computer Vision'
					},
					{
						value: 'E2E',
						label: 'ML Lifecycle'
					}
				],
				github: 'https://github.com/teshankj/WasteVision'
			},

			{
				title: 'BoxCrete',
				subtitle: 'Concrete Strength Prediction',
				description:
					'An end-to-end machine learning system for predicting concrete compressive strength from mix-design and environmental parameters, with model experimentation, tracking, and API-ready inference.',
				image: '/images/BOX.png',
				tags: [
					'PyTorch',
					'Scikit-learn',
					'MLflow',
					'DVC',
					'FastAPI'
				],
				metrics: [
					{
						value: 'Regression',
						label: 'ML Task'
					},
					{
						value: 'API',
						label: 'Inference'
					}
				],
				github: 'https://github.com/teshankj/boxcrete-e2e'
			}
		]
	},
	{

		number: '02',
		title: 'Research Projects',
		description:
			'Research-driven projects exploring multimodal learning, trustworthy AI, circuit intelligence, and hyperspectral anomaly detection.',
		projects: [
			{
				title: 'TrustFND',
				subtitle: 'Multimodal Fake News Detection',
				description:
					'An interpretable and robust multimodal fake news detection framework combining textual and visual evidence, uncertainty estimation, and reliable reasoning.',
				image: '/images/TrustFNDN.png',
				tags: ['PyTorch', 'BERT', 'CLIP', 'DST', 'EDL'],
				metrics: [
					{
						value: '85%',
						label: 'Accuracy'
					},
					{
						value: '0.85',
						label: 'F1 Score'
					}
				],
				github:
					'https://github.com/teshankj/Interpretable-and-Robust-Multimodal-Fake-News-Detection-with-Evidence-Fusion-and-Reliable-Reasoning'
			},

			{
				title: 'MOCRN',
				subtitle: 'Analog Circuit Fault Detection',
				description:
					'A physics-guided multimodal neural network for analog circuit fault identification and degradation estimation using simulated circuit behavior and learned representations.',
				image: '/images/MOCRNN.png',
				tags: ['PyTorch', 'LTSpice', 'Signal Processing', 'Physics-Guided ML'],
				metrics: [
					{
						value: '90%+',
						label: 'Fault Accuracy'
					},
					{
						value: '3.96ms',
						label: 'Inference Time'
					}
				],
				github:
					'https://github.com/teshankj/MOCRN-Multimodal-Ordinal-Circuit-Reliability-Network'
			},

			{
				title: 'Hyperspectral Anomaly Detection & Injection Framework',
				subtitle: 'Anomaly Class Matching via Statistical Multi-Metric Framework',
				description:
					'A research framework investigating projected spectral representations for transforming hyperspectral anomaly detection into a scientifically grounded benchmarking problem.',
				image: '/images/hsi.png',
				tags: [
					'PyTorch',
					'Hyperspectral Imaging',
					'PCA',
					'Anomaly Detection'
				],
				metrics: [],
				github:
					'https://github.com/teshankj/Anomaly-Class-Matching-via-Statistical-Multi-Metric-Framework'
			}
		]
	},

	{
		number: '03',
		title: 'Fun Projects',
		description:
			'Smaller experimental projects built to explore practical computer vision and local AI applications.',
		projects: [
			{
				title: 'StickerLab AI',
				subtitle: 'On-Device Sticker Generator',
				description:
					'A privacy-first desktop application that converts sketches and photographs into production-ready transparent WhatsApp stickers completely on-device.',
				image: '/images/sticker.png',
				tags: ['OpenCV', 'MediaPipe', 'Python', 'Gradio'],
				metrics: [],
				github: 'https://github.com/teshankj/sticker-generator-ai'
			}
		]
	},
];
