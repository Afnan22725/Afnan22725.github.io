// Data storage with default values
let portfolioData = {
    profile: {
        name: "Mohamed Afnan",
        subtitle: "Computer Science & Electronic Automation Engineer",
        profilePic: ""
    },
    about: {
        text1: "I'm a motivated undergraduate specializing in Computer Science, Electronics, and Automation Engineering with hands-on experience in IoT systems, embedded programming, and web/mobile development.",
        text2: "Passionate about solving real-world problems using both software and electronics, I'm skilled in microcontrollers, circuit design, full-stack development, and building reliable, data-driven automation systems.",
        text3: "Currently pursuing BSc (External) in Electronic & Automation Technologies at University of Colombo and BSc (Hons) in Computer Science at University of Westminster (IIT), Sri Lanka."
    },
    contact: {
        email: "mnmafnan2021@gmail.com",
        phone: "0765650304",
        location: "78/8, Zaviya Road, Kattankudy 01",
        github: "https://github.com/Afnan22725",
        linkedin: "https://linkedin.com/in/mohamed-afnan1abb26282"
    },
    skills: ["Python", "C/C++", "Java", "JavaScript", "React Native", "Arduino", "ESP32", "Raspberry Pi", "IoT", "PCB Design", "CAD/3D Print", "Laravel"],
    projects: [
        {
            id: 1,
            emoji: "🚤",
            image: "",
            title: "IoT Water Quality Monitoring & Drone Boat",
            description: "Raspberry Pi-based system with GPS tracking, live camera streaming, cloud data logging, and automated water sampling with custom PCB.",
            tags: ["Raspberry Pi", "IoT", "GPS", "Cloud"],
            link: "https://github.com/Afnan22725"
        },
        {
            id: 2,
            emoji: "🌤️",
            image: "",
            title: "IoT Weather Monitoring System",
            description: "ESP32-based weather station with DHT22/DS18B20 sensors, cloud data upload, dashboard visualization, and threshold alerts.",
            tags: ["ESP32", "Sensors", "Dashboard"],
            link: "https://github.com/Afnan22725"
        },
        {
            id: 3,
            emoji: "🏠",
            image: "",
            title: "Smart Home Automation System",
            description: "NodeMCU/ESP32 controlling lights, fans, and security systems with mobile app, real-time monitoring, and automation schedules.",
            tags: ["ESP32", "Mobile App", "Automation"],
            link: "https://github.com/Afnan22725"
        },
        {
            id: 4,
            emoji: "🌡️",
            image: "",
            title: "NTC Thermistor Calibration System",
            description: "Dual-ESP32 setup with MySQL data logging and Python curve-fitting for precise temperature measurement calibration.",
            tags: ["ESP32", "Python", "MySQL"],
            link: "https://github.com/Afnan22725"
        },
        {
            id: 5,
            emoji: "🌱",
            image: "",
            title: "Automatic Plant Watering System",
            description: "Soil moisture sensor-based system with automated pump control, LCD display, and manual override functionality.",
            tags: ["Arduino", "Sensors", "Automation"],
            link: "https://github.com/Afnan22725"
        },
        {
            id: 6,
            emoji: "📱",
            image: "",
            title: "Mobile Apps Portfolio",
            description: "Collection of React Native apps including Expense Tracker, Recipe Book, and more, showcasing mobile development skills.",
            tags: ["React Native", "Mobile Dev", "UI/UX"],
            link: "https://github.com/Afnan22725"
        }
    ],
    experience: [
        {
            id: 1,
            title: "Electronics Technician",
            company: "DocuTech Solutions",
            duration: "1 Year",
            description: "Repaired laptops, printers, and SMPS. Specialized in PCB diagnostics, electrical wiring, and networking solutions."
        },
        {
            id: 2,
            title: "Electronic Technician",
            company: "OneMac Solutions",
            duration: "2 Months",
            description: "Specialized in Apple device repairs, micro-soldering, and component-level troubleshooting."
        }
    ]
};

// Load data from localStorage or use defaults
function loadData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        portfolioData = JSON.parse(saved);
    }
    renderAll();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
}

// Render all sections
function renderAll() {
    renderProfile();
    renderAbout();
    renderContact();
    renderSkills();
    renderProjects();
    renderExperience();
}

// Render profile section
function renderProfile() {
    document.getElementById('heroName').textContent = portfolioData.profile.name;
    document.getElementById('heroSubtitle').textContent = portfolioData.profile.subtitle;
    
    const profilePic = document.getElementById('profilePicture');
    if (portfolioData.profile.profilePic) {
        profilePic.innerHTML = `<img src="${portfolioData.profile.profilePic}" alt="Profile Picture">`;
    } else {
        profilePic.innerHTML = '<div class="profile-picture-placeholder">👨‍💻</div>';
    }
}

