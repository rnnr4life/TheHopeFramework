// ===== Age Group System =====
let currentAge = 'middle'; // default

const ageContent = {
    elementary: {
        welcomeTitle: 'The HOPE Framework',
        welcomeSubtitle: 'Finding Hope in Stories About Our Earth',
        welcomeDesc: 'Stories can help us feel better about the Earth! Let\'s learn four ways to find hope when we read.',
        btnStart: 'Let\'s Go! 🌟',
        learnTitle: 'Your Four Hope Powers!',
        learnIntro: 'These are your four special powers for finding hope in stories. Tap each one to learn about it!',
        btnActivity: 'Practice Matching! 🎯',
        matchTitle: 'Match the Marker! 🎯',
        matchIntro: 'Read each sentence. Which Hope Power does it show? Tap the right one!',
        matchComplete: 'You got them all!',
        matchCompleteMsg: 'Now let\'s try finding Hope Powers in a real story!',
        btnFindHope: 'Read a Story! 📖',
        activityTitle: 'Find the Hope! 🔍',
        activityIntro: 'Read the story, then highlight the parts that show hope!',
        toolbarLabel: 'Pick some words, then tap a hope power:',
        placeholder: 'Tap "Sample Story" to start reading! 📖',
        feedbackBtn: 'How Did I Do? 💬',
        resourcesTitle: 'More Fun Stuff! 📚',
        resourcesIntro: 'Books, shows, games, and websites to help you learn more about taking care of the Earth!',
        resourcesBtn: 'Fun Stuff 📚',
        reflectTitle: 'Think About It ✍️',
        reflectIntro: 'Let\'s think about the story you just read and how it made you feel!',
        reflectQ1: 'How did the story make you feel about nature and the Earth?',
        reflectQ2: 'Which Hope Power was your favorite? Why?',
        reflectQ3: 'What is one thing YOU could do to help the Earth?',
        reflectBtn: 'Think About It',
        exportBtn: 'Print My Work',
        welcomeHint: 'Learn the Hope Powers → Practice matching → Read a story!',
    },
    middle: {
        welcomeTitle: 'The HOPE Framework',
        welcomeSubtitle: 'Healing Opportunities for Processing Eco-grief',
        welcomeDesc: 'Discover hope in the stories we read. Use four markers to find how authors show us that change is possible.',
        btnStart: 'Let\'s Go!',
        learnTitle: 'The Four Markers of Hope',
        learnIntro: 'When we read stories about the environment, we can look for these four signs of hope. Click each one to explore.',
        btnActivity: 'Practice Matching',
        matchTitle: 'Marker Match',
        matchIntro: 'Read each phrase and decide which HOPE marker it belongs to. Tap the phrase, then tap the marker.',
        matchComplete: 'Nice work!',
        matchCompleteMsg: 'You\'ve got the markers down. Now try finding them in a real story!',
        btnFindHope: 'Find the Hope',
        activityTitle: 'Find the Hope',
        activityIntro: 'Read the passage below. Select text and tag it with a HOPE marker.',
        toolbarLabel: 'Select text, then pick a marker:',
        placeholder: 'Pick a story to get started!',
        feedbackBtn: 'Get Feedback',
        resourcesTitle: 'Keep Exploring 📚',
        resourcesIntro: 'Books, websites, shows, and more to help you learn about the environment and find hope.',
        resourcesBtn: 'Resources',
        reflectTitle: 'Reflect ✍️',
        reflectIntro: 'Take a moment to think about what you read and how it made you feel.',
        reflectQ1: 'How did the story make you feel about the environment?',
        reflectQ2: 'Which HOPE marker stood out to you most? Why?',
        reflectQ3: 'What is one thing you could do to make a difference?',
        reflectBtn: 'Reflect',
        exportBtn: 'Print My Work',
        welcomeHint: 'Learn the markers → Practice matching → Analyze a story',
    },
    high: {
        welcomeTitle: 'The HOPE Framework',
        welcomeSubtitle: 'Healing Opportunities for Processing Eco-grief',
        welcomeDesc: 'Analyze narratives through the lens of hope theory. Identify four textual markers that reveal pathways from eco-grief to agency.',
        btnStart: 'Continue',
        learnTitle: 'Four Textual Markers of Hope',
        learnIntro: 'The HOPE Framework identifies four markers in climate narratives that signal hope as a lived practice. Select each to review.',
        btnActivity: 'Practice Identification',
        matchTitle: 'Marker Identification',
        matchIntro: 'Classify each passage excerpt by its corresponding HOPE marker.',
        matchComplete: 'Classification complete.',
        matchCompleteMsg: 'Apply your understanding to a full narrative analysis.',
        btnFindHope: 'Begin Analysis',
        activityTitle: 'Text Analysis',
        activityIntro: 'Select passages and categorize them by HOPE marker.',
        toolbarLabel: 'Select text, then assign a marker:',
        placeholder: 'Load a text to begin analysis.',
        feedbackBtn: 'View Feedback',
        resourcesTitle: 'Further Reading & Research',
        resourcesIntro: 'Academic papers, books, documentaries, and organizations for deeper engagement with climate literacy and hope theory.',
        resourcesBtn: 'Resources',
        reflectTitle: 'Critical Reflection',
        reflectIntro: 'Synthesize your analysis by reflecting on the text and your engagement with the HOPE Framework.',
        reflectQ1: 'What emotional responses did the narrative evoke, and how do they connect to eco-grief?',
        reflectQ2: 'Which HOPE marker was most effectively demonstrated in the text? Explain your reasoning.',
        reflectQ3: 'How might you apply the HOPE Framework to narratives or situations in your own life?',
        reflectBtn: 'Reflect',
        exportBtn: 'Export',
        welcomeHint: 'Learn the markers → Practice identification → Analyze a text',
    }
};

function setAge(age) {
    currentAge = age;
    document.body.className = `age-${age}`;

    // Show global nav and update grade label
    const nav = document.getElementById('global-nav');
    if (nav) nav.classList.add('visible');
    const gradeLabels = { elementary: 'Elementary', middle: 'Middle', high: 'High School' };
    const gradeEl = document.getElementById('nav-grade-label');
    if (gradeEl) gradeEl.textContent = gradeLabels[age] || age;

    const c = ageContent[age];
    document.getElementById('welcome-title').textContent = c.welcomeTitle;
    document.getElementById('welcome-subtitle').textContent = c.welcomeSubtitle;
    document.getElementById('welcome-desc').textContent = c.welcomeDesc;
    document.getElementById('btn-start-text').textContent = c.btnStart;
    document.getElementById('learn-title').textContent = c.learnTitle;
    document.getElementById('learn-intro').textContent = c.learnIntro;
    document.getElementById('btn-activity-text').textContent = c.btnActivity;
    document.getElementById('match-title').textContent = c.matchTitle;
    document.getElementById('match-intro').textContent = c.matchIntro;
    document.getElementById('match-complete-title').textContent = c.matchComplete;
    document.getElementById('match-complete-msg').textContent = c.matchCompleteMsg;
    document.getElementById('btn-find-hope-text').textContent = c.btnFindHope;
    document.getElementById('activity-title').textContent = c.activityTitle;
    document.getElementById('activity-intro').textContent = c.activityIntro;
    document.getElementById('toolbar-label').textContent = c.toolbarLabel;
    document.getElementById('placeholder-msg').textContent = c.placeholder;
    document.getElementById('btn-get-feedback').innerHTML =
        `<span class="btn-icon">💬</span> ${c.feedbackBtn}`;
    document.getElementById('resources-title').textContent = c.resourcesTitle;
    document.getElementById('resources-intro').textContent = c.resourcesIntro;
    document.getElementById('btn-resources-text').textContent = c.resourcesBtn;
    document.getElementById('reflect-title').textContent = c.reflectTitle;
    document.getElementById('reflect-intro').textContent = c.reflectIntro;
    document.getElementById('reflect-q1-label').textContent = c.reflectQ1;
    document.getElementById('reflect-q2-label').textContent = c.reflectQ2;
    document.getElementById('reflect-q3-label').textContent = c.reflectQ3;
    document.getElementById('btn-reflect-text').textContent = c.reflectBtn;
    document.getElementById('btn-export-text').textContent = c.exportBtn;
    document.getElementById('btn-print-reflect-text').textContent = c.exportBtn;
    document.getElementById('welcome-primary-hint').textContent = c.welcomeHint;

    // Show classroom step on welcome screen if student has joined
    updateWelcomeClassroomStep();
}

// Age selector buttons
document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setAge(btn.dataset.age);
        showScreen('welcome-screen');
    });
});


// ===== Screen Navigation =====
const screens = document.querySelectorAll('.screen');

function showScreen(id) {
    // Stop any playing audio/guided narration on screen change
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    try { clearTimeout(guidedTimer); } catch(e) {}
    try { guidedPlaying = false; } catch(e) {}

    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);

    // Update global nav active state
    updateNavActive(id);
}

document.getElementById('btn-start').addEventListener('click', () => showScreen('learn-screen'));
document.getElementById('btn-to-activity').addEventListener('click', () => {
    initMatchActivity();
    showScreen('match-screen');
});
document.getElementById('btn-back-learn').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-back-match').addEventListener('click', () => showScreen('learn-screen'));
document.getElementById('btn-back-activity').addEventListener('click', () => showScreen('match-screen'));
document.getElementById('btn-to-find-hope').addEventListener('click', () => {
    showScreen('activity-screen');
    if (window._teacherText) {
        loadText(window._teacherText);
        window._teacherText = null;
    }
    maybeShowTutorial();
});
// btn-change-age removed — global nav handles grade changes
document.getElementById('btn-reflect').addEventListener('click', () => showScreen('reflect-screen'));
document.getElementById('btn-back-reflect').addEventListener('click', () => showScreen('activity-screen'));


// ===== Global Navigation =====
const screenToGroup = {
    'welcome-screen': 'home',
    'learn-screen': 'learn', 'match-screen': 'learn', 'activity-screen': 'learn', 'reflect-screen': 'learn', 'marker-detail-screen': 'learn',
    'detective-screen': 'games', 'quest-screen': 'games', 'walk-screen': 'games',
    'guided-screen': 'tools', 'resources-screen': 'tools', 'my-hope-screen': 'tools', 'creative-write-screen': 'tools', 'gallery-screen': 'tools',
    'teacher-hub-screen': 'teacher',
    'worksheet-teacher-screen': 'teacher', 'worksheet-conversations-screen': 'teacher',
    'worksheet-search-screen': 'tools', 'worksheet-literature-screen': 'tools',
};

function updateNavActive(screenId) {
    const group = screenToGroup[screenId] || '';
    document.querySelectorAll('.global-nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.group === group);
    });
    // Hide nav on age screen
    const nav = document.getElementById('global-nav');
    if (nav) {
        if (screenId === 'age-screen') nav.classList.remove('visible');
        else nav.classList.add('visible');
    }
}

// Nav link clicks
document.querySelectorAll('.global-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = link.dataset.nav;
        // If it's a dropdown parent (games/tools), toggle dropdown
        if (target === 'games' || target === 'tools') {
            e.stopPropagation();
            const dd = document.getElementById(`nav-dropdown-${target}`);
            const wasOpen = dd.classList.contains('open');
            // Close all dropdowns first
            document.querySelectorAll('.global-nav-dropdown').forEach(d => d.classList.remove('open'));
            if (!wasOpen) dd.classList.add('open');
            return;
        }
        // Direct navigation
        closeNavDropdowns();
        closeNavMobile();
        showScreen(target);
    });
});

// Dropdown item clicks
document.querySelectorAll('.global-nav-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.dataset.nav;
        closeNavDropdowns();
        closeNavMobile();
        // Init functions for certain screens
        if (item.dataset.init === 'quest' && typeof initQuest === 'function') initQuest();
        if (item.dataset.init === 'resources' && typeof renderResources === 'function') renderResources();
        if (target === 'detective-screen' && typeof initDetective === 'function') initDetective();
        showScreen(target);
    });
});

// Home button
document.getElementById('nav-home').addEventListener('click', () => {
    closeNavDropdowns();
    closeNavMobile();
    showScreen('welcome-screen');
});

// Grade change
document.getElementById('nav-change-grade').addEventListener('click', () => {
    closeNavDropdowns();
    closeNavMobile();
    showScreen('age-screen');
});

// Hamburger toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
    const links = document.getElementById('nav-links');
    const toggle = document.getElementById('nav-toggle');
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.global-nav-link') && !e.target.closest('.global-nav-dropdown')) {
        closeNavDropdowns();
    }
});

function closeNavDropdowns() {
    document.querySelectorAll('.global-nav-dropdown').forEach(d => d.classList.remove('open'));
}
function closeNavMobile() {
    const links = document.getElementById('nav-links');
    const toggle = document.getElementById('nav-toggle');
    if (links) links.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
}


// ===== Learn Screen — Expand/Collapse Cards =====
document.querySelectorAll('.marker-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't toggle if they clicked the Deep Dive button
        if (e.target.closest('.btn-deep-dive')) return;

        const detail = card.querySelector('.marker-detail');
        const isOpen = !detail.classList.contains('hidden');

        // Close all others
        document.querySelectorAll('.marker-card').forEach(c => {
            c.querySelector('.marker-detail').classList.add('hidden');
            c.classList.remove('expanded');
        });

        // Toggle this one
        if (!isOpen) {
            detail.classList.remove('hidden');
            card.classList.add('expanded');
        }
    });
});


// ===== Marker Deep-Dive =====
const markerOrder = ['motivation', 'belief', 'plans', 'agency'];
let currentMarkerIdx = 0;

function openMarkerDetail(markerKey) {
    currentMarkerIdx = markerOrder.indexOf(markerKey);
    if (currentMarkerIdx === -1) currentMarkerIdx = 0;
    renderMarkerDetail(markerKey);
    showScreen('marker-detail-screen');
}

function renderMarkerDetail(markerKey) {
    const data = markerDetails[markerKey];
    if (!data) return;
    const age = currentAge || 'middle';

    // Header
    const header = document.getElementById('marker-deep-header');
    header.setAttribute('data-color', data.color);
    document.getElementById('marker-deep-icon').textContent = data.icon;
    document.getElementById('marker-deep-letter').textContent =
        markerKey === 'motivation' ? 'H — Healing' :
        markerKey === 'belief' ? 'O — Opportunities' :
        markerKey === 'plans' ? 'P — Processing' : 'E — Eco-grief';
    document.getElementById('marker-deep-title').textContent = data.title[age];
    document.getElementById('marker-detail-indicator').textContent = data.icon + ' ' + data.title[age];

    // Definition
    document.getElementById('marker-deep-definition').textContent = data.definition[age];

    // Signals
    const signalsList = document.getElementById('marker-deep-signals');
    signalsList.innerHTML = data.lookFor[age].map(s => `<li>${s}</li>`).join('');

    // Example
    const ex = data.example[age];
    const quote = document.getElementById('marker-deep-quote');
    const highlighted = ex.text.replace(ex.highlight, `<mark>${ex.highlight}</mark>`);
    quote.innerHTML = highlighted;
    document.getElementById('marker-deep-explanation').textContent = ex.explanation;

    // Quote border color
    const colors = { motivation: 'var(--color-motivation)', belief: 'var(--color-belief)', plans: 'var(--color-plans)', agency: 'var(--color-agency)' };
    quote.style.borderLeftColor = colors[markerKey] || 'var(--color-text-light)';

    // Reflection
    document.getElementById('marker-deep-reflection').textContent = data.reflection[age];

    // Prev/Next buttons
    document.getElementById('btn-marker-prev').style.visibility = currentMarkerIdx === 0 ? 'hidden' : 'visible';
    document.getElementById('btn-marker-next').style.visibility = currentMarkerIdx === markerOrder.length - 1 ? 'hidden' : 'visible';

    // Dots
    const dotsEl = document.getElementById('marker-deep-dots');
    dotsEl.innerHTML = markerOrder.map((m, i) =>
        `<button class="marker-deep-dot ${i === currentMarkerIdx ? 'active' : ''}" data-marker="${m}" data-idx="${i}" aria-label="${markerDetails[m].title[age]}"></button>`
    ).join('');
}

// Deep Dive buttons on learn screen
document.querySelectorAll('.btn-deep-dive').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openMarkerDetail(btn.dataset.deepMarker);
    });
});

// Back button
document.getElementById('btn-back-marker-detail').addEventListener('click', () => showScreen('learn-screen'));

// Prev/Next
document.getElementById('btn-marker-prev').addEventListener('click', () => {
    if (currentMarkerIdx > 0) {
        currentMarkerIdx--;
        renderMarkerDetail(markerOrder[currentMarkerIdx]);
        window.scrollTo(0, 0);
    }
});
document.getElementById('btn-marker-next').addEventListener('click', () => {
    if (currentMarkerIdx < markerOrder.length - 1) {
        currentMarkerIdx++;
        renderMarkerDetail(markerOrder[currentMarkerIdx]);
        window.scrollTo(0, 0);
    }
});

// Dot clicks
document.getElementById('marker-deep-dots').addEventListener('click', (e) => {
    const dot = e.target.closest('.marker-deep-dot');
    if (!dot) return;
    currentMarkerIdx = parseInt(dot.dataset.idx);
    renderMarkerDetail(markerOrder[currentMarkerIdx]);
    window.scrollTo(0, 0);
});


// ===== Classroom System =====
function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function getClassroom() {
    try { return JSON.parse(localStorage.getItem('hope-classroom')); } catch { return null; }
}
function saveClassroom(classroom) {
    localStorage.setItem('hope-classroom', JSON.stringify(classroom));
}
function getStudentClassroom() {
    return localStorage.getItem('hope-student-classroom') || null;
}
function setStudentClassroom(code) {
    localStorage.setItem('hope-student-classroom', code);
}

function getSubmissions(code) {
    try { return JSON.parse(localStorage.getItem('hope-submissions-' + code)) || []; } catch { return []; }
}
function saveSubmissions(code, subs) {
    localStorage.setItem('hope-submissions-' + code, JSON.stringify(subs));
}

function publishWork(type, data) {
    let code = getStudentClassroom();
    const classroom = getClassroom();
    if (classroom) code = classroom.code;

    if (!code) {
        pendingPublish = { type, data };
        document.getElementById('classroom-modal').classList.remove('hidden');
        return false;
    }

    const subs = getSubmissions(code);
    subs.push({
        id: Date.now(),
        type: type,
        title: data.title || 'Untitled',
        author: data.author || 'Anonymous',
        content: data.content,
        markers: data.markers || null,
        mode: data.mode || null,
        date: new Date().toLocaleDateString()
    });
    saveSubmissions(code, subs);
    return true;
}

let pendingPublish = null;

// Teacher: create classroom
document.getElementById('btn-create-classroom').addEventListener('click', () => {
    const name = document.getElementById('classroom-name-input').value.trim();
    if (!name) { document.getElementById('classroom-name-input').focus(); return; }
    const code = generateCode();
    saveClassroom({ name, code, created: new Date().toISOString() });
    setStudentClassroom(code);
    renderClassroomDashboard();
});

// Teacher: delete classroom
document.getElementById('btn-delete-classroom').addEventListener('click', () => {
    if (!confirm('Delete this classroom and all submissions? This cannot be undone.')) return;
    const classroom = getClassroom();
    if (classroom) localStorage.removeItem('hope-submissions-' + classroom.code);
    localStorage.removeItem('hope-classroom');
    localStorage.removeItem('hope-student-classroom');
    renderClassroomDashboard();
});

// Teacher: view gallery
document.getElementById('btn-view-gallery').addEventListener('click', () => {
    showScreen('gallery-screen');
    renderGallery();
});

function renderClassroomDashboard() {
    const classroom = getClassroom();
    if (!classroom) {
        document.getElementById('classroom-create-panel').classList.remove('hidden');
        document.getElementById('classroom-dashboard').classList.add('hidden');
        return;
    }
    document.getElementById('classroom-create-panel').classList.add('hidden');
    document.getElementById('classroom-dashboard').classList.remove('hidden');
    document.getElementById('classroom-display-name').textContent = classroom.name;
    document.getElementById('classroom-display-code').textContent = classroom.code;

    const subs = getSubmissions(classroom.code);
    const uniqueAuthors = new Set(subs.map(s => s.author));
    document.getElementById('classroom-stat-submissions').textContent = subs.length;
    document.getElementById('classroom-stat-students').textContent = uniqueAuthors.size;

    const listEl = document.getElementById('classroom-submissions-list');
    if (subs.length === 0) {
        listEl.innerHTML = '<p class="classroom-empty">No submissions yet. Share your classroom code with students to get started.</p>';
        return;
    }
    const typeIcons = { myhope: '🌱', poetry: '📝', story: '✍️', art: '🎨' };
    const allFeedback = getFeedback(classroom.code);
    listEl.innerHTML = subs.map(s => {
        const fb = allFeedback[s.id];
        const fbBadge = fb && (fb.comment || Object.values(fb.scores || {}).some(v => v !== '0'))
            ? '<span class="classroom-submission-fb-badge">✓ Scored</span>'
            : '<span class="classroom-submission-fb-badge classroom-submission-fb-badge--pending">Needs Review</span>';
        return `<div class="classroom-submission-item" data-id="${s.id}">
            <span class="classroom-submission-type">${typeIcons[s.type] || '📄'}</span>
            <div class="classroom-submission-info">
                <div class="classroom-submission-title">${(s.title || 'Untitled').replace(/</g,'&lt;')}</div>
                <div class="classroom-submission-meta">by ${(s.author || 'Anonymous').replace(/</g,'&lt;')} · ${s.date} ${fbBadge}</div>
            </div>
            <button class="classroom-submission-remove" data-id="${s.id}">Remove</button>
        </div>`;
    }).join('');
}

// Teacher: remove submission
document.getElementById('classroom-submissions-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.classroom-submission-remove');
    if (!btn) return;
    const id = parseInt(btn.dataset.id);
    const classroom = getClassroom();
    if (!classroom) return;
    let subs = getSubmissions(classroom.code);
    subs = subs.filter(s => s.id !== id);
    saveSubmissions(classroom.code, subs);
    renderClassroomDashboard();
});

// Init classroom dashboard when teacher page shows
setTimeout(renderClassroomDashboard, 100);

// ===== Collapsible Teacher Sections =====
document.querySelectorAll('[data-toggle]').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const section = toggle.closest('[data-collapsible]');
        if (section) section.classList.toggle('collapsed');
    });
});

// ===== Grade-Level Quick Nav =====
document.querySelectorAll('.teacher-grade-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const el = document.getElementById('grade-' + target);
        if (!el) return;

        // Expand the parent Grade-Level Guides section if collapsed
        const parentSection = el.closest('.teacher-hub-section[data-collapsible]');
        if (parentSection && parentSection.classList.contains('collapsed')) {
            parentSection.classList.remove('collapsed');
        }

        // Expand the target grade guide if collapsed
        if (el.classList.contains('collapsed')) {
            el.classList.remove('collapsed');
        }

        // Scroll to it
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight active nav button
        document.querySelectorAll('.teacher-grade-nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Student: join classroom modal
document.getElementById('btn-close-classroom-modal').addEventListener('click', () => {
    document.getElementById('classroom-modal').classList.add('hidden');
    pendingPublish = null;
});
document.getElementById('btn-cancel-join').addEventListener('click', () => {
    document.getElementById('classroom-modal').classList.add('hidden');
    pendingPublish = null;
});
document.getElementById('btn-confirm-join').addEventListener('click', () => {
    const code = document.getElementById('classroom-join-code').value.trim().toUpperCase();
    if (!code || code.length < 6) {
        document.getElementById('classroom-modal-error').classList.remove('hidden');
        return;
    }

    setStudentClassroom(code);
    document.getElementById('classroom-modal-error').classList.add('hidden');

    if (pendingPublish) {
        publishWork(pendingPublish.type, pendingPublish.data);
        const classroom = getClassroom();
        const joinedEl = document.getElementById('classroom-modal-joined');
        joinedEl.classList.remove('hidden');
        document.getElementById('classroom-modal-joined-name').textContent = classroom && classroom.code === code ? classroom.name : 'Classroom ' + code;
        pendingPublish = null;
        setTimeout(() => {
            document.getElementById('classroom-modal').classList.add('hidden');
            joinedEl.classList.add('hidden');
        }, 1500);
    } else {
        document.getElementById('classroom-modal').classList.add('hidden');
    }
});


// ===== Creative Writing Activities =====
const creativeActivities = {
    poetry: {
        icon: '📝',
        title: 'Climate Poetry',
        desc: 'Write a poem that expresses eco-grief and hope. Use any form — haiku, free verse, or your own invention.',
        prompts: {
            elementary: 'Write a poem about something in nature you love. Include how it makes you feel and what you would do to protect it. Try a simple pattern like: I see... / I feel... / I wish... / I will...',
            middle: 'Write a poem that starts with eco-grief (what worries you about the environment) and ends with hope (what gives you strength). Try to include at least one HOPE marker.',
            high: 'Compose a poem that explores the tension between eco-grief and agency. Consider how form and structure can mirror the emotional journey from despair to action.'
        }
    },
    story: {
        icon: '✍️',
        title: 'Write a HOPE Story',
        desc: 'Write a short story or personal narrative that includes all four HOPE markers.',
        prompts: {
            elementary: 'Write a short story about a kid who notices something wrong in nature near their home. What do they feel? What do they learn? What plan do they make? What do they do about it?',
            middle: 'Write a story where a group of students discovers an environmental problem. Show how they move through all four HOPE markers: motivation, belief, plans, and agency.',
            high: 'Craft a narrative — fiction or personal essay — that traces the full arc of the HOPE Framework. Your protagonist should experience genuine eco-grief before finding their path to agency.'
        }
    },
    art: {
        icon: '🎨',
        title: 'Art Description',
        desc: 'Plan and describe a piece of visual art that represents the HOPE markers.',
        prompts: {
            elementary: 'Imagine you\'re making a poster about hope for the Earth. Describe what you would draw. What colors would you use? What would the title be? Describe every part!',
            middle: 'Design an artwork — a mural, collage, or digital piece — that shows the journey from eco-grief to hope. Describe it in detail: images, colors, and symbols for each HOPE marker.',
            high: 'Conceptualize a gallery-ready artwork that embodies the HOPE Framework. Describe the medium, composition, symbolism, and how your piece guides someone from eco-grief to empowerment.'
        }
    }
};

let currentCreativeType = 'poetry';

function openCreativeActivity(type) {
    currentCreativeType = type;
    const activity = creativeActivities[type];
    const age = currentAge || 'middle';
    document.getElementById('creative-header-icon').textContent = activity.icon;
    document.getElementById('creative-header-title').textContent = activity.title;
    document.getElementById('creative-header-desc').textContent = activity.desc;
    document.getElementById('creative-prompt').textContent = activity.prompts[age];
    document.getElementById('creative-indicator').textContent = activity.icon + ' ' + activity.title;
    document.getElementById('creative-textarea').value = '';
    document.getElementById('creative-title-input').value = '';
    document.getElementById('creative-author').value = '';
    showScreen('creative-write-screen');
}

// Teacher buttons for creative activities (delegated — grade-level guide cards)
document.querySelectorAll('.teacher-extend-app-link[data-activity]').forEach(btn => {
    btn.addEventListener('click', () => {
        const activity = btn.dataset.activity;
        const grade = btn.dataset.grade || 'middle';
        if (!currentAge) setAge(grade);
        if (activity === 'myhope') {
            showScreen('my-hope-screen');
        } else {
            openCreativeActivity(activity);
        }
    });
});

// Creative screen: back, clear, publish
document.getElementById('btn-back-creative').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-creative-clear').addEventListener('click', () => {
    if (document.getElementById('creative-textarea').value.trim() && !confirm('Clear your writing?')) return;
    document.getElementById('creative-textarea').value = '';
});
document.getElementById('btn-creative-publish').addEventListener('click', () => {
    const text = document.getElementById('creative-textarea').value.trim();
    if (!text) { alert('Write something before publishing.'); return; }
    const title = document.getElementById('creative-title-input').value.trim() || 'Untitled';
    const author = document.getElementById('creative-author').value.trim() || 'Anonymous';
    const success = publishWork(currentCreativeType, { title, author, content: text });
    if (success) alert('Published! Your work is now in the classroom gallery.');
});

// My HOPE Story: publish button
document.getElementById('btn-myhope-publish').addEventListener('click', () => {
    const hasContent = myhopeResponses.some(r => r.trim().length > 0);
    if (!hasContent) { alert('Write something in at least one marker before publishing.'); return; }
    const markers = {};
    myhopeMarkers.forEach((m, i) => { markers[m] = myhopeResponses[i]; });
    const author = prompt('Enter your name or initials:') || 'Anonymous';
    const success = publishWork('myhope', {
        title: 'My HOPE Story (' + myhopeMode + ')',
        author: author,
        content: myhopeResponses.filter(r => r.trim()).join('\n\n---\n\n'),
        markers: markers,
        mode: myhopeMode
    });
    if (success) alert('Published! Your work is now in the classroom gallery.');
});


// ===== Gallery =====
function getFeedback(code, submissionId) {
    try { return JSON.parse(localStorage.getItem('hope-feedback-' + code)) || {}; } catch { return {}; }
}
function saveFeedback(code, allFeedback) {
    localStorage.setItem('hope-feedback-' + code, JSON.stringify(allFeedback));
}

function renderFeedbackHtml(feedback) {
    if (!feedback) return '';
    const levelLabels = { '1': 'Emerging', '2': 'Developing', '3': 'Strong' };
    const markerNames = { motivation: '🔥', belief: '✨', plans: '🗺️', agency: '💪' };
    let chips = '';
    if (feedback.scores) {
        chips = Object.entries(feedback.scores)
            .filter(([,v]) => v && v !== '0')
            .map(([k,v]) => `<span class="hope-score-chip" data-marker="${k}">${markerNames[k] || k} <span class="hope-score-level">${levelLabels[v] || v}</span></span>`)
            .join('');
    }
    const comment = feedback.comment ? `<div class="submission-feedback-comment">"${feedback.comment.replace(/</g,'&lt;').replace(/>/g,'&gt;')}"</div>` : '';
    if (!chips && !comment) return '';
    return `<div class="submission-feedback"><div class="submission-feedback-header">Teacher Feedback</div>${chips ? `<div class="hope-scores">${chips}</div>` : ''}${comment}</div>`;
}

function renderScoringPanel(submissionId) {
    return `<div class="scoring-panel" data-sub-id="${submissionId}">
        <h5>Rate HOPE Markers</h5>
        <div class="scoring-markers">
            <div class="scoring-marker" data-marker="motivation"><label>🔥 Motivation</label><select data-marker="motivation"><option value="0">—</option><option value="1">Emerging</option><option value="2">Developing</option><option value="3">Strong</option></select></div>
            <div class="scoring-marker" data-marker="belief"><label>✨ Belief</label><select data-marker="belief"><option value="0">—</option><option value="1">Emerging</option><option value="2">Developing</option><option value="3">Strong</option></select></div>
            <div class="scoring-marker" data-marker="plans"><label>🗺️ Plans</label><select data-marker="plans"><option value="0">—</option><option value="1">Emerging</option><option value="2">Developing</option><option value="3">Strong</option></select></div>
            <div class="scoring-marker" data-marker="agency"><label>💪 Agency</label><select data-marker="agency"><option value="0">—</option><option value="1">Emerging</option><option value="2">Developing</option><option value="3">Strong</option></select></div>
        </div>
        <textarea class="scoring-comment" placeholder="Written feedback (optional)"></textarea>
        <div class="scoring-actions">
            <button class="btn btn-small btn-primary btn-save-score" data-sub-id="${submissionId}">Save Feedback</button>
        </div>
    </div>`;
}

