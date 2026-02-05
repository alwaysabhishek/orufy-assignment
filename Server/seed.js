const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('./models/Service');
const Project = require('./models/Project');
const Testimonial = require('./models/Testimonial');
const Team = require('./models/Team');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/orufy_db');
        console.log('MongoDB Connected for seeding...');
    } catch (error) {
        console.error('Connection error:', error);
        process.exit(1);
    }
};

// Sample data
const services = [
    {
        title: 'Web Development',
        description: 'We build responsive, modern websites using the latest technologies. From simple landing pages to complex web applications.',
        icon: 'fas fa-code',
        features: ['React.js', 'Node.js', 'MongoDB', 'Responsive Design']
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
        icon: 'fas fa-mobile-alt',
        features: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive designs that engage users and drive conversions. We focus on user-centered design principles.',
        icon: 'fas fa-paint-brush',
        features: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions. We help you migrate and optimize your cloud presence.',
        icon: 'fas fa-cloud',
        features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
        title: 'Digital Marketing',
        description: 'Strategic digital marketing solutions to grow your online presence and reach your target audience effectively.',
        icon: 'fas fa-bullhorn',
        features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
        title: 'E-Commerce Solutions',
        description: 'Complete e-commerce solutions from store setup to payment integration. Start selling online with ease.',
        icon: 'fas fa-shopping-cart',
        features: ['Shopify', 'WooCommerce', 'Payment Gateway', 'Inventory']
    }
];

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
        category: 'web',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: '#'
    },
    {
        title: 'Fitness Tracking App',
        description: 'Mobile application for tracking workouts, nutrition, and health goals with social features.',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500',
        category: 'mobile',
        technologies: ['React Native', 'Firebase', 'Redux'],
        link: '#'
    },
    {
        title: 'Restaurant Website',
        description: 'Modern restaurant website with online ordering, table reservations, and menu management.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
        category: 'web',
        technologies: ['Next.js', 'Tailwind CSS', 'Prisma'],
        link: '#'
    },
    {
        title: 'Brand Identity Design',
        description: 'Complete brand identity package including logo, color palette, typography, and brand guidelines.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500',
        category: 'design',
        technologies: ['Figma', 'Illustrator', 'Photoshop'],
        link: '#'
    },
    {
        title: 'Social Media Campaign',
        description: 'Successful social media marketing campaign that increased engagement by 150% in 3 months.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500',
        category: 'marketing',
        technologies: ['Facebook Ads', 'Instagram', 'Analytics'],
        link: '#'
    },
    {
        title: 'Healthcare Portal',
        description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500',
        category: 'web',
        technologies: ['Vue.js', 'Express', 'PostgreSQL'],
        link: '#'
    }
];

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'CEO',
        company: 'TechStart India',
        content: 'Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. Highly recommended!',
        rating: 5,
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Priya Patel',
        role: 'Marketing Director',
        company: 'GrowthHub',
        content: 'The digital marketing strategy they developed helped us increase our online sales by 200%. Their expertise is unmatched.',
        rating: 5,
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Amit Kumar',
        role: 'Founder',
        company: 'StartupX',
        content: 'From concept to launch, they guided us through every step. Our mobile app has received amazing reviews from users.',
        rating: 5,
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name: 'Sneha Gupta',
        role: 'Product Manager',
        company: 'InnovateTech',
        content: 'Their UI/UX design transformed our product. User engagement increased significantly after the redesign.',
        rating: 4,
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
];

const team = [
    {
        name: 'Vikram Singh',
        role: 'CEO & Founder',
        bio: 'With 10+ years of experience in tech, Vikram leads our team with vision and passion.',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
        }
    },
    {
        name: 'Ananya Reddy',
        role: 'Lead Developer',
        bio: 'Full-stack developer with expertise in React, Node.js, and cloud technologies.',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
        }
    },
    {
        name: 'Rohit Mehta',
        role: 'UI/UX Designer',
        bio: 'Creative designer focused on creating beautiful and intuitive user experiences.',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
        }
    },
    {
        name: 'Kavita Joshi',
        role: 'Project Manager',
        bio: 'Ensures smooth project delivery with excellent communication and organization skills.',
        image: 'https://randomuser.me/api/portraits/women/14.jpg',
        social: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
            github: 'https://github.com'
        }
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Service.deleteMany({});
        await Project.deleteMany({});
        await Testimonial.deleteMany({});
        await Team.deleteMany({});

        console.log('Cleared existing data');

        // Insert new data
        await Service.insertMany(services);
        console.log('Services seeded');

        await Project.insertMany(projects);
        console.log('Projects seeded');

        await Testimonial.insertMany(testimonials);
        console.log('Testimonials seeded');

        await Team.insertMany(team);
        console.log('Team members seeded');

        console.log('Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