// Render about section
function renderAbout() {
    document.getElementById('aboutText1').textContent = portfolioData.about.text1;
    document.getElementById('aboutText2').textContent = portfolioData.about.text2;
    document.getElementById('aboutText3').textContent = portfolioData.about.text3;
}

// Render contact section
function renderContact() {
    document.getElementById('contactEmail').textContent = portfolioData.contact.email;
    document.getElementById('contactPhone').textContent = portfolioData.contact.phone;
    document.getElementById('contactLocation').textContent = portfolioData.contact.location;
    document.getElementById('githubLink').href = portfolioData.contact.github;
    document.getElementById('linkedinLink').href = portfolioData.contact.linkedin;
    document.getElementById('emailLink').href = `mailto:${portfolioData.contact.email}`;
}

// Render skills section
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = portfolioData.skills.map(skill => 
        `<div class="skill-card">${skill}</div>`
    ).join('');
}

// Render projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.title}">` : project.emoji}
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank">View Code →</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-attach observer to newly rendered projects
    if (observer) {
        document.querySelectorAll('#projectsGrid .animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}

// Render experience
function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <p class="company">${exp.company} • ${exp.duration}</p>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Admin Panel Functions
function openAdminPanel(e) {
    e.preventDefault();
    const passwordModal = document.getElementById('passwordModal');
    passwordModal.classList.add('active');
    document.getElementById('adminPassword').focus();
}

function closeAdminPanel() {
    const modal = document.getElementById('adminModal');
    modal.classList.remove('active');
}

function loadAdminData() {
    // Load profile data
    document.getElementById('adminProfilePic').value = portfolioData.profile.profilePic || '';
    document.getElementById('adminName').value = portfolioData.profile.name;
    document.getElementById('adminSubtitle').value = portfolioData.profile.subtitle;

    // Load about data
    document.getElementById('adminAbout1').value = portfolioData.about.text1;
    document.getElementById('adminAbout2').value = portfolioData.about.text2;
    document.getElementById('adminAbout3').value = portfolioData.about.text3;

    // Load contact data
    document.getElementById('adminEmail').value = portfolioData.contact.email;
    document.getElementById('adminPhone').value = portfolioData.contact.phone;
    document.getElementById('adminLocation').value = portfolioData.contact.location;
    document.getElementById('adminGithub').value = portfolioData.contact.github;
    document.getElementById('adminLinkedin').value = portfolioData.contact.linkedin;

    // Load skills
    document.getElementById('adminSkills').value = portfolioData.skills.join(', ');

    // Load projects
    renderProjectsEditor();
    
    // Load experience
    renderExperienceEditor();
}

function renderProjectsEditor() {
    const editor = document.getElementById('projectsEditor');
    editor.innerHTML = portfolioData.projects.map((project, index) => `
        <div class="project-editor">
            <h4>Project ${index + 1}</h4>
            <input type="text" placeholder="Emoji (e.g., 🚤)" value="${project.emoji}" 
                   onchange="updateProject(${index}, 'emoji', this.value)">
            <input type="text" placeholder="Image URL (optional)" value="${project.image}" 
                   onchange="updateProject(${index}, 'image', this.value)">
            <input type="text" placeholder="Title" value="${project.title}" 
                   onchange="updateProject(${index}, 'title', this.value)">
            <textarea placeholder="Description" rows="2" 
                      onchange="updateProject(${index}, 'description', this.value)">${project.description}</textarea>
            <input type="text" placeholder="Tags (comma-separated)" value="${project.tags.join(', ')}" 
                   onchange="updateProject(${index}, 'tags', this.value.split(',').map(t => t.trim()))">
            <input type="text" placeholder="GitHub Link" value="${project.link}" 
                   onchange="updateProject(${index}, 'link', this.value)">
            <button class="btn btn-danger btn-small" onclick="deleteProject(${index})">Delete</button>
        </div>
    `).join('');
}

function updateProject(index, field, value) {
    portfolioData.projects[index][field] = value;
}

function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        portfolioData.projects.splice(index, 1);
        renderProjectsEditor();
    }
}

function addNewProject() {
    portfolioData.projects.push({
        id: Date.now(),
        emoji: "🆕",
        image: "",
        title: "New Project",
        description: "Project description here",
        tags: ["Tag1", "Tag2"],
        link: "https://github.com/Afnan22725"
    });
    renderProjectsEditor();
}