function renderGallery(filter) {
    filter = filter || 'all';
    let code = getStudentClassroom();
    const classroom = getClassroom();
    const isTeacher = !!classroom;
    if (classroom) code = classroom.code;
    document.getElementById('gallery-classroom-name').textContent = classroom ? classroom.name : code ? 'Classroom ' + code : 'No classroom joined';

    const subs = code ? getSubmissions(code) : [];
    const allFeedback = code ? getFeedback(code) : {};
    const filtered = filter === 'all' ? subs : subs.filter(s => s.type === filter);
    const cardsEl = document.getElementById('gallery-cards');
    const emptyEl = document.getElementById('gallery-empty');

    if (filtered.length === 0) {
        emptyEl.classList.remove('hidden');
        emptyEl.textContent = subs.length === 0 ? 'No published work yet. Complete an activity and publish it to see it here!' : 'No submissions match this filter.';
        cardsEl.innerHTML = '';
        cardsEl.appendChild(emptyEl);
        return;
    }
    emptyEl.classList.add('hidden');
    const typeIcons = { myhope: '🌱', poetry: '📝', story: '✍️', art: '🎨' };
    const typeLabels = { myhope: 'My HOPE Story', poetry: 'Poetry', story: 'Story', art: 'Art' };
    cardsEl.innerHTML = filtered.map(s => {
        let markerHtml = '';
        if (s.markers) {
            const names = { motivation: '🔥 Motivation', belief: '✨ Belief', plans: '🗺️ Plans', agency: '💪 Agency' };
            markerHtml = Object.entries(s.markers).filter(([,v]) => v && v.trim())
                .map(([k, v]) => `<div class="gallery-card-marker"><div class="gallery-card-marker-label">${names[k]}</div><div class="gallery-card-marker-text">${v.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div></div>`)
                .join('');
        }
        const preview = s.content ? s.content.replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';
        const feedbackHtml = renderFeedbackHtml(allFeedback[s.id]);
        const scoringHtml = isTeacher ? renderScoringPanel(s.id) : '';
        return `<div class="gallery-card" data-type="${s.type}" data-id="${s.id}">
            <div class="gallery-card-header"><span class="gallery-card-type">${typeIcons[s.type] || '📄'}</span><span class="gallery-card-title">${(s.title || 'Untitled').replace(/</g,'&lt;')}</span></div>
            <div class="gallery-card-author">by ${(s.author || 'Anonymous').replace(/</g,'&lt;')} · ${s.date} · ${typeLabels[s.type] || s.type}</div>
            ${s.markers ? markerHtml : `<div class="gallery-card-text">${preview}</div>`}
            ${feedbackHtml}
            ${scoringHtml}
        </div>`;
    }).join('');

    // Pre-fill existing scores for teacher
    if (isTeacher) {
        cardsEl.querySelectorAll('.scoring-panel').forEach(panel => {
            const subId = panel.dataset.subId;
            const fb = allFeedback[subId];
            if (fb && fb.scores) {
                Object.entries(fb.scores).forEach(([marker, val]) => {
                    const sel = panel.querySelector(`select[data-marker="${marker}"]`);
                    if (sel) sel.value = val;
                });
            }
            if (fb && fb.comment) {
                const ta = panel.querySelector('.scoring-comment');
                if (ta) ta.value = fb.comment;
            }
        });
    }
}

// Gallery: back
document.getElementById('btn-back-gallery').addEventListener('click', () => {
    showScreen(getClassroom() ? 'teacher-hub-screen' : 'welcome-screen');
});

// Gallery: filter
document.querySelector('.gallery-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-filter');
    if (!btn) return;
    document.querySelectorAll('.gallery-filter').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
});

// Gallery: save teacher feedback score
document.getElementById('gallery-cards').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-save-score');
    if (!btn) return;
    const subId = btn.dataset.subId;
    const panel = btn.closest('.scoring-panel');
    if (!panel) return;

    const classroom = getClassroom();
    if (!classroom) return;

    const scores = {};
    panel.querySelectorAll('select[data-marker]').forEach(sel => {
        scores[sel.dataset.marker] = sel.value;
    });
    const comment = panel.querySelector('.scoring-comment').value.trim();

    const allFeedback = getFeedback(classroom.code);
    allFeedback[subId] = { scores, comment, date: new Date().toLocaleDateString() };
    saveFeedback(classroom.code, allFeedback);

    btn.textContent = '✓ Saved';
    setTimeout(() => { btn.textContent = 'Save Feedback'; }, 1500);
});


// ===== Join Classroom Strip (Age Selection Screen) =====
(function initJoinClassroomStrip() {
    const strip = document.getElementById('join-classroom-strip');
    if (!strip) return;

    const toggleBtn = document.getElementById('btn-join-classroom-toggle');
    const joinBtn = document.getElementById('btn-join-code');
    const leaveBtn = document.getElementById('btn-leave-classroom');
    const codeInput = document.getElementById('join-code-input');
    const statusEl = document.getElementById('join-classroom-status');
    const badgeEl = document.getElementById('join-classroom-name-display');

    const collapsedEl = document.getElementById('join-classroom-collapsed');
    const expandedEl = document.getElementById('join-classroom-expanded');
    const activeEl = document.getElementById('join-classroom-active');

    function updateStrip() {
        const code = getStudentClassroom();

        if (code && !getClassroom()) {
            // Student is in a classroom
            collapsedEl.classList.add('hidden');
            expandedEl.classList.add('hidden');
            activeEl.classList.remove('hidden');
            if (badgeEl) badgeEl.textContent = code;
        } else {
            // Not in a classroom — show toggle
            collapsedEl.classList.remove('hidden');
            expandedEl.classList.add('hidden');
            activeEl.classList.add('hidden');
        }
        updateWelcomeClassroomStep();
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            collapsedEl.classList.add('hidden');
            expandedEl.classList.remove('hidden');
            statusEl.classList.add('hidden');
            if (codeInput) codeInput.focus();
        });
    }

    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            const val = codeInput.value.trim().toUpperCase();
            if (!val || val.length < 4) {
                statusEl.textContent = 'Please enter a valid classroom code.';
                statusEl.classList.remove('hidden');
                return;
            }
            setStudentClassroom(val);
            statusEl.textContent = 'Joined classroom ' + val + '!';
            statusEl.classList.remove('hidden');
            setTimeout(updateStrip, 800);
        });
    }

    if (leaveBtn) {
        leaveBtn.addEventListener('click', () => {
            localStorage.removeItem('hope-student-classroom');
            statusEl.textContent = '';
            statusEl.classList.add('hidden');
            codeInput.value = '';
            updateStrip();
        });
    }

    // Init on load
    updateStrip();
})();


// ===== Welcome Screen Classroom Step =====
function updateWelcomeClassroomStep() {
    const step = document.getElementById('journey-classroom-step');
    if (!step) return;
    const code = getStudentClassroom();
    const classroom = getClassroom();
    if (code && !classroom) {
        step.classList.remove('hidden');
        const badge = document.getElementById('journey-classroom-badge');
        if (badge) badge.textContent = '🏫 Classroom: ' + code;
    } else {
        step.classList.add('hidden');
    }
}

// Student gallery button on welcome screen
const btnStudentGallery = document.getElementById('btn-student-gallery');
if (btnStudentGallery) {
    btnStudentGallery.addEventListener('click', () => {
        showScreen('gallery-screen');
        renderGallery();
    });
}


// ===== My HOPE Story — Personal Reflection Activity =====
const myhopeMarkers = ['motivation', 'belief', 'plans', 'agency'];
const myhopeIcons = { motivation: '🔥', belief: '✨', plans: '🗺️', agency: '💪' };
const myhopeColors = { motivation: 'motivation', belief: 'belief', plans: 'plans', agency: 'agency' };
const myhopeTitles = {
    motivation: 'Motivation for Change',
    belief: 'Belief that Change is Possible',
    plans: 'Plans for a Path Forward',
    agency: 'Agency to Take Action'
};

const myhopePrompts = {
    story: {
        motivation: {
            elementary: "Think of a time you saw something in nature that made you feel sad, worried, or angry. Maybe a tree got cut down, or you saw trash in a river. What happened? How did it make you feel?",
            middle: "Describe a moment when you felt a strong urge to help the environment. What triggered that feeling? Was it something you saw, read, or experienced?",
            high: "Reflect on an environmental issue that personally affects your life or community. What emotional response does it create, and how does that connect to a desire for change?"
        },
        belief: {
            elementary: "Can you think of a time when something that seemed broken actually got better? Maybe a garden grew back, or people worked together to clean something up. What happened?",
            middle: "What gives you hope that environmental problems can be solved? Have you seen an example — in your life, school, or community — where people made a real difference?",
            high: "What evidence have you encountered that environmental restoration is possible? How does seeing real-world success stories affect your belief in the possibility of change?"
        },
        plans: {
            elementary: "If you could help fix one thing in nature, what would you do? What steps would you take? Who would help you?",
            middle: "Think about an environmental problem you care about. What concrete steps could you and your classmates take to address it? Try to list at least three specific actions.",
            high: "Choose an environmental challenge in your community. Outline a realistic action plan — what resources would you need, who would you collaborate with, and what would your timeline look like?"
        },
        agency: {
            elementary: "Have you ever done something to help nature or the environment? Even something small, like picking up trash or planting a seed? Tell the story of what you did!",
            middle: "Describe a time when you or someone you know actually took action on an environmental issue. What did they do? What happened as a result?",
            high: "Reflect on a moment when you moved from thinking about an environmental issue to actually doing something about it. What pushed you to act, and what impact did your actions have?"
        }
    },
    art: {
        motivation: {
            elementary: "Imagine a picture that shows how you feel when you see nature being hurt. What colors would you use? What would be in the picture? Describe your artwork!",
            middle: "Plan a piece of art that captures the moment someone realizes they need to help the environment. What would it look like? What medium would you use (drawing, collage, sculpture)?",
            high: "Conceptualize artwork that expresses the emotional catalyst of environmental motivation. What imagery, colors, and symbolism would you use to convey that shift from awareness to urgency?"
        },
        belief: {
            elementary: "Draw or describe a 'before and after' picture — nature when it's hurt and nature when it's healed. What changes between the two pictures?",
            middle: "Design an artwork that shows hope and proof that change is possible. Think about using contrasts — what was vs. what could be. What story does your art tell?",
            high: "Create a concept for art that visualizes evidence-based hope — not wishful thinking, but grounded belief in change. How would you represent data, success stories, or transformation artistically?"
        },
        plans: {
            elementary: "Make a map or picture that shows the steps to help fix something in nature. Like a treasure map, but for saving the environment! What stops are along the way?",
            middle: "Design a visual plan — like an infographic, flowchart, or illustrated timeline — showing the steps to solve an environmental problem you care about.",
            high: "Conceptualize a piece that visualizes a strategic environmental plan. Think about how to artistically represent timelines, stakeholders, resources, and milestones."
        },
        agency: {
            elementary: "Draw or describe a picture of YOU being a nature hero! What are you doing? Who's helping you? What does the world look like after your actions?",
            middle: "Create art that shows people taking environmental action. Capture the energy of doing, not just planning. What does agency look like as an image?",
            high: "Design artwork that embodies collective agency — people moving from intention to impact. How do you visually represent the power of taking action?"
        }
    }
};

const myhopeTips = {
    story: {
        motivation: {
            elementary: "Tip: Think about your senses — what did you see, hear, or smell? Feelings words like 'worried,' 'angry,' or 'sad' are great to use!",
            middle: "Tip: Try to describe not just what happened, but how it changed the way you think. What was the 'before' and 'after' in your mind?",
            high: "Tip: Consider how personal identity, place, and values shape your emotional response to environmental issues."
        },
        belief: {
            elementary: "Tip: Think about stories of animals or plants that came back, or a place that got cleaned up. Those are signs of hope!",
            middle: "Tip: Evidence is powerful — a specific example is stronger than a general feeling. What's one thing you can point to?",
            high: "Tip: Distinguish between optimism (things will work out) and agency-based belief (we can make it work). What evidence shifts you from one to the other?"
        },
        plans: {
            elementary: "Tip: Even small plans count! You could start with 'First, I would… Then, I would… After that…'",
            middle: "Tip: Good plans are specific. Instead of 'help the environment,' try 'organize a creek cleanup every first Saturday.'",
            high: "Tip: Consider feasibility, partnerships, and measurable outcomes. What would success look like, and how would you know you achieved it?"
        },
        agency: {
            elementary: "Tip: No action is too small! Turning off lights, using less water, or telling a friend about nature all count.",
            middle: "Tip: Focus on the doing — what specifically happened? How did it feel to go from 'I should' to 'I did'?",
            high: "Tip: Reflect on the gap between intention and action. What barriers did you overcome, and what enabled you to follow through?"
        }
    },
    art: {
        motivation: {
            elementary: "Tip: Dark or warm colors like red, orange, and brown can show worried feelings. Cool colors like blue can show sadness.",
            middle: "Tip: Think about composition — where the viewer's eye goes first can tell the emotional story. What do you want them to feel?",
            high: "Tip: Consider how abstract vs. representational approaches differently convey emotional urgency."
        },
        belief: {
            elementary: "Tip: You could use bright greens and blues for the 'after' picture to show nature coming back to life!",
            middle: "Tip: Contrast is a powerful tool — light/dark, broken/whole, empty/full. What contrasts show that change happened?",
            high: "Tip: Think about how to represent intangible concepts like 'evidence' and 'proof' visually. Charts, data visualization, and documentary styles can work."
        },
        plans: {
            elementary: "Tip: Use arrows and numbers to show the order of your steps. Make it colorful so people want to follow along!",
            middle: "Tip: Think about making your plan visual — flowcharts, timelines, and maps all help people see a path forward.",
            high: "Tip: Consider how design principles (hierarchy, flow, grouping) can make complex plans feel achievable and clear."
        },
        agency: {
            elementary: "Tip: Show action! People moving, hands working, tools in use. Make your hero look strong and brave!",
            middle: "Tip: Movement and energy in art — dynamic poses, radiating lines, bold colors — can show action happening.",
            high: "Tip: Think about how to capture both individual and collective agency. How do you show the difference between one person acting and a community mobilizing?"
        }
    }
};

let myhopeMode = 'story';
let myhopeStep = 0;
let myhopeResponses = ['', '', '', ''];

function myhopeShowIntro() {
    document.getElementById('myhope-intro').classList.remove('hidden');
    document.getElementById('myhope-step').classList.add('hidden');
    document.getElementById('myhope-summary').classList.add('hidden');
    document.getElementById('myhope-indicator').textContent = 'My HOPE Story';
}

function myhopeStartStep() {
    document.getElementById('myhope-intro').classList.add('hidden');
    document.getElementById('myhope-step').classList.remove('hidden');
    document.getElementById('myhope-summary').classList.add('hidden');
    myhopeRenderStep();
}

function myhopeRenderStep() {
    const age = currentAge || 'middle';
    const marker = myhopeMarkers[myhopeStep];

    // Progress
    document.getElementById('myhope-progress-fill').style.width = ((myhopeStep + 1) / 4 * 100) + '%';
    document.getElementById('myhope-progress-label').textContent = (myhopeStep + 1) + ' of 4';
    document.getElementById('myhope-indicator').textContent = myhopeIcons[marker] + ' ' + myhopeTitles[marker];

    // Header
    const header = document.getElementById('myhope-prompt-header');
    header.setAttribute('data-color', myhopeColors[marker]);
    document.getElementById('myhope-prompt-icon').textContent = myhopeIcons[marker];
    document.getElementById('myhope-prompt-marker').textContent = myhopeTitles[marker];
    document.getElementById('myhope-prompt-text').textContent = myhopePrompts[myhopeMode][marker][age];

    // Tip
    document.getElementById('myhope-prompt-tip').textContent = myhopeTips[myhopeMode][marker][age];

    // Textarea
    const textarea = document.getElementById('myhope-textarea');
    textarea.value = myhopeResponses[myhopeStep];
    textarea.placeholder = myhopeMode === 'art' ? 'Describe your artwork here...' : 'Start writing here...';

    // Nav buttons
    document.getElementById('btn-myhope-prev').style.visibility = myhopeStep === 0 ? 'hidden' : 'visible';
    document.getElementById('btn-myhope-next').textContent = myhopeStep === 3 ? 'See My Story ✨' : 'Next →';

    // Dots
    const dotsEl = document.getElementById('myhope-step-dots');
    dotsEl.innerHTML = myhopeMarkers.map((m, i) =>
        `<button class="myhope-step-dot ${i === myhopeStep ? 'active' : ''}" data-marker="${m}" data-idx="${i}" aria-label="${myhopeTitles[m]}"></button>`
    ).join('');

    window.scrollTo(0, 0);
}

function myhopeSaveCurrentResponse() {
    myhopeResponses[myhopeStep] = document.getElementById('myhope-textarea').value;
}

function myhopeShowSummary() {
    myhopeSaveCurrentResponse();
    document.getElementById('myhope-intro').classList.add('hidden');
    document.getElementById('myhope-step').classList.add('hidden');
    document.getElementById('myhope-summary').classList.remove('hidden');
    document.getElementById('myhope-indicator').textContent = '🌿 Your HOPE Story';

    const cardsEl = document.getElementById('myhope-summary-cards');
    cardsEl.innerHTML = myhopeMarkers.map((m, i) => {
        const text = myhopeResponses[i].trim();
        return `<div class="myhope-summary-card" data-marker="${m}">
            <div class="myhope-summary-card-header">${myhopeIcons[m]} ${myhopeTitles[m]}</div>
            ${text ? `<div class="myhope-summary-card-text">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>` :
                `<div class="myhope-summary-card-empty">No response yet</div>`}
        </div>`;
    }).join('');

    window.scrollTo(0, 0);
}

// Mode selection
document.querySelectorAll('.myhope-mode-card').forEach(card => {
    card.addEventListener('click', () => {
        myhopeMode = card.dataset.mode;
        myhopeStep = 0;
        myhopeResponses = ['', '', '', ''];
        myhopeStartStep();
    });
});

// Back button
document.getElementById('btn-back-myhope').addEventListener('click', () => showScreen('welcome-screen'));

// Prev
document.getElementById('btn-myhope-prev').addEventListener('click', () => {
    if (myhopeStep > 0) {
        myhopeSaveCurrentResponse();
        myhopeStep--;
        myhopeRenderStep();
    }
});

// Next / finish
document.getElementById('btn-myhope-next').addEventListener('click', () => {
    myhopeSaveCurrentResponse();
    if (myhopeStep < 3) {
        myhopeStep++;
        myhopeRenderStep();
    } else {
        myhopeShowSummary();
    }
});

// Dot nav
document.getElementById('myhope-step-dots').addEventListener('click', (e) => {
    const dot = e.target.closest('.myhope-step-dot');
    if (!dot) return;
    myhopeSaveCurrentResponse();
    myhopeStep = parseInt(dot.dataset.idx);
    myhopeRenderStep();
});

// Restart
document.getElementById('btn-myhope-restart').addEventListener('click', () => {
    myhopeResponses = ['', '', '', ''];
    myhopeStep = 0;
    myhopeShowIntro();
});


// ===== Activity Screen =====

const sampleText = `The students at Riverside Middle School couldn't ignore it anymore. Every spring, the creek behind their school flooded with murky, polluted water. "We have to do something," said Amara, staring at the brown water pooling near the playground. She felt a deep ache thinking about the frogs and fish that used to live there.

Their science teacher, Mr. Chen, showed them data from a nearby city where students had successfully restored a wetland area. "If they could do it, we can too," he said. The class erupted with ideas. They had seen change happen before — the community garden downtown was once an empty lot.

The class formed three teams. Team one would test water quality weekly and log the results. Team two would research native plants that filter pollutants. Team three would write a proposal to the city council asking for funding to install a rain garden. They created a timeline and assigned roles.

Amara led the presentation to the city council. She brought water samples, charts, and photos. The council approved their proposal. Over the next two months, the students planted 200 native plants along the creek bank. They organized weekend volunteer days. By the end of the school year, the water quality tests showed a 40% improvement.`;

const textContent = document.getElementById('text-content');
const findingsList = document.getElementById('findings-list');
const resultsSummary = document.getElementById('results-summary');

// Track findings
let findings = [];
let collectedMarkers = new Set();

// ===== Paste Modal =====
const pasteModal = document.getElementById('paste-modal');
const pasteInput = document.getElementById('paste-input');

document.getElementById('btn-paste-text').addEventListener('click', () => {
    pasteModal.classList.remove('hidden');
    pasteInput.value = '';
    pasteInput.focus();
});

document.getElementById('btn-cancel-paste').addEventListener('click', () => {
    pasteModal.classList.add('hidden');
});

document.getElementById('btn-confirm-paste').addEventListener('click', () => {
    const text = pasteInput.value.trim();
    if (text) {
        loadText(text);
    }
    pasteModal.classList.add('hidden');
});

pasteModal.addEventListener('click', (e) => {
    if (e.target === pasteModal) {
        pasteModal.classList.add('hidden');
    }
});

function loadText(text) {
    findings = [];
    collectedMarkers = new Set();
    updateFindings();
    resetCollectionTracker();

    const paragraphs = text.split('\n\n').filter(p => p.trim());
    textContent.innerHTML = paragraphs
        .map(p => `<p>${escapeHtml(p.trim())}</p>`)
        .join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Clear Highlights =====
document.getElementById('btn-clear-highlights').addEventListener('click', () => {
    findings = [];
    collectedMarkers = new Set();
    updateFindings();
    resetCollectionTracker();

    const highlights = textContent.querySelectorAll('.highlight');
    highlights.forEach(hl => {
        const textNode = document.createTextNode(hl.textContent);
        hl.parentNode.replaceChild(textNode, hl);
    });
    textContent.normalize();

    // Hide feedback panel too
    document.getElementById('feedback-panel').classList.add('hidden');
});


// ===== Collection Tracker =====
function resetCollectionTracker() {
    ['motivation', 'belief', 'plans', 'agency'].forEach(marker => {
        const el = document.getElementById(`collect-${marker}`);
        el.classList.add('dimmed');
        el.classList.remove('collected', 'just-collected');
    });
}

function updateCollectionTracker() {
    const markersInFindings = new Set(findings.map(f => f.marker));
    const newlyCollected = [];

    ['motivation', 'belief', 'plans', 'agency'].forEach(marker => {
        const el = document.getElementById(`collect-${marker}`);
        if (markersInFindings.has(marker)) {
            if (!collectedMarkers.has(marker)) {
                newlyCollected.push(marker);
            }
            el.classList.remove('dimmed');
            el.classList.add('collected');
        } else {
            el.classList.add('dimmed');
            el.classList.remove('collected', 'just-collected');
        }
    });

    // Animate newly collected
    newlyCollected.forEach(marker => {
        collectedMarkers.add(marker);
        const el = document.getElementById(`collect-${marker}`);
        el.classList.add('just-collected');
        setTimeout(() => el.classList.remove('just-collected'), 600);
    });

    // Celebration when all 4 are collected for the first time
    if (markersInFindings.size === 4 && newlyCollected.length > 0) {
        triggerCelebration();
    }
}

function triggerCelebration() {
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    celebration.classList.add('active');
    setTimeout(() => {
        celebration.classList.remove('active');
        celebration.classList.add('hidden');
    }, 2500);
}


// ===== Marker Buttons — Tag Selected Text =====
document.querySelectorAll('.marker-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const marker = btn.dataset.marker;
        const selection = window.getSelection();

        if (!selection || selection.isCollapsed) {
            showToast('Select some text first');
            return;
        }

        const selectedText = selection.toString().trim();
        if (!selectedText) {
            showToast('Select some text first');
            return;
        }

        if (!textContent.contains(selection.anchorNode) || !textContent.contains(selection.focusNode)) {
            showToast('Select text from the passage');
            return;
        }

        try {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.classList.add('highlight', 'new');
            span.dataset.marker = marker;
            span.dataset.id = Date.now();
            range.surroundContents(span);

            // Remove 'new' class after animation
            setTimeout(() => span.classList.remove('new'), 400);

            findings.push({
                id: span.dataset.id,
                marker: marker,
                text: selectedText
            });

            updateFindings();
            selection.removeAllRanges();
        } catch (e) {
            showToast('Try selecting within one paragraph');
        }
    });
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
}

function updateFindings() {
    if (findings.length === 0) {
        findingsList.innerHTML = '<p class="placeholder-text">Your tagged passages will appear here.</p>';
        resultsSummary.classList.add('hidden');
        updateCollectionTracker();
        return;
    }

    resultsSummary.classList.remove('hidden');

    const markerLabels = {
        motivation: '🔥 Motivation',
        belief: '✨ Belief',
        plans: '🗺️ Plans',
        agency: '💪 Agency'
    };

    findingsList.innerHTML = findings.map(f => `
        <div class="finding-item" data-marker="${f.marker}">
            <span class="finding-marker">${markerLabels[f.marker]}</span>
            <span class="finding-text">"${escapeHtml(f.text.length > 60 ? f.text.substring(0, 60) + '...' : f.text)}"</span>
            <button class="finding-remove" data-id="${f.id}" title="Remove">&times;</button>
        </div>
    `).join('');

    // Update counts
    const counts = { motivation: 0, belief: 0, plans: 0, agency: 0 };
    findings.forEach(f => counts[f.marker]++);
    Object.keys(counts).forEach(marker => {
        document.getElementById(`count-${marker}`).textContent = counts[marker];
    });

    // Update collection tracker
    updateCollectionTracker();

    // Remove buttons
    findingsList.querySelectorAll('.finding-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            findings = findings.filter(f => f.id !== id);

            const highlight = textContent.querySelector(`.highlight[data-id="${id}"]`);
            if (highlight) {
                const textNode = document.createTextNode(highlight.textContent);
                highlight.parentNode.replaceChild(textNode, highlight);
                textContent.normalize();
            }

            updateFindings();
        });
    });
}


// ===== Marker Deep-Dive Content =====

