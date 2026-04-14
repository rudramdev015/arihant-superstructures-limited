// --- UI ICONS (Directly in assets folder) ---
import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'

// --- BRAND ASSETS ---
import header_img from './header_img.png'
import brand_img from './brand_img.png'

// --- FIXED FLOOR PLANS (Based on your Sidebar) ---
// These are located in src/components/
import plan1BHK from '../components/Arihant-Anngan-1-BHK-Flat-Plan.jpg'
import plan2BHK from '../components/pop1.jpg'

// --- CHAIRMAN & PROFILE ASSETS ---
// Found in src/assets/images/ per your screenshot
import chairman_img from './images/chairman.png' 
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

// --- PROJECT IMAGES ---
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    left_arrow,
    right_arrow,
    header_img,
    brand_img,
    plan1BHK,
    plan2BHK,
    chairman_img
}

export const projectsData = [
    { title: "Arihant Anchal", price: "Starting ₹25L", location: "Jodhpur", image: project_img_1 },
    { title: "Arihant Adita", price: "Starting ₹35L", location: "Jodhpur", image: project_img_2 },
    { title: "Arihant Ayati", price: "Starting ₹55L", location: "Jodhpur", image: project_img_3 },
    { title: "Modern Studio", price: "Starting ₹18L", location: "Boranada", image: project_img_4 },
    { title: "Green Valley", price: "Starting ₹22L", location: "Jodhpur", image: project_img_5 },
    { title: "Skyline Residency", price: "Starting ₹40L", location: "Jodhpur", image: project_img_6 },
];

export const testimonialsData = [
    {
        name: "Aryan Khanna",
        title: "Home Owner",
        image: profile_img_1,
        rating: 5,
        text: "Arihant Superstructures creates lifestyles. Proud to be part of the family."
    },
    {
        name: "Sneha Kapoor",
        title: "Investor",
        image: profile_img_2,
        rating: 5,
        text: "Transparent dealings and top-notch amenities. Best decision for our family."
    }
];