// Experience editor functions
function renderExperienceEditor() {
    const editor = document.getElementById('experienceEditor');
    editor.innerHTML = portfolioData.experience.map((exp, index) => `
        <div class="project-editor">
            <h4>Experience ${index + 1}</h4>
            <input type="text" placeholder="Job Title" value="${exp.title}" 
                   onchange="updateExperience(${index}, 'title', this.value)">
            <input type="text" placeholder="Company Name" value="${exp.company}" 
                   onchange="updateExperience(${index}, 'company', this.value)">
            <input type="text" placeholder="Duration (e.g., 1 Year)" value="${exp.duration}" 
                   onchange="updateExperience(${index}, 'duration', this.value)">
            <textarea placeholder="Description" rows="2" 
                      onchange="updateExperience(${index}, 'description', this.value)">${exp.description}</textarea>
            <button class="btn btn-danger btn-small" onclick="deleteExperience(${index})">Delete</button>
        </div>
    `).join('');
}

function updateExperience(index, field, value) {
    portfolioData.experience[index][field] = value;
}

function deleteExperience(index) {
    if (confirm('Are you sure you want to delete this experience?')) {
        portfolioData.experience.splice(index, 1);
        renderExperienceEditor();
    }
}

function addNewExperience() {
    portfolioData.experience.push({
        id: Date.now(),
        title: "Job Title",
        company: "Company Name",
        duration: "Duration",
        description: "Job description here"
    });
    renderExperienceEditor();
}

// Reset to default data
function resetData() {
    if (confirm('⚠️ This will reset all data to default. Are you sure?')) {
        localStorage.removeItem('portfolioData');
        location.reload();
    }
}

function saveAllChanges() {
    // Save profile
    portfolioData.profile.profilePic = document.getElementById('adminProfilePic').value;
    portfolioData.profile.name = document.getElementById('adminName').value;
    portfolioData.profile.subtitle = document.getElementById('adminSubtitle').value;

    // Save about
    portfolioData.about.text1 = document.getElementById('adminAbout1').value;
    portfolioData.about.text2 = document.getElementById('adminAbout2').value;
    portfolioData.about.text3 = document.getElementById('adminAbout3').value;

    // Save contact
    portfolioData.contact.email = document.getElementById('adminEmail').value;
    portfolioData.contact.phone = document.getElementById('adminPhone').value;
    portfolioData.contact.location = document.getElementById('adminLocation').value;
    portfolioData.contact.github = document.getElementById('adminGithub').value;
    portfolioData.contact.linkedin = document.getElementById('adminLinkedin').value;

    // Save skills
    const skillsText = document.getElementById('adminSkills').value;
    portfolioData.skills = skillsText.split(',').map(s => s.trim()).filter(s => s);

    // Save to localStorage
    saveData();
    
    // Render updates
    renderAll();
    
    // Close modal
    closeAdminPanel();
    
    alert('✅ All changes saved successfully!');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll animations - Initialize observer
let observer;
function initializeObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Form submission handler
function handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        inquiryType: document.getElementById('inquiry-type').value,
        message: document.getElementById('message').value
    };

    const subject = encodeURIComponent(`${formData.inquiryType.toUpperCase()}: Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Inquiry Type: ${formData.inquiryType}\n\n` +
        `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    
    e.target.reset();
    alert('Thank you for your message! Your default email client will open to send the inquiry.');
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary)';
        }
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeObserver();
    loadData();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('adminModal');
    if (e.target === modal) {
        closeAdminPanel();
    }
});

// Export data as JSON
function exportData() {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Import data from JSON
function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                portfolioData = JSON.parse(e.target.result);
                saveData();
                renderAll();
                loadAdminData();
                alert('✅ Data imported successfully!');
            } catch (error) {
                alert('❌ Error importing data. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }
}

// Password Modal Functions
function closePasswordModal() {
    document.getElementById('passwordModal').classList.remove('active');
    document.getElementById('adminPassword').value = '';
    document.getElementById('passwordError').classList.remove('show');
}

function checkPassword() {
    const password = document.getElementById('adminPassword').value;
    const errorMsg = document.getElementById('passwordError');
    
    if (password === 'admin123') {
        closePasswordModal();
        document.getElementById('adminModal').classList.add('active');
        loadAdminData();
    } else {
        errorMsg.classList.add('show');
        setTimeout(() => {
            errorMsg.classList.remove('show');
        }, 500);
    }
}

function handlePasswordKeypress(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}