const markerDetails = {
    motivation: {
        icon: '🔥',
        letter: 'H',
        color: 'motivation',
        title: {
            elementary: 'Motivation for Change',
            middle: 'Motivation for Change',
            high: 'Motivation for Change'
        },
        definition: {
            elementary: 'Motivation is the spark — the moment someone feels something so strongly that they want to make things different. It might be sadness about a polluted river, worry about animals losing their homes, or anger that something unfair is happening to the Earth.',
            middle: 'Motivation for Change is the emotional catalyst that drives people to act. When someone reads about environmental damage and feels a deep urge to respond — that\'s motivation. It\'s the gap between how things are and how they should be.',
            high: 'Motivation for Change represents the affective dimension of hope — the emotional response to environmental degradation that transitions from passive awareness to active engagement. It emerges when individuals recognize a discrepancy between current conditions and their values.'
        },
        lookFor: {
            elementary: [
                'A character feeling sad, worried, or upset about nature',
                'Someone saying "we have to do something!"',
                'A moment that makes a character want to help',
                'Strong feelings about animals, plants, or the environment'
            ],
            middle: [
                'Emotional responses to environmental problems (frustration, concern, urgency)',
                'Language of necessity: "we need to," "we must," "something has to change"',
                'A turning point where awareness shifts to desire for action',
                'Personal connections to environmental issues'
            ],
            high: [
                'Affective language signaling emotional engagement with environmental issues',
                'Expressions of moral urgency or ethical responsibility',
                'The catalyst moment — where passive observation becomes active concern',
                'Connections between personal values and systemic environmental problems'
            ]
        },
        example: {
            elementary: {
                text: 'Mia looked at the stream behind her school. It was full of trash and the water was brown. "This isn\'t right," she said. "The frogs used to live here. We have to clean this up."',
                highlight: 'We have to clean this up',
                explanation: 'Mia sees the problem and feels strongly about it — that feeling is her motivation to want change.'
            },
            middle: {
                text: 'After documenting the declining bird population in their neighborhood for three months, the students couldn\'t ignore what the data showed. "We can\'t just sit here and watch them disappear," Jaylen said, his frustration evident.',
                highlight: 'We can\'t just sit here and watch them disappear',
                explanation: 'Jaylen\'s frustration with the data is the emotional spark — motivation. He\'s moved from observing to wanting to act.'
            },
            high: {
                text: 'The report revealed a 60% decline in local biodiversity over two decades. For the research team, the statistics were no longer abstract — they represented a tangible loss that demanded response. "The ethical imperative is clear," Dr. Vasquez noted.',
                highlight: 'a tangible loss that demanded response',
                explanation: 'The shift from abstract data to personal ethical urgency demonstrates motivation — the affective bridge between knowing and caring.'
            }
        },
        reflection: {
            elementary: 'Think of a time you saw something in nature that made you feel like you wanted to help. What was it? How did it make you feel?',
            middle: 'When you read about environmental problems, what emotions come up? How do those emotions connect to a desire for change?',
            high: 'How does the concept of motivation challenge the idea that hope is purely rational? What role does emotion play in driving environmental action?'
        }
    },
    belief: {
        icon: '✨',
        letter: 'O',
        color: 'belief',
        title: {
            elementary: 'Belief that Change is Possible',
            middle: 'Belief that Change is Possible',
            high: 'Belief that Change is Possible'
        },
        definition: {
            elementary: 'Belief is knowing that things CAN get better. Even when something looks really bad, belief means seeing proof that change has happened before — like a dirty beach getting cleaned up, or an endangered animal making a comeback.',
            middle: 'Belief that Change is Possible is about evidence and confidence. It\'s not blind optimism — it\'s grounded in real examples of success. When a story shows that efforts have worked before or that progress is happening, that builds belief.',
            high: 'Belief that Change is Possible is the epistemic foundation of hope. It requires evidence — empirical, historical, or experiential — that environmental recovery and positive transformation are achievable. This marker distinguishes hope from wishful thinking.'
        },
        lookFor: {
            elementary: [
                'Success stories — a place that got cleaner or an animal that was saved',
                'Characters who say "we can do this!"',
                'Proof that trying actually works',
                'Before-and-after moments'
            ],
            middle: [
                'Evidence of successful environmental restoration',
                'Historical examples of recovery (species comeback, pollution reduction)',
                'Characters expressing confidence based on facts, not just feelings',
                'Data or stories showing that interventions have measurable impact'
            ],
            high: [
                'Empirical evidence cited to support the possibility of change',
                'Historical precedent for environmental recovery',
                'Epistemic confidence — belief grounded in data rather than sentiment',
                'Counter-narratives that challenge environmental fatalism'
            ]
        },
        example: {
            elementary: {
                text: 'Mr. Torres showed the class photos from five years ago. The park had been covered in litter and weeds. Now it had flowers, benches, and birds singing in new trees. "See what happened when people worked together?" he said.',
                highlight: 'See what happened when people worked together?',
                explanation: 'The before-and-after proof shows the class that change really is possible — that\'s belief in action.'
            },
            middle: {
                text: 'Mr. Chen pulled up data from a successful wetland restoration project two counties over. "In three years, native species returned to 80% of pre-damage levels," he explained. The students leaned in — if it worked there, maybe it could work here too.',
                highlight: 'if it worked there, maybe it could work here too',
                explanation: 'Real data from a real project gives the students evidence-based belief. This isn\'t just hoping — it\'s knowing change is possible because it\'s happened before.'
            },
            high: {
                text: 'Peer-reviewed studies from the Chesapeake Bay restoration demonstrated that targeted interventions reduced nitrogen levels by 40% within a decade. These findings provided empirical grounding for the coalition\'s confidence in their proposed watershed management plan.',
                highlight: 'empirical grounding for the coalition\'s confidence',
                explanation: 'Research evidence transforms hope from abstract to actionable. Belief here is epistemic — grounded in peer-reviewed data, not wishful thinking.'
            }
        },
        reflection: {
            elementary: 'Can you think of something that was broken or messy that got fixed when people helped? How does knowing that make you feel about other problems?',
            middle: 'Why is it important that belief is backed by evidence? How is "I believe we can fix this" different from "I hope things get better"?',
            high: 'How does evidence-based belief differ from optimism? What role does empirical precedent play in sustaining environmental action over time?'
        }
    },
    plans: {
        icon: '🗺️',
        letter: 'P',
        color: 'plans',
        title: {
            elementary: 'Plans for a Path Forward',
            middle: 'Plans for a Path Forward',
            high: 'Plans for a Path Forward'
        },
        definition: {
            elementary: 'Plans means having a real idea for what to do next. It\'s not just wanting things to be better — it\'s figuring out the steps. Like making a list: first we\'ll test the water, then we\'ll plant native flowers, then we\'ll build a bird feeder.',
            middle: 'Plans for a Path Forward are the concrete strategies that turn motivation into action. Hope without a plan is just a wish. When a story outlines specific steps, roles, or timelines for addressing an environmental issue — that\'s a plan.',
            high: 'Plans for a Path Forward represent the strategic dimension of hope — the translation of motivation and belief into actionable frameworks. This marker identifies where narratives move from affective response to structured intervention, including timelines, roles, and measurable objectives.'
        },
        lookFor: {
            elementary: [
                'A list of steps or actions to take',
                'Characters dividing up jobs — "you do this, I\'ll do that"',
                'Ideas for how to fix a problem',
                'Words like "first," "then," "next," or "our plan is"'
            ],
            middle: [
                'Specific strategies with steps, timelines, or assigned roles',
                'Problem-solving language: "our approach," "phase one," "we\'ll start by"',
                'Research or investigation as part of a larger plan',
                'Proposals, projects, or organized responses to environmental issues'
            ],
            high: [
                'Structured intervention frameworks with defined phases',
                'Strategic language indicating systematic planning',
                'Allocation of resources, responsibilities, and timelines',
                'Evidence-informed strategy development and adaptive management'
            ]
        },
        example: {
            elementary: {
                text: '"Okay team," said Coach Lin. "Here\'s our plan. On Monday, we pick up trash along the creek. On Wednesday, we plant wildflowers. And on Friday, we put up signs so people know to keep it clean."',
                highlight: 'On Monday, we pick up trash. On Wednesday, we plant wildflowers. On Friday, we put up signs',
                explanation: 'Coach Lin has a step-by-step plan with specific days and actions. That\'s what makes this a plan, not just a wish.'
            },
            middle: {
                text: '"Team one will test water quality weekly and log results. Team two will research native plants for the bank stabilization. Team three handles community outreach — we need buy-in from local businesses," Maya laid out the action plan.',
                highlight: 'Team one will test... Team two will research... Team three handles outreach',
                explanation: 'Maya breaks the big goal into specific roles with clear tasks. This organized approach is what turns hope into progress.'
            },
            high: {
                text: 'The coalition outlined a three-phase restoration plan: Phase I involved baseline ecological assessment and stakeholder engagement; Phase II focused on targeted remediation of identified pollutant sources; Phase III established long-term monitoring protocols with community science partnerships.',
                highlight: 'three-phase restoration plan',
                explanation: 'A structured, phased approach with defined objectives at each stage. This represents strategic planning — the framework that channels motivation into measurable action.'
            }
        },
        reflection: {
            elementary: 'If you wanted to help clean up a park near your school, what steps would you put in your plan? Try to think of at least three.',
            middle: 'Why is having a plan important? What happens when people are motivated but don\'t have a clear strategy?',
            high: 'How do plans function as a bridge between belief and agency? What makes an environmental plan "actionable" versus merely aspirational?'
        }
    },
    agency: {
        icon: '💪',
        letter: 'E',
        color: 'agency',
        title: {
            elementary: 'Agency to Take Action',
            middle: 'Agency to Take Action',
            high: 'Agency to Take Action'
        },
        definition: {
            elementary: 'Agency means actually DOING something — not just talking about it, but rolling up your sleeves and making it happen. When a character in a story picks up trash, writes a letter, or stands up for the environment, that\'s agency.',
            middle: 'Agency to Take Action is where hope becomes real. It\'s the moment when people move from thinking and planning to actually doing. Agency means taking ownership — stepping up, using your voice, and making tangible contributions to change.',
            high: 'Agency to Take Action is the performative dimension of hope — where intention materializes into behavior. It encompasses both individual and collective action, recognizing that agency is not merely personal empowerment but the enacted capacity to effect systemic change within social and ecological systems.'
        },
        lookFor: {
            elementary: [
                'Characters actually doing something — planting, cleaning, building',
                'Someone speaking up or asking for help',
                'Action words: "they built," "she planted," "he wrote a letter"',
                'People working together to make change happen'
            ],
            middle: [
                'Concrete actions taken by individuals or groups',
                'Public engagement: presenting to officials, organizing events, publishing findings',
                'The shift from planning to execution',
                'Collective action and community mobilization'
            ],
            high: [
                'Enacted behavior demonstrating individual or collective capacity for change',
                'Civic engagement: policy advocacy, community organizing, research publication',
                'The transition from strategic planning to implementation',
                'Distributed agency — how multiple actors contribute to systemic change'
            ]
        },
        example: {
            elementary: {
                text: 'On Saturday morning, 47 students showed up at Riverside Park. They put on gloves, grabbed bags, and got to work. By lunchtime, they had filled 30 bags of trash and planted 15 new trees along the bank.',
                highlight: 'They put on gloves, grabbed bags, and got to work',
                explanation: 'The students aren\'t just talking — they\'re doing! Showing up, picking up trash, and planting trees is agency in action.'
            },
            middle: {
                text: 'Amara stood at the podium, her water samples arranged on the table. "We tested the creek every week for six months," she told the city council. "Here\'s the data. Here\'s what it means. And here\'s what we\'re asking you to fund."',
                highlight: 'she told the city council',
                explanation: 'Amara is exercising agency by presenting real evidence to decision-makers. She\'s not waiting for someone else to fix it — she\'s taking action herself.'
            },
            high: {
                text: 'The team\'s peer-reviewed findings were cited in the environmental impact assessment that led the city council to approve a $2.1 million watershed restoration fund. Their research had translated academic knowledge into policy change.',
                highlight: 'translated academic knowledge into policy change',
                explanation: 'Agency here operates at a systemic level — research becomes a tool for policy change. This demonstrates how individual effort can catalyze institutional action.'
            }
        },
        reflection: {
            elementary: 'What is one thing YOU could do this week to help the environment? It can be big or small — every action counts!',
            middle: 'What does it mean to "have agency"? Why is taking action the most important step in the HOPE Framework?',
            high: 'How does the concept of agency in the HOPE Framework relate to broader discussions of environmental justice and collective action?'
        }
    }
};


// ===== Feedback System =====

const markerSignals = {
    motivation: {
        label: '🔥 Motivation for Change',
        patterns: [
            /\b(have to|need to|must|should|can't ignore|couldn't ignore)\b/i,
            /\b(upset|angry|frustrated|worried|concerned|ache|hurt|sad|grief|anxious)\b/i,
            /\b(something has to change|make a difference|do something|take action)\b/i,
            /\b(wish|want|hope for|dream of|imagine|desire)\b/i,
            /\b(problem|issue|crisis|threat|danger|damage|pollution|loss|disappear)\b/i,
            /\b(wrong|unfair|unjust|unacceptable|terrible|awful)\b/i,
            /\b(inspire|sparked|moved|compelled|driven|motivated|called to)\b/i
        ],
        aligned: {
            elementary: 'Great find! This part shows someone really wanting things to change. That feeling is the spark that starts everything!',
            middle: 'This passage shows a drive or desire for change — a key part of Motivation. The emotional response here is what sparks action.',
            high: 'This passage demonstrates Motivation for Change — the affective catalyst that initiates hope-driven action. The emotional response to environmental conditions serves as the foundation of the HOPE Framework.'
        },
        partial: {
            elementary: 'You\'re close! This part is a little about wanting change. Can you find a part where someone feels really strongly that something is wrong?',
            middle: 'This passage touches on motivation, but the connection could be stronger. Look for the emotional spark — the feeling that something needs to be different.',
            high: 'This passage tangentially relates to motivation. For stronger alignment, identify passages where the affective response to environmental conditions is more explicit — frustration, grief, or urgency.'
        },
        notAligned: {
            elementary: 'Hmm, this part doesn\'t really show someone wanting change. Try to find where a character feels sad or upset about something happening to nature!',
            middle: 'This passage doesn\'t strongly show Motivation for Change. Look for moments where a character reacts emotionally — frustration, sadness, or a deep desire to act.',
            high: 'This passage doesn\'t align with the Motivation marker. Motivation in hope theory refers to the affective response — eco-grief, frustration, or moral distress — that catalyzes the desire for change.'
        }
    },
    belief: {
        label: '✨ Belief that Change is Possible',
        patterns: [
            /\b(can|could|possible|able to|capable)\b/i,
            /\b(believe|faith|trust|confidence|optimis)/i,
            /\b(success|succeed|worked|improved|restored|recovered|better)\b/i,
            /\b(evidence|proof|data|results|showed|demonstrated)\b/i,
            /\b(before.*after|used to.*now|once.*now)\b/i,
            /\b(if they could|we can too|it's possible|there's hope)\b/i,
            /\b(example|model|showed that|proved that)\b/i,
            /\b(progress|growth|improvement|positive|change happen)\b/i
        ],
        aligned: {
            elementary: 'Yes! This shows that good things CAN happen. When we see that change worked before, it helps us believe it can work again!',
            middle: 'This passage shows Belief that Change is Possible — there\'s evidence or confidence that things can get better.',
            high: 'This passage aligns with Belief — the cognitive component of hope theory that sustains goal-directed thinking. Evidence of efficacy or precedent strengthens this marker.'
        },
        partial: {
            elementary: 'Almost! This hints at things getting better. Can you find a part that really shows proof that change has worked?',
            middle: 'This passage hints at belief, but could be clearer. Look for evidence that change can happen — past successes, data, or confidence.',
            high: 'This passage partially aligns with Belief. For stronger identification, look for passages that provide empirical evidence, historical precedent, or explicit expressions of efficacy.'
        },
        notAligned: {
            elementary: 'This part doesn\'t really show that change can happen. Look for where the story shows things actually getting better, or someone saying "we can do it!"',
            middle: 'This passage doesn\'t strongly show Belief. Look for evidence that efforts work, examples of past success, or characters expressing confidence.',
            high: 'This passage doesn\'t align with the Belief marker. In the HOPE Framework, Belief refers to evidence-based confidence — demonstrated efficacy, precedent, or warranted optimism about pathways to change.'
        }
    },
    plans: {
        label: '🗺️ Plans for a Path Forward',
        patterns: [
            /\b(plan|strategy|approach|method|proposal|idea)\b/i,
            /\b(step|phase|stage|team|group|role|assign)\b/i,
            /\b(will|would|going to|intend to|aim to)\b/i,
            /\b(first|second|third|then|next|after that)\b/i,
            /\b(research|study|test|investigate|explore|design)\b/i,
            /\b(timeline|schedule|deadline|goal|target|objective)\b/i,
            /\b(organize|coordinate|arrange|set up|create|build|develop)\b/i,
            /\b(solution|fix|address|tackle|resolve)\b/i
        ],
        aligned: {
            elementary: 'You found a plan! This part shows real steps for making things better. Having a plan is how we turn hope into action!',
            middle: 'This passage clearly shows Plans for a Path Forward — concrete steps or strategies. This is how hope turns into action.',
            high: 'This passage demonstrates pathways thinking — the cognitive process of identifying routes to goals. Concrete strategies and structured approaches are hallmarks of this marker.'
        },
        partial: {
            elementary: 'You\'re getting there! This mentions some ideas, but can you find a part where someone has a real step-by-step plan?',
            middle: 'This suggests planning, but look for more specific, concrete steps — timelines, assigned roles, or detailed strategies.',
            high: 'This passage partially aligns with Plans. Stronger identification would involve passages with explicit pathways thinking — structured approaches, contingency planning, or resource allocation.'
        },
        notAligned: {
            elementary: 'This part doesn\'t show a plan. Look for where the story talks about specific things people are going to do — like steps or ideas for fixing the problem!',
            middle: 'This passage doesn\'t strongly show Plans. Look for specific strategies, proposals, timelines, or clear ideas for how to make change happen.',
            high: 'This passage doesn\'t align with the Plans marker. In hope theory, pathways thinking involves identifying concrete routes to goals — look for structured interventions, proposals, or strategic frameworks.'
        }
    },
    agency: {
        label: '💪 Agency to Take Action',
        patterns: [
            /\b(did|made|built|planted|created|organized|led|started|launched)\b/i,
            /\b(took action|stepped up|volunteered|presented|spoke|advocated)\b/i,
            /\b(result|outcome|achievement|accomplishment|impact)\b/i,
            /\b(planted|cleaned|collected|gathered|built|installed|removed)\b/i,
            /\b(improvement|improved|reduced|increased|changed|transformed)\b/i,
            /\b(community|together|joined|collaborated|united|collective)\b/i,
            /\b(approved|funded|supported|accepted|passed)\b/i
        ],
        aligned: {
            elementary: 'Amazing! This shows someone actually DOING something — not just talking about it. That\'s the power of taking action!',
            middle: 'This passage shows Agency — someone is actually doing something, not just talking about it. Action is the most powerful marker of hope.',
            high: 'This passage demonstrates Agency — agentic thinking in hope theory. The transition from intention to action, and the measurable impact of that action, strongly aligns with this marker.'
        },
        partial: {
            elementary: 'Close! This mentions some action, but look for the part where someone really rolls up their sleeves and DOES something!',
            middle: 'This touches on action, but Agency is about the moment someone moves from planning to actually doing. Look for concrete actions and real-world impact.',
            high: 'This passage partially aligns with Agency. For stronger identification, look for passages where agentic thinking is fully realized — completed actions with demonstrable outcomes.'
        },
        notAligned: {
            elementary: 'This part doesn\'t show someone taking action. Look for where characters actually DO things — plant, build, clean, present, or organize!',
            middle: 'This passage doesn\'t strongly show Agency. Look for moments where someone actually takes action and creates real change.',
            high: 'This passage doesn\'t align with the Agency marker. Agency in the HOPE Framework refers to demonstrated self-efficacy — completed actions, measurable outcomes, and the exercise of individual or collective power.'
        }
    }
};

function evaluateFinding(finding) {
    const signals = markerSignals[finding.marker];
    const text = finding.text;

    let matchCount = 0;
    signals.patterns.forEach(pattern => {
        if (pattern.test(text)) matchCount++;
    });

    if (matchCount >= 2) return 'aligned';
    if (matchCount === 1) return 'partial';
    return 'notAligned';
}

