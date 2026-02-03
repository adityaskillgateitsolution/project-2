
import { NavItem, Achievement, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Academics', page: 'academics' },
  { label: 'Admissions', page: 'admissions' },
  { label: 'Facilities', page: 'facilities' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact Us', page: 'contact' },
  { label: 'Disclosure', page: 'disclosure' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { year: '2023', title: 'District Rank in SSLC', description: 'Our student Selvan. K. Rahul secured the 3rd rank in the district board examinations with 494/500.' },
  { year: '2022', title: 'State Level Kho-Kho Champions', description: 'The Under-17 girls team clinched the gold medal at the Tamil Nadu State Rural Games held in Chennai.' },
  { year: '2021', title: 'National Innovation Award', description: 'Received the "Young Scientist" award for our student-led project on sustainable urban farming solutions.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Senthil Kumaran',
    role: 'Parent of Class 12 Student',
    content: 'The transition from school to competitive exam preparation was seamless. St. Xavier’s focus on the NEET foundation while maintaining Board scores is exemplary. The dedication of the staff is truly commendable.',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Anjali Devi',
    role: 'Alumna (Class of 2015)',
    content: 'The values taught at SX—integrity and discipline—have been my guiding stars throughout my professional career in medicine. I am proud to be a part of this prestigious institution.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const FACILITIES_DATA = [
  {
    title: 'Sir C.V. Raman Science Lab',
    desc: 'Advanced equipment for Physics, Chemistry, and Biology experiments, promoting research-oriented learning and practical knowledge.',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    icon: '🧪'
  },
  {
    title: 'APJ Digital Center',
    desc: 'Equipped with the latest computing systems and high-speed broadband to introduce students to AI, Robotics, and Data Science.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    icon: '💻'
  },
  {
    title: 'The Great Arena',
    desc: 'State-of-the-art synthetic tracks and grounds for football, basketball, and traditional sports like Kabaddi and Silambam.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    icon: '🏆'
  },
  {
    title: 'Knowledge Hub',
    desc: 'A serene library with over 15,000 titles, integrated e-learning stations, and a dedicated section for rare Tamil literature.',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
    icon: '📚'
  }
];

export const LEADERSHIP_DATA = [
  { name: 'Rev. Fr. J. Anthony Raj', role: 'Correspondent', bio: 'A visionary educationalist with three decades of service in managing premier institutions across Tamil Nadu, dedicated to social uplifting through education.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300' },
  { name: 'Dr. R. Meenakshi', role: 'Principal', bio: 'Expert in Curriculum Development and Educational Psychology with a PhD from Madras University. Leading our academic excellence with a heart for every student.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' }
];