function generateFeedback() {
    const feedbackPanel = document.getElementById('feedback-panel');
    const feedbackContent = document.getElementById('feedback-content');

    if (findings.length === 0) return;

    let html = '';

    const markersUsed = new Set(findings.map(f => f.marker));
    const allMarkers = ['motivation', 'belief', 'plans', 'agency'];
    const missingMarkers = allMarkers.filter(m => !markersUsed.has(m));

    // Overview — age-appropriate
    let overview;
    if (markersUsed.size === 4) {
        overview = currentAge === 'elementary'
            ? 'Wow, you found all four Hope Powers! Let\'s see how you did!'
            : currentAge === 'middle'
            ? 'You found all four HOPE markers — nice work! Here\'s how your selections connect to the framework.'
            : 'All four markers identified. Below is an analysis of each selection\'s alignment with the HOPE Framework.';
    } else if (markersUsed.size >= 2) {
        overview = currentAge === 'elementary'
            ? `You found ${markersUsed.size} Hope Powers so far! Let\'s see what you picked!`
            : currentAge === 'middle'
            ? `You found ${markersUsed.size} of 4 HOPE markers. Here's how your selections connect to the framework.`
            : `${markersUsed.size} of 4 markers identified. Analysis of each selection below.`;
    } else {
        overview = currentAge === 'elementary'
            ? 'You\'re just getting started — let\'s see what you found!'
            : currentAge === 'middle'
            ? 'You\'ve started identifying hope. Here\'s how your selection connects to the framework.'
            : 'Initial selection analyzed below.';
    }

    html += `<div class="feedback-overview">${overview}</div>`;

    // Per-finding feedback
    findings.forEach(f => {
        const alignment = evaluateFinding(f);
        const signals = markerSignals[f.marker];
        const feedbackText = signals[alignment][currentAge];
        const truncatedQuote = f.text.length > 80 ? f.text.substring(0, 80) + '...' : f.text;

        html += `
            <div class="feedback-item" data-marker="${f.marker}">
                <div class="feedback-item-header">${signals.label}</div>
                <div class="feedback-item-quote">"${escapeHtml(truncatedQuote)}"</div>
                <div class="feedback-item-text">${feedbackText}</div>
            </div>
        `;
    });

    // Missing markers
    if (missingMarkers.length > 0 && missingMarkers.length < 4) {
        const markerNames = {
            motivation: '🔥 Motivation for Change',
            belief: '✨ Belief that Change is Possible',
            plans: '🗺️ Plans for a Path Forward',
            agency: '💪 Agency to Take Action'
        };
        const hints = {
            elementary: {
                motivation: 'Find where someone feels really strongly that something needs to change!',
                belief: 'Find where the story shows that things CAN get better!',
                plans: 'Find where someone has a real plan — specific steps for fixing things!',
                agency: 'Find where someone actually DOES something to make things better!'
            },
            middle: {
                motivation: 'Look for moments where someone feels strongly that something is wrong or needs to change.',
                belief: 'Look for evidence that change can happen — past successes, data, or confidence.',
                plans: 'Look for specific steps, strategies, or proposals for making change happen.',
                agency: 'Look for moments where someone actually takes action and creates real change.'
            },
            high: {
                motivation: 'Identify passages demonstrating affective responses to environmental conditions.',
                belief: 'Identify passages providing evidence of efficacy or warranted optimism.',
                plans: 'Identify passages outlining structured approaches or pathways to goals.',
                agency: 'Identify passages demonstrating completed actions with measurable outcomes.'
            }
        };

        const keepLookingText = currentAge === 'elementary' ? 'Keep searching! You can find more!' : currentAge === 'middle' ? 'Keep looking!' : 'Additional markers to identify:';

        html += `<div class="feedback-missing"><div class="feedback-missing-header">${keepLookingText}</div>`;
        missingMarkers.forEach(m => {
            html += `<p><strong>${markerNames[m]}:</strong> ${hints[currentAge][m]}</p>`;
        });
        html += '</div>';
    }

    // Encouragement
    const encouragement = currentAge === 'elementary'
        ? 'Remember: there\'s no wrong answer! What matters is that you\'re thinking about hope and what makes you feel like things can get better. You\'re doing great! 🌟'
        : currentAge === 'middle'
        ? 'Remember: the HOPE Framework is about finding hope in stories about the environment. There\'s no single right answer — what matters is how you connect with the text and think about what gives you hope for the future.'
        : 'The HOPE Framework positions hope as a lived practice rather than passive optimism. Multiple valid interpretations exist for any text. What matters is the analytical process of identifying how narratives construct pathways from eco-grief to agency.';

    html += `<div class="feedback-encouragement">${encouragement}</div>`;

    feedbackContent.innerHTML = html;
    feedbackPanel.classList.remove('hidden');
    feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('btn-get-feedback').addEventListener('click', generateFeedback);
document.getElementById('btn-close-feedback').addEventListener('click', () => {
    document.getElementById('feedback-panel').classList.add('hidden');
});


// ===== Match Activity =====

// Phrases for matching — age-appropriate sets
const matchPhrases = {
    elementary: [
        { text: '"We have to help the animals!" said Mia, feeling sad about the polluted pond.', marker: 'motivation', why: 'Mia feels sad and says they HAVE to help — that strong feeling is what makes someone want change.' },
        { text: 'Last year, kids in another town cleaned up their river and the fish came back!', marker: 'belief', why: 'This shows it actually worked somewhere else — proof that cleaning up can make a real difference.' },
        { text: 'The class decided to pick up trash every Friday and plant flowers by the stream.', marker: 'plans', why: 'They have a specific plan — trash pickup on Fridays and planting flowers. Those are real steps!' },
        { text: 'The students put on gloves and spent the whole morning picking up litter from the beach.', marker: 'agency', why: 'They actually DID it — put on gloves and picked up litter. That\'s taking action!' },
        { text: '"Something is wrong — the butterflies aren\'t coming anymore," whispered Leo.', marker: 'motivation', why: 'Leo notices something is wrong and it bothers him — that worry is the spark that makes people want to act.' },
        { text: '"If we work together, I know we can fix this!" said the teacher.', marker: 'belief', why: 'The teacher believes they CAN fix it — that confidence is what keeps hope alive.' },
        { text: 'They made a list: Step 1 — research. Step 2 — talk to the mayor. Step 3 — plant trees.', marker: 'plans', why: 'A numbered list of steps is a clear plan — they know exactly what to do first, second, and third.' },
        { text: 'By June, the garden was full of flowers and bees were buzzing everywhere.', marker: 'agency', why: 'The results are real — flowers and bees! This shows what happens when people take action.' },
    ],
    middle: [
        { text: '"We can\'t just sit here while the creek gets worse every year," said Amara, her voice shaking.', marker: 'motivation', why: 'Amara\'s frustration and urgency — "can\'t just sit here" — is the emotional drive that sparks the desire for change.' },
        { text: 'Mr. Chen showed them data from a city where students had successfully restored a wetland.', marker: 'belief', why: 'Real data from a successful project proves that student-led restoration can work — evidence that change is possible.' },
        { text: 'Team one would test water quality weekly. Team two would research native plants that filter pollutants.', marker: 'plans', why: 'Organized teams with specific tasks — testing and researching — are concrete steps in a plan of action.' },
        { text: 'Amara led the presentation to city council. She brought water samples, charts, and photos.', marker: 'agency', why: 'Amara didn\'t just plan — she actually presented to the council with evidence. That\'s moving from ideas to action.' },
        { text: 'She felt a deep ache thinking about the frogs and fish that used to live there.', marker: 'motivation', why: 'That "deep ache" is eco-grief — the emotional pain of environmental loss that motivates people to want change.' },
        { text: '"If they could do it, we can too," he said. The class had seen change happen before.', marker: 'belief', why: 'Pointing to someone else\'s success and saying "we can too" is belief backed by evidence — a key part of hope.' },
        { text: 'They created a timeline and assigned roles for the rain garden proposal.', marker: 'plans', why: 'Timelines and assigned roles show organized, deliberate planning — the pathway from hope to action.' },
        { text: 'Over the next two months, the students planted 200 native plants along the creek bank.', marker: 'agency', why: '200 plants actually in the ground — this is agency in action, with a concrete, measurable result.' },
    ],
    high: [
        { text: 'The community\'s frustration grew as reports revealed a 60% decline in local biodiversity over the past decade.', marker: 'motivation', why: 'Frustration in response to empirical data on biodiversity loss represents the affective catalyst — emotional engagement with the problem drives motivation.' },
        { text: 'Peer-reviewed studies from similar ecosystems demonstrated that targeted interventions could reverse habitat degradation within five years.', marker: 'belief', why: 'Peer-reviewed evidence providing a timeline for reversal constitutes warranted optimism — belief grounded in demonstrated efficacy rather than wishful thinking.' },
        { text: 'The coalition outlined a three-phase restoration plan, beginning with invasive species removal and ending with native habitat corridors.', marker: 'plans', why: 'A phased, sequential restoration plan with specific interventions exemplifies pathways thinking — structured routes to defined goals.' },
        { text: 'Student researchers published their water quality data, which the city council cited when approving the $2M restoration fund.', marker: 'agency', why: 'Published research that directly influenced policy and funding demonstrates agentic action — individual effort translating into systemic change.' },
        { text: 'Residents expressed grief and anger after the last remaining old-growth trees in the watershed were marked for removal.', marker: 'motivation', why: 'Grief and anger are affective responses to environmental loss — the emotional foundation that generates the desire for protective action.' },
        { text: 'The neighboring district\'s successful rewilding project — now in its third year — provided a replicable model for their own efforts.', marker: 'belief', why: 'A multi-year successful model from a comparable context provides evidence-based confidence that similar outcomes are achievable.' },
        { text: 'They proposed monthly monitoring protocols, community workshops, and a partnership with the university\'s ecology department.', marker: 'plans', why: 'Multiple coordinated strategies — monitoring, education, and institutional partnership — represent comprehensive pathways thinking with built-in accountability.' },
        { text: 'After 18 months of volunteer-led planting and monitoring, water quality metrics improved by 40% and two native species returned.', marker: 'agency', why: 'Quantified outcomes (40% improvement, species return) resulting from sustained collective action demonstrate fully realized agency.' },
    ]
};

// Correct/incorrect feedback — age-appropriate
const matchFeedbackMessages = {
    elementary: {
        correct: ['Great job! 🌟', 'You got it! ⭐', 'That\'s right! 🎉', 'Yes! You found it! 💚', 'Amazing! 🌈'],
        incorrect: ['Not quite — try again!', 'Close! Think about what\'s happening here.', 'Hmm, read it one more time!'],
        hint: {
            motivation: 'This is about feelings — someone is upset or wants change.',
            belief: 'This shows that change CAN happen — there\'s proof!',
            plans: 'This describes specific steps or ideas for what to do.',
            agency: 'This is about people actually DOING something.'
        }
    },
    middle: {
        correct: ['Correct!', 'That\'s right!', 'You nailed it!', 'Spot on!', 'Well done!'],
        incorrect: ['Not quite.', 'Try again — think about what this phrase is really showing.', 'Close, but not this one.'],
        hint: {
            motivation: 'Think about the emotional response — what makes someone want change?',
            belief: 'Look for evidence or confidence that change is possible.',
            plans: 'Look for concrete steps, strategies, or proposals.',
            agency: 'Look for actions being taken and real-world impact.'
        }
    },
    high: {
        correct: ['Correct.', 'Accurate classification.', 'Well identified.', 'Precisely.'],
        incorrect: ['Incorrect.', 'Reconsider the primary function of this passage.', 'Review the marker definitions.'],
        hint: {
            motivation: 'The affective catalyst — emotional response driving the desire for change.',
            belief: 'Evidence-based confidence — demonstrated efficacy or precedent.',
            plans: 'Pathways thinking — structured approaches to goals.',
            agency: 'Agentic action — completed actions with measurable outcomes.'
        }
    }
};

let matchQueue = [];
let matchIndex = 0;
let matchAttempts = 0;

function initMatchActivity() {
    // Shuffle phrases for the current age group
    matchQueue = [...matchPhrases[currentAge]];
    shuffleArray(matchQueue);
    matchIndex = 0;
    matchAttempts = 0;

    // Clear buckets
    ['motivation', 'belief', 'plans', 'agency'].forEach(m => {
        document.getElementById(`bucket-${m}`).innerHTML = '';
        document.getElementById(`bucket-count-${m}`).textContent = '0';
    });

    // Hide complete state, show workspace
    document.getElementById('match-complete').classList.add('hidden');
    document.querySelector('.match-workspace').style.display = '';

    // Show first phrase
    showMatchPhrase();
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function showMatchPhrase() {
    if (matchIndex >= matchQueue.length) {
        completeMatchActivity();
        return;
    }

    const phrase = matchQueue[matchIndex];
    const phraseEl = document.getElementById('match-phrase');
    const textEl = document.getElementById('match-phrase-text');
    const feedbackEl = document.getElementById('match-feedback-msg');

    textEl.textContent = phrase.text;
    phraseEl.className = 'match-phrase'; // reset classes
    feedbackEl.classList.add('hidden');

    // Update progress bar
    const pct = (matchIndex / matchQueue.length) * 100;
    document.getElementById('match-progress-fill').style.width = `${pct}%`;
}

function handleMatchChoice(chosenMarker) {
    const phrase = matchQueue[matchIndex];
    const phraseEl = document.getElementById('match-phrase');
    const feedbackEl = document.getElementById('match-feedback-msg');
    const msgs = matchFeedbackMessages[currentAge];
    const markerNames = { motivation: 'Motivation', belief: 'Belief', plans: 'Plans', agency: 'Agency' };

    matchAttempts++;

    if (chosenMarker === phrase.marker) {
        // Correct!
        phraseEl.classList.add('correct');
        feedbackEl.className = 'match-feedback-msg correct';
        const praise = msgs.correct[Math.floor(Math.random() * msgs.correct.length)];
        feedbackEl.innerHTML = `<strong>${praise}</strong> ${phrase.why}`;
        feedbackEl.classList.remove('hidden');

        // Add to bucket
        const bucket = document.getElementById(`bucket-${phrase.marker}`);
        const item = document.createElement('div');
        item.className = 'match-bucket-item';
        item.textContent = phrase.text.length > 50 ? phrase.text.substring(0, 50) + '...' : phrase.text;
        bucket.appendChild(item);

        // Update bucket count
        const countEl = document.getElementById(`bucket-count-${phrase.marker}`);
        countEl.textContent = parseInt(countEl.textContent) + 1;

        // Move to next after delay
        matchIndex++;
        setTimeout(() => showMatchPhrase(), 2500);
    } else {
        // Incorrect — give hint
        phraseEl.classList.add('incorrect');
        feedbackEl.className = 'match-feedback-msg incorrect';

        const wrongMsg = msgs.incorrect[Math.floor(Math.random() * msgs.incorrect.length)];
        const hint = msgs.hint[phrase.marker];
        feedbackEl.textContent = `${wrongMsg} Hint: ${hint}`;
        feedbackEl.classList.remove('hidden');

        // Reset animation after a moment
        setTimeout(() => {
            phraseEl.classList.remove('incorrect');
        }, 500);
    }
}

function completeMatchActivity() {
    // Hide workspace, show complete state
    document.querySelector('.match-workspace').style.display = 'none';
    document.getElementById('match-complete').classList.remove('hidden');

    // Fill progress bar
    document.getElementById('match-progress-fill').style.width = '100%';

    // Celebration
    triggerCelebration();
}

// Wire up choice buttons
document.querySelectorAll('.match-choice').forEach(btn => {
    btn.addEventListener('click', () => {
        handleMatchChoice(btn.dataset.marker);
    });
});


// ===== Resources =====

const resources = {
    elementary: [
        {
            icon: '📚',
            title: 'Books',
            items: [
                { title: 'We Are Water Protectors', desc: 'by Carole Lindstrom — A girl fights to protect Earth\'s water. Caldecott Medal winner.', meta: 'Picture Book', url: 'https://bookshop.org/search?keywords=We+Are+Water+Protectors+Carole+Lindstrom' },
                { title: 'The Great Kapok Tree', desc: 'by Lynne Cherry — Animals in the rainforest speak up to save their home.', meta: 'Picture Book', url: 'https://bookshop.org/search?keywords=The+Great+Kapok+Tree+Lynne+Cherry' },
                { title: 'The Watcher', desc: 'by Jeanette Winter — The true story of Jane Goodall and her work with chimpanzees.', meta: 'Picture Book', url: 'https://bookshop.org/search?keywords=The+Watcher+Jeanette+Winter+Jane+Goodall' },
                { title: 'One Plastic Bag', desc: 'by Miranda Paul — A true story about a woman in Gambia who recycled plastic bags to help her community.', meta: 'Picture Book', url: 'https://bookshop.org/search?keywords=One+Plastic+Bag+Miranda+Paul' },
                { title: 'The Lorax', desc: 'by Dr. Seuss — A classic story about speaking up for trees and the environment.', meta: 'Picture Book', url: 'https://bookshop.org/search?keywords=The+Lorax+Dr+Seuss' },
            ]
        },
        {
            icon: '📺',
            title: 'TV Shows',
            items: [
                { title: 'Wild Kratts', desc: 'Join the Kratt brothers on animal adventures and learn about wildlife and habitats.', meta: 'PBS Kids', url: 'https://pbskids.org/wildkratts/' },
                { title: 'Octonauts', desc: 'Explore the ocean and learn about sea creatures with Captain Barnacles and crew.', meta: 'Netflix / Disney+', url: 'https://en.wikipedia.org/wiki/Octonauts' },
                { title: 'Molly of Denali', desc: 'An Alaska Native girl explores nature and solves problems in her community.', meta: 'PBS Kids', url: 'https://pbskids.org/molly/' },
            ]
        },
        {
            icon: '🌐',
            title: 'Websites',
            items: [
                { title: 'NASA Climate Kids', desc: 'Games, videos, and activities about weather, climate, and taking care of Earth.', url: 'https://climatekids.nasa.gov/' },
                { title: 'National Geographic Kids', desc: 'Fun facts, videos, and quizzes about animals, nature, and the planet.', url: 'https://kids.nationalgeographic.com/' },
                { title: 'Ranger Rick', desc: 'Stories and activities about wildlife and nature from the National Wildlife Federation.', url: 'https://rangerrick.org/' },
            ]
        },
        {
            icon: '🎮',
            title: 'Games & Activities',
            items: [
                { title: 'Recycle City', desc: 'Explore a virtual city and learn how to reduce, reuse, and recycle.', meta: 'EPA', url: 'https://www.epa.gov/recyclecity' },
                { title: 'Climate Kids: Big Questions', desc: 'Interactive activities and experiments you can do at home about climate.', url: 'https://climatekids.nasa.gov/menu/make/' },
            ]
        },
        {
            icon: '📝',
            title: 'Worksheets',
            items: [
                { title: 'Searching for HOPE', desc: 'A fun worksheet for finding the four HOPE markers in any story you read.', meta: 'Fillable', action: 'worksheet-search-screen' },
                { title: 'Teacher Planning Page', desc: 'A planning tool for teachers to record HOPE markers while reading climate literature.', meta: 'For Teachers', action: 'worksheet-teacher-screen' },
                { title: 'Climate Conversations', desc: 'Discussion starter questions for each HOPE marker to use with students.', meta: 'For Teachers', action: 'worksheet-conversations-screen' },
            ]
        }
    ],
    middle: [
        {
            icon: '📚',
            title: 'Books',
            items: [
                { title: 'Hoot', desc: 'by Carl Hiaasen — Kids take on a construction company to protect endangered owls in Florida.', meta: 'Novel', url: 'https://bookshop.org/search?keywords=Hoot+Carl+Hiaasen' },
                { title: 'The Wild Robot', desc: 'by Peter Brown — A robot learns to survive in the wilderness and connects with nature.', meta: 'Novel', url: 'https://bookshop.org/search?keywords=The+Wild+Robot+Peter+Brown' },
                { title: 'A Wolf Called Wander', desc: 'by Rosanne Parry — Based on the true story of a young wolf\'s journey across the Pacific Northwest.', meta: 'Novel', url: 'https://bookshop.org/search?keywords=A+Wolf+Called+Wander+Rosanne+Parry' },
                { title: 'Flush', desc: 'by Carl Hiaasen — A kid investigates illegal dumping threatening his local waters.', meta: 'Novel', url: 'https://bookshop.org/search?keywords=Flush+Carl+Hiaasen' },
                { title: 'The Last Cuentista', desc: 'by Donna Barba Higuera — A girl must keep stories alive after Earth is destroyed. Newbery Medal winner.', meta: 'Novel', url: 'https://bookshop.org/search?keywords=The+Last+Cuentista+Donna+Barba+Higuera' },
            ]
        },
        {
            icon: '📺',
            title: 'Shows & Documentaries',
            items: [
                { title: 'Our Planet', desc: 'Stunning documentary series about Earth\'s habitats and the animals that live in them.', meta: 'Netflix', url: 'https://en.wikipedia.org/wiki/Our_Planet' },
                { title: 'Planet Earth', desc: 'The groundbreaking nature series exploring every corner of the planet.', meta: 'BBC / Streaming', url: 'https://en.wikipedia.org/wiki/Planet_Earth_(2006_TV_series)' },
                { title: 'Biggest Little Farm', desc: 'A couple transforms dead farmland into a thriving ecosystem. A real-life hope story.', meta: 'Documentary', url: 'https://en.wikipedia.org/wiki/The_Biggest_Little_Farm' },
            ]
        },
        {
            icon: '🌐',
            title: 'Websites & Organizations',
            items: [
                { title: 'NOAA Climate.gov', desc: 'Climate science explained clearly with data, maps, and educational resources.', url: 'https://www.climate.gov/' },
                { title: 'NASA Climate Change', desc: 'Evidence, causes, effects, and solutions — straight from NASA scientists.', url: 'https://climate.nasa.gov/' },
                { title: 'Roots & Shoots', desc: 'Jane Goodall\'s program for young people taking action in their communities.', url: 'https://rootsandshoots.org/' },
            ]
        },
        {
            icon: '🎙️',
            title: 'Podcasts & Blogs',
            items: [
                { title: 'Brains On!', desc: 'A science podcast for curious kids — episodes on climate, oceans, and ecosystems.', url: 'https://brainson.org/' },
                { title: 'The Gist (Yale)', desc: 'Short, clear articles explaining climate science for non-experts.', url: 'https://yaleclimateconnections.org/' },
            ]
        },
        {
            icon: '📝',
            title: 'Worksheets',
            items: [
                { title: 'Finding Hope in Literature', desc: 'A worksheet for identifying HOPE markers in any story, article, or film.', meta: 'Fillable', action: 'worksheet-literature-screen' },
                { title: 'Teacher Planning Page', desc: 'Record HOPE markers while reading climate literature — a teacher planning tool.', meta: 'For Teachers', action: 'worksheet-teacher-screen' },
                { title: 'Climate Conversations', desc: 'Discussion prompts for each HOPE marker to spark dialogue with students.', meta: 'For Teachers', action: 'worksheet-conversations-screen' },
            ]
        }
    ],
    high: [
        {
            icon: '📚',
            title: 'Books',
            items: [
                { title: 'Braiding Sweetgrass', desc: 'by Robin Wall Kimmerer — Indigenous wisdom, scientific knowledge, and the lessons of plants.', meta: 'Nonfiction', url: 'https://bookshop.org/search?keywords=Braiding+Sweetgrass+Robin+Wall+Kimmerer' },
                { title: 'The Sixth Extinction', desc: 'by Elizabeth Kolbert — An investigation into the current mass extinction event. Pulitzer Prize winner.', meta: 'Nonfiction', url: 'https://bookshop.org/search?keywords=The+Sixth+Extinction+Elizabeth+Kolbert' },
                { title: 'All We Can Save', desc: 'ed. Johnson & Wilkinson — Essays and poetry from women leading on climate. A collection of hope and vision.', meta: 'Anthology', url: 'https://bookshop.org/search?keywords=All+We+Can+Save+Johnson+Wilkinson' },
                { title: 'The Uninhabitable Earth', desc: 'by David Wallace-Wells — What climate science tells us about our future, and what we can do.', meta: 'Nonfiction', url: 'https://bookshop.org/search?keywords=The+Uninhabitable+Earth+David+Wallace-Wells' },
                { title: 'A Sand County Almanac', desc: 'by Aldo Leopold — A foundational text on environmental ethics and our relationship with the land.', meta: 'Classic', url: 'https://bookshop.org/search?keywords=A+Sand+County+Almanac+Aldo+Leopold' },
            ]
        },
        {
            icon: '🎬',
            title: 'Documentaries & Film',
            items: [
                { title: 'Chasing Ice', desc: 'A photographer documents the dramatic retreat of glaciers worldwide. Visual evidence of climate change.', meta: 'Documentary', url: 'https://en.wikipedia.org/wiki/Chasing_Ice' },
                { title: '2040', desc: 'A filmmaker explores what the future could look like if we adopted the best solutions available today.', meta: 'Documentary', url: 'https://en.wikipedia.org/wiki/2040_(film)' },
                { title: 'Kiss the Ground', desc: 'How regenerative agriculture could be a key solution to climate change.', meta: 'Netflix', url: 'https://en.wikipedia.org/wiki/Kiss_the_Ground' },
            ]
        },
        {
            icon: '🌐',
            title: 'Academic & Research',
            items: [
                { title: 'Yale Climate Connections', desc: 'Research-backed reporting on climate science, impacts, and solutions.', url: 'https://yaleclimateconnections.org/' },
                { title: 'IPCC Reports', desc: 'The Intergovernmental Panel on Climate Change — the definitive source for climate science.', url: 'https://www.ipcc.ch/' },
                { title: 'Project Drawdown', desc: 'A comprehensive plan for the most effective solutions to reverse global warming.', url: 'https://drawdown.org/' },
                { title: 'The HOPE Framework (paper)', desc: 'Dr. Colleen Redmond\'s original research article in Climate Literacy in Education.', url: 'https://doi.org/10.24926/cle.v2i1.6231', meta: 'Academic Paper' },
            ]
        },
        {
            icon: '🎙️',
            title: 'Podcasts & Media',
            items: [
                { title: 'How to Save a Planet', desc: 'Explores the science and human stories behind climate change solutions.', meta: 'Gimlet / Spotify', url: 'https://open.spotify.com/show/1KzrasExlM5dgMYwgFHns6' },
                { title: 'The Ezra Klein Show', desc: 'In-depth interviews on climate policy, systems thinking, and agency.', meta: 'NY Times', url: 'https://www.nytimes.com/column/ezra-klein-podcast' },
                { title: 'TED Climate', desc: 'Talks from scientists, activists, and thinkers on climate action and hope.', url: 'https://www.ted.com/topics/climate+change' },
            ]
        },
        {
            icon: '📝',
            title: 'Worksheets',
            items: [
                { title: 'Finding Hope in Literature', desc: 'Identify and analyze HOPE markers across any text, film, or media.', meta: 'Fillable', action: 'worksheet-literature-screen' },
                { title: 'Teacher Planning Page', desc: 'Structured tool for recording HOPE markers while reading climate literature with students.', meta: 'For Teachers', action: 'worksheet-teacher-screen' },
                { title: 'Climate Conversations', desc: 'Conversation starters for each HOPE marker — includes equity and power distribution prompts.', meta: 'For Teachers', action: 'worksheet-conversations-screen' },
            ]
        }
    ]
};

function renderResources() {
    const data = resources[currentAge];
    const tabsEl = document.getElementById('resources-tabs');
    const gridEl = document.getElementById('resources-grid');
    const spotlightEl = document.getElementById('resources-spotlight');

    // Flatten all items with their category info
    const allItems = [];
    data.forEach(cat => {
        cat.items.forEach(item => {
            allItems.push({ ...item, catIcon: cat.icon, catTitle: cat.title });
        });
    });

    // Emoji map for items without URLs
    const typeEmojis = {
        'Picture Book': '📖', 'Novel': '📕', 'Nonfiction': '📗', 'Anthology': '📚',
        'Classic': '📜', 'Netflix': '🎬', 'Documentary': '🎥', 'PBS Kids': '📺',
        'Netflix / Disney+': '📺', 'BBC / Streaming': '📺', 'Academic Paper': '🎓',
        'Gimlet / Spotify': '🎧', 'NY Times': '🎧', 'EPA': '🌿',
    };

    // Random spotlight pick
    const spotlightItem = allItems[Math.floor(Math.random() * allItems.length)];
    const spotEmoji = typeEmojis[spotlightItem.meta] || spotlightItem.catIcon;
    const spotlightContent = `
        <div class="spotlight-icon">${spotEmoji}</div>
        <div class="spotlight-content">
            <div class="spotlight-label">✨ Featured Pick</div>
            <div class="spotlight-title">${escapeHtml(spotlightItem.title)}</div>
            <div class="spotlight-desc">${escapeHtml(spotlightItem.desc)}</div>
            ${spotlightItem.meta ? `<span class="spotlight-meta">${escapeHtml(spotlightItem.meta)}</span>` : ''}
        </div>
    `;
    spotlightEl.innerHTML = spotlightItem.url
        ? `<a href="${escapeHtml(spotlightItem.url)}" target="_blank" rel="noopener noreferrer" class="resources-spotlight-link">${spotlightContent}</a>`
        : spotlightContent;

    // Tabs
    const tabs = [{ icon: '✦', title: 'All' }, ...data.map(c => ({ icon: c.icon, title: c.title }))];
    tabsEl.innerHTML = tabs.map((t, i) => `
        <button class="resources-tab ${i === 0 ? 'active' : ''}" data-tab="${i}">
            <span class="resources-tab-icon">${t.icon}</span>
            ${t.title}
        </button>
    `).join('');

    // Render cards function
    function renderCards(filterIndex) {
        let items;
        if (filterIndex === 0) {
            items = allItems;
        } else {
            const cat = data[filterIndex - 1];
            items = cat.items.map(item => ({ ...item, catIcon: cat.icon, catTitle: cat.title }));
        }

        gridEl.innerHTML = items.map(item => {
            const emoji = typeEmojis[item.meta] || item.catIcon;
            const isLink = !!item.url;
            const isAction = !!item.action;

            const cardContent = `
                    <div class="resource-card-header">
                        <span class="resource-card-emoji">${emoji}</span>
                        <div class="resource-card-title">${escapeHtml(item.title)}</div>
                    </div>
                    <div class="resource-card-desc">${escapeHtml(item.desc)}</div>
                    <div class="resource-card-footer">
                        ${item.meta ? `<span class="resource-tag">${escapeHtml(item.meta)}</span>` : ''}
                        <span class="resource-tag">${escapeHtml(item.catTitle)}</span>
                        ${isLink ? '<span class="resource-link-indicator">↗ Visit</span>' : ''}
                        ${isAction ? '<span class="resource-link-indicator">→ Open</span>' : ''}
                    </div>
            `;

            if (isAction) {
                return `<button class="resource-card resource-card-action" data-action="${escapeHtml(item.action)}">${cardContent}</button>`;
            }
            if (isLink) {
                return `<a class="resource-card resource-card-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${cardContent}</a>`;
            }
            return `<div class="resource-card">${cardContent}</div>`;
        }).join('');
    }

    renderCards(0);

    // Tab click handlers
    tabsEl.querySelectorAll('.resources-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabsEl.querySelectorAll('.resources-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCards(parseInt(tab.dataset.tab));
        });
    });
}

// Resources navigation
document.getElementById('btn-resources').addEventListener('click', () => {
    renderResources();
    showScreen('resources-screen');
});
document.getElementById('btn-back-resources').addEventListener('click', () => {
    showScreen('welcome-screen');
});

// ===== Worksheet Navigation =====
// Back buttons
document.getElementById('btn-back-ws-search').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-back-ws-lit').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-back-ws-teacher').addEventListener('click', () => showScreen('welcome-screen'));
document.getElementById('btn-back-ws-convo').addEventListener('click', () => showScreen('welcome-screen'));

// Print buttons
document.getElementById('btn-print-ws-search').addEventListener('click', () => window.print());
document.getElementById('btn-print-ws-lit').addEventListener('click', () => window.print());
document.getElementById('btn-print-ws-teacher').addEventListener('click', () => window.print());
document.getElementById('btn-print-ws-convo').addEventListener('click', () => window.print());

// Cross-link: Teacher Planning → Conversations
document.getElementById('btn-goto-conversations').addEventListener('click', () => {
    showScreen('worksheet-conversations-screen');
});

// Worksheet button — routes to age-appropriate version
document.getElementById('btn-worksheet').addEventListener('click', () => {
    if (currentAge === 'elementary') {
        showScreen('worksheet-search-screen');
    } else {
        showScreen('worksheet-literature-screen');
    }
});

// Teacher modal worksheet buttons
document.getElementById('btn-teacher-planning').addEventListener('click', () => {
    document.getElementById('teacher-modal').classList.add('hidden');
    showScreen('worksheet-teacher-screen');
});
document.getElementById('btn-teacher-convo').addEventListener('click', () => {
    document.getElementById('teacher-modal').classList.add('hidden');
    showScreen('worksheet-conversations-screen');
});

// ===== In-App Resource Preview =====
(function() {
    const modal = document.getElementById('browser-modal');
    const titleEl = document.getElementById('browser-modal-title');
    const descEl = document.getElementById('browser-modal-desc');
    const metaEl = document.getElementById('browser-modal-meta');
    const emojiEl = document.getElementById('browser-modal-emoji');
    const visitBtn = document.getElementById('browser-modal-visit');
    const closeBtn = document.getElementById('browser-modal-close');
    const backBtn = document.getElementById('browser-modal-back');

    function openPreview(url, title, desc, meta, emoji) {
        emojiEl.textContent = emoji || '🔗';
        titleEl.textContent = title || 'Resource';
        descEl.textContent = desc || '';
        descEl.style.display = desc ? '' : 'none';
        metaEl.textContent = meta || '';
        metaEl.style.display = meta ? '' : 'none';
        visitBtn.href = url;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closePreview() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closePreview);
    backBtn.addEventListener('click', closePreview);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePreview();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closePreview();
    });

    // Intercept resource card link clicks
    document.addEventListener('click', (e) => {
        // Handle in-app action cards (worksheets)
        const actionCard = e.target.closest('button.resource-card-action');
        if (actionCard) {
            const screen = actionCard.dataset.action;
            if (screen) showScreen(screen);
            return;
        }

        const card = e.target.closest('a.resource-card-link, a.resources-spotlight-link');
        if (card) {
            e.preventDefault();
            const url = card.href;
            const t = card.querySelector('.resource-card-title, .spotlight-title');
            const d = card.querySelector('.resource-card-desc, .spotlight-desc');
            const m = card.querySelector('.resource-tag, .spotlight-meta');
            const em = card.querySelector('.resource-card-emoji, .spotlight-icon');
            openPreview(url, t ? t.textContent : '', d ? d.textContent : '', m ? m.textContent : '', em ? em.textContent : '');
        }
    });
})();


// ===== Hope Quest Game =====

// Zork-style ASCII art for each location
const questAsciiArt = {
    'Ember Cave': `
      _______________
     /               \\
    /   .  *  .   *   \\
   |  *  EMBER   .  *  |
   |    .  CAVE  *     |
   |  ____       ____  |
   | /    \\     /    \\ |
   ||  ()  | ~ |  ()  ||
   | \\____/     \\____/ |
   |    \\|||/ \\|||/    |
   |_____|  🦊  |_____|
  /______\\_________/____\\`,
    'Crystal Falls': `
        |       |
       |||     |||
      |||||   |||||
       \\  \\_/  /
        \\ ~~~ /
    ~~~~~|   |~~~~~
   ~~~~~~|   |~~~~~~
    ~~~~~|   |~~~~~
        /     \\
       / FALLS \\
      /  .  🌿  \\
     /___________\\
    ~~~~~~~~~~~~~~~~`,
    'Blueprint Summit': `
            /\\
           /  \\
          / 🦉 \\
         /______\\
        /|  ||  |\\
       / | PLAN | \\
      /  |______|  \\
     /   /      \\   \\
    /   / SUMMIT \\   \\
   /___/____||____\\___\\
       |  ____  |
  ~~~~~|_|    |_|~~~~~`,
    'Action Valley': `
     🌳    🌳    🌳
    /|\\   /|\\   /|\\
     |     |     |
  ~~~~~~~~~~~~~~~~~~~
  ~ ACTION  VALLEY ~
  ~~~~~~~~~~~~~~~~~~~
   🌱  🌱  🌱  🌱  🌱
  ___________________
 |  \\o/  \\o/  \\o/  |
 |   |    |    |    |
 |  / \\  / \\  / \\  |
 |___________________|`,
    // Middle / High alternative names
    'Ember Cave (alt)': `
    _____________________
   /   ⚠  DANGER  ⚠     \\
  / ░░░░░░░░░░░░░░░░░░░░ \\
 |  ░░ AIR QUALITY  ░░░░  |
 |  ░░  ▼ -30%     ░░░░  |
 |  ░░░░░░░░░░░░░░░░░░░░  |
 |  📊 ████████░░░░░░░░  |
 |  📊 █████░░░░░░░░░░░  |
 |  📊 ███░░░░░░░░░░░░░  |
 |________________________|
     \\  EMBER CAVE  /`,
    'Crystal Falls (alt)': `
    ┌─────────────────────┐
    │  RESEARCH  STATION  │
    ├─────────────────────┤
    │ ✅ Korea River  +92% │
    │ ✅ India Forest +340% │
    │ ✅ Reef Recovery +18% │
    ├─────────────────────┤
    │    CHANGE IS        │
    │     POSSIBLE        │
    │  ~~~Crystal Falls~~~│
    └─────────────────────┘`,
    'Blueprint Summit (alt)': `
    ╔═════════════════════╗
    ║  COMMAND  CENTER    ║
    ╠═════════════════════╣
    ║ Phase 1: ████░░ 60% ║
    ║ Phase 2: ██░░░░ 30% ║
    ║ Phase 3: ░░░░░░  0% ║
    ╠═════════════════════╣
    ║  🗺️  BUILD YOUR     ║
    ║      ROADMAP        ║
    ╚═════════════════════╝
         /SUMMIT\\`,
    'Action Valley (alt)': `
    ╔═════════════════════╗
    ║  >>> ACTION  <<<    ║
    ╠═════════════════════╣
    ║ 🌳🌳🌳🌳🌳🌳🌳🌳🌳 ║
    ║ Volunteers: ████ 47 ║
    ║ Trees:   ████░░ 499 ║
    ║ TARGET:        ⟶ 500║
    ╠═════════════════════╣
    ║  🌱 1 seedling left ║
    ╚═════════════════════╝`
};

// Retro 8-bit sound effects for quest
const questSFX = (function() {
    let ctx = null;
    function getCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        return ctx;
    }

    function beep(freq, dur, type, vol, delay) {
        const c = getCtx();
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = type || 'square';
        o.frequency.value = freq;
        g.gain.setValueAtTime(vol || 0.08, c.currentTime + (delay || 0));
        g.gain.linearRampToValueAtTime(0, c.currentTime + (delay || 0) + dur);
        o.connect(g); g.connect(c.destination);
        o.start(c.currentTime + (delay || 0));
        o.stop(c.currentTime + (delay || 0) + dur);
    }

    return {
        // Scene enter — retro door/portal sound
        enter() {
            beep(180, 0.1, 'square', 0.1, 0);
            beep(220, 0.1, 'square', 0.1, 0.08);
            beep(330, 0.15, 'square', 0.1, 0.16);
            beep(440, 0.2, 'triangle', 0.08, 0.28);
        },
        // Typewriter text — rapid clicks
        type(count) {
            for (let i = 0; i < Math.min(count, 30); i++) {
                beep(800 + Math.random() * 400, 0.02, 'square', 0.03, i * 0.03);
            }
        },
        // Correct choice — triumphant 8-bit fanfare
        correct() {
            beep(262, 0.1, 'square', 0.1, 0);
            beep(330, 0.1, 'square', 0.1, 0.1);
            beep(392, 0.1, 'square', 0.1, 0.2);
            beep(523, 0.25, 'square', 0.12, 0.3);
            beep(523, 0.08, 'square', 0.08, 0.55);
            beep(523, 0.3, 'square', 0.12, 0.65);
        },
        // Wrong choice — 8-bit error buzz
        wrong() {
            beep(200, 0.15, 'square', 0.1, 0);
            beep(160, 0.2, 'square', 0.08, 0.12);
        },
        // Fragment collected — coin/item pickup
        fragment() {
            beep(988, 0.08, 'square', 0.1, 0);
            beep(1319, 0.15, 'square', 0.1, 0.08);
        },
        // Victory — full 8-bit victory theme
        victory() {
            const notes = [523, 523, 523, 392, 523, 659, 659, 523, 392, 330, 440, 494, 440, 392, 523, 659, 784, 659, 523, 784, 1047];
            const durs  = [0.1, 0.1, 0.15, 0.1, 0.15, 0.15, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.15, 0.1, 0.15, 0.15, 0.15, 0.15, 0.1, 0.15, 0.5];
            let t = 0;
            notes.forEach((f, i) => {
                beep(f, durs[i] + 0.05, 'square', 0.09, t);
                t += durs[i] + 0.02;
            });
        },
        // Choice hover — tiny blip
        hover() {
            beep(600, 0.03, 'square', 0.04, 0);
        }
    };
})();

// Get ASCII art for current quest stage
function getQuestArt(location) {
    const cleanName = location.replace(/^[^\s]+\s/, ''); // Remove emoji prefix
    const isAdvanced = currentAge === 'middle' || currentAge === 'high';
    if (isAdvanced && questAsciiArt[cleanName + ' (alt)']) {
        return questAsciiArt[cleanName + ' (alt)'];
    }
    return questAsciiArt[cleanName] || '';
}

const questScenarios = {
    elementary: [
        {
            location: '🔥 Ember Cave',
            marker: 'motivation',
            scene: 'You enter a dark cave lit by flickering orange light. On the walls, you see paintings of animals that used to live in the forest outside — deer, owls, foxes. But the forest is mostly gone now, replaced by a dusty parking lot. A small fox sits at the cave entrance, looking out at the empty land.',
            prompt: 'The fox looks at you with sad eyes. What do you do?',
            choices: [
                { text: 'Feel your heart ache for the fox and say, "This isn\'t right. These animals deserve their home back."', marker: 'motivation' },
                { text: 'Look up facts about how other forests have been replanted successfully.', marker: 'belief' },
                { text: 'Write down a list of steps to help the fox.', marker: 'plans' },
                { text: 'Start picking up trash from the ground.', marker: 'agency' }
            ],
            correct: 'That feeling in your heart — that ache, that "this isn\'t right" — is Motivation for Change. It\'s the spark that starts everything. Without feeling strongly, we\'d never want to act.',
            wrong: 'That\'s a good idea, but in this cave, the most important thing is to FEEL something first. Before we plan or act, we need that spark — the feeling that something needs to change.'
        },
        {
            location: '✨ Crystal Falls',
            marker: 'belief',
            scene: 'You follow a stream to a beautiful waterfall made of shimmering crystal-blue water. Behind the falls, you discover a hidden garden where trees are growing tall and strong. A sign reads: "This forest was planted by children ten years ago. It was once a bare, empty field."',
            prompt: 'The sign gives you a warm feeling. What matters most here?',
            choices: [
                { text: 'Feel upset that the field was ever bare in the first place.', marker: 'motivation' },
                { text: 'Realize that if those kids could grow a whole forest, maybe you can too! Change really IS possible.', marker: 'belief' },
                { text: 'Draw a blueprint for planting your own garden.', marker: 'plans' },
                { text: 'Start digging holes to plant new trees.', marker: 'agency' }
            ],
            correct: 'That\'s Belief that Change is Possible! Seeing proof that kids like you have already made a difference gives you confidence that YOU can do it too. Belief keeps hope alive.',
            wrong: 'Good thinking! But this special place is showing you something important — PROOF that change works. The most powerful thing here is believing that if they did it, you can too.'
        },
        {
            location: '🗺️ Blueprint Summit',
            marker: 'plans',
            scene: 'You climb to the top of a mountain where an old treehouse serves as a planning station. Inside, there\'s a big table with maps, markers, and charts. A wise owl perches nearby and says, "Having a dream is wonderful. But dreams need a roadmap to come true."',
            prompt: 'The owl is right — you need a plan! What\'s the best next step?',
            choices: [
                { text: 'Tell the owl how angry you are about deforestation.', marker: 'motivation' },
                { text: 'Tell the owl you believe things can get better.', marker: 'belief' },
                { text: 'Use the maps and markers to create a step-by-step plan: Week 1 — gather seeds, Week 2 — prepare the soil, Week 3 — plant!', marker: 'plans' },
                { text: 'Jump out the window and start planting immediately.', marker: 'agency' }
            ],
            correct: 'That\'s a Plan for a Path Forward! Step-by-step plans turn hope into something real. With a clear roadmap, you know exactly what to do and when.',
            wrong: 'Great energy! But the owl\'s wisdom is about PLANNING. Before you leap into action, you need a clear roadmap — specific steps that will guide your work.'
        },
        {
            location: '💪 Action Valley',
            marker: 'agency',
            scene: 'You descend into a green valley buzzing with activity. Other kids are here — planting trees, building bird houses, and testing water from the stream. A girl runs up to you holding a seedling. "We\'ve been waiting for you! We have one last tree to plant to complete the forest corridor."',
            prompt: 'The seedling is in your hands. What matters most right now?',
            choices: [
                { text: 'Think about how sad it is that we need to replant forests.', marker: 'motivation' },
                { text: 'Look at how well the other planted trees are growing.', marker: 'belief' },
                { text: 'Review the planting instructions one more time.', marker: 'plans' },
                { text: 'Dig a hole, place the seedling, pack the soil, and water it. The forest corridor is complete!', marker: 'agency' }
            ],
            correct: 'That\'s Agency — Taking Action! You didn\'t just feel, believe, or plan. You DID it. You put the seedling in the ground and completed the corridor. That\'s the power of action!',
            wrong: 'All of those matter, but right now, with a seedling in your hands and friends waiting — it\'s time to ACT. Agency means actually doing the thing, not just thinking about it.'
        }
    ],
    middle: [
        {
            location: '🔥 Ember Cave',
            marker: 'motivation',
            scene: 'You enter a cavern deep beneath an old-growth forest. Projected on the walls are images: a river choked with algae, a coral reef bleached white, a glacier retreating year by year. The air feels heavy. A monitor shows local data — your town\'s air quality has dropped 30% in five years.',
            prompt: 'The data is real. It\'s YOUR town. What do you feel?',
            choices: [
                { text: 'A surge of frustration and urgency — "We can\'t just let this happen. Someone needs to do something, and it might as well be us."', marker: 'motivation' },
                { text: 'Recall that a nearby city turned their air quality around with a green initiative.', marker: 'belief' },
                { text: 'Start sketching out a proposal to present to the city council.', marker: 'plans' },
                { text: 'Walk outside and plant a tree right now.', marker: 'agency' }
            ],
            correct: 'That frustration, that urgency — that\'s Motivation for Change. It\'s the emotional response that makes you care enough to want to act. Without it, the data is just numbers.',
            wrong: 'That\'s a valid response, but in this moment, the most important thing happening is the FEELING. Motivation is the emotional spark — frustration, urgency, grief — that makes you care enough to start.'
        },
        {
            location: '✨ Crystal Falls',
            marker: 'belief',
            scene: 'Behind the waterfall, a research station is carved into the rock. Screens display case studies from around the world: a river in South Korea restored from a concrete highway, a community forest in India grown from nothing, a reef in Australia beginning to recover through human intervention. Each with hard data.',
            prompt: 'The evidence is overwhelming. What\'s the most important takeaway?',
            choices: [
                { text: 'Feel angry that we let things get so bad in the first place.', marker: 'motivation' },
                { text: 'These success stories prove that environmental recovery is scientifically possible — if these communities did it, so can ours.', marker: 'belief' },
                { text: 'Begin outlining which approach would work best for your community.', marker: 'plans' },
                { text: 'Start replicating what the Korean project did.', marker: 'agency' }
            ],
            correct: 'That\'s Belief that Change is Possible — grounded in evidence. These aren\'t empty promises; they\'re proven results. Belief backed by data is what transforms hope from wishful thinking into a realistic foundation for action.',
            wrong: 'Good instinct, but what this research station is really offering you is EVIDENCE. Belief in the HOPE Framework means seeing proof that change actually works — and trusting that it can work for you too.'
        },
        {
            location: '🗺️ Blueprint Summit',
            marker: 'plans',
            scene: 'At the summit, a command center overlooks the entire valley. Digital planning tools display resource inventories, volunteer databases, and timeline generators. An environmental engineer says, "Hope without a plan is just a wish. Let\'s build your roadmap."',
            prompt: 'You have the tools and the expertise. What comes next?',
            choices: [
                { text: 'Share how worried you are about the deadline.', marker: 'motivation' },
                { text: 'Point to the evidence that this approach will work.', marker: 'belief' },
                { text: 'Design a three-phase plan: Phase 1 — assess and recruit. Phase 2 — implement with weekly checkpoints. Phase 3 — monitor and adjust.', marker: 'plans' },
                { text: 'Grab supplies and head into the valley immediately.', marker: 'agency' }
            ],
            correct: 'That\'s a Plan for a Path Forward — structured, phased, and measurable. Plans bridge the gap between believing change is possible and actually making it happen. The specificity is what makes it actionable.',
            wrong: 'All of those play a role, but the engineer is asking you to PLAN. In the HOPE Framework, a plan means specific, structured steps with timelines, checkpoints, and accountability.'
        },
        {
            location: '💪 Action Valley',
            marker: 'agency',
            scene: 'In the valley, the plan is in motion. Teams are deployed, supplies are ready, and the community has gathered. Your team leader hands you the water quality testing kit and says, "The first samples are crucial — they\'ll be our baseline for measuring progress. It\'s time."',
            prompt: 'Everything is aligned. What defines this moment?',
            choices: [
                { text: 'Reflect on the emotional journey that brought you here.', marker: 'motivation' },
                { text: 'Feel confident because you know the science supports this approach.', marker: 'belief' },
                { text: 'Double-check the testing protocol one more time.', marker: 'plans' },
                { text: 'Wade into the creek, collect the first water sample, log the data, and begin. Months later, the results show a 40% improvement.', marker: 'agency' }
            ],
            correct: 'That\'s Agency to Take Action — the culmination of the HOPE Framework. You didn\'t just feel, believe, and plan. You actually DID it, and the results are measurable. Agency is where hope becomes reality.',
            wrong: 'Those all matter, but this moment is about DOING. Agency is the step where everything converges into real action with measurable impact. It\'s the most powerful marker.'
        }
    ],
    high: [
        {
            location: '🔥 Ember Cave',
            marker: 'motivation',
            scene: 'The cave walls display real-time global dashboards: atmospheric CO₂ at 427 ppm, ocean acidification rates increasing, and a scrolling feed of IPCC findings. A recording plays testimonies from Pacific Island communities facing displacement due to sea level rise. The emotional weight of the data is palpable.',
            prompt: 'The convergence of data and human testimony creates a profound response. What is its primary function?',
            choices: [
                { text: 'It generates the affective catalyst — eco-grief, moral distress, and urgency — that transforms passive awareness into active desire for change.', marker: 'motivation' },
                { text: 'It provides empirical evidence that intervention strategies are viable.', marker: 'belief' },
                { text: 'It suggests a framework for systematic response.', marker: 'plans' },
                { text: 'It demonstrates completed remediation efforts.', marker: 'agency' }
            ],
            correct: 'Precisely. The affective response — eco-grief and moral distress — is the catalyst for Motivation. Hope theory positions emotional engagement as the necessary precondition for goal-directed behavior. Without feeling the weight of the problem, agency remains dormant.',
            wrong: 'Consider the primary function of emotional testimony paired with alarming data. In hope theory, Motivation represents the affective catalyst — the emotional response that transforms awareness into desire for change.'
        },
        {
            location: '✨ Crystal Falls',
            marker: 'belief',
            scene: 'The research station archives decades of longitudinal environmental data. A meta-analysis demonstrates that community-led interventions achieve 2.3x greater biodiversity recovery than top-down mandates. Case studies from Costa Rica\'s reforestation, Rwanda\'s mountain gorilla recovery, and Denmark\'s wind energy transition are presented with full methodology.',
            prompt: 'This evidence base serves a specific function in hope theory. What is it?',
            choices: [
                { text: 'It intensifies the emotional urgency of the crisis.', marker: 'motivation' },
                { text: 'It establishes warranted optimism — evidence-based confidence that systemic change is achievable through demonstrated precedent and replicated outcomes.', marker: 'belief' },
                { text: 'It provides a template for operational planning.', marker: 'plans' },
                { text: 'It documents completed interventions.', marker: 'agency' }
            ],
            correct: 'Correct. In Snyder\'s hope theory, Belief corresponds to the cognitive appraisal that goals are achievable. This isn\'t naive optimism — it\'s warranted confidence grounded in peer-reviewed evidence, demonstrated precedent, and replicable methodology.',
            wrong: 'This evidence base primarily serves the cognitive function of establishing Belief — warranted optimism grounded in demonstrated precedent. It shows not just that change happened, but that it\'s replicable and measurable.'
        },
        {
            location: '🗺️ Blueprint Summit',
            marker: 'plans',
            scene: 'The systems modeling suite generates scenario projections based on variable inputs. You can model interventions against baseline trajectories, accounting for resource constraints, political feasibility, and ecological timelines. The interface prompts: "Define your theory of change."',
            prompt: 'The modeling tools enable a critical cognitive process in hope theory. What is it?',
            choices: [
                { text: 'Emotional processing of environmental loss.', marker: 'motivation' },
                { text: 'Validation that the proposed approach has precedent.', marker: 'belief' },
                { text: 'Pathways thinking — the generation of structured, contingent routes to defined goals, with built-in feedback mechanisms and adaptive capacity.', marker: 'plans' },
                { text: 'Direct implementation of remediation strategies.', marker: 'agency' }
            ],
            correct: 'Pathways thinking is the cognitive engine of hope. It\'s not merely listing steps — it\'s generating multiple contingent routes, modeling constraints, and building adaptive capacity. This is what distinguishes hope from wishful thinking: the ability to identify and navigate pathways to goals.',
            wrong: 'The modeling suite\'s primary function is pathways thinking — the cognitive process of generating structured routes to goals. In hope theory, this is the bridge between motivation/belief and agency.'
        },
        {
            location: '💪 Action Valley',
            marker: 'agency',
            scene: 'The intervention is underway. Your team publishes baseline data, implements phase one of the restoration protocol, and presents preliminary findings to the municipal environmental commission. The commission allocates emergency funding. Six months later, biomarker analysis shows measurable ecosystem recovery.',
            prompt: 'This sequence represents the culmination of the HOPE Framework. What marker does it demonstrate?',
            choices: [
                { text: 'The emotional catalyst that initiated the project.', marker: 'motivation' },
                { text: 'The evidence base that justified the approach.', marker: 'belief' },
                { text: 'The strategic framework that guided implementation.', marker: 'plans' },
                { text: 'Agentic action — the self-directed exercise of capability that produces measurable systemic change, demonstrating that individual and collective agency can translate intention into impact.', marker: 'agency' }
            ],
            correct: 'Agency represents the full realization of hope as a lived practice. The HOPE Framework\'s power lies in this progression: from affective response to evidence-based confidence to structured pathways to measurable action. Hope is not passive — it is something you DO.',
            wrong: 'This sequence demonstrates Agency — agentic thinking in its fullest expression. It\'s the moment where all three prior markers converge into action with measurable, systemic outcomes.'
        }
    ]
};

let questStage = 0;
let questChoiceMade = false;

function initQuest() {
    questStage = 0;
    questChoiceMade = false;

    // Reset map
    for (let i = 0; i < 4; i++) {
        document.getElementById(`quest-node-${i}`).className = 'quest-node';
        if (i < 3) document.getElementById(`quest-path-${i}`).className = 'quest-path';
        document.getElementById(`frag-${i}`).className = 'quest-fragment dimmed';
    }

    document.getElementById('quest-victory').classList.add('hidden');
    document.getElementById('quest-scene').style.display = '';

    renderQuestStage();
}

function renderQuestStage() {
    const scenario = questScenarios[currentAge][questStage];
    questChoiceMade = false;

    // Update map
    for (let i = 0; i < 4; i++) {
        const node = document.getElementById(`quest-node-${i}`);
        node.classList.remove('active', 'completed');
        if (i < questStage) node.classList.add('completed');
        if (i === questStage) node.classList.add('active');

        if (i < 3) {
            const path = document.getElementById(`quest-path-${i}`);
            path.classList.toggle('lit', i < questStage);
        }
    }

    // Location
    document.getElementById('quest-location').innerHTML = scenario.location;

    // ASCII Art
    const art = getQuestArt(scenario.location);

    // Narrative with ASCII art
    document.getElementById('quest-narrative').innerHTML = `
        <pre class="quest-ascii-art">${art}</pre>
        <div class="scene-text quest-typewriter" id="quest-scene-text">${scenario.scene}</div>
        <div class="scene-prompt quest-typewriter" id="quest-scene-prompt">${scenario.prompt}</div>
    `;

    // Play enter sound and typewriter
    questSFX.enter();
    setTimeout(() => questSFX.type(scenario.scene.length), 400);

    // Shuffle choices
    const letters = ['A', 'B', 'C', 'D'];
    const shuffled = [...scenario.choices];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    document.getElementById('quest-choices').innerHTML = shuffled.map((c, i) => `
        <button class="quest-choice" data-marker="${c.marker}">
            <span class="quest-choice-letter">${letters[i]}</span>
            <span>${escapeHtml(c.text)}</span>
        </button>
    `).join('');

    document.getElementById('quest-result').classList.add('hidden');
    document.getElementById('quest-result').className = 'quest-result hidden';

    // Wire choices
    document.querySelectorAll('.quest-choice').forEach(btn => {
        btn.addEventListener('click', () => handleQuestChoice(btn, scenario));
        btn.addEventListener('mouseenter', () => questSFX.hover());
    });
}

function handleQuestChoice(btn, scenario) {
    if (questChoiceMade) return;
    const chosen = btn.dataset.marker;
    const resultEl = document.getElementById('quest-result');

    if (chosen === scenario.marker) {
        questChoiceMade = true;
        questSFX.correct();

        // Mark correct
        btn.classList.add('correct');
        document.querySelectorAll('.quest-choice').forEach(b => {
            if (b !== btn) b.classList.add('dimmed-choice');
        });

        // Collect fragment
        const frag = document.getElementById(`frag-${questStage}`);
        frag.classList.remove('dimmed');
        frag.classList.add('collected');
        questSFX.fragment();

        // Result
        resultEl.className = 'quest-result success';
        resultEl.innerHTML = `
            <div class="quest-result-title">✅ Hope Fragment collected!</div>
            <p>${scenario.correct}</p>
        `;
        resultEl.classList.remove('hidden');

        // Auto-advance after a delay
        const advanceDelay = setTimeout(() => advanceQuest(), 4000);

        // Also allow clicking to skip the wait
        resultEl.insertAdjacentHTML('beforeend', `
            <div class="quest-continue">
                <button class="btn btn-primary btn-small" id="btn-quest-next">
                    ${questStage < 3 ? 'Continue →' : 'See Results →'}
                </button>
            </div>
        `);
        document.getElementById('btn-quest-next').addEventListener('click', () => {
            clearTimeout(advanceDelay);
            advanceQuest();
        });
    } else {
        // Wrong
        questSFX.wrong();
        btn.classList.add('wrong');
        resultEl.className = 'quest-result fail';
        resultEl.innerHTML = `<div class="quest-result-title">Not quite...</div><p>${scenario.wrong}</p>`;
        resultEl.classList.remove('hidden');

        setTimeout(() => {
            btn.classList.remove('wrong');
            resultEl.classList.add('hidden');
        }, 2500);
    }
}

function advanceQuest() {
    questStage++;
    if (questStage >= 4) {
        showQuestVictory();
    } else {
        renderQuestStage();
    }
}

function showQuestVictory() {
    document.getElementById('quest-scene').style.display = 'none';

    // Complete all map nodes
    for (let i = 0; i < 4; i++) {
        document.getElementById(`quest-node-${i}`).className = 'quest-node completed';
        if (i < 3) document.getElementById(`quest-path-${i}`).className = 'quest-path lit';
    }

    const msgs = {
        elementary: 'You journeyed through all four lands and collected every Hope Fragment! You learned that hope starts with a feeling, grows with belief, gets a plan, and becomes real through action. You\'re a true Hope Hero! 🌟',
        middle: 'You\'ve completed the quest and collected all four Hope Fragments. Each one taught you a different way hope shows up in stories about the environment — from the spark of motivation to the power of taking action.',
        high: 'Quest complete. You\'ve engaged with all four markers of the HOPE Framework through narrative analysis. The progression from affective catalyst to agentic action mirrors hope theory\'s model of goal-directed behavior — a framework you can now apply to any environmental narrative.'
    };

    document.getElementById('quest-victory-msg').textContent = msgs[currentAge];
    document.getElementById('quest-victory').classList.remove('hidden');
    questSFX.victory();
    triggerCelebration();
}

// Navigation
document.getElementById('btn-quest').addEventListener('click', () => {
    initQuest();
    showScreen('quest-screen');
});
document.getElementById('btn-back-quest').addEventListener('click', () => {
    showScreen('welcome-screen');
});
document.getElementById('btn-quest-restart').addEventListener('click', () => {
    initQuest();
});
document.getElementById('btn-quest-home').addEventListener('click', () => {
    showScreen('welcome-screen');
});


// ===== Glossary =====

const glossaryData = {
    elementary: [
        { marker: 'motivation', icon: '🔥', title: 'Motivation for Change',
          def: 'A strong feeling that something is wrong and needs to change. It\'s the spark inside you that says "this isn\'t right!"',
          example: '"We HAVE to help the animals!" said Mia, feeling sad about the polluted pond.',
          keywords: ['feeling', 'upset', 'want change', 'something is wrong', 'we have to', 'I wish'] },
        { marker: 'belief', icon: '✨', title: 'Belief that Change is Possible',
          def: 'Seeing proof or evidence that things CAN get better. When you know that change has worked before, you believe it can work again!',
          example: 'Last year, kids in another town cleaned up their river and the fish came back!',
          keywords: ['proof', 'evidence', 'it worked', 'we can do it', 'possible', 'success'] },
        { marker: 'plans', icon: '🗺️', title: 'Plans for a Path Forward',
          def: 'Having real steps and ideas for HOW to make things better. Not just wishing — but knowing exactly what to do!',
          example: 'Step 1: research. Step 2: talk to the mayor. Step 3: plant trees.',
          keywords: ['step 1', 'plan', 'list', 'strategy', 'timeline', 'goal'] },
        { marker: 'agency', icon: '💪', title: 'Agency to Take Action',
          def: 'Actually DOING something — not just thinking or talking about it. Rolling up your sleeves and making change happen!',
          example: 'The students planted 200 native plants along the creek bank.',
          keywords: ['did it', 'planted', 'built', 'organized', 'created', 'results'] },
    ],
    middle: [
        { marker: 'motivation', icon: '🔥', title: 'Motivation for Change',
          def: 'The emotional response that makes someone want things to be different. Frustration, sadness, or urgency about an environmental problem.',
          example: '"We can\'t just sit here while the creek gets worse every year," said Amara, her voice shaking.',
          keywords: ['frustration', 'urgency', 'eco-grief', 'something has to change', 'desire', 'ache'] },
        { marker: 'belief', icon: '✨', title: 'Belief that Change is Possible',
          def: 'Evidence or confidence that environmental problems can be solved. Seeing that others have succeeded gives hope that you can too.',
          example: 'Mr. Chen showed them data from a city where students had successfully restored a wetland.',
          keywords: ['evidence', 'data', 'success story', 'confidence', 'proved', 'if they could'] },
        { marker: 'plans', icon: '🗺️', title: 'Plans for a Path Forward',
          def: 'Concrete strategies, timelines, and organized steps for making change happen. The roadmap between hope and action.',
          example: 'They created a timeline and assigned roles for the rain garden proposal.',
          keywords: ['timeline', 'strategy', 'proposal', 'assign roles', 'steps', 'phases'] },
        { marker: 'agency', icon: '💪', title: 'Agency to Take Action',
          def: 'Moving from thinking and planning to actually doing. Taking real action that creates measurable change in the world.',
          example: 'Over the next two months, the students planted 200 native plants along the creek bank.',
          keywords: ['took action', 'planted', 'presented', 'organized', 'improved', 'measurable'] },
    ],
    high: [
        { marker: 'motivation', icon: '🔥', title: 'Motivation for Change',
          def: 'The affective catalyst in hope theory — eco-grief, moral distress, or emotional engagement with environmental conditions that generates the desire for change.',
          example: 'The community\'s frustration grew as reports revealed a 60% decline in local biodiversity.',
          keywords: ['affective catalyst', 'eco-grief', 'moral distress', 'urgency', 'emotional engagement'] },
        { marker: 'belief', icon: '✨', title: 'Belief that Change is Possible',
          def: 'Warranted optimism grounded in evidence — the cognitive appraisal that goals are achievable based on demonstrated precedent and replicated outcomes.',
          example: 'Peer-reviewed studies demonstrated that targeted interventions could reverse habitat degradation within five years.',
          keywords: ['warranted optimism', 'evidence-based', 'efficacy', 'precedent', 'replicable'] },
        { marker: 'plans', icon: '🗺️', title: 'Plans for a Path Forward',
          def: 'Pathways thinking — the cognitive process of generating structured, contingent routes to goals with built-in feedback mechanisms and adaptive capacity.',
          example: 'The coalition outlined a three-phase restoration plan with monitoring protocols and partnerships.',
          keywords: ['pathways thinking', 'theory of change', 'contingent routes', 'adaptive capacity', 'structured'] },
        { marker: 'agency', icon: '💪', title: 'Agency to Take Action',
          def: 'Agentic thinking and action — self-directed exercise of capability that produces measurable systemic change, translating intention into demonstrable impact.',
          example: 'After 18 months of volunteer-led planting, water quality metrics improved by 40%.',
          keywords: ['agentic action', 'self-efficacy', 'measurable impact', 'systemic change', 'demonstrated'] },
    ]
};

function renderGlossary() {
    const data = glossaryData[currentAge];
    document.getElementById('glossary-content').innerHTML = data.map(g => `
        <div class="glossary-card" data-marker="${g.marker}">
            <div class="glossary-card-header">
                <span class="glossary-card-icon">${g.icon}</span>
                <span class="glossary-card-title">${g.title}</span>
            </div>
            <div class="glossary-card-def">${g.def}</div>
            <div class="glossary-card-example">"${escapeHtml(g.example)}"</div>
            <div class="glossary-card-keywords">
                ${g.keywords.map(k => `<span class="glossary-keyword">${escapeHtml(k)}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

document.getElementById('btn-glossary').addEventListener('click', () => {
    renderGlossary();
    document.getElementById('glossary-drawer').classList.remove('hidden');
});
document.getElementById('btn-close-glossary').addEventListener('click', () => {
    document.getElementById('glossary-drawer').classList.add('hidden');
});


// ===== Edit Toggle =====
let editMode = false;
document.getElementById('btn-edit-text').addEventListener('click', () => {
    editMode = !editMode;
    const tc = document.getElementById('text-content');
    tc.contentEditable = editMode;
    document.getElementById('btn-edit-text').textContent = editMode ? '✅ Done Editing' : '✏️ Edit';
    tc.style.outline = editMode ? '2px dashed var(--color-primary)' : 'none';
    if (editMode) tc.focus();
});


// ===== Searchable Dropdown Component =====
function initSearchableSelect(inputId, hiddenId, dropdownId, options) {
    const input = document.getElementById(inputId);
    const hidden = document.getElementById(hiddenId);
    const dropdown = document.getElementById(dropdownId);
    let highlighted = -1;
    let flatOptions = [];

    function render(filter) {
        flatOptions = [];
        let html = '';
        const q = (filter || '').toLowerCase();
        let hasResults = false;

        options.forEach(group => {
            const filtered = group.items.filter(item =>
                item.label.toLowerCase().includes(q) || (group.group && group.group.toLowerCase().includes(q))
            );
            if (filtered.length === 0) return;
            hasResults = true;
            if (group.group) {
                html += `<div class="searchable-group-label">${escapeHtml(group.group)}</div>`;
            }
            filtered.forEach(item => {
                const idx = flatOptions.length;
                const sel = item.value === hidden.value ? ' selected' : '';
                html += `<div class="searchable-option${sel}" data-value="${escapeHtml(item.value)}" data-idx="${idx}">${escapeHtml(item.label)}</div>`;
                flatOptions.push(item);
            });
        });

        if (!hasResults) {
            html = '<div class="searchable-no-results">No results found</div>';
        }
        dropdown.innerHTML = html;
        highlighted = -1;
    }

    function open() {
        render(input.value);
        dropdown.classList.add('open');
    }

    function close() {
        dropdown.classList.remove('open');
        highlighted = -1;
    }

    function selectItem(value, label) {
        hidden.value = value;
        input.value = label;
        close();
    }

    input.addEventListener('focus', () => {
        input.select();
        open();
    });

    input.addEventListener('input', () => {
        render(input.value);
        dropdown.classList.add('open');
    });

    input.addEventListener('keydown', (e) => {
        const opts = dropdown.querySelectorAll('.searchable-option');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlighted = Math.min(highlighted + 1, opts.length - 1);
            opts.forEach((o, i) => o.classList.toggle('highlighted', i === highlighted));
            if (opts[highlighted]) opts[highlighted].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlighted = Math.max(highlighted - 1, 0);
            opts.forEach((o, i) => o.classList.toggle('highlighted', i === highlighted));
            if (opts[highlighted]) opts[highlighted].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlighted >= 0 && flatOptions[highlighted]) {
                selectItem(flatOptions[highlighted].value, flatOptions[highlighted].label);
            }
        } else if (e.key === 'Escape') {
            close();
            input.blur();
        }
    });

    dropdown.addEventListener('click', (e) => {
        const opt = e.target.closest('.searchable-option');
        if (opt) {
            const idx = parseInt(opt.dataset.idx);
            if (flatOptions[idx]) {
                selectItem(flatOptions[idx].value, flatOptions[idx].label);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#' + inputId) && !e.target.closest('#' + dropdownId)) {
            close();
        }
    });

    // Set initial display text
    if (hidden.value) {
        const found = options.flatMap(g => g.items).find(i => i.value === hidden.value);
        if (found) input.value = found.label;
    }

    return { render, selectItem, setOptions: (newOpts) => { options = newOpts; } };
}

// ===== Read Aloud =====
let readAloudUtterance = null;
let availableVoices = [];
let voiceSearchable = null;

function populateVoicePicker() {
    availableVoices = window.speechSynthesis.getVoices();
    if (!availableVoices.length) return;

    const english = availableVoices.filter(v => v.lang.startsWith('en'));
    const other = availableVoices.filter(v => !v.lang.startsWith('en'));

    const groups = [];

    if (english.length) {
        groups.push({
            group: 'English',
            items: english.map(v => ({
                value: v.name,
                label: v.name.replace(/Microsoft |Google |Apple /g, '') + (v.default ? ' (default)' : '')
            }))
        });
    }

    if (other.length) {
        const langGroups = {};
        other.forEach(v => {
            const langName = v.lang;
            if (!langGroups[langName]) langGroups[langName] = [];
            langGroups[langName].push(v);
        });
        Object.keys(langGroups).sort().forEach(lang => {
            groups.push({
                group: lang,
                items: langGroups[lang].map(v => ({
                    value: v.name,
                    label: v.name.replace(/Microsoft |Google |Apple /g, '')
                }))
            });
        });
    }

    if (voiceSearchable) {
        voiceSearchable.setOptions(groups);
    } else {
        voiceSearchable = initSearchableSelect('voice-search', 'voice-picker-value', 'voice-dropdown', groups);
    }

    // Select default voice
    const defaultVoice = availableVoices.find(v => v.default);
    if (defaultVoice && !document.getElementById('voice-picker-value').value) {
        const label = defaultVoice.name.replace(/Microsoft |Google |Apple /g, '') + ' (default)';
        voiceSearchable.selectItem(defaultVoice.name, label);
    }
}

// Voices load async in some browsers
if ('speechSynthesis' in window) {
    populateVoicePicker();
    window.speechSynthesis.onvoiceschanged = populateVoicePicker;
}

// Init translate searchable dropdown
const translateOptions = [
    { group: '', items: [
        { value: '', label: 'Original (English)' }
    ]},
    { group: 'Languages', items: [
        { value: 'es', label: 'Español (Spanish)' },
        { value: 'fr', label: 'Français (French)' },
        { value: 'de', label: 'Deutsch (German)' },
        { value: 'pt', label: 'Português (Portuguese)' },
        { value: 'zh', label: '中文 (Chinese)' },
        { value: 'ar', label: 'العربية (Arabic)' },
        { value: 'vi', label: 'Tiếng Việt (Vietnamese)' },
        { value: 'ko', label: '한국어 (Korean)' },
        { value: 'ja', label: '日本語 (Japanese)' },
        { value: 'hi', label: 'हिन्दी (Hindi)' },
        { value: 'tl', label: 'Filipino (Tagalog)' },
        { value: 'sw', label: 'Kiswahili (Swahili)' },
        { value: 'ru', label: 'Русский (Russian)' },
        { value: 'uk', label: 'Українська (Ukrainian)' },
        { value: 'it', label: 'Italiano (Italian)' },
        { value: 'pl', label: 'Polski (Polish)' },
        { value: 'tr', label: 'Türkçe (Turkish)' },
        { value: 'th', label: 'ไทย (Thai)' },
        { value: 'id', label: 'Bahasa Indonesia' },
        { value: 'ms', label: 'Bahasa Melayu (Malay)' },
        { value: 'bn', label: 'বাংলা (Bengali)' },
        { value: 'am', label: 'አማርኛ (Amharic)' },
        { value: 'so', label: 'Soomaali (Somali)' },
        { value: 'ha', label: 'Hausa' },
    ]}
];
initSearchableSelect('translate-search', 'translate-lang', 'translate-dropdown', translateOptions);

function getSelectedVoice() {
    const pickerValue = document.getElementById('voice-picker-value').value;
    return availableVoices.find(v => v.name === pickerValue) || null;
}

document.getElementById('btn-read-aloud').addEventListener('click', () => {
    // Read from whichever panel is visible — guided text or activity text
    const guidedEl = document.getElementById('guided-text');
    const activityEl = document.getElementById('text-content');
    const guidedScreen = document.getElementById('guided-screen');
    const tc = guidedScreen.classList.contains('active') ? guidedEl : activityEl;

    const text = tc.innerText.trim();
    if (!text) {
        showToast('Load a story first');
        return;
    }

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        readAloudUtterance = new SpeechSynthesisUtterance(text);
        readAloudUtterance.rate = 0.9;

        const voice = getSelectedVoice();
        if (voice) {
            readAloudUtterance.voice = voice;
            readAloudUtterance.lang = voice.lang;
        }

        document.getElementById('btn-read-aloud').style.display = 'none';
        document.getElementById('btn-stop-reading').style.display = '';

        readAloudUtterance.onboundary = (e) => {
            if (e.name === 'word') {
                tc.querySelectorAll('.reading-word').forEach(el => {
                    const parent = el.parentNode;
                    parent.replaceChild(document.createTextNode(el.textContent), el);
                    parent.normalize();
                });
            }
        };

        readAloudUtterance.onend = () => {
            tc.querySelectorAll('.reading-word').forEach(el => {
                const parent = el.parentNode;
                parent.replaceChild(document.createTextNode(el.textContent), el);
                parent.normalize();
            });
            document.getElementById('btn-read-aloud').style.display = '';
            document.getElementById('btn-stop-reading').style.display = 'none';
        };

        window.speechSynthesis.speak(readAloudUtterance);
    } else {
        showToast('Read aloud is not supported in this browser');
    }
});

document.getElementById('btn-stop-reading').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    const tc = document.getElementById('text-content');
    tc.querySelectorAll('.reading-word').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    document.getElementById('btn-read-aloud').style.display = '';
    document.getElementById('btn-stop-reading').style.display = 'none';
});


// ===== Drag-and-Drop Margin Markers =====

document.querySelectorAll('.drag-symbol').forEach(sym => {
    sym.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('marker', sym.dataset.marker);
        e.dataTransfer.effectAllowed = 'copy';
    });
});

// Make paragraphs in text-content drop targets
document.getElementById('text-content').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    const p = e.target.closest('p');
    if (p) p.classList.add('drop-hover');
});

document.getElementById('text-content').addEventListener('dragleave', (e) => {
    const p = e.target.closest('p');
    if (p) p.classList.remove('drop-hover');
});

document.getElementById('text-content').addEventListener('drop', (e) => {
    e.preventDefault();
    const marker = e.dataTransfer.getData('marker');
    const p = e.target.closest('p');
    if (!p || !marker) return;
    p.classList.remove('drop-hover');

    // Check if already has this marker
    const existing = p.querySelector(`.margin-marker[data-marker="${marker}"]`);
    if (existing) return;

    // SVG templates
    const svgs = {
        motivation: '<svg viewBox="0 0 24 24" class="marker-svg"><path d="M12 2C8 2 6 6 6 10c0 3 2 5 3 7h6c1-2 3-4 3-7 0-4-2-8-6-8z" fill="currentColor"/><rect x="9" y="19" width="6" height="2" rx="1" fill="currentColor"/></svg>',
        belief: '<svg viewBox="0 0 24 24" class="marker-svg"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="currentColor"/></svg>',
        plans: '<svg viewBox="0 0 24 24" class="marker-svg"><path d="M3 3h18v18H3V3zm2 4h14M5 11h14M5 15h10" stroke="currentColor" fill="none" stroke-width="1.5"/><rect x="5" y="7" width="14" height="0.5" fill="currentColor"/><rect x="5" y="11" width="14" height="0.5" fill="currentColor"/><rect x="5" y="15" width="10" height="0.5" fill="currentColor"/></svg>',
        agency: '<svg viewBox="0 0 24 24" class="marker-svg"><path d="M12 2L2 12h5v8h10v-8h5L12 2z" fill="currentColor"/></svg>'
    };

    // Count existing margin markers on this paragraph to offset vertically
    const existingMarkers = p.querySelectorAll('.margin-marker');
    const offset = existingMarkers.length * 26;

    const markerEl = document.createElement('div');
    markerEl.className = 'margin-marker';
    markerEl.dataset.marker = marker;
    markerEl.innerHTML = svgs[marker];
    markerEl.style.top = offset + 'px';
    markerEl.title = `Click to remove`;

    markerEl.addEventListener('click', () => {
        markerEl.remove();
    });

    p.appendChild(markerEl);
});


// ===== Guided Example =====

const guidedStory = {
    paragraphs: [
        { text: 'The students at Riverside Middle School couldn\'t ignore it anymore. Every spring, the creek behind their school flooded with murky, polluted water. "We have to do something," said Amara, staring at the brown water pooling near the playground. She felt a deep ache thinking about the frogs and fish that used to live there.',
          highlights: [
              { start: 'We have to do something', marker: 'motivation' },
              { start: 'She felt a deep ache', marker: 'motivation' }
          ]
        },
        { text: 'Their science teacher, Mr. Chen, showed them data from a nearby city where students had successfully restored a wetland area. "If they could do it, we can too," he said. The class erupted with ideas. They had seen change happen before — the community garden downtown was once an empty lot.',
          highlights: [
              { start: 'students had successfully restored a wetland', marker: 'belief' },
              { start: 'If they could do it, we can too', marker: 'belief' }
          ]
        },
        { text: 'The class formed three teams. Team one would test water quality weekly and log the results. Team two would research native plants that filter pollutants. Team three would write a proposal to the city council asking for funding to install a rain garden. They created a timeline and assigned roles.',
          highlights: [
              { start: 'Team one would test water quality', marker: 'plans' },
              { start: 'They created a timeline and assigned roles', marker: 'plans' }
          ]
        },
        { text: 'Amara led the presentation to the city council. She brought water samples, charts, and photos. The council approved their proposal. Over the next two months, the students planted 200 native plants along the creek bank. They organized weekend volunteer days. By the end of the school year, the water quality tests showed a 40% improvement.',
          highlights: [
              { start: 'Amara led the presentation', marker: 'agency' },
              { start: 'the students planted 200 native plants', marker: 'agency' }
          ]
        }
    ],
    thoughts: {
        elementary: [
            { marker: 'motivation', icon: '🔥', text: 'See how Amara says "We HAVE to do something"? That strong feeling — that ache in her heart — is <strong>Motivation</strong>. She feels something is really wrong, and she can\'t just ignore it. That feeling is the SPARK.' },
            { marker: 'belief', icon: '✨', text: 'Mr. Chen shows them PROOF that other kids fixed a wetland! And the community garden proves change happened before. That\'s <strong>Belief</strong> — knowing it\'s not impossible because someone already did it!' },
            { marker: 'plans', icon: '🗺️', text: 'Three teams! Specific jobs! A timeline! This isn\'t just wishing — they have a real <strong>Plan</strong> with steps. Each team knows exactly what to do.' },
            { marker: 'agency', icon: '💪', text: 'They DID it! Amara presented, the council said yes, and they planted 200 plants. The water is 40% cleaner! That\'s <strong>Agency</strong> — actually making change happen.' }
        ],
        middle: [
            { marker: 'motivation', icon: '🔥', text: 'Notice the emotional language: "couldn\'t ignore it," "have to do something," "deep ache." Amara isn\'t just aware of the problem — she FEELS it. That emotional response is <strong>Motivation for Change</strong>, the first HOPE marker.' },
            { marker: 'belief', icon: '✨', text: 'Mr. Chen doesn\'t just say "we can do this." He shows DATA from a real success story. And the community garden is local proof. This is <strong>Belief that Change is Possible</strong> — confidence backed by evidence, not empty promises.' },
            { marker: 'plans', icon: '🗺️', text: 'Look at the structure: three teams, each with a specific task. Testing, researching, proposing. A timeline. Assigned roles. This is a <strong>Plan for a Path Forward</strong> — organized, specific, and actionable.' },
            { marker: 'agency', icon: '💪', text: 'They moved from planning to DOING. Amara presented, the council approved, 200 plants went in the ground, volunteers showed up, and there\'s a measurable result: 40% improvement. This is <strong>Agency to Take Action</strong>.' }
        ],
        high: [
            { marker: 'motivation', icon: '🔥', text: 'The affective indicators are clear: "couldn\'t ignore," "have to," "deep ache." The text positions eco-grief as the catalyst — Amara\'s emotional response to biodiversity loss generates the <strong>Motivation</strong> that initiates goal-directed behavior.' },
            { marker: 'belief', icon: '✨', text: 'Note how the text establishes <strong>Belief</strong> through two evidence layers: external data (the wetland restoration) and local precedent (the community garden). This isn\'t naive optimism — it\'s warranted confidence grounded in demonstrated efficacy.' },
            { marker: 'plans', icon: '🗺️', text: '<strong>Pathways thinking</strong> is evident in the organizational structure: three parallel workstreams, each targeting a different intervention point. The timeline and role assignment indicate structured goal-pursuit — the cognitive engine of hope theory.' },
            { marker: 'agency', icon: '💪', text: 'The culmination: <strong>Agency</strong> as demonstrated action with quantified outcomes. The progression from presentation → approval → implementation → measurement mirrors the full arc of agentic thinking, with the 40% metric providing empirical validation.' }
        ]
    }
};

let guidedStep = -1;
let guidedPlaying = false;
let guidedTimer = null;

function initGuided() {
    guidedStep = -1;
    guidedPlaying = false;
    clearTimeout(guidedTimer);

    // Render story with pre-placed highlights (dimmed)
    const textEl = document.getElementById('guided-text');
    textEl.innerHTML = guidedStory.paragraphs.map((para, pi) => {
        let html = escapeHtml(para.text);
        para.highlights.forEach(hl => {
            const escaped = escapeHtml(hl.start);
            html = html.replace(escaped, `<span class="guided-hl" data-marker="${hl.marker}" data-step="${pi}">${escaped}</span>`);
        });
        return `<p data-step="${pi}">${html}</p>`;
    }).join('');

    // Reset think-aloud
    const ta = document.getElementById('guided-thinkaloud');
    ta.className = 'guided-thinkaloud';
    ta.innerHTML = `
        <div class="guided-thinkaloud-header">
            <span class="guided-thinkaloud-icon">💭</span>
            <h4>Think-Aloud</h4>
        </div>
        <div class="guided-thinkaloud-body">
            <p class="guided-placeholder">Press the green button above to start.<br>I'll walk you through the story and explain each HOPE marker as we find it.</p>
        </div>`;

    // Reset controls
    document.getElementById('btn-guided-play').textContent = '▶ Start Guided Reading';
    document.getElementById('btn-guided-play').style.display = '';
    document.getElementById('btn-guided-pause').style.display = 'none';

    // Reset progress tracker
    updateGuidedProgress(-1);

    // Reset paragraph highlights
    document.querySelectorAll('.guided-text p').forEach(p => p.classList.remove('active-para'));
}

function updateGuidedProgress(step) {
    const steps = document.querySelectorAll('.guided-prog-step');
    const lines = document.querySelectorAll('.guided-prog-line');
    steps.forEach((s, i) => {
        s.classList.remove('active', 'done');
        if (i < step) s.classList.add('done');
        if (i === step) s.classList.add('active');
    });
    lines.forEach((l, i) => {
        l.classList.toggle('lit', i < step);
    });
}

function advanceGuided() {
    guidedStep++;
    if (guidedStep >= guidedStory.paragraphs.length) {
        guidedPlaying = false;
        document.getElementById('btn-guided-play').style.display = 'none';
        document.getElementById('btn-guided-pause').style.display = 'none';

        updateGuidedProgress(4); // All done

        const ta = document.getElementById('guided-thinkaloud');
        ta.className = 'guided-thinkaloud';
        ta.innerHTML = `
            <div class="guided-thinkaloud-header">
                <span class="guided-thinkaloud-icon">🌟</span>
                <h4>Complete!</h4>
            </div>
            <div class="guided-thinkaloud-body">
                <div class="guided-thought">
                    <p><strong>That's the whole story!</strong> Every paragraph showed a different HOPE marker. Together, they form a complete arc — from the emotional spark of Motivation, through the evidence of Belief, into concrete Plans, and finally into real Agency and measurable results.</p>
                </div>
            </div>`;
        triggerCelebration();
        return;
    }

    const thought = guidedStory.thoughts[currentAge][guidedStep];

    // Update progress tracker
    updateGuidedProgress(guidedStep);

    // Activate highlights for this step
    document.querySelectorAll('.guided-hl').forEach(hl => {
        hl.classList.toggle('active', parseInt(hl.dataset.step) <= guidedStep);
    });

    // Highlight active paragraph
    document.querySelectorAll('.guided-text p').forEach(p => {
        p.classList.toggle('active-para', parseInt(p.dataset.step) === guidedStep);
    });

    // Scroll paragraph into view
    const para = document.querySelector(`.guided-text p[data-step="${guidedStep}"]`);
    if (para) para.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Update think-aloud with marker-colored border
    const ta = document.getElementById('guided-thinkaloud');
    ta.className = `guided-thinkaloud marker-${thought.marker}`;
    ta.innerHTML = `
        <div class="guided-thinkaloud-header">
            <span class="guided-thinkaloud-icon">${thought.icon}</span>
            <h4>${thought.marker.charAt(0).toUpperCase() + thought.marker.slice(1)}</h4>
        </div>
        <div class="guided-thinkaloud-body">
            <div class="guided-thought">
                <p>${thought.text}</p>
            </div>
        </div>`;

    // Read aloud the thought
    if ('speechSynthesis' in window && guidedPlaying) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(ta.querySelector('.guided-thought').innerText);
        utter.rate = 0.9;
        const voice = getSelectedVoice();
        if (voice) { utter.voice = voice; utter.lang = voice.lang; }
        utter.onend = () => {
            if (guidedPlaying) {
                guidedTimer = setTimeout(advanceGuided, 1500);
            }
        };
        window.speechSynthesis.speak(utter);
    } else if (guidedPlaying) {
        guidedTimer = setTimeout(advanceGuided, 6000);
    }
}

document.getElementById('btn-guided-play').addEventListener('click', () => {
    guidedPlaying = true;
    document.getElementById('btn-guided-play').style.display = 'none';
    document.getElementById('btn-guided-pause').style.display = '';
    advanceGuided();
});

document.getElementById('btn-guided-pause').addEventListener('click', () => {
    guidedPlaying = false;
    window.speechSynthesis.cancel();
    clearTimeout(guidedTimer);
    document.getElementById('btn-guided-play').textContent = '▶ Resume';
    document.getElementById('btn-guided-play').style.display = '';
    document.getElementById('btn-guided-pause').style.display = 'none';
});

document.getElementById('btn-guided-reset').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    clearTimeout(guidedTimer);
    initGuided();
});

document.getElementById('btn-guided').addEventListener('click', () => {
    initGuided();
    showScreen('guided-screen');
});
document.getElementById('btn-back-guided').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    clearTimeout(guidedTimer);
    guidedPlaying = false;
    showScreen('welcome-screen');
});


// ===== Translation (Guided Example) =====

let originalGuidedHtml = '';

document.getElementById('btn-translate').addEventListener('click', async () => {
    const lang = document.getElementById('translate-lang').value;
    const textEl = document.getElementById('guided-text');

    // Save original for reverting
    if (!originalGuidedHtml) {
        originalGuidedHtml = textEl.innerHTML;
    }

    if (!lang) {
        // Revert to original and re-init guided walkthrough to restore highlights
        originalGuidedHtml = '';
        initGuided();
        const notice = textEl.parentNode.querySelector('.translated-notice');
        if (notice) notice.remove();
        return;
    }

    // Get plain text from each paragraph
    const pElements = Array.from(textEl.querySelectorAll('p'));
    const paragraphs = pElements.map(p => p.innerText.trim()).filter(t => t.length > 0);

    const btn = document.getElementById('btn-translate');
    const origBtnText = btn.textContent;
    btn.textContent = 'Translating...';
    btn.disabled = true;

    try {
        // Translate each paragraph individually to stay within API limits
        const translated = [];
        for (let i = 0; i < paragraphs.length; i++) {
            const text = paragraphs[i];
            btn.textContent = `Translating ${i + 1}/${paragraphs.length}...`;

            // MyMemory API has a ~500 char limit per request
            // Split long paragraphs into sentences and translate in chunks
            let result = '';
            if (text.length <= 450) {
                result = await translateChunk(text, lang);
            } else {
                // Split on sentence boundaries
                const sentences = text.match(/[^.!?]+[.!?]+\s*/g) || [text];
                let chunk = '';
                const chunks = [];
                for (const s of sentences) {
                    if ((chunk + s).length > 450) {
                        if (chunk) chunks.push(chunk.trim());
                        chunk = s;
                    } else {
                        chunk += s;
                    }
                }
                if (chunk) chunks.push(chunk.trim());

                const translatedChunks = [];
                for (const c of chunks) {
                    translatedChunks.push(await translateChunk(c, lang));
                }
                result = translatedChunks.join(' ');
            }
            translated.push(result);
        }

        // Apply translations
        let tIdx = 0;
        pElements.forEach(p => {
            const text = p.innerText.trim();
            if (text.length > 0 && tIdx < translated.length) {
                p.textContent = translated[tIdx];
                tIdx++;
            }
        });

        // Add notice
        const langNames = { es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese',
            zh: 'Chinese', ar: 'Arabic', vi: 'Vietnamese', ko: 'Korean',
            ja: 'Japanese', hi: 'Hindi', tl: 'Filipino', sw: 'Swahili' };
        const existing = textEl.parentNode.querySelector('.translated-notice');
        if (existing) existing.remove();
        const notice = document.createElement('div');
        notice.className = 'translated-notice';
        notice.textContent = `🌐 Translated to ${langNames[lang] || lang}. Select "Original (English)" and click Translate to revert.`;
        textEl.parentNode.insertBefore(notice, textEl.nextSibling);

    } catch (err) {
        console.error('Translation error:', err);
        showToast('Could not connect to translation service. Check your internet connection.');
    }

    btn.textContent = origBtnText;
    btn.disabled = false;
});

async function translateChunk(text, lang) {
    try {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`
        );
        const data = await response.json();
        if (data.responseStatus === 200 && data.responseData && data.responseData.translatedText) {
            let result = data.responseData.translatedText;
            // MyMemory returns UPPERCASE text when it hits rate limits — detect and fallback
            if (result === result.toUpperCase() && text !== text.toUpperCase() && text.length > 20) {
                return text; // Return original if translation looks bad
            }
            return result;
        }
        return text; // Return original on failure
    } catch (e) {
        return text; // Return original on network error
    }
}


// ===== Hope Detective Game =====

const detectiveClues = {
    elementary: [
        {
            story: 'The River Cleanup',
            clues: [
                { text: '"I feel so sad when I see the fish can\'t swim here anymore," said Maya.', marker: 'motivation' },
                { text: '"This isn\'t fair to the animals. We HAVE to do something!"', marker: 'motivation' },
                { text: 'Maya remembered that the kids in the next town cleaned up THEIR river last year.', marker: 'belief' },
                { text: '"If they could do it, so can we!" she told her friends.', marker: 'belief' },
                { text: 'They made a list: Monday — bring bags, Tuesday — sort recycling, Wednesday — plant flowers along the bank.', marker: 'plans' },
                { text: 'Maya drew a big chart showing each step of their plan.', marker: 'plans' },
                { text: 'On Saturday, twenty kids showed up with gloves and trash bags.', marker: 'agency' },
                { text: 'By the end of the day, they had filled 15 bags and the water was already clearer.', marker: 'agency' },
            ]
        },
        {
            story: 'The School Garden',
            clues: [
                { text: 'Leo looked at the empty dirt lot behind school and frowned. "Nothing grows here."', marker: 'motivation' },
                { text: '"It makes me sad that we have nowhere green to play," said his friend.', marker: 'motivation' },
                { text: 'Ms. Garcia showed them photos of another school that turned a parking lot into a beautiful garden.', marker: 'belief' },
                { text: '"See? It really works! Their garden even grows food for the cafeteria now."', marker: 'belief' },
                { text: 'The class voted on what to plant and made a timeline: seeds in March, transplant in April, harvest in June.', marker: 'plans' },
                { text: 'They assigned jobs — waterers, weeders, seed planters — and put it all on a calendar.', marker: 'plans' },
                { text: 'Every morning before school, two students watered the garden.', marker: 'agency' },
                { text: 'By May, tomatoes, sunflowers, and lettuce were growing tall.', marker: 'agency' },
            ]
        }
    ],
    middle: [
        {
            story: 'The Creek Investigation',
            clues: [
                { text: 'When Amir saw the "No Swimming" sign at the creek where he grew up fishing, something inside him broke.', marker: 'motivation' },
                { text: '"My grandma used to catch trout here. Now it smells like chemicals. This can\'t be normal."', marker: 'motivation' },
                { text: 'The EPA database showed that three other communities in the state had successfully cleaned up contaminated waterways using bioremediation.', marker: 'belief' },
                { text: '"If Riverside County\'s restoration brought back 12 fish species in three years, our creek has a chance too."', marker: 'belief' },
                { text: 'The science club drafted a proposal: Phase 1 — water testing, Phase 2 — identify pollution source, Phase 3 — present findings to city council.', marker: 'plans' },
                { text: 'They set a timeline of eight weeks with weekly checkpoints and a budget of $200 from the school activities fund.', marker: 'plans' },
                { text: 'Amir and three classmates collected water samples every Tuesday for six weeks, documenting pH levels, dissolved oxygen, and bacteria counts.', marker: 'agency' },
                { text: 'Their report was published in the school paper and cited by a city council member during a public hearing on water quality.', marker: 'agency' },
            ]
        },
        {
            story: 'The Heat Island Project',
            clues: [
                { text: 'During the third heat wave of the summer, Priya watched her elderly neighbor get taken away in an ambulance. "This keeps happening. It\'s not okay."', marker: 'motivation' },
                { text: 'She looked up heat-related ER visits in her zip code and felt sick — a 40% increase over five years.', marker: 'motivation' },
                { text: 'A case study from Phoenix showed that strategic tree planting reduced surface temperatures by 8°F in targeted neighborhoods.', marker: 'belief' },
                { text: '"The data is clear — urban canopy coverage directly correlates with reduced heat mortality."', marker: 'belief' },
                { text: 'Priya mapped every block in her neighborhood, marking heat-vulnerable households, existing shade, and potential planting sites.', marker: 'plans' },
                { text: 'She wrote a three-phase proposal: immediate shade structures, medium-term tree planting, long-term cool roof incentives.', marker: 'plans' },
                { text: 'The neighborhood association adopted her plan and planted 50 trees in the first month, focusing on bus stops and senior housing.', marker: 'agency' },
                { text: 'Six months later, thermal imaging showed measurable cooling at every planting site.', marker: 'agency' },
            ]
        }
    ],
    high: [
        {
            story: 'The Watershed Analysis',
            clues: [
                { text: 'The longitudinal data was devastating: 60% wetland loss over two decades, migratory bird populations halved, dissolved oxygen at hypoxic levels.', marker: 'motivation' },
                { text: '"We are witnessing the functional collapse of an ecosystem that took millennia to develop. The moral weight of this demands response."', marker: 'motivation' },
                { text: 'A meta-analysis of 47 wetland restoration projects demonstrated mean biodiversity recovery of 86% within 15 years when using constructed wetland methodology.', marker: 'belief' },
                { text: '"The precedent is robust and peer-reviewed. The question is not whether restoration works, but whether we have the will to implement it."', marker: 'belief' },
                { text: 'The team developed a systems model integrating hydrological flow, nutrient cycling, and species reintroduction timelines with quarterly benchmarks and adaptive management triggers.', marker: 'plans' },
                { text: 'Phase 1: baseline monitoring (3 months). Phase 2: constructed wetland installation (6 months). Phase 3: species reintroduction and monitoring (ongoing). Budget: $1.2M secured through EPA Clean Water Act grants.', marker: 'plans' },
                { text: 'The research team published baseline data in the Journal of Environmental Management, which was subsequently cited in the regional EPA assessment, triggering a formal remediation order.', marker: 'agency' },
                { text: 'At 18 months post-intervention, biomarker analysis demonstrated a 34% increase in macroinvertebrate diversity and the return of three previously extirpated bird species.', marker: 'agency' },
            ]
        },
        {
            story: 'The Environmental Justice Campaign',
            clues: [
                { text: 'Epidemiological data revealed that childhood asthma rates in the industrial corridor were 3.2x the county average, with the burden falling disproportionately on communities of color.', marker: 'motivation' },
                { text: '"This isn\'t a technical problem — it\'s a moral one. The distribution of environmental harm tracks precisely with historical patterns of racial and economic marginalization."', marker: 'motivation' },
                { text: 'The Richmond, California precedent demonstrated that community-led air monitoring networks, combined with legal advocacy, achieved a 20% reduction in refinery emissions over five years.', marker: 'belief' },
                { text: '"The evidence from environmental justice movements globally confirms that organized community action can shift the calculus of power."', marker: 'belief' },
                { text: 'The coalition developed a four-phase strategy: citizen science air monitoring network, legal challenge through the Environmental Law Clinic, legislative advocacy for emission caps, and a community health fund.', marker: 'plans' },
                { text: 'Each phase included specific milestones, responsible parties, funding mechanisms, and contingency plans for political resistance.', marker: 'plans' },
                { text: 'Youth organizers deployed 40 air quality sensors across the district and presented data at three consecutive city council meetings, building an irrefutable public record.', marker: 'agency' },
                { text: 'The campaign resulted in new emission standards, a $5M community health investment, and a precedent-setting environmental justice ordinance adopted by two neighboring municipalities.', marker: 'agency' },
            ]
        }
    ]
};

let detectiveCase = 0;
let detectiveCorrect = 0;
let detectiveTotal = 0;
let selectedClue = null;

function initDetective() {
    const cases = detectiveClues[currentAge];
    detectiveCase = detectiveCase % cases.length;
    detectiveCorrect = 0;
    const clueData = cases[detectiveCase];
    detectiveTotal = clueData.clues.length;
    selectedClue = null;

    document.getElementById('detective-score').textContent = '0';
    document.getElementById('detective-total').textContent = detectiveTotal;
    document.getElementById('detective-fill').style.width = '0%';
    document.getElementById('detective-solved').classList.add('hidden');
    document.getElementById('detective-title').textContent = `🔍 Case: ${clueData.story}`;

    // Clear zones
    document.querySelectorAll('.detective-zone-drop').forEach(zone => {
        zone.innerHTML = '<span class="detective-zone-hint">Drop clues here</span>';
    });

    // Shuffle clues
    const shuffled = [...clueData.clues];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Render clue cards
    const list = document.getElementById('detective-clue-list');
    list.innerHTML = shuffled.map((clue, i) => `
        <div class="detective-clue" draggable="true" data-marker="${clue.marker}" data-idx="${i}" id="clue-${i}">
            "${escapeHtml(clue.text)}"
        </div>
    `).join('');

    // Setup drag/drop and tap-to-place
    setupDetectiveDragDrop();
}

function setupDetectiveDragDrop() {
    const clues = document.querySelectorAll('.detective-clue');
    const zones = document.querySelectorAll('.detective-zone-drop');

    // Drag events on clues
    clues.forEach(clue => {
        clue.addEventListener('dragstart', (e) => {
            clue.classList.add('dragging');
            e.dataTransfer.setData('text/plain', clue.id);
            e.dataTransfer.effectAllowed = 'move';
        });
        clue.addEventListener('dragend', () => {
            clue.classList.remove('dragging');
        });

        // Tap-to-select for touch devices
        clue.addEventListener('click', () => {
            if (clue.classList.contains('placed')) return;
            if (selectedClue === clue) {
                clue.classList.remove('selected');
                selectedClue = null;
            } else {
                document.querySelectorAll('.detective-clue.selected').forEach(c => c.classList.remove('selected'));
                clue.classList.add('selected');
                selectedClue = clue;
            }
        });
    });

    // Drop events on zones
    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.closest('.detective-zone').classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => {
            zone.closest('.detective-zone').classList.remove('drag-over');
        });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.closest('.detective-zone').classList.remove('drag-over');
            const clueId = e.dataTransfer.getData('text/plain');
            const clue = document.getElementById(clueId);
            if (clue) handleClueDrop(clue, zone);
        });

        // Tap-to-place: clicking a zone places the selected clue
        zone.addEventListener('click', () => {
            if (selectedClue && !selectedClue.classList.contains('placed')) {
                handleClueDrop(selectedClue, zone);
                selectedClue = null;
            }
        });
    });
}

function handleClueDrop(clue, zone) {
    const clueMarker = clue.dataset.marker;
    const zoneMarker = zone.dataset.marker;

    if (clueMarker === zoneMarker) {
        // Correct!
        questSFX.fragment();
        clue.classList.remove('selected', 'dragging');
        clue.classList.add('placed');
        clue.draggable = false;
        clue.removeAttribute('data-idx');

        // Remove hint text if present
        const hint = zone.querySelector('.detective-zone-hint');
        if (hint) hint.remove();

        // Move clue into the zone
        zone.appendChild(clue);

        detectiveCorrect++;
        document.getElementById('detective-score').textContent = detectiveCorrect;
        document.getElementById('detective-fill').style.width = `${(detectiveCorrect / detectiveTotal) * 100}%`;

        // Check if case is solved
        if (detectiveCorrect >= detectiveTotal) {
            setTimeout(() => solveDetective(), 600);
        }
    } else {
        // Wrong!
        questSFX.wrong();
        clue.classList.add('wrong-drop');
        clue.classList.remove('selected');
        setTimeout(() => clue.classList.remove('wrong-drop'), 500);
    }
}

function solveDetective() {
    document.querySelector('.detective-board').style.display = 'none';
    document.querySelector('.detective-header').style.display = 'none';

    const msgs = {
        elementary: 'Amazing detective work! You pinned every clue to the right marker. You can spot Motivation, Belief, Plans, and Agency like a pro! 🌟',
        middle: 'Case closed! You correctly identified all four HOPE markers in the evidence. Each clue connected to a specific type of hope — and together, they tell the full story.',
        high: 'Investigation complete. You\'ve demonstrated the ability to deconstruct a narrative and classify textual evidence against the four markers of hope theory. This analytical skill transfers directly to literary analysis and critical reading of climate narratives.'
    };

    document.getElementById('detective-solved-msg').textContent = msgs[currentAge];
    document.getElementById('detective-solved').classList.remove('hidden');
    questSFX.victory();
    triggerCelebration();
}

// Navigation
document.getElementById('btn-detective').addEventListener('click', () => {
    detectiveCase = 0;
    initDetective();
    showScreen('detective-screen');
});
document.getElementById('btn-back-detective').addEventListener('click', () => {
    showScreen('welcome-screen');
});
document.getElementById('btn-detective-next').addEventListener('click', () => {
    detectiveCase++;
    document.querySelector('.detective-board').style.display = '';
    document.querySelector('.detective-header').style.display = '';
    initDetective();
});
document.getElementById('btn-detective-home').addEventListener('click', () => {
    showScreen('welcome-screen');
});


// ===== Hope Walk Sound Effects (Web Audio API) =====
const walkSFX = (function() {
    let ctx = null;
    function getCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        return ctx;
    }

    function playTone(freq, duration, type, vol, delay) {
        const c = getCtx();
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = type || 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(vol || 0.15, c.currentTime + (delay || 0));
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + (delay || 0) + duration);
        o.connect(g); g.connect(c.destination);
        o.start(c.currentTime + (delay || 0));
        o.stop(c.currentTime + (delay || 0) + duration);
    }

    function noise(duration, vol) {
        const c = getCtx();
        const bufSize = c.sampleRate * duration;
        const buf = c.createBuffer(1, bufSize, c.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
        const src = c.createBufferSource();
        src.buffer = buf;
        const g = c.createGain();
        const filt = c.createBiquadFilter();
        filt.type = 'lowpass';
        filt.frequency.value = 400;
        g.gain.setValueAtTime(vol || 0.06, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
        src.connect(filt); filt.connect(g); g.connect(c.destination);
        src.start(); src.stop(c.currentTime + duration);
    }

    return {
        // Gentle wind ambiance
        wind() { noise(3, 0.04); },

        // Soft footsteps (4 quick taps)
        footsteps() {
            for (let i = 0; i < 6; i++) {
                noise(0.08, 0.08);
                playTone(80 + Math.random() * 40, 0.08, 'triangle', 0.06, i * 0.28);
            }
        },

        // Magical spark chime — ascending sparkle
        sparkFound() {
            [880, 1108, 1318, 1760].forEach((f, i) => {
                playTone(f, 0.5, 'sine', 0.12, i * 0.1);
                playTone(f * 1.5, 0.3, 'sine', 0.05, i * 0.1 + 0.05);
            });
        },

        // Scene transforms — uplifting warm swell
        transform() {
            [330, 415, 494, 660].forEach((f, i) => {
                playTone(f, 1.5, 'sine', 0.08, i * 0.3);
                playTone(f * 2, 0.8, 'triangle', 0.04, i * 0.3 + 0.15);
            });
            // Gentle high shimmer
            playTone(1318, 2.0, 'sine', 0.03, 0.8);
            playTone(1568, 1.8, 'sine', 0.02, 1.0);
        },

        // Correct answer — happy ding
        correct() {
            playTone(523, 0.15, 'sine', 0.15, 0);
            playTone(659, 0.15, 'sine', 0.15, 0.12);
            playTone(784, 0.3, 'sine', 0.15, 0.24);
        },

        // Wrong answer — gentle low buzz
        wrong() {
            playTone(220, 0.25, 'triangle', 0.1, 0);
            playTone(196, 0.3, 'triangle', 0.08, 0.15);
        },

        // Birds chirping
        birds() {
            [1800, 2200, 1900, 2400, 2000].forEach((f, i) => {
                playTone(f, 0.08, 'sine', 0.06, i * 0.2);
                playTone(f * 1.2, 0.06, 'sine', 0.04, i * 0.2 + 0.06);
            });
        },

        // Victory fanfare
        victory() {
            const notes = [523, 523, 523, 659, 784, 784, 659, 784, 1047];
            const durs =  [0.15, 0.15, 0.15, 0.2, 0.15, 0.15, 0.2, 0.2, 0.6];
            let t = 0;
            notes.forEach((f, i) => {
                playTone(f, durs[i] + 0.1, 'sine', 0.13, t);
                playTone(f * 0.5, durs[i] + 0.1, 'triangle', 0.06, t);
                t += durs[i] + 0.05;
            });
        }
    };
})();

// ===== Hope Walk Game =====

const walkScenes = {
    elementary: [
        {
            distressText: 'You walk along a path and see <span class="walk-distress">a river full of trash and dirty water</span>. Fish can\'t live here anymore.',
            hopeText: 'Look! There\'s a <span class="walk-hope">small group of kids picking up trash downstream</span>! The water is already clearer there.',
            marker: 'agency',
            explain: 'Those kids are actually DOING something — picking up trash to help the river. That\'s Agency!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:20%;width:60%' },
                { type: 'trash', text: '🗑️', style: 'left:28%' },
                { type: 'trash', text: '🥤', style: 'left:42%' },
                { type: 'trash', text: '🛍️', style: 'left:55%' },
                { type: 'trash', text: '🧴', style: 'left:65%' },
            ],
            custom: [
                { cls: 'scene-prop scene-dead-fish', style: 'left:48%;bottom:78px', text: '🐟', title: 'A dead fish floats in the water' },
                { cls: 'scene-prop scene-kid-helper hidden-hope', style: 'right:18%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="green"></div><div class="scene-prop-label">🧤</div>' },
                { cls: 'scene-prop scene-kid-helper hidden-hope', style: 'right:12%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="orange"></div><div class="scene-prop-label">🗑️</div>' },
                { cls: 'scene-prop scene-trash-bag hidden-hope', style: 'right:8%;bottom:88px', text: '🗑️', title: 'A full trash bag' },
            ],
            sparks: [{ x: '70%', y: '65%', marker: 'agency' }],
            transforms: { clearTrash: true, showFlowers: true }
        },
        {
            distressText: 'The path leads to <span class="walk-distress">a field with no trees — just stumps where a forest used to be</span>. It\'s quiet and sad.',
            hopeText: 'Wait — there\'s a <span class="walk-hope">sign that says "Replanting Day: 500 new trees planted by volunteers last spring!"</span>',
            marker: 'belief',
            explain: 'The sign shows PROOF that people already planted 500 trees. That\'s Belief that Change is Possible!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'stump', style: 'left:15%' },
                { type: 'stump', style: 'left:30%' },
                { type: 'stump', style: 'left:50%' },
                { type: 'stump', style: 'left:65%' },
                { type: 'stump', style: 'left:80%' },
            ],
            custom: [
                { cls: 'scene-prop scene-saw', style: 'left:35%;bottom:90px', text: '🪚', title: 'An abandoned saw' },
                { cls: 'scene-prop scene-sign-post', style: 'left:55%;bottom:86px', html: '<div class="scene-sign">🌳 500 Trees Planted!</div><div class="scene-sign-pole"></div>' },
                { cls: 'scene-prop scene-log', style: 'left:72%;bottom:88px', text: '🪵', title: 'A fallen log' },
            ],
            sparks: [{ x: '50%', y: '45%', marker: 'belief' }],
            transforms: { showTrees: true, showBirds: true }
        },
        {
            distressText: 'You find <span class="walk-distress">a playground covered in smog. Kids can\'t play outside today</span>. The air smells bad.',
            hopeText: 'But look closer — a <span class="walk-hope">poster on the fence shows a plan: "Our Clean Air Steps: 1. Plant trees, 2. Start bike-to-school day, 3. Write to the mayor"</span>',
            marker: 'plans',
            explain: 'A step-by-step plan with real actions — that\'s Plans for a Path Forward!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'path',
            elements: [
                { type: 'tree', leaves: 'dead', style: 'left:10%' },
                { type: 'tree', leaves: 'dead', style: 'left:85%' },
            ],
            custom: [
                { cls: 'scene-prop scene-smog', style: 'left:0;right:0;top:15%;height:40%', html: '' },
                { cls: 'scene-prop scene-swing', style: 'left:30%;bottom:88px', html: '<div class="scene-swing-frame"><div class="scene-swing-seat"></div></div>' },
                { cls: 'scene-prop scene-slide', style: 'left:55%;bottom:88px', html: '<div class="scene-slide-shape"></div>' },
                { cls: 'scene-prop scene-fence', style: 'left:38%;bottom:88px;width:30%', html: '<div class="scene-fence-bar"></div>' },
                { cls: 'scene-prop scene-poster', style: 'left:48%;bottom:112px', html: '<div class="scene-poster-card">📋 Clean Air Plan</div>' },
            ],
            sparks: [{ x: '55%', y: '40%', marker: 'plans' }],
            transforms: { healTrees: true, showSun: true }
        },
        {
            distressText: 'At the end of the path, you see <span class="walk-distress">a dried-up pond surrounded by cracked earth</span>. Frogs used to sing here every night.',
            hopeText: 'Then you notice <span class="walk-hope">a girl sitting by the pond, writing in her journal: "I HAVE to bring the frogs back. This isn\'t right."</span> Her eyes are full of fire.',
            marker: 'motivation',
            explain: 'That deep feeling — "this isn\'t right, I HAVE to do something" — is Motivation for Change! It\'s the spark that starts everything.',
            sky: 'gloomy', skyAfter: 'dawn',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:30%;width:35%' },
            ],
            custom: [
                { cls: 'scene-prop scene-cracked-earth', style: 'left:25%;bottom:78px;width:45%', html: '<div class="scene-cracks"></div>' },
                { cls: 'scene-prop scene-cattail dead-plant', style: 'left:28%;bottom:92px', text: '🌾' },
                { cls: 'scene-prop scene-cattail dead-plant', style: 'left:60%;bottom:95px', text: '🌾' },
                { cls: 'scene-prop scene-girl-journal hidden-hope', style: 'left:58%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="red"></div><div class="scene-prop-label">📓</div>' },
                { cls: 'scene-prop scene-frog hidden-hope', style: 'left:40%;bottom:92px', text: '🐸' },
                { cls: 'scene-prop scene-frog hidden-hope', style: 'left:52%;bottom:90px', text: '🐸' },
            ],
            sparks: [{ x: '42%', y: '55%', marker: 'motivation' }],
            transforms: { showFlowers: true, showSun: true }
        },
        {
            distressText: 'You come to <span class="walk-distress">a beach covered in plastic bottles, tangled nets, and broken foam</span>. A seagull is trapped in fishing line.',
            hopeText: 'Then you see <span class="walk-hope">a woman and her daughter gently freeing the seagull with scissors. They have a bucket full of rescued beach animals</span>.',
            marker: 'agency',
            explain: 'They didn\'t just feel sad — they came prepared with tools and took action! That\'s Agency to Take Action!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:0%;width:100%' },
                { type: 'trash', text: '🧴', style: 'left:20%' },
                { type: 'trash', text: '🥤', style: 'left:45%' },
                { type: 'trash', text: '🛍️', style: 'left:60%' },
            ],
            custom: [
                { cls: 'scene-prop scene-trapped-bird', style: 'left:35%;bottom:92px', text: '🪶', title: 'A seagull tangled in fishing line' },
                { cls: 'scene-prop scene-net', style: 'left:30%;bottom:85px', text: '🕸️', title: 'Tangled fishing net' },
                { cls: 'scene-prop scene-kid-helper hidden-hope', style: 'right:25%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="yellow"></div><div class="scene-prop-label">✂️</div>' },
                { cls: 'scene-prop scene-kid-helper hidden-hope', style: 'right:18%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="blue"></div><div class="scene-prop-label">🪣</div>' },
            ],
            sparks: [{ x: '68%', y: '60%', marker: 'agency' }],
            transforms: { clearTrash: true, showBirds: true }
        },
        {
            distressText: 'The path goes through <span class="walk-distress">a neighborhood where all the gardens are dry and brown</span>. A fire hydrant drips — but nobody has water for their plants.',
            hopeText: 'Then you spot <span class="walk-hope">one house with a rain barrel and a lush green garden! A sign says "Ask me how — I\'ll help you build one too!"</span>',
            marker: 'belief',
            explain: 'One person proved it works — and is offering to help others! That\'s Belief that Change is Possible!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'tree', leaves: 'dead', style: 'left:15%' },
                { type: 'tree', leaves: 'dead', style: 'left:70%' },
            ],
            custom: [
                { cls: 'scene-prop scene-house', style: 'left:10%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-house', style: 'left:35%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-house hidden-hope', style: 'right:15%;bottom:88px', html: '<div class="scene-house-body green"><div class="scene-window lit"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-sign-post hidden-hope', style: 'right:22%;bottom:86px', html: '<div class="scene-sign">🌧️ Rain Barrel!</div><div class="scene-sign-pole"></div>' },
            ],
            sparks: [{ x: '72%', y: '50%', marker: 'belief' }],
            transforms: { healTrees: true, showFlowers: true }
        },
        {
            distressText: 'You pass <span class="walk-distress">a farm where the soil is grey and dusty. Nothing is growing. A farmer sits on his porch looking worried</span>.',
            hopeText: 'But next to the barn, <span class="walk-hope">a group of kids from the school are building a compost bin. A teacher holds up a chart: "Step 1: Collect food scraps. Step 2: Build compost. Step 3: Feed the soil. Step 4: Plant seeds!"</span>',
            marker: 'plans',
            explain: 'A clear, step-by-step plan to fix the soil — that\'s Plans for a Path Forward!',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'stump', style: 'left:40%' },
                { type: 'stump', style: 'left:60%' },
            ],
            custom: [
                { cls: 'scene-prop scene-house', style: 'left:8%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-person-speaking', style: 'left:22%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="brown"></div>' },
                { cls: 'scene-prop scene-kid-helper hidden-hope', style: 'right:22%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="green"></div><div class="scene-prop-label">🪱</div>' },
                { cls: 'scene-prop scene-poster hidden-hope', style: 'right:15%;bottom:112px', html: '<div class="scene-poster-card">📋 Compost Plan!</div>' },
            ],
            sparks: [{ x: '72%', y: '45%', marker: 'plans' }],
            transforms: { showFlowers: true, showSun: true }
        }
    ],
    middle: [
        {
            distressText: 'You approach a creek that runs behind a school. <span class="walk-distress">The water is brown and murky. A sign warns: "Do Not Touch — Polluted Water."</span>',
            hopeText: 'Downstream, you spot a <span class="walk-hope">team of students collecting water samples and logging data in notebooks</span>. They\'re tracking the pollution to find its source.',
            marker: 'agency',
            explain: 'These students moved from concern to action — collecting real data. That\'s Agency to Take Action.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:20%;width:55%' },
            ],
            custom: [
                { cls: 'scene-prop scene-building scene-school', style: 'left:5%;bottom:88px', html: '<div class="scene-building-body school-body"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-roof school-roof"></div>' },
                { cls: 'scene-prop scene-warning-sign', style: 'left:30%;bottom:98px', html: '<div class="scene-warning">⚠️ Polluted</div><div class="scene-sign-pole short"></div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:20%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="blue"></div><div class="scene-prop-label">🧪</div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:14%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="green"></div><div class="scene-prop-label">📋</div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:8%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="purple"></div><div class="scene-prop-label">📝</div>' },
            ],
            sparks: [{ x: '72%', y: '60%', marker: 'agency' }],
            transforms: { clearTrash: true, showFlowers: true, showBirds: true }
        },
        {
            distressText: 'An empty lot sits between buildings — <span class="walk-distress">cracked concrete, broken glass, weeds growing through the cracks</span>. Nobody comes here.',
            hopeText: 'But on the fence, <span class="walk-hope">a community meeting flyer reads: "We turned the lot on 5th Street into a garden that feeds 30 families. Yours could be next."</span>',
            marker: 'belief',
            explain: 'Evidence that another community succeeded — proof that this CAN work. That\'s Belief that Change is Possible.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'trash', text: '🧱', style: 'left:35%' },
                { type: 'trash', text: '🥫', style: 'left:50%' },
                { type: 'trash', text: '💔', style: 'left:42%' },
            ],
            custom: [
                { cls: 'scene-prop scene-building', style: 'left:3%;bottom:88px', html: '<div class="scene-building-body tall"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-building', style: 'right:3%;bottom:88px', html: '<div class="scene-building-body tall"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-fence', style: 'left:28%;bottom:88px;width:44%', html: '<div class="scene-fence-bar chain"></div>' },
                { cls: 'scene-prop scene-weed', style: 'left:38%;bottom:92px', text: '🌿' },
                { cls: 'scene-prop scene-weed', style: 'left:52%;bottom:90px', text: '🌿' },
                { cls: 'scene-prop scene-flyer hidden-hope', style: 'left:48%;bottom:108px', html: '<div class="scene-poster-card flyer">🌱 Community Garden</div>' },
            ],
            sparks: [{ x: '60%', y: '42%', marker: 'belief' }],
            transforms: { clearTrash: true, showTrees: true, showFlowers: true }
        },
        {
            distressText: 'You walk past a school where <span class="walk-distress">the only trees are dead and the field is dry, cracked dirt</span>. The playground equipment sits unused in the heat.',
            hopeText: 'Inside, you see <span class="walk-hope">a whiteboard through the window: "Rain Garden Project — Phase 1: Test soil. Phase 2: Plant native species. Phase 3: Install rain barrel system. Timeline: 8 weeks."</span>',
            marker: 'plans',
            explain: 'A phased timeline with specific steps — that\'s a real Plan for a Path Forward.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'path',
            elements: [
                { type: 'tree', leaves: 'dead', style: 'left:25%' },
                { type: 'tree', leaves: 'dead', style: 'left:75%' },
            ],
            custom: [
                { cls: 'scene-prop scene-building scene-school', style: 'left:38%;bottom:88px', html: '<div class="scene-building-body school-body wide"><div class="scene-window lit"></div><div class="scene-window lit"></div><div class="scene-door"></div><div class="scene-window lit"></div></div><div class="scene-roof school-roof wide"></div>' },
                { cls: 'scene-prop scene-swing', style: 'left:15%;bottom:88px', html: '<div class="scene-swing-frame"><div class="scene-swing-seat"></div></div>' },
                { cls: 'scene-prop scene-whiteboard hidden-hope', style: 'left:48%;bottom:130px', html: '<div class="scene-poster-card whiteboard">📋 Rain Garden Plan</div>' },
                { cls: 'scene-prop scene-heat-shimmer', style: 'left:0;right:0;bottom:88px;height:30px', html: '' },
            ],
            sparks: [{ x: '48%', y: '38%', marker: 'plans' }],
            transforms: { healTrees: true, showSun: true }
        },
        {
            distressText: 'At the edge of town, <span class="walk-distress">a factory chimney releases grey smoke into the sky. The sunset is hidden behind a haze.</span>',
            hopeText: 'Then you hear someone say: <span class="walk-hope">"I tested our tap water and found lead levels 3x the limit. I can\'t stop thinking about it. My little brother drinks this water. We HAVE to do something."</span>',
            marker: 'motivation',
            explain: 'That gut-level response — fear for family, moral urgency — is Motivation for Change. It\'s the emotional catalyst that drives everything else.',
            sky: 'gloomy', skyAfter: 'dawn',
            ground: 'barren', groundAfter: 'growing',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-factory', style: 'right:10%;bottom:88px', html: '<div class="scene-factory-body"><div class="scene-window dim"></div><div class="scene-window dim"></div></div><div class="scene-chimney"><div class="scene-smoke">💨</div><div class="scene-smoke delay">💨</div></div>' },
                { cls: 'scene-prop scene-smog', style: 'left:0;right:0;top:10%;height:35%', html: '' },
                { cls: 'scene-prop scene-house', style: 'left:10%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window lit"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-house', style: 'left:28%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-person-speaking hidden-hope', style: 'left:50%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="red"></div><div class="scene-speech-bubble">We HAVE to do something!</div>' },
            ],
            sparks: [{ x: '40%', y: '50%', marker: 'motivation' }],
            transforms: { showSun: true, showBirds: true }
        },
        {
            distressText: 'You reach a lake that used to be a popular swimming spot. <span class="walk-distress">A thick layer of green algae covers the surface. Signs say "No Swimming — Toxic Bloom."</span> The smell is terrible.',
            hopeText: 'On the dock, <span class="walk-hope">a group of volunteers is installing a floating wetland filter — a raft of native plants that naturally cleans the water. A chart tracks improvement week by week.</span>',
            marker: 'agency',
            explain: 'They didn\'t just study the problem — they built and deployed a real solution. That\'s Agency to Take Action.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:10%;width:75%' },
            ],
            custom: [
                { cls: 'scene-prop scene-warning-sign', style: 'left:15%;bottom:98px', html: '<div class="scene-warning">⚠️ No Swimming</div><div class="scene-sign-pole short"></div>' },
                { cls: 'scene-prop scene-algae', style: 'left:15%;bottom:72px;width:65%', html: '<div style="color:#4a7;font-size:0.7rem;opacity:0.7">≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:12%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="blue"></div><div class="scene-prop-label">🌿</div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:6%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="green"></div><div class="scene-prop-label">📊</div>' },
            ],
            sparks: [{ x: '78%', y: '55%', marker: 'agency' }],
            transforms: { clearTrash: true, showFlowers: true, showBirds: true }
        },
        {
            distressText: 'A highway overpass looms over a neighborhood. <span class="walk-distress">The noise is constant, exhaust fumes drift down, and not a single tree lines the street.</span> Kids walk to school with masks on.',
            hopeText: 'But at the end of the block, <span class="walk-hope">a mural shows the neighborhood\'s tree-planting timeline — and 200 saplings already planted along side streets. Young trees in protective tubes line the nearest road.</span>',
            marker: 'belief',
            explain: '200 saplings already in the ground — visible evidence the plan is working. That\'s Belief that Change is Possible.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-smog', style: 'left:0;right:0;top:15%;height:30%', html: '' },
                { cls: 'scene-prop scene-building', style: 'left:5%;bottom:88px', html: '<div class="scene-building-body tall"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-building', style: 'left:25%;bottom:88px', html: '<div class="scene-building-body"><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-poster hidden-hope', style: 'right:20%;bottom:108px', html: '<div class="scene-poster-card">🌳 200 Trees Planted!</div>' },
            ],
            sparks: [{ x: '70%', y: '42%', marker: 'belief' }],
            transforms: { showTrees: true, healTrees: true, showSun: true }
        },
        {
            distressText: 'You pass an old industrial canal. <span class="walk-distress">Rusty barrels line the bank. The water has an oily sheen and nothing grows within 20 feet of the edge.</span>',
            hopeText: 'Then you hear a student say: <span class="walk-hope">"I can\'t bike past this every day and just ignore it. My grandma used to fish here. This water is supposed to be for everyone."</span> Her voice is shaking with emotion.',
            marker: 'motivation',
            explain: 'Personal connection and moral conviction — "this was for my grandma, for everyone" — that deep emotional response is Motivation for Change.',
            sky: 'gloomy', skyAfter: 'dawn',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:20%;width:55%' },
            ],
            custom: [
                { cls: 'scene-prop', style: 'left:22%;bottom:92px', text: '🛢️', title: 'Rusty barrel' },
                { cls: 'scene-prop', style: 'left:35%;bottom:90px', text: '🛢️', title: 'Rusty barrel' },
                { cls: 'scene-prop', style: 'left:48%;bottom:93px', text: '🛢️', title: 'Rusty barrel' },
                { cls: 'scene-prop scene-person-speaking hidden-hope', style: 'right:18%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="red"></div><div class="scene-speech-bubble">This isn\'t right.</div>' },
            ],
            sparks: [{ x: '72%', y: '55%', marker: 'motivation' }],
            transforms: { showFlowers: true, showBirds: true }
        },
        {
            distressText: 'A coastal road leads past <span class="walk-distress">a cliff that\'s crumbling into the sea. Homes have been abandoned. A "Road Closed" sign blocks the path.</span>',
            hopeText: 'Beyond the barrier, <span class="walk-hope">a team from the city has posted a detailed plan: "Managed Retreat Strategy — Phase 1: Relocate 12 families. Phase 2: Restore dune system. Phase 3: Create coastal wetland buffer. Budget approved."</span>',
            marker: 'plans',
            explain: 'A funded, phased strategy addressing people AND nature — that\'s a real Plan for a Path Forward.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'path',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-house', style: 'left:15%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-warning-sign', style: 'left:45%;bottom:98px', html: '<div class="scene-warning">🚧 Road Closed</div><div class="scene-sign-pole short"></div>' },
                { cls: 'scene-prop scene-erosion', style: 'left:50%;bottom:75px;width:40%', html: '<div class="scene-erosion-lines"></div>' },
                { cls: 'scene-prop scene-whiteboard hidden-hope', style: 'right:10%;bottom:112px', html: '<div class="scene-poster-card whiteboard">📋 Retreat Plan ✓</div>' },
            ],
            sparks: [{ x: '78%', y: '38%', marker: 'plans' }],
            transforms: { showSun: true, showFlowers: true }
        }
    ],
    high: [
        {
            distressText: 'The path follows a river delta. <span class="walk-distress">Satellite imagery overlaid on the landscape reveals a 60% loss of wetland area over two decades. Migratory bird counts have halved.</span>',
            hopeText: 'But the data feed also shows: <span class="walk-hope">student researchers from the local university have been publishing water quality metrics for 18 months. Their data just triggered a formal EPA investigation.</span>',
            marker: 'agency',
            explain: 'Published research that triggered institutional response — individual action creating systemic change. That\'s Agency.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:10%;width:70%' },
            ],
            custom: [
                { cls: 'scene-prop scene-data-overlay', style: 'left:15%;top:25%', html: '<div class="scene-data-panel">📉 -60% wetland<br>📊 Bird count ↓50%</div>' },
                { cls: 'scene-prop scene-wetland-grass dead-plant', style: 'left:18%;bottom:82px', text: '🌾' },
                { cls: 'scene-prop scene-wetland-grass dead-plant', style: 'left:35%;bottom:80px', text: '🌾' },
                { cls: 'scene-prop scene-wetland-grass dead-plant', style: 'left:55%;bottom:83px', text: '🌾' },
                { cls: 'scene-prop scene-research-station hidden-hope', style: 'right:8%;bottom:88px', html: '<div class="scene-building-body lab"><div class="scene-window lit"></div><div class="scene-window lit"></div></div><div class="scene-roof flat"></div><div class="scene-prop-label">🔬 Research</div>' },
                { cls: 'scene-prop scene-researcher hidden-hope', style: 'right:22%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="white"></div><div class="scene-prop-label">📊</div>' },
            ],
            sparks: [{ x: '65%', y: '55%', marker: 'agency' }],
            transforms: { showBirds: true, showFlowers: true }
        },
        {
            distressText: 'A coastal area shows <span class="walk-distress">bleached coral visible through clear but lifeless water. The reef system has lost 45% of its living coral cover in a decade.</span>',
            hopeText: 'Adjacent monitoring stations display: <span class="walk-hope">"Coral nursery sites in Belize and Australia have demonstrated 70% transplant survival rates. Scalable restoration methodology now peer-reviewed."</span>',
            marker: 'belief',
            explain: 'Peer-reviewed evidence of scalable restoration with quantified success rates — warranted optimism grounded in data. That\'s Belief.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'water', class: 'polluted', afterClass: 'clean', style: 'left:5%;width:85%' },
            ],
            custom: [
                { cls: 'scene-prop scene-coral dead-coral', style: 'left:20%;bottom:72px', html: '<div class="scene-coral-shape"></div><div class="scene-coral-shape small"></div>' },
                { cls: 'scene-prop scene-coral dead-coral', style: 'left:45%;bottom:70px', html: '<div class="scene-coral-shape"></div>' },
                { cls: 'scene-prop scene-coral dead-coral', style: 'left:65%;bottom:73px', html: '<div class="scene-coral-shape small"></div><div class="scene-coral-shape"></div>' },
                { cls: 'scene-prop scene-monitoring hidden-hope', style: 'right:5%;bottom:88px', html: '<div class="scene-monitor-box"><div class="scene-monitor-screen">70% ✓</div></div><div class="scene-prop-label">📡 Monitor</div>' },
                { cls: 'scene-prop scene-data-overlay hidden-hope', style: 'left:30%;top:22%', html: '<div class="scene-data-panel success">📈 70% survival rate<br>✅ Peer-reviewed</div>' },
            ],
            sparks: [{ x: '55%', y: '42%', marker: 'belief' }],
            transforms: { showSun: true }
        },
        {
            distressText: 'An industrial zone where <span class="walk-distress">air quality indices regularly exceed safe limits. Respiratory hospital admissions have risen 25% over five years.</span>',
            hopeText: 'Inside a community center: <span class="walk-hope">"Coalition Environmental Justice Plan — Phase 1: Citizen air monitoring network. Phase 2: Legal challenge via Environmental Law Clinic. Phase 3: Legislative advocacy for emission caps. Phase 4: Community health fund."</span>',
            marker: 'plans',
            explain: 'A multi-phase strategic framework with institutional partnerships, legal mechanisms, and accountability structures — comprehensive pathways thinking.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'path',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-factory', style: 'left:5%;bottom:88px', html: '<div class="scene-factory-body"><div class="scene-window dim"></div><div class="scene-window dim"></div></div><div class="scene-chimney"><div class="scene-smoke">💨</div><div class="scene-smoke delay">💨</div></div>' },
                { cls: 'scene-prop scene-factory', style: 'left:22%;bottom:88px', html: '<div class="scene-factory-body small"><div class="scene-window dim"></div></div><div class="scene-chimney short"><div class="scene-smoke">💨</div></div>' },
                { cls: 'scene-prop scene-smog thick', style: 'left:0;right:0;top:8%;height:45%', html: '' },
                { cls: 'scene-prop scene-data-overlay', style: 'right:25%;top:20%', html: '<div class="scene-data-panel danger">⚠️ AQI: Unhealthy<br>🏥 Admissions +25%</div>' },
                { cls: 'scene-prop scene-building scene-community-center hidden-hope', style: 'right:8%;bottom:88px', html: '<div class="scene-building-body wide"><div class="scene-window lit"></div><div class="scene-door"></div><div class="scene-window lit"></div></div><div class="scene-roof flat"></div><div class="scene-prop-label">🏛️ Community Center</div>' },
                { cls: 'scene-prop scene-whiteboard hidden-hope', style: 'right:15%;bottom:135px', html: '<div class="scene-poster-card whiteboard">📋 4-Phase Plan</div>' },
            ],
            sparks: [{ x: '50%', y: '40%', marker: 'plans' }],
            transforms: { showTrees: true, showSun: true }
        },
        {
            distressText: 'The path ends at <span class="walk-distress">a clear-cut hillside. Erosion channels scar the exposed soil. A watershed that once supported an entire ecosystem is functionally degraded.</span>',
            hopeText: 'But carved into a remaining tree: <span class="walk-hope">"This isn\'t right." Below it, hundreds of handwritten notes from community members: their grief, their anger, their refusal to accept this as inevitable.</span>',
            marker: 'motivation',
            explain: 'Collective eco-grief and moral outrage as affective catalyst — the emotional foundation of hope theory. Without this response, agency never activates.',
            sky: 'gloomy', skyAfter: 'dawn',
            ground: 'barren', groundAfter: 'growing',
            elements: [
                { type: 'stump', style: 'left:15%' },
                { type: 'stump', style: 'left:30%' },
                { type: 'stump', style: 'left:50%' },
                { type: 'stump', style: 'left:70%' },
            ],
            custom: [
                { cls: 'scene-prop scene-erosion', style: 'left:20%;bottom:82px;width:50%', html: '<div class="scene-erosion-lines"></div>' },
                { cls: 'scene-prop scene-lone-tree', style: 'left:60%;bottom:88px', html: '<div class="scene-tree-trunk tall"></div><div class="scene-tree-leaves alive sparse"></div><div class="scene-carved-text">"This isn\'t right"</div>' },
                { cls: 'scene-prop scene-notes hidden-hope', style: 'left:55%;bottom:88px;width:20%', html: '<div class="scene-note">📝</div><div class="scene-note">📝</div><div class="scene-note">📝</div><div class="scene-note">📝</div><div class="scene-note">📝</div>' },
            ],
            sparks: [{ x: '45%', y: '48%', marker: 'motivation' }],
            transforms: { showFlowers: true, showBirds: true }
        },
        {
            distressText: 'An agricultural region where <span class="walk-distress">monoculture farming has stripped the soil of nutrients. Fertilizer runoff has created a dead zone in the nearby bay — no oxygen, no life.</span>',
            hopeText: 'But a neighboring farm tells a different story: <span class="walk-hope">"After switching to regenerative practices — cover crops, rotational grazing, no-till — our soil carbon increased 3.2% in four years. Our yields now match conventional."</span>',
            marker: 'belief',
            explain: 'Quantified results from a peer comparison — data showing regenerative methods can match conventional yields while restoring ecosystems. Evidence-based belief.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-data-overlay', style: 'left:10%;top:20%', html: '<div class="scene-data-panel danger">💀 Dead zone<br>🧪 O₂ depleted</div>' },
                { cls: 'scene-prop scene-field-rows', style: 'left:5%;bottom:82px;width:40%', html: '<div style="color:#8b7355;font-size:0.6rem;opacity:0.5">| | | | | | | | | | | | | |</div>' },
                { cls: 'scene-prop scene-sign-post hidden-hope', style: 'right:15%;bottom:86px', html: '<div class="scene-sign">🌱 +3.2% Soil Carbon</div><div class="scene-sign-pole"></div>' },
                { cls: 'scene-prop scene-data-overlay hidden-hope', style: 'right:10%;top:25%', html: '<div class="scene-data-panel success">📈 Yields = conventional<br>🌱 Carbon +3.2%</div>' },
            ],
            sparks: [{ x: '72%', y: '42%', marker: 'belief' }],
            transforms: { showFlowers: true, showTrees: true }
        },
        {
            distressText: 'A mountain community watches <span class="walk-distress">their glacier — their primary water source — retreat year after year. Satellite comparisons show 40% volume loss in 30 years. Wells are running dry.</span>',
            hopeText: 'At the town hall, a coalition has posted: <span class="walk-hope">"Water Resilience Framework — Phase 1: Rainwater capture infrastructure. Phase 2: Greywater recycling mandate. Phase 3: Watershed restoration. Phase 4: Regional water-sharing agreement with downstream communities. All phases funded through 2030."</span>',
            marker: 'plans',
            explain: 'A funded, multi-stakeholder, phased adaptation strategy that addresses root causes and builds regional cooperation. Comprehensive pathways thinking.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'path',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-data-overlay', style: 'left:15%;top:18%', html: '<div class="scene-data-panel danger">🏔️ -40% glacier<br>💧 Wells drying</div>' },
                { cls: 'scene-prop scene-building', style: 'left:30%;bottom:88px', html: '<div class="scene-building-body"><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-house', style: 'left:55%;bottom:88px', html: '<div class="scene-house-body"><div class="scene-window"></div><div class="scene-door"></div></div><div class="scene-house-roof"></div>' },
                { cls: 'scene-prop scene-whiteboard hidden-hope', style: 'right:10%;bottom:120px', html: '<div class="scene-poster-card whiteboard">📋 4-Phase Water Plan<br>✓ Funded through 2030</div>' },
            ],
            sparks: [{ x: '75%', y: '35%', marker: 'plans' }],
            transforms: { showSun: true, showBirds: true }
        },
        {
            distressText: 'A low-income neighborhood sits in a <span class="walk-distress">heat island — no shade, black asphalt everywhere, temperatures 8°F higher than surrounding areas. Emergency rooms fill up every summer.</span>',
            hopeText: 'On a rooftop, <span class="walk-hope">a youth-led organization has installed a community solar array and cool roof. A teenager explains: "We mapped every heat-vulnerable household on our block. We\'re not waiting for the city — we\'re doing it ourselves."</span>',
            marker: 'agency',
            explain: 'Youth-led, data-driven, community-scale direct action addressing environmental injustice. Agency at its most powerful.',
            sky: 'gloomy', skyAfter: 'hopeful',
            ground: 'barren', groundAfter: 'growing',
            elements: [],
            custom: [
                { cls: 'scene-prop scene-building', style: 'left:8%;bottom:88px', html: '<div class="scene-building-body tall"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-building', style: 'left:30%;bottom:88px', html: '<div class="scene-building-body tall"><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div><div class="scene-window"></div></div><div class="scene-roof flat"></div>' },
                { cls: 'scene-prop scene-data-overlay', style: 'right:20%;top:15%', html: '<div class="scene-data-panel danger">🌡️ +8°F heat island<br>🏥 ER surge</div>' },
                { cls: 'scene-prop scene-student hidden-hope', style: 'right:15%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="orange"></div><div class="scene-prop-label">☀️ Solar</div>' },
                { cls: 'scene-prop scene-person-speaking hidden-hope', style: 'right:8%;bottom:88px', html: '<div class="scene-mini-person" data-shirt="blue"></div><div class="scene-speech-bubble">We\'re doing it ourselves.</div>' },
            ],
            sparks: [{ x: '78%', y: '55%', marker: 'agency' }],
            transforms: { showTrees: true, showSun: true, showFlowers: true }
        }
    ]
};

let walkStage = 0;
let walkSceneData = [];
let walkSparkFound = false;

function initWalk() {
    walkStage = 0;
    walkSparkFound = false;
    walkSceneData = [...walkScenes[currentAge]];

    document.getElementById('walk-victory').classList.add('hidden');
    document.getElementById('walk-viewport').style.display = '';
    document.getElementById('walk-panel').style.display = '';

    renderWalkScene();
}

function renderWalkScene() {
    const scene = walkSceneData[walkStage];
    walkSparkFound = false;
    const viewport = document.getElementById('walk-viewport');
    const sky = document.getElementById('walk-sky');
    const ground = document.getElementById('walk-ground');
    const sceneEl = document.getElementById('walk-scene');
    const sparksEl = document.getElementById('walk-sparks');
    const character = document.getElementById('walk-character');
    const narrative = document.getElementById('walk-narrative');
    const markerPick = document.getElementById('walk-marker-pick');
    const feedback = document.getElementById('walk-feedback');
    const nextBtn = document.getElementById('btn-walk-next');
    const overlay = document.getElementById('walk-overlay');

    // Reset
    sky.className = `walk-sky ${scene.sky}`;
    ground.className = `walk-ground ${scene.ground}`;
    character.className = 'walk-character';
    character.style.left = '-40px';
    markerPick.classList.add('hidden');
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
    overlay.classList.remove('visible');

    // Build scene elements
    let elemHtml = `<div class="walk-ground ${scene.ground}" id="walk-ground"></div>`;

    // Mountains (background layer)
    elemHtml += `<div class="scene-mountains">
        <div class="scene-mountain scene-mountain-1"></div>
        <div class="scene-mountain scene-mountain-2"></div>
        <div class="scene-mountain scene-mountain-3"></div>
    </div>`;

    // Clouds
    elemHtml += `<div class="scene-cloud scene-cloud-1"></div>`;
    elemHtml += `<div class="scene-cloud scene-cloud-2"></div>`;
    elemHtml += `<div class="scene-cloud scene-cloud-3"></div>`;

    // Stars (visible in gloomy/dawn skies)
    const showStars = scene.sky === 'gloomy' || scene.sky === 'dawn';
    elemHtml += `<div class="scene-star scene-star-1 ${showStars ? 'visible' : ''}"></div>`;
    elemHtml += `<div class="scene-star scene-star-2 ${showStars ? 'visible' : ''}"></div>`;
    elemHtml += `<div class="scene-star scene-star-3 ${showStars ? 'visible' : ''}"></div>`;
    elemHtml += `<div class="scene-star scene-star-4 ${showStars ? 'visible' : ''}"></div>`;
    elemHtml += `<div class="scene-star scene-star-5 ${showStars ? 'visible' : ''}"></div>`;

    // Trail on the ground
    elemHtml += `<div class="scene-trail scene-trail-1"></div>`;
    elemHtml += `<div class="scene-trail scene-trail-2"></div>`;
    elemHtml += `<div class="scene-trail scene-trail-3"></div>`;
    elemHtml += `<div class="scene-trail scene-trail-4"></div>`;

    // Rocks
    elemHtml += `<div class="scene-rock scene-rock-1"></div>`;
    elemHtml += `<div class="scene-rock scene-rock-2"></div>`;
    elemHtml += `<div class="scene-rock scene-rock-3"></div>`;

    // Puddles (polluted initially)
    elemHtml += `<div class="scene-puddle scene-puddle-1 polluted" id="walk-puddle-1"></div>`;
    elemHtml += `<div class="scene-puddle scene-puddle-2 polluted" id="walk-puddle-2"></div>`;

    // Story-specific elements
    scene.elements.forEach((el, i) => {
        if (el.type === 'tree') {
            elemHtml += `<div class="scene-element scene-tree" style="${el.style}" id="walk-el-${i}">
                <div class="scene-tree-leaves ${el.leaves}"></div>
                <div class="scene-tree-trunk"></div>
            </div>`;
        } else if (el.type === 'stump') {
            elemHtml += `<div class="scene-element scene-stump" style="${el.style}" id="walk-el-${i}"></div>`;
        } else if (el.type === 'water') {
            elemHtml += `<div class="scene-element scene-water ${el.class}" style="${el.style}" id="walk-el-${i}"></div>`;
        } else if (el.type === 'trash') {
            elemHtml += `<div class="scene-element scene-trash" style="${el.style}" id="walk-el-${i}">${el.text}</div>`;
        }
    });

    // Custom narrative-specific props
    if (scene.custom) {
        scene.custom.forEach((prop, i) => {
            const content = prop.html != null ? prop.html : escapeHtml(prop.text || '');
            const title = prop.title ? ` title="${escapeHtml(prop.title)}"` : '';
            elemHtml += `<div class="${prop.cls}" style="${prop.style}" id="walk-custom-${i}"${title}>${content}</div>`;
        });
    }

    // Hidden elements that appear after hope is found
    elemHtml += `<div class="scene-element scene-sun" id="walk-sun" style="top:20px;right:60px"></div>`;
    elemHtml += `<div class="scene-element scene-bird" id="walk-bird-1" style="top:15%;left:20%">🐦</div>`;
    elemHtml += `<div class="scene-element scene-bird" id="walk-bird-2" style="top:22%;left:65%">🕊️</div>`;
    elemHtml += `<div class="scene-element scene-bird" id="walk-bird-3" style="top:12%;left:45%">🐦</div>`;
    elemHtml += `<div class="scene-element scene-flower" id="walk-flower-1" style="left:18%">🌸</div>`;
    elemHtml += `<div class="scene-element scene-flower" id="walk-flower-2" style="left:34%">🌼</div>`;
    elemHtml += `<div class="scene-element scene-flower" id="walk-flower-3" style="left:52%">🌺</div>`;
    elemHtml += `<div class="scene-element scene-flower" id="walk-flower-4" style="left:68%">🌻</div>`;
    elemHtml += `<div class="scene-element scene-flower" id="walk-flower-5" style="left:84%">🌷</div>`;

    // Grass tufts (hidden, appear on hope)
    elemHtml += `<div class="scene-grass scene-grass-1" id="walk-grass-1">🌿</div>`;
    elemHtml += `<div class="scene-grass scene-grass-2" id="walk-grass-2">🌾</div>`;
    elemHtml += `<div class="scene-grass scene-grass-3" id="walk-grass-3">🌿</div>`;
    elemHtml += `<div class="scene-grass scene-grass-4" id="walk-grass-4">🌾</div>`;
    elemHtml += `<div class="scene-grass scene-grass-5" id="walk-grass-5">🌿</div>`;
    elemHtml += `<div class="scene-grass scene-grass-6" id="walk-grass-6">🌾</div>`;

    // Fireflies (hidden, appear on hope)
    elemHtml += `<div class="scene-firefly scene-firefly-1" id="walk-firefly-1"></div>`;
    elemHtml += `<div class="scene-firefly scene-firefly-2" id="walk-firefly-2"></div>`;
    elemHtml += `<div class="scene-firefly scene-firefly-3" id="walk-firefly-3"></div>`;
    elemHtml += `<div class="scene-firefly scene-firefly-4" id="walk-firefly-4"></div>`;
    elemHtml += `<div class="scene-firefly scene-firefly-5" id="walk-firefly-5"></div>`;

    // Butterflies (hidden, appear on hope)
    elemHtml += `<div class="scene-butterfly scene-butterfly-1" id="walk-butterfly-1">🦋</div>`;
    elemHtml += `<div class="scene-butterfly scene-butterfly-2" id="walk-butterfly-2">🦋</div>`;

    sceneEl.innerHTML = elemHtml;

    // Place sparks
    sparksEl.innerHTML = scene.sparks.map((s, i) => `
        <div class="walk-spark" data-marker="${s.marker}" style="left:${s.x};top:${s.y}" id="walk-spark-${i}">✨</div>
    `).join('');

    // Narrative — start with distress
    narrative.innerHTML = scene.distressText;

    // Progress dots
    const dotsEl = document.getElementById('walk-progress-dots');
    dotsEl.innerHTML = walkSceneData.map((_, i) => `
        <div class="walk-dot ${i < walkStage ? 'done' : ''} ${i === walkStage ? 'active' : ''}"></div>
    `).join('');

    // Animate character walking in from off-screen left
    character.classList.add('walking');
    walkSFX.wind();
    walkSFX.footsteps();
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            character.style.left = '';  // clear inline style so CSS class takes over
            character.classList.add('entered');
        });
    });
    setTimeout(() => {
        character.classList.remove('walking');
        // Show "tap to find hope" hint
        narrative.innerHTML += '<br><em style="color:var(--color-primary);font-size:0.85rem">Look for the glowing spark in the scene — tap it to find the hope!</em>';
    }, 2000);

    // Spark click handlers
    sparksEl.querySelectorAll('.walk-spark').forEach(spark => {
        spark.addEventListener('click', () => handleSparkClick(spark, scene));
    });
}

function handleSparkClick(spark, scene) {
    if (walkSparkFound) return;
    walkSparkFound = true;

    spark.classList.add('found');
    walkSFX.sparkFound();

    // Transform the scene visually
    const sky = document.getElementById('walk-sky');
    const ground = document.querySelector('#walk-scene .walk-ground');
    sky.className = `walk-sky ${scene.skyAfter}`;
    if (ground) ground.className = `walk-ground ${scene.groundAfter}`;

    // Light up the trail
    document.querySelectorAll('.scene-trail').forEach(t => t.classList.add('lit'));

    // Clean up puddles
    document.querySelectorAll('.scene-puddle').forEach(p => {
        p.classList.remove('polluted');
        p.classList.add('clean');
    });

    // Fade out stars if sky is brightening
    if (scene.skyAfter === 'hopeful') {
        document.querySelectorAll('.scene-star').forEach(s => s.classList.remove('visible'));
    }

    const t = scene.transforms;
    if (t.clearTrash) {
        document.querySelectorAll('.scene-trash').forEach(el => el.classList.add('cleared'));
    }
    if (t.healTrees) {
        document.querySelectorAll('.scene-tree-leaves.dead').forEach(el => { el.classList.remove('dead'); el.classList.add('alive'); });
    }
    if (t.showTrees) {
        // Convert stumps to trees
        document.querySelectorAll('.scene-stump').forEach((stump, i) => {
            const tree = document.createElement('div');
            tree.className = 'scene-element scene-tree';
            tree.style.cssText = stump.style.cssText;
            tree.innerHTML = '<div class="scene-tree-leaves alive"></div><div class="scene-tree-trunk"></div>';
            stump.parentNode.replaceChild(tree, stump);
        });
    }
    if (t.showSun) {
        const sun = document.getElementById('walk-sun');
        if (sun) sun.classList.add('visible');
    }
    if (t.showBirds) {
        walkSFX.birds();
        const b1 = document.getElementById('walk-bird-1');
        const b2 = document.getElementById('walk-bird-2');
        const b3 = document.getElementById('walk-bird-3');
        if (b1) b1.classList.add('visible');
        if (b2) setTimeout(() => b2.classList.add('visible'), 500);
        if (b3) setTimeout(() => b3.classList.add('visible'), 900);
    }
    if (t.showFlowers) {
        ['walk-flower-1', 'walk-flower-2', 'walk-flower-3', 'walk-flower-4', 'walk-flower-5'].forEach((id, i) => {
            const fl = document.getElementById(id);
            if (fl) setTimeout(() => fl.classList.add('bloomed'), i * 150);
        });
    }

    // Always show grass, fireflies, and butterflies on hope
    for (let i = 1; i <= 6; i++) {
        const g = document.getElementById(`walk-grass-${i}`);
        if (g) setTimeout(() => g.classList.add('visible'), i * 100);
    }
    for (let i = 1; i <= 5; i++) {
        const f = document.getElementById(`walk-firefly-${i}`);
        if (f) setTimeout(() => f.classList.add('visible'), 600 + i * 150);
    }
    setTimeout(() => {
        const bt1 = document.getElementById('walk-butterfly-1');
        const bt2 = document.getElementById('walk-butterfly-2');
        if (bt1) bt1.classList.add('visible');
        if (bt2) setTimeout(() => bt2.classList.add('visible'), 400);
    }, 1000);

    // Update water
    scene.elements.forEach((el, i) => {
        if (el.type === 'water' && el.afterClass) {
            const waterEl = document.getElementById(`walk-el-${i}`);
            if (waterEl) { waterEl.classList.remove(el.class); waterEl.classList.add(el.afterClass); }
        }
    });

    // Update narrative
    const narrative = document.getElementById('walk-narrative');
    narrative.innerHTML = scene.hopeText;
    walkSFX.transform();

    // Reveal hidden-hope custom elements with staggered animation
    document.querySelectorAll('.hidden-hope').forEach((el, i) => {
        setTimeout(() => {
            el.classList.remove('hidden-hope');
            el.classList.add('revealed-hope');
        }, 400 + i * 250);
    });

    // Clear smog if present
    document.querySelectorAll('.scene-smog').forEach(el => {
        el.classList.add('clearing');
    });

    // Show marker pick
    setTimeout(() => {
        document.getElementById('walk-marker-pick').classList.remove('hidden');
    }, 800);

    // Wire marker buttons
    document.querySelectorAll('.walk-marker-btn').forEach(btn => {
        // Remove old listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', () => handleWalkMarker(newBtn.dataset.marker, scene));
    });
}

function handleWalkMarker(chosen, scene) {
    const feedback = document.getElementById('walk-feedback');
    const nextBtn = document.getElementById('btn-walk-next');
    const character = document.getElementById('walk-character');

    if (chosen === scene.marker) {
        walkSFX.correct();
        feedback.className = 'walk-feedback correct';
        feedback.innerHTML = `<strong>That's right!</strong> ${scene.explain}`;
        feedback.classList.remove('hidden');
        document.getElementById('walk-marker-pick').classList.add('hidden');

        // Character walks off screen to the right
        character.classList.add('walking');
        character.classList.remove('entered');
        character.classList.add('walk-off');
        walkSFX.footsteps();

        // Show next button after walk-off animation
        setTimeout(() => {
            character.classList.remove('walking');
            nextBtn.classList.remove('hidden');
        }, 2000);
    } else {
        walkSFX.wrong();
        feedback.className = 'walk-feedback wrong';
        feedback.textContent = 'Not quite — look at what you found and think about what kind of hope it shows.';
        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 2000);
    }
}

document.getElementById('btn-walk-next').addEventListener('click', () => {
    walkStage++;
    if (walkStage >= walkSceneData.length) {
        showWalkVictory();
    } else {
        renderWalkScene();
    }
});

function showWalkVictory() {
    document.getElementById('walk-viewport').style.display = 'none';
    document.getElementById('walk-panel').style.display = 'none';

    const msgs = {
        elementary: 'You walked the whole path and found hope in every scene! Even when things looked sad, there was always a spark of hope — a feeling, a proof, a plan, or an action. You\'re a Hope Walker! 🌅',
        middle: 'You completed the Hope Walk and discovered that even in distressing environmental situations, there are signs of hope. Each spark you found connected to a different HOPE marker — motivation, belief, plans, and agency working together.',
        high: 'Walk complete. Each scene demonstrated that environmental distress and hope coexist. The HOPE Framework reveals that within every crisis narrative, the four markers — affective catalyst, warranted optimism, pathways thinking, and agentic action — provide a structure for moving from grief to agency.'
    };

    document.getElementById('walk-victory-msg').textContent = msgs[currentAge];
    document.getElementById('walk-victory').classList.remove('hidden');
    walkSFX.victory();
    triggerCelebration();
}

// Navigation
document.getElementById('btn-walk').addEventListener('click', () => {
    initWalk();
    showScreen('walk-screen');
});
document.getElementById('btn-back-walk').addEventListener('click', () => {
    showScreen('welcome-screen');
});
document.getElementById('btn-walk-restart').addEventListener('click', () => {
    initWalk();
});
document.getElementById('btn-walk-to-home').addEventListener('click', () => {
    showScreen('welcome-screen');
});


// ===== Multiple Sample Texts =====

const sampleTexts = {
    elementary: [
        {
            title: '🏖️ The Beach Cleanup',
            desc: 'Kids find trash on their favorite beach and decide to do something about it.',
            text: `Every Saturday, Jaylen and his friends played at Sunset Beach. But one morning, they found plastic bottles, chip bags, and old fishing line tangled everywhere. "This is horrible," said Jaylen, looking at a seagull trying to eat a piece of plastic. He felt sick to his stomach.\n\nTheir neighbor, Ms. Rivera, told them about a town in Oregon where kids organized a beach cleanup and now the beach is one of the cleanest in the state. "Kids just like you did that," she said. Jaylen's eyes lit up. "We could do that here!"\n\nThey made a plan: every Saturday morning, they'd bring bags and gloves. Jaylen would make posters for the neighborhood. Sofia would ask the school for supplies. And Marcus would count and sort what they collected.\n\nThe first cleanup day, twelve kids showed up. They filled nine bags of trash. By the end of the month, they had removed over 200 pounds of waste from the beach. The seagulls were back, and so were the tide pool creatures.`
        },
        {
            title: '🦋 The Butterfly Garden',
            desc: 'A class discovers why butterflies are disappearing and takes action.',
            text: `Ms. Thompson's class noticed something sad — the butterflies that used to fill the school garden every spring weren't coming anymore. "Where did they go?" asked Priya. The class learned that the wildflowers butterflies need had been replaced by plain grass.\n\n"But there's good news," said Ms. Thompson. She showed them photos of a school in Texas that planted a butterfly garden and now has hundreds of butterflies every year. "Nature can bounce back when we help."\n\nThe class drew up a garden plan. They picked flowers that butterflies love — milkweed, zinnias, and lavender. They measured the garden space and made a shopping list. Each student picked one plant to be responsible for.\n\nBy May, the garden was blooming. The first monarch butterfly arrived on a Tuesday morning, and the whole class ran to the window to watch. By June, they counted 47 butterflies in one afternoon.`
        },
        {
            title: '🌊 The Creek Behind School',
            desc: 'Students at Riverside Middle School tackle a polluted creek.',
            text: sampleText
        }
    ],
    middle: [
        {
            title: '🌊 The Creek Behind School',
            desc: 'Students tackle a polluted creek with science and community action.',
            text: sampleText
        },
        {
            title: '🌱 The Empty Lot',
            desc: 'A neighborhood transforms an abandoned lot into a community food garden.',
            text: `The corner lot on Maple Street had been empty for years — just cracked concrete, weeds, and broken glass. Every time Daniela walked past it, she felt a pang of frustration. Her neighborhood deserved better. "Why does nobody care about this place?" she asked her grandmother.\n\nHer grandmother smiled and told her about community gardens in Detroit, where neighbors turned hundreds of empty lots into farms that now feed thousands of people. "They started with nothing too," she said. "But they believed something beautiful could grow there."\n\nDaniela started small. She researched what vegetables grow well in their climate. She drafted a proposal for the city with a budget, a timeline, and a maintenance plan. She recruited five neighbors to form a garden committee, each responsible for a different section.\n\nThree months later, the lot had raised beds, a rain barrel system, and a hand-painted sign that read "Maple Street Community Garden." The first harvest produced enough tomatoes, peppers, and herbs for twenty families. Neighbors who had never spoken to each other were now sharing recipes over the fence.`
        },
        {
            title: '🐝 The Pollinator Project',
            desc: 'A science class investigates declining bee populations and designs a solution.',
            text: `The data was alarming. In their year-long bee monitoring project, Ms. Okafor's 7th grade class found that pollinator visits to the school grounds had dropped by 35% compared to records from five years ago. "If bees disappear, so does a third of our food supply," said Marcus, looking up from his spreadsheet. The class sat in stunned silence.\n\nBut then Ms. Okafor shared research from the University of Sussex showing that even small wildflower patches in urban areas can increase bee populations by up to 25% within a single growing season. "The science is clear," she said. "Small actions can have measurable impact."\n\nThe class developed a three-part plan. First, they mapped every green space within a mile of the school. Second, they identified native wildflower species that bloom at different times to provide year-round food for pollinators. Third, they wrote grant applications to three local businesses to fund seed and supplies.\n\nTwo of the three grants were approved. Over the next semester, students planted six pollinator patches across the neighborhood. Their spring monitoring showed a 20% increase in bee visits. The local newspaper covered their project, and two other schools reached out to replicate it.`
        }
    ],
    high: [
        {
            title: '🌊 Riverside Creek Restoration',
            desc: 'Student-led environmental restoration with community impact.',
            text: sampleText
        },
        {
            title: '🏭 The Factory Town',
            desc: 'A community confronts industrial pollution through data and advocacy.',
            text: `For three generations, the families of Millbrook lived in the shadow of the Consolidated Chemical plant. Cancer rates were 40% above the state average. The river ran grey. When 16-year-old Elena tested the tap water for her AP Environmental Science project and found lead levels exceeding EPA limits by a factor of three, something shifted. "We've been drinking this," she said, her voice barely above a whisper. "My little brother drinks this."\n\nElena's teacher, Dr. Parekh, connected her with researchers at State University who had documented successful community-led water remediation in Flint, Michigan, and Hinkley, California. "Change is possible," Dr. Parekh told her, "but it requires evidence, organization, and persistence. Communities have won these fights before."\n\nElena and her classmates developed a comprehensive campaign. They established a citizen science water testing network with standardized protocols. They filed Freedom of Information requests for the plant's discharge records. They partnered with the university's environmental law clinic to understand their legal options. They created a public data dashboard showing real-time water quality readings.\n\nThe data dashboard went viral locally. Within six months, the state environmental agency launched a formal investigation. The plant was fined $2.4 million and required to install new filtration systems. Elena testified before the state legislature about the importance of environmental monitoring in underserved communities. A new community water treatment facility was funded through a combination of the fine revenue and a federal environmental justice grant.`
        },
        {
            title: '🌍 The Carbon Audit',
            desc: 'Students conduct a school-wide carbon audit and implement systemic changes.',
            text: `When the student sustainability council at Lincoln High calculated the school's annual carbon footprint — 847 metric tons of CO2 equivalent — the number felt abstract until they contextualized it: equivalent to driving a car 2.1 million miles, or the annual emissions of 184 average homes. "We talk about climate change in class," said council president James, "but our own institution is part of the problem. That realization was uncomfortable but necessary."\n\nThe council reviewed case studies from the Second Nature climate commitment, which showed that over 400 colleges and universities had achieved significant emissions reductions through systematic planning. Several K-12 schools in the consortium had reduced emissions by 30-50% within five years using similar frameworks. The evidence suggested that institutional change, while complex, was achievable and measurable.\n\nThe council proposed a five-year carbon reduction plan to the school board. Phase one: a comprehensive energy audit and LED lighting conversion. Phase two: a waste diversion program targeting 60% landfill reduction. Phase three: advocating for the district to source 50% renewable electricity. Each phase included specific metrics, responsible parties, and quarterly review points.\n\nThe school board approved the plan unanimously. Within the first year, the LED conversion reduced electricity consumption by 22%. The waste program diverted 45% of cafeteria waste to composting. James and two other students were invited to present their model at a national education sustainability conference, and the district committed to implementing the plan across all twelve schools.`
        }
    ]
};

// Text picker
document.getElementById('btn-sample-text').addEventListener('click', () => {
    const texts = sampleTexts[currentAge];
    const grid = document.getElementById('text-picker-grid');
    grid.innerHTML = texts.map((t, i) => `
        <button class="text-picker-card" data-index="${i}">
            <div class="text-picker-card-title">${t.title}</div>
            <div class="text-picker-card-desc">${escapeHtml(t.desc)}</div>
        </button>
    `).join('');

    grid.querySelectorAll('.text-picker-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index);
            loadText(texts[idx].text);
            document.getElementById('text-picker-modal').classList.add('hidden');
        });
    });

    document.getElementById('text-picker-modal').classList.remove('hidden');
});

document.getElementById('btn-cancel-picker').addEventListener('click', () => {
    document.getElementById('text-picker-modal').classList.add('hidden');
});

document.getElementById('text-picker-modal').addEventListener('click', (e) => {
    if (e.target.id === 'text-picker-modal') {
        document.getElementById('text-picker-modal').classList.add('hidden');
    }
});


// ===== Tutorial =====

let tutorialShown = false;

const tutorialSteps = {
    elementary: [
        'First, read the story carefully. Look for moments that feel important!',
        'Next, use your finger (or mouse) to select some words in the story that show one of the Hope Powers.',
        'Then tap one of the four Hope Power buttons to tag what you selected. Watch it light up!'
    ],
    middle: [
        'Start by reading the passage. Pay attention to moments that connect to the HOPE markers you just learned.',
        'Select a phrase or sentence by highlighting it with your cursor or finger.',
        'Click the matching marker button to tag your selection. It will appear highlighted in the text and in your findings.'
    ],
    high: [
        'Read the text analytically, identifying passages that demonstrate HOPE markers.',
        'Select the relevant text by clicking and dragging to highlight it.',
        'Classify your selection using the marker buttons. Each tagged passage will be evaluated for alignment with the framework.'
    ]
};

let currentTutorialStep = 0;

function maybeShowTutorial() {
    if (tutorialShown) return;
    tutorialShown = true;
    currentTutorialStep = 0;
    showTutorialStep();
    document.getElementById('tutorial-overlay').classList.remove('hidden');
}

function showTutorialStep() {
    const steps = tutorialSteps[currentAge];
    const total = steps.length;
    document.getElementById('tutorial-step-num').textContent = `Step ${currentTutorialStep + 1} of ${total}`;
    document.getElementById('tutorial-text').textContent = steps[currentTutorialStep];
    document.getElementById('btn-tutorial-next').textContent =
        currentTutorialStep === total - 1 ? 'Got it!' : 'Next';
}

document.getElementById('btn-tutorial-next').addEventListener('click', () => {
    const steps = tutorialSteps[currentAge];
    currentTutorialStep++;
    if (currentTutorialStep >= steps.length) {
        document.getElementById('tutorial-overlay').classList.add('hidden');
    } else {
        showTutorialStep();
    }
});

document.getElementById('btn-tutorial-skip').addEventListener('click', () => {
    document.getElementById('tutorial-overlay').classList.add('hidden');
});


// ===== Export / Print =====

document.getElementById('btn-export').addEventListener('click', () => {
    window.print();
});

document.getElementById('btn-print-reflect').addEventListener('click', () => {
    window.print();
});


// ===== Teacher Mode =====

// Teacher Hub navigation
document.getElementById('btn-teacher-hub').addEventListener('click', () => {
    showScreen('teacher-hub-screen');
});
document.getElementById('btn-back-teacher-hub').addEventListener('click', () => {
    showScreen('age-screen');
});

// Teacher Hub card buttons
document.getElementById('btn-teacher-hub-planning').addEventListener('click', () => {
    showScreen('worksheet-teacher-screen');
});
document.getElementById('btn-teacher-hub-convo').addEventListener('click', () => {
    showScreen('worksheet-conversations-screen');
});
document.getElementById('btn-teacher-hub-worksheets').addEventListener('click', () => {
    showScreen('worksheet-literature-screen');
});
document.getElementById('btn-teacher-hub-guided').addEventListener('click', () => {
    setAge('middle'); // Default to middle for teacher guided example
    initGuided();
    showScreen('guided-screen');
});

document.getElementById('btn-cancel-teacher').addEventListener('click', () => {
    document.getElementById('teacher-modal').classList.add('hidden');
});

document.getElementById('btn-apply-teacher').addEventListener('click', () => {
    const age = document.getElementById('teacher-age').value;
    const text = document.getElementById('teacher-text').value.trim();
    const skipLearn = document.getElementById('teacher-skip-learn').checked;

    setAge(age);
    document.getElementById('teacher-modal').classList.add('hidden');

    if (skipLearn) {
        // Go straight to activity
        if (text) {
            showScreen('activity-screen');
            loadText(text);
            maybeShowTutorial();
        } else {
            showScreen('activity-screen');
            maybeShowTutorial();
        }
    } else {
        if (text) {
            // Store teacher text to auto-load when reaching activity
            window._teacherText = text;
        }
        showScreen('welcome-screen');
    }
});
