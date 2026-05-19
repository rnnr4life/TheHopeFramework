// ============================================
// HOPE TRAIL — A HOPE Framework Game
// ============================================
// A family travels across America, finding hope
// in eco-grief situations. Players identify the
// 4 HOPE markers along the way:
//   H - Motivation for Change (❤️)
//   O - Belief Change is Possible (🌿)
//   P - Plans for a Path Forward (🗺️)
//   E - Agency to Take Action (⚡)
// ============================================

// --- LANDMARKS (real places, eco-themed) ---
// Southern Route (original)
const LANDMARKS_SOUTH = [
    { name: 'Greenville, SC', mile: 0, center: false, scene: 'town' },
    { name: 'Blue Ridge Parkway', mile: 90, center: false, scene: 'mountain' },
    { name: 'Asheville Community Garden', mile: 180, center: true, scene: 'garden' },
    { name: 'Great Smoky Mountains', mile: 320, center: false, scene: 'mountain' },
    { name: 'Nashville Green Hub', mile: 500, center: true, scene: 'town' },
    { name: 'Mississippi River', mile: 680, center: false, scene: 'river' },
    { name: 'Ozark Wilderness', mile: 850, center: false, scene: 'mountain' },
    { name: 'Kansas Prairie Restoration', mile: 1050, center: true, scene: 'prairie' },
    { name: 'Colorado River Crossing', mile: 1250, center: false, scene: 'river' },
    { name: 'Rocky Mountain Refuge', mile: 1450, center: true, scene: 'mountain' },
    { name: 'Yellowstone Gateway', mile: 1650, center: false, scene: 'mountain' },
    { name: 'Pacific Northwest Trail', mile: 1850, center: false, scene: 'mountain' },
    { name: 'Hope Valley, OR', mile: 2000, center: false, scene: 'town' },
];

// Northern Route (through St. Paul, MN)
const LANDMARKS_NORTH = [
    { name: 'Greenville, SC', mile: 0, center: false, scene: 'town' },
    { name: 'Blue Ridge Parkway', mile: 90, center: false, scene: 'mountain' },
    { name: 'Asheville Community Garden', mile: 180, center: true, scene: 'garden' },
    { name: 'Great Smoky Mountains', mile: 320, center: false, scene: 'mountain' },
    { name: 'Nashville Green Hub', mile: 500, center: true, scene: 'town' },
    { name: 'Mississippi River', mile: 680, center: false, scene: 'river' },
    { name: 'St. Paul, Minnesota', mile: 880, center: true, scene: 'stpaul' },
    { name: 'Minnesota State Fair', mile: 890, center: false, scene: 'statefair' },
    { name: 'University of Minnesota', mile: 900, center: false, scene: 'university' },
    { name: 'North Dakota Prairie', mile: 1100, center: false, scene: 'prairie' },
    { name: 'Montana Wilderness', mile: 1350, center: true, scene: 'mountain' },
    { name: 'Glacier National Park', mile: 1550, center: false, scene: 'mountain' },
    { name: 'Pacific Northwest Trail', mile: 1800, center: false, scene: 'mountain' },
    { name: 'Hope Valley, OR', mile: 2000, center: false, scene: 'town' },
];

// Active route (set when player chooses)
let LANDMARKS = LANDMARKS_SOUTH;

const TOTAL_MILES = 2000;

// --- REGIONS (background changes as you cross the country) ---
const REGIONS_SOUTH = [
    { name: 'Southeast',        startMile: 0,    skyTop: '#4488cc', skyBottom: '#66aadd', ground: '#44aa44', groundAccent: '#338833', trees: true,  mountains: false, prairie: false },
    { name: 'Appalachian Mtns', startMile: 180,  skyTop: '#5588bb', skyBottom: '#88bbdd', ground: '#5a9a4a', groundAccent: '#3a7a3a', trees: true,  mountains: true,  prairie: false },
    { name: 'Mid-South',        startMile: 500,  skyTop: '#5599cc', skyBottom: '#88ccee', ground: '#66aa55', groundAccent: '#448833', trees: true,  mountains: false, prairie: false },
    { name: 'Great Plains',     startMile: 850,  skyTop: '#6baed6', skyBottom: '#c6dbef', ground: '#b5a642', groundAccent: '#9a8a32', trees: false, mountains: false, prairie: true  },
    { name: 'Rocky Mountains',  startMile: 1250, skyTop: '#4a6fa5', skyBottom: '#7ba3cc', ground: '#6a8a4a', groundAccent: '#4a6a3a', trees: true,  mountains: true,  prairie: false },
    { name: 'High Rockies',     startMile: 1450, skyTop: '#3a5f8a', skyBottom: '#6690b8', ground: '#7a9060', groundAccent: '#5a7040', trees: false, mountains: true,  prairie: false },
    { name: 'Pacific Northwest', startMile: 1750, skyTop: '#556b7a', skyBottom: '#88aabb', ground: '#2d8a3e', groundAccent: '#1a6a2a', trees: true,  mountains: true,  prairie: false },
];

const REGIONS_NORTH = [
    { name: 'Southeast',        startMile: 0,    skyTop: '#4488cc', skyBottom: '#66aadd', ground: '#44aa44', groundAccent: '#338833', trees: true,  mountains: false, prairie: false },
    { name: 'Appalachian Mtns', startMile: 180,  skyTop: '#5588bb', skyBottom: '#88bbdd', ground: '#5a9a4a', groundAccent: '#3a7a3a', trees: true,  mountains: true,  prairie: false },
    { name: 'Mid-South',        startMile: 500,  skyTop: '#5599cc', skyBottom: '#88ccee', ground: '#66aa55', groundAccent: '#448833', trees: true,  mountains: false, prairie: false },
    { name: 'Minnesota',        startMile: 800,  skyTop: '#5588bb', skyBottom: '#99ccdd', ground: '#3a8a3a', groundAccent: '#2a6a2a', trees: true,  mountains: false, prairie: false },
    { name: 'Northern Plains',  startMile: 1000, skyTop: '#6baed6', skyBottom: '#c6dbef', ground: '#b5a642', groundAccent: '#9a8a32', trees: false, mountains: false, prairie: true  },
    { name: 'Montana Rockies',  startMile: 1350, skyTop: '#3a5f8a', skyBottom: '#6690b8', ground: '#7a9060', groundAccent: '#5a7040', trees: true,  mountains: true,  prairie: false },
    { name: 'Pacific Northwest', startMile: 1700, skyTop: '#556b7a', skyBottom: '#88aabb', ground: '#2d8a3e', groundAccent: '#1a6a2a', trees: true,  mountains: true,  prairie: false },
];

let REGIONS = REGIONS_SOUTH;

function getRegion(miles) {
    let region = REGIONS[0];
    for (const r of REGIONS) {
        if (miles >= r.startMile) region = r;
    }
    return region;
}

const MONTH_NAMES = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
];

// --- PACE ---
const PACE_CONFIG = {
    slow:     { milesMin: 15, milesMax: 30, foodMult: 0.8, stressChance: 0.05 },
    steady:   { milesMin: 30, milesMax: 50, foodMult: 1.0, stressChance: 0.10 },
    fast:     { milesMin: 45, milesMax: 70, foodMult: 1.3, stressChance: 0.20 },
};

// --- HOPE INFO ---
const HOPE_INFO = `The HOPE Framework helps us find hope in stories about the environment.

HOPE stands for:
  Healing Opportunities for Processing Eco-grief

The four markers of hope are:

  ❤️ Motivation for Change
     Feeling compelled to do something

  🌿 Belief that Change is Possible
     Seeing evidence that things CAN get better

  🗺️ Plans for a Path Forward
     Having concrete steps to make change

  ⚡ Agency to Take Action
     Feeling empowered to actually DO something

On your journey, your family will encounter
eco-grief — sadness about what's happening to
the Earth. But you'll also find HOPE at every
landmark. Identify the right markers to build
your family's hope score!`;

// --- HOPE CHALLENGES (at landmarks) ---
const HOPE_CHALLENGES_SOUTH = [
    {
        location: 'Blue Ridge Parkway',
        story: 'Your family stops at an overlook. The mountains are hazy with pollution, and some trees are dying from acid rain. But a ranger explains that air quality has improved 70% since the Clean Air Act. "These forests are coming back," she says with a smile.',
        question: 'The ranger showing that air quality has improved 70% is an example of:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 1,
        marker: 'o',
        explanation: 'Seeing measurable improvement (70% better air quality) shows that change IS possible — evidence that gives us hope.'
    },
    {
        location: 'Great Smoky Mountains',
        story: 'Hiking through the Smokies, your child notices trash along the trail. They feel upset. Then you meet a group of teenagers doing a trail cleanup — they\'ve removed 200 pounds of litter this week alone. "We do this every month," they say proudly.',
        question: 'The teenagers cleaning 200 pounds of litter every month shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 3,
        marker: 'e',
        explanation: 'The teens are DOING something — taking direct action regularly. That\'s Agency to Take Action.'
    },
    {
        location: 'Mississippi River',
        story: 'At the river, you see a sign about how industrial runoff once made the water unsafe. Your partner reads about a new watershed protection plan — 15 cities along the river have agreed to reduce pollution by 50% over the next decade.',
        question: 'A plan for 15 cities to reduce pollution by 50% is an example of:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 2,
        marker: 'p',
        explanation: 'A specific, measurable plan (50% reduction, 15 cities, 10 years) is Plans for a Path Forward.'
    },
    {
        location: 'Ozark Wilderness',
        story: 'In the Ozarks, a local farmer tells your family about losing his crops to unpredictable weather. "I couldn\'t just watch my land die," he says. "Seeing my grandkids playing in the dirt — that\'s what made me change how I farm."',
        question: 'The farmer saying his grandkids motivated him to change is:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 0,
        marker: 'h',
        explanation: 'His grandkids gave him the emotional drive to act — that\'s Motivation for Change.'
    },
    {
        location: 'Colorado River Crossing',
        story: 'The Colorado River is lower than it used to be. A water conservation team shows your family their monitoring station. "We track every drop now. Look — this graph shows water levels stabilizing since the new conservation rules started."',
        question: 'Water levels stabilizing after conservation rules shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 1,
        marker: 'o',
        explanation: 'Seeing actual data that conservation is WORKING gives Belief that Change is Possible.'
    },
    {
        location: 'Yellowstone Gateway',
        story: 'Near Yellowstone, your family visits a wolf reintroduction center. A biologist explains how bringing back wolves restored the entire ecosystem — rivers changed course, forests grew back, other animals returned. "Nature heals when we let it."',
        question: 'Wolves restoring a whole ecosystem shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 1,
        marker: 'o',
        explanation: 'The wolf story is powerful evidence that nature CAN recover — Belief that Change is Possible.'
    },
    {
        location: 'Pacific Northwest Trail',
        story: 'In the Pacific Northwest, you meet a indigenous community leader. "We have a 100-year forest management plan," she explains. "Every tree we harvest, we plant three. We map every watershed. Our children will inherit a healthier forest."',
        question: 'A 100-year plan to plant 3 trees for every 1 harvested is:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 2,
        marker: 'p',
        explanation: 'A detailed, long-term strategy with specific ratios is Plans for a Path Forward.'
    },
];

const HOPE_CHALLENGES_NORTH = [
    {
        location: 'Blue Ridge Parkway',
        story: 'Your family stops at an overlook. The mountains are hazy with pollution, and some trees are dying from acid rain. But a ranger explains that air quality has improved 70% since the Clean Air Act. "These forests are coming back," she says with a smile.',
        question: 'The ranger showing that air quality has improved 70% is an example of:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 1,
        marker: 'o',
        explanation: 'Seeing measurable improvement (70% better air quality) shows that change IS possible — evidence that gives us hope.'
    },
    {
        location: 'Great Smoky Mountains',
        story: 'Hiking through the Smokies, your child notices trash along the trail. They feel upset. Then you meet a group of teenagers doing a trail cleanup — they\'ve removed 200 pounds of litter this week alone. "We do this every month," they say proudly.',
        question: 'The teenagers cleaning 200 pounds of litter every month shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 3,
        marker: 'e',
        explanation: 'The teens are DOING something — taking direct action regularly. That\'s Agency to Take Action.'
    },
    {
        location: 'Mississippi River',
        story: 'At the river, you see a sign about how industrial runoff once made the water unsafe. Your partner reads about a new watershed protection plan — 15 cities along the river have agreed to reduce pollution by 50% over the next decade.',
        question: 'A plan for 15 cities to reduce pollution by 50% is an example of:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 2,
        marker: 'p',
        explanation: 'A specific, measurable plan (50% reduction, 15 cities, 10 years) is Plans for a Path Forward.'
    },
    {
        location: 'St. Paul, Minnesota',
        story: 'At the Minnesota State Capitol, your family sees a rally for clean energy. A state legislator tells the crowd: "Minnesota now gets 30% of its power from wind and solar — and we have a plan to reach 100% by 2040." Your child asks, "Can we really do that?"',
        question: 'Minnesota\'s plan to reach 100% clean energy by 2040 is:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 2,
        marker: 'p',
        explanation: 'A concrete goal (100% clean energy) with a timeline (2040) and measurable progress (30% already) is Plans for a Path Forward.'
    },
    {
        location: 'Minnesota State Fair',
        story: 'At the Great Minnesota Get-Together, your family visits the Eco Experience building. A volunteer shows kids how to compost. "Last year, fairgoers composted 270 tons of waste instead of sending it to landfills," she says. Your child grabs a bucket and starts helping.',
        question: 'Fairgoers composting 270 tons of waste shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 3,
        marker: 'e',
        explanation: 'Hundreds of thousands of people actively choosing to compost is Agency to Take Action — people doing the work.'
    },
    {
        location: 'University of Minnesota',
        story: 'On the U of M campus, your family meets a professor studying climate-resilient crops. "We\'re developing wheat that can survive droughts and floods," she explains. "Farmers across the Midwest are already testing it. When I see my students dedicating their careers to this, I know we\'ll find answers."',
        question: 'The professor saying her students\' dedication gives her confidence is:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 0,
        marker: 'h',
        explanation: 'Seeing the next generation commit to solving the problem gives her the emotional drive — that\'s Motivation for Change.'
    },
    {
        location: 'Glacier National Park',
        story: 'At Glacier National Park, a ranger shows your family old photos. "We\'ve lost 80% of our glaciers," she says quietly. But then she points to a stream full of fish. "Since we started restoring these waterways, the trout population has doubled. The land is healing."',
        question: 'Trout populations doubling after restoration shows:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 1,
        marker: 'o',
        explanation: 'Seeing measurable recovery (trout doubling) provides evidence that Change is Possible.'
    },
    {
        location: 'Pacific Northwest Trail',
        story: 'In the Pacific Northwest, you meet a indigenous community leader. "We have a 100-year forest management plan," she explains. "Every tree we harvest, we plant three. We map every watershed. Our children will inherit a healthier forest."',
        question: 'A 100-year plan to plant 3 trees for every 1 harvested is:',
        options: ['Motivation for Change', 'Belief that Change is Possible', 'Plans for a Path Forward', 'Agency to Take Action'],
        correct: 2,
        marker: 'p',
        explanation: 'A detailed, long-term strategy with specific ratios is Plans for a Path Forward.'
    },
];

let HOPE_CHALLENGES = HOPE_CHALLENGES_SOUTH;

// =====================
// SOUND EFFECTS
// =====================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let soundOn = true;

function ensureAudio() { if (!audioCtx) audioCtx = new AudioCtx(); }

function playTone(freq, duration, type, volume) {
    if (!soundOn) return;
    ensureAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'square';
    osc.frequency.value = freq;
    gain.gain.value = volume || 0.15;
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + duration);
}

function sfx_travel()  { playTone(120, 0.15, 'triangle', 0.1); setTimeout(() => playTone(140, 0.15, 'triangle', 0.1), 150); }
function sfx_coin()    { playTone(880, 0.08, 'square', 0.1); setTimeout(() => playTone(1200, 0.12, 'square', 0.1), 100); }
function sfx_bad()     { playTone(300, 0.15, 'square', 0.15); setTimeout(() => playTone(200, 0.2, 'square', 0.15), 150); }
function sfx_good()    { playTone(400, 0.1, 'square', 0.12); setTimeout(() => playTone(600, 0.1, 'square', 0.12), 100); setTimeout(() => playTone(800, 0.15, 'square', 0.12), 200); }
function sfx_hope()    { playTone(523, 0.12, 'sine', 0.12); setTimeout(() => playTone(659, 0.12, 'sine', 0.12), 120); setTimeout(() => playTone(784, 0.15, 'sine', 0.14), 240); setTimeout(() => playTone(1047, 0.25, 'sine', 0.12), 360); }
function sfx_select()  { playTone(660, 0.06, 'square', 0.08); }
function sfx_win()     { playTone(523, 0.15, 'square', 0.12); setTimeout(() => playTone(659, 0.15, 'square', 0.12), 150); setTimeout(() => playTone(784, 0.15, 'square', 0.12), 300); setTimeout(() => playTone(1047, 0.3, 'square', 0.15), 450); }

// =====================
// PIXEL ART DRAWING
// =====================
function drawSky(ctx, w, h, skyH, region) {
    const r = region || REGIONS[0];
    ctx.fillStyle = r.skyTop;
    ctx.fillRect(0, 0, w, skyH);
    ctx.fillStyle = r.skyBottom;
    ctx.fillRect(0, skyH * 0.7, w, skyH * 0.3);
}

function drawClouds(ctx, w, skyH, seed) {
    ctx.fillStyle = '#fff';
    const clouds = [
        { x: w * 0.15, y: skyH * 0.2, rx: 50, ry: 18 },
        { x: w * 0.55, y: skyH * 0.12, rx: 65, ry: 22 },
        { x: w * 0.85, y: skyH * 0.3, rx: 40, ry: 14 },
    ];
    for (const c of clouds) {
        ctx.beginPath();
        ctx.ellipse(c.x + (seed || 0), c.y, c.rx, c.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(c.x + c.rx * 0.4 + (seed || 0), c.y - c.ry * 0.5, c.rx * 0.6, c.ry * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawGround(ctx, w, h, skyH, color, accentColor) {
    ctx.fillStyle = color || '#44aa44';
    ctx.fillRect(0, skyH, w, h - skyH);
    ctx.fillStyle = accentColor || '#338833';
    ctx.fillRect(0, skyH, w, 4);
}

function drawRoad(ctx, w, h, skyH) {
    ctx.fillStyle = '#666';
    ctx.fillRect(0, h * 0.74, w, h * 0.1);
    // Road lines
    ctx.strokeStyle = '#ffcc00';
    ctx.setLineDash([20, 15]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.79);
    ctx.lineTo(w, h * 0.79);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawVan(ctx, x, y, scale) {
    const s = scale || 1;
    // Body
    ctx.fillStyle = '#3388cc';
    ctx.fillRect(x - 22 * s, y - 5 * s, 44 * s, 22 * s);
    // Roof
    ctx.fillStyle = '#2277bb';
    ctx.fillRect(x - 18 * s, y - 14 * s, 36 * s, 10 * s);
    // Windshield
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(x - 20 * s, y - 12 * s, 10 * s, 8 * s);
    // Windows
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(x - 6 * s, y - 12 * s, 8 * s, 8 * s);
    ctx.fillRect(x + 6 * s, y - 12 * s, 8 * s, 8 * s);
    // Wheels
    ctx.fillStyle = '#333';
    ctx.beginPath(); ctx.arc(x - 12 * s, y + 17 * s, 6 * s, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 12 * s, y + 17 * s, 6 * s, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#888';
    ctx.beginPath(); ctx.arc(x - 12 * s, y + 17 * s, 2.5 * s, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 12 * s, y + 17 * s, 2.5 * s, 0, Math.PI * 2); ctx.fill();
    // Bumper sticker
    ctx.fillStyle = '#34d399';
    ctx.fillRect(x + 14 * s, y + 6 * s, 8 * s, 4 * s);
    ctx.fillStyle = '#fff';
    ctx.font = `${3 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('HOPE', x + 18 * s, y + 9.5 * s);
    // Mood
    if (game.party) drawVanMood(ctx, x, y, s);
}

function drawTree(ctx, x, y, size) {
    ctx.fillStyle = '#5c3a1e';
    ctx.fillRect(x - size * 0.1, y, size * 0.2, size * 0.5);
    ctx.fillStyle = '#228822';
    ctx.beginPath(); ctx.arc(x, y - size * 0.1, size * 0.4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#33aa33';
    ctx.beginPath(); ctx.arc(x - size * 0.15, y - size * 0.2, size * 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + size * 0.15, y - size * 0.15, size * 0.32, 0, Math.PI * 2); ctx.fill();
}

// --- WEATHER OVERLAYS ---
function getWeatherSkyTint(weather) {
    // Returns an overlay color and alpha for the sky
    switch (weather) {
        case 'rainy':  return { color: '#334455', alpha: 0.35 };
        case 'foggy':  return { color: '#cccccc', alpha: 0.3 };
        case 'cloudy': return { color: '#667788', alpha: 0.2 };
        case 'windy':  return { color: '#556677', alpha: 0.1 };
        case 'sunny':  return { color: '#ffdd44', alpha: 0.08 };
        default:       return { color: '#000000', alpha: 0 };
    }
}

function drawWeatherOverlay(ctx, w, h, skyH, weather, time) {
    const t = time || Date.now();

    // Sky tint
    const tint = getWeatherSkyTint(weather);
    if (tint.alpha > 0) {
        ctx.fillStyle = tint.color;
        ctx.globalAlpha = tint.alpha;
        ctx.fillRect(0, 0, w, skyH);
        ctx.globalAlpha = 1;
    }

    if (weather === 'rainy') {
        // Rain drops
        ctx.strokeStyle = '#88aacc';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.6;
        for (let i = 0; i < 60; i++) {
            const rx = (i * 37 + t * 0.3) % w;
            const ry = (i * 53 + t * 0.5) % h;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 2, ry + 8);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
        // Puddles on road
        ctx.fillStyle = '#5588aa';
        ctx.globalAlpha = 0.3;
        ctx.beginPath(); ctx.ellipse(w * 0.3, h * 0.78, 20, 4, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(w * 0.7, h * 0.79, 15, 3, 0, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
    }

    if (weather === 'foggy') {
        // Fog bands
        ctx.fillStyle = '#ccc';
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < 5; i++) {
            const fy = skyH * 0.4 + i * (h * 0.15);
            const fx = Math.sin(t * 0.0005 + i) * 30;
            ctx.beginPath();
            ctx.ellipse(w * 0.5 + fx, fy, w * 0.6, 15 + i * 5, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    if (weather === 'cloudy') {
        // Extra dark clouds
        ctx.fillStyle = '#778899';
        ctx.globalAlpha = 0.4;
        const cloudOffsets = [0.15, 0.4, 0.65, 0.85];
        for (const cx of cloudOffsets) {
            ctx.beginPath();
            ctx.ellipse(w * cx, skyH * 0.25, 55, 18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(w * cx + 20, skyH * 0.2, 40, 14, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    if (weather === 'sunny') {
        // Sun glow
        const sunX = w * 0.8, sunY = skyH * 0.2;
        const grad = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, 60);
        grad.addColorStop(0, 'rgba(255, 220, 80, 0.6)');
        grad.addColorStop(0.5, 'rgba(255, 200, 50, 0.15)');
        grad.addColorStop(1, 'rgba(255, 200, 50, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, skyH);
        // Sun disc
        ctx.fillStyle = '#ffdd44';
        ctx.beginPath(); ctx.arc(sunX, sunY, 12, 0, Math.PI * 2); ctx.fill();
        // Rays
        ctx.strokeStyle = '#ffee88';
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.4;
        for (let r = 0; r < 8; r++) {
            const angle = r * Math.PI / 4 + t * 0.0003;
            ctx.beginPath();
            ctx.moveTo(sunX + Math.cos(angle) * 16, sunY + Math.sin(angle) * 16);
            ctx.lineTo(sunX + Math.cos(angle) * 28, sunY + Math.sin(angle) * 28);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    if (weather === 'windy') {
        // Wind streaks
        ctx.strokeStyle = '#aabbcc';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        for (let i = 0; i < 10; i++) {
            const wy = skyH * 0.3 + i * (h * 0.06);
            const wx = (t * 0.2 + i * 80) % (w + 100) - 50;
            ctx.beginPath();
            ctx.moveTo(wx, wy);
            ctx.lineTo(wx + 40 + i * 5, wy - 2);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }
}

// --- VAN MOOD INDICATOR ---
function drawVanMood(ctx, x, y, scale) {
    const s = scale || 1;
    const spirits = typeof getSpirits === 'function' && game.party ? getSpirits() : 'Okay';
    let emoji, color;
    switch (spirits) {
        case 'Hopeful':    emoji = '😊'; color = '#34d399'; break;
        case 'Okay':       emoji = '😐'; color = '#fbbf24'; break;
        case 'Worried':    emoji = '😟'; color = '#ff6b6b'; break;
        case 'Despairing': emoji = '😢'; color = '#ff4444'; break;
        default:           emoji = '😐'; color = '#fbbf24'; break;
    }
    // Speech bubble
    const bx = x - 2 * s, by = y - 28 * s;
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.ellipse(bx, by, 10 * s, 8 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    // Emoji
    ctx.font = `${10 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, bx, by);
    ctx.textBaseline = 'alphabetic';
}

function drawRiver(ctx, w, h, skyH) {
    ctx.fillStyle = '#3388cc';
    ctx.beginPath();
    ctx.moveTo(0, skyH + (h - skyH) * 0.3);
    ctx.quadraticCurveTo(w * 0.3, skyH + (h - skyH) * 0.15, w * 0.5, skyH + (h - skyH) * 0.35);
    ctx.quadraticCurveTo(w * 0.7, skyH + (h - skyH) * 0.55, w, skyH + (h - skyH) * 0.4);
    ctx.lineTo(w, h); ctx.lineTo(0, h);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#55aaee';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
        const sx = Math.random() * w;
        const sy = skyH + (h - skyH) * 0.5 + Math.random() * (h - skyH) * 0.3;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + 15 + Math.random() * 20, sy); ctx.stroke();
    }
}

function drawMountains(ctx, w, skyH) {
    ctx.fillStyle = '#667788';
    const peaks = [
        { x: w * 0.1, h: skyH * 0.6 }, { x: w * 0.35, h: skyH * 0.4 },
        { x: w * 0.55, h: skyH * 0.55 }, { x: w * 0.8, h: skyH * 0.45 },
    ];
    for (const p of peaks) {
        ctx.beginPath();
        ctx.moveTo(p.x - 60, skyH); ctx.lineTo(p.x, skyH - p.h); ctx.lineTo(p.x + 60, skyH);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#ddeeff';
        ctx.beginPath();
        ctx.moveTo(p.x - 12, skyH - p.h + 15); ctx.lineTo(p.x, skyH - p.h); ctx.lineTo(p.x + 12, skyH - p.h + 15);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#778899';
    }
}

function drawBuildings(ctx, w, h, skyH) {
    const colors = ['#8B7355', '#a0927a', '#7B8B6F', '#9B8B73'];
    const bw = 50;
    for (let i = 0; i < 5; i++) {
        const bx = 20 + i * (bw + 30);
        const bh = 40 + Math.random() * 30;
        const by = skyH + (h - skyH) * 0.2 - bh;
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(bx, by, bw, bh + (h - skyH) * 0.2);
        ctx.fillStyle = '#5c5040';
        ctx.beginPath();
        ctx.moveTo(bx - 5, by); ctx.lineTo(bx + bw / 2, by - 15); ctx.lineTo(bx + bw + 5, by);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#ffee88';
        ctx.fillRect(bx + bw * 0.3, by + 10, 8, 8);
        ctx.fillStyle = '#3a3020';
        ctx.fillRect(bx + bw * 0.4, by + bh - 18, 12, 18);
    }
}

function drawGarden(ctx, w, h, skyH) {
    drawGround(ctx, w, h, skyH, '#55aa44');
    // Garden rows
    for (let row = 0; row < 4; row++) {
        const ry = skyH + 20 + row * 25;
        ctx.fillStyle = '#6B4226';
        ctx.fillRect(40, ry, w - 80, 8);
        // Plants
        for (let px = 50; px < w - 50; px += 30) {
            ctx.fillStyle = '#33aa33';
            ctx.fillRect(px, ry - 12, 4, 12);
            ctx.beginPath();
            ctx.arc(px + 2, ry - 14, 6, 0, Math.PI * 2);
            ctx.fill();
            if (Math.random() < 0.3) {
                ctx.fillStyle = '#ff6666';
                ctx.beginPath(); ctx.arc(px + 2, ry - 16, 3, 0, Math.PI * 2); ctx.fill();
            }
        }
    }
    // Fence
    ctx.fillStyle = '#8B7355';
    for (let fx = 20; fx < w; fx += 40) {
        ctx.fillRect(fx, skyH + 5, 4, h - skyH - 10);
    }
    ctx.fillRect(20, skyH + 15, w - 40, 3);
}

// --- GUIDE SCENE (replaces Matt) ---
function drawGuideScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0a1a0a';
    ctx.fillRect(0, 0, w, h);

    // Draw guide character
    const gx = 70, gy = 50;
    // Body (green vest)
    ctx.fillStyle = '#34d399';
    ctx.fillRect(gx - 12, gy + 30, 24, 40);
    // Shirt
    ctx.fillStyle = '#fff';
    ctx.fillRect(gx - 15, gy + 20, 30, 15);
    // Arms
    ctx.fillStyle = '#c8a080';
    ctx.fillRect(gx - 22, gy + 22, 8, 25);
    ctx.fillRect(gx + 14, gy + 22, 8, 25);
    // Head
    ctx.fillStyle = '#c8a080';
    ctx.fillRect(gx - 10, gy, 20, 20);
    // Hair
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(gx - 12, gy - 4, 24, 8);
    // Eyes
    ctx.fillStyle = '#fff';
    ctx.fillRect(gx - 6, gy + 6, 5, 4);
    ctx.fillRect(gx + 1, gy + 6, 5, 4);
    ctx.fillStyle = '#000';
    ctx.fillRect(gx - 4, gy + 7, 2, 2);
    ctx.fillRect(gx + 3, gy + 7, 2, 2);
    // Smile
    ctx.fillStyle = '#000';
    ctx.fillRect(gx - 4, gy + 14, 8, 1);
    // HOPE badge
    ctx.fillStyle = '#34d399';
    ctx.fillRect(gx + 14, gy + 32, 12, 8);
    ctx.fillStyle = '#fff';
    ctx.font = '5px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('H', gx + 20, gy + 39);
    // Pants
    ctx.fillStyle = '#446';
    ctx.fillRect(gx - 12, gy + 70, 10, 25);
    ctx.fillRect(gx + 2, gy + 70, 10, 25);
    // Shoes
    ctx.fillStyle = '#5c3a1e';
    ctx.fillRect(gx - 14, gy + 92, 12, 6);
    ctx.fillRect(gx + 2, gy + 92, 12, 6);

    // Speech text
    ctx.fillStyle = '#d4e8d4';
    ctx.font = '11px "Press Start 2P", monospace';
    ctx.textAlign = 'left';
    const lines = [
        "Hi! I'm Sam, your guide.",
        "Your family is heading to",
        "Hope Valley, Oregon!",
        "",
        "Along the way you'll see",
        "places where nature is",
        "hurting — but also where",
        "people are finding HOPE.",
        "",
        "Look for the 4 markers:",
        "  ❤️ Motivation  🌿 Belief",
        "  🗺️ Plans      ⚡ Agency",
    ];
    let ty = 30;
    for (const line of lines) {
        ctx.fillText(line, 150, ty);
        ty += 18;
    }
}

// --- COMPOSED SCENES ---
function drawTrailScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.45;
    const region = getRegion(game.miles);
    ctx.clearRect(0, 0, w, h);
    drawSky(ctx, w, h, skyH, region);
    drawClouds(ctx, w, skyH);
    if (region.mountains) drawMountains(ctx, w, skyH);
    drawGround(ctx, w, h, skyH, region.ground, region.groundAccent);
    if (region.prairie) {
        // Wildflowers on prairie
        const colors = ['#fbbf24','#ff6b6b','#a855f7','#fff'];
        for (let i = 0; i < 20; i++) {
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.arc(Math.random() * w, skyH + 10 + Math.random() * (h - skyH - 50), 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    drawRoad(ctx, w, h, skyH);
    if (region.trees) {
        drawTree(ctx, w * 0.1, skyH + 10, 30);
        drawTree(ctx, w * 0.85, skyH + 5, 35);
        if (game.miles < 800) drawTree(ctx, w * 0.6, skyH + 15, 25);
    }
    const progress = Math.min(game.miles / TOTAL_MILES, 1);
    const vx = w - 80 - progress * (w - 200);
    drawVan(ctx, vx, h * 0.62, 1.2);
    // Weather effects
    if (game.weather) drawWeatherOverlay(ctx, w, h, skyH, game.weather);
}

function drawTownScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.4;
    ctx.clearRect(0, 0, w, h);
    drawSky(ctx, w, h, skyH);
    drawClouds(ctx, w, skyH);
    drawGround(ctx, w, h, skyH, '#a08060');
    drawBuildings(ctx, w, h, skyH);
    drawVan(ctx, w * 0.3, h * 0.66, 1.0);
}

function drawRiverScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.4;
    ctx.clearRect(0, 0, w, h);
    drawSky(ctx, w, h, skyH);
    drawClouds(ctx, w, skyH);
    drawGround(ctx, w, h, skyH, '#44aa44');
    drawRiver(ctx, w, h, skyH);
    drawTree(ctx, w * 0.75, skyH + 15, 40);
    drawTree(ctx, w * 0.15, skyH + 20, 30);
}

function drawMountainScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.45;
    ctx.clearRect(0, 0, w, h);
    drawSky(ctx, w, h, skyH);
    drawClouds(ctx, w, skyH);
    drawMountains(ctx, w, skyH);
    drawGround(ctx, w, h, skyH, '#6a8a4a');
    drawRoad(ctx, w, h, skyH);
    drawVan(ctx, w * 0.5, h * 0.62, 1.0);
}

function drawGardenScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.35;
    ctx.clearRect(0, 0, w, h);
    drawSky(ctx, w, h, skyH);
    drawClouds(ctx, w, skyH);
    drawGarden(ctx, w, h, skyH);
}

// --- ST. PAUL SCENES ---
function drawStPaulScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.4;
    ctx.clearRect(0, 0, w, h);

    // Sky — Minnesota blue
    ctx.fillStyle = '#5588bb';
    ctx.fillRect(0, 0, w, skyH);
    ctx.fillStyle = '#99ccdd';
    ctx.fillRect(0, skyH * 0.7, w, skyH * 0.3);
    drawClouds(ctx, w, skyH);

    // Ground — city
    ctx.fillStyle = '#8a8a7a';
    ctx.fillRect(0, skyH, w, h - skyH);
    ctx.fillStyle = '#6a6a5a';
    ctx.fillRect(0, skyH, w, 4);

    // State Capitol building (center)
    const cx = w * 0.5, baseY = skyH + 10;
    // Main building body
    ctx.fillStyle = '#e8dcc8';
    ctx.fillRect(cx - 80, baseY + 30, 160, 60);
    // Wings
    ctx.fillStyle = '#d8ccb8';
    ctx.fillRect(cx - 110, baseY + 45, 35, 45);
    ctx.fillRect(cx + 75, baseY + 45, 35, 45);
    // Steps
    ctx.fillStyle = '#ccc0a8';
    ctx.fillRect(cx - 60, baseY + 88, 120, 8);
    ctx.fillRect(cx - 70, baseY + 94, 140, 6);
    // Columns
    ctx.fillStyle = '#f0e8d8';
    for (let i = 0; i < 6; i++) {
        ctx.fillRect(cx - 50 + i * 20, baseY + 35, 4, 50);
    }
    // Dome base
    ctx.fillStyle = '#d0c8b0';
    ctx.fillRect(cx - 35, baseY + 5, 70, 28);
    // Dome
    ctx.fillStyle = '#c8c0a8';
    ctx.beginPath();
    ctx.ellipse(cx, baseY + 8, 30, 25, 0, Math.PI, 0);
    ctx.fill();
    // Dome cap (gold)
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.ellipse(cx, baseY - 12, 12, 10, 0, Math.PI, 0);
    ctx.fill();
    // Lantern on top
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(cx - 3, baseY - 28, 6, 16);
    ctx.beginPath();
    ctx.arc(cx, baseY - 30, 5, 0, Math.PI * 2);
    ctx.fill();
    // Windows
    ctx.fillStyle = '#aaddff';
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(cx - 55 + i * 25, baseY + 50, 8, 12);
    }
    // Flag
    ctx.fillStyle = '#333';
    ctx.fillRect(cx + 50, baseY + 20, 2, 30);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(cx + 52, baseY + 20, 15, 10);

    // Trees around capitol
    drawTree(ctx, cx - 140, skyH + 35, 30);
    drawTree(ctx, cx + 145, skyH + 30, 28);

    // Road and van
    drawRoad(ctx, w, h, skyH);
    drawVan(ctx, w * 0.25, h * 0.62, 1.0);

    // Label
    ctx.fillStyle = '#fbbf24';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Minnesota State Capitol', cx, baseY + 108);
}

function drawStateFairScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.38;
    ctx.clearRect(0, 0, w, h);

    // Warm summer sky
    ctx.fillStyle = '#5599cc';
    ctx.fillRect(0, 0, w, skyH);
    ctx.fillStyle = '#88ccee';
    ctx.fillRect(0, skyH * 0.7, w, skyH * 0.3);
    drawClouds(ctx, w, skyH);

    // Fairground (dirt/grass)
    ctx.fillStyle = '#c8b080';
    ctx.fillRect(0, skyH, w, h - skyH);
    ctx.fillStyle = '#b0a070';
    ctx.fillRect(0, skyH, w, 4);

    // Ferris wheel (left side)
    const fwx = 100, fwy = skyH - 20, fwr = 55;
    ctx.strokeStyle = '#cc4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(fwx, fwy, fwr, 0, Math.PI * 2);
    ctx.stroke();
    // Spokes
    for (let a = 0; a < 8; a++) {
        const angle = a * Math.PI / 4;
        ctx.beginPath();
        ctx.moveTo(fwx, fwy);
        ctx.lineTo(fwx + Math.cos(angle) * fwr, fwy + Math.sin(angle) * fwr);
        ctx.stroke();
    }
    // Gondolas
    ctx.fillStyle = '#3388cc';
    for (let a = 0; a < 8; a++) {
        const angle = a * Math.PI / 4;
        ctx.fillRect(fwx + Math.cos(angle) * fwr - 5, fwy + Math.sin(angle) * fwr - 4, 10, 8);
    }
    // Support
    ctx.fillStyle = '#888';
    ctx.beginPath();
    ctx.moveTo(fwx - 15, skyH + (h - skyH) * 0.6);
    ctx.lineTo(fwx, fwy + fwr);
    ctx.lineTo(fwx + 15, skyH + (h - skyH) * 0.6);
    ctx.closePath();
    ctx.fill();

    // Food stands (center)
    const stands = [
        { x: 220, color: '#cc4444', label: 'FOOD' },
        { x: 310, color: '#44aa44', label: 'FAIR' },
        { x: 400, color: '#cc8844', label: 'FUN' },
    ];
    for (const s of stands) {
        ctx.fillStyle = s.color;
        ctx.fillRect(s.x - 25, skyH + 15, 50, 35);
        // Roof
        ctx.beginPath();
        ctx.moveTo(s.x - 30, skyH + 15);
        ctx.lineTo(s.x, skyH - 5);
        ctx.lineTo(s.x + 30, skyH + 15);
        ctx.closePath();
        ctx.fill();
        // Sign
        ctx.fillStyle = '#fff';
        ctx.font = '7px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(s.label, s.x, skyH + 38);
        // Window
        ctx.fillStyle = '#ffee88';
        ctx.fillRect(s.x - 8, skyH + 25, 16, 10);
    }

    // Crowds (simple dots of people)
    const crowdColors = ['#cc4444', '#3388cc', '#44aa44', '#fbbf24', '#a855f7', '#ff6b6b'];
    for (let i = 0; i < 25; i++) {
        const px = 160 + Math.random() * 340;
        const py = skyH + 55 + Math.random() * 35;
        ctx.fillStyle = crowdColors[i % crowdColors.length];
        ctx.beginPath(); ctx.arc(px, py - 4, 3, 0, Math.PI * 2); ctx.fill(); // head
        ctx.fillRect(px - 2, py, 4, 8); // body
    }

    // Banner
    ctx.fillStyle = '#fbbf24';
    ctx.font = '9px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('The Great Minnesota', w * 0.5, h - 30);
    ctx.fillText('Get-Together', w * 0.5, h - 16);

    drawVan(ctx, w * 0.85, h * 0.62, 0.8);
}

function drawUniversityScene(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.4;
    ctx.clearRect(0, 0, w, h);

    // Sky
    ctx.fillStyle = '#5588bb';
    ctx.fillRect(0, 0, w, skyH);
    ctx.fillStyle = '#99ccdd';
    ctx.fillRect(0, skyH * 0.7, w, skyH * 0.3);
    drawClouds(ctx, w, skyH);

    // Campus grounds (green lawn)
    ctx.fillStyle = '#3a8a3a';
    ctx.fillRect(0, skyH, w, h - skyH);
    ctx.fillStyle = '#2a6a2a';
    ctx.fillRect(0, skyH, w, 4);

    // Northrop Mall / main building (center) — maroon brick
    const bx = w * 0.5, baseY = skyH + 5;
    // Main hall
    ctx.fillStyle = '#7a2230';
    ctx.fillRect(bx - 70, baseY + 20, 140, 65);
    // Columns (Greek revival)
    ctx.fillStyle = '#d8ccb8';
    for (let i = 0; i < 6; i++) {
        ctx.fillRect(bx - 55 + i * 22, baseY + 25, 5, 55);
    }
    // Pediment (triangular top)
    ctx.fillStyle = '#7a2230';
    ctx.beginPath();
    ctx.moveTo(bx - 75, baseY + 22);
    ctx.lineTo(bx, baseY);
    ctx.lineTo(bx + 75, baseY + 22);
    ctx.closePath();
    ctx.fill();
    // Steps
    ctx.fillStyle = '#ccc0a8';
    ctx.fillRect(bx - 50, baseY + 83, 100, 6);
    ctx.fillRect(bx - 55, baseY + 88, 110, 5);
    // Windows
    ctx.fillStyle = '#aaddff';
    for (let i = 0; i < 5; i++) {
        ctx.fillRect(bx - 50 + i * 22, baseY + 35, 8, 14);
        ctx.fillRect(bx - 50 + i * 22, baseY + 55, 8, 14);
    }
    // "U of M" sign
    ctx.fillStyle = '#fbbf24';
    ctx.font = '10px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('U of M', bx, baseY + 14);

    // Side buildings
    ctx.fillStyle = '#8a3040';
    ctx.fillRect(bx - 160, baseY + 35, 60, 50);
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(bx - 148, baseY + 42, 8, 10);
    ctx.fillRect(bx - 130, baseY + 42, 8, 10);
    ctx.fillRect(bx - 148, baseY + 58, 8, 10);
    ctx.fillRect(bx - 130, baseY + 58, 8, 10);

    ctx.fillStyle = '#8a3040';
    ctx.fillRect(bx + 100, baseY + 35, 60, 50);
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(bx + 112, baseY + 42, 8, 10);
    ctx.fillRect(bx + 130, baseY + 42, 8, 10);
    ctx.fillRect(bx + 112, baseY + 58, 8, 10);
    ctx.fillRect(bx + 130, baseY + 58, 8, 10);

    // Trees on campus
    drawTree(ctx, bx - 200, skyH + 25, 35);
    drawTree(ctx, bx + 195, skyH + 20, 30);
    drawTree(ctx, bx - 90, skyH + 50, 25);
    drawTree(ctx, bx + 90, skyH + 45, 28);

    // Walking path
    ctx.fillStyle = '#b0a080';
    ctx.fillRect(bx - 20, baseY + 92, 40, h - baseY - 92);

    // Students (simple pixel people)
    const studentColors = ['#7a2230', '#3388cc', '#44aa44', '#fbbf24'];
    for (let i = 0; i < 8; i++) {
        const sx = bx - 100 + Math.random() * 200;
        const sy = baseY + 95 + Math.random() * 20;
        ctx.fillStyle = studentColors[i % studentColors.length];
        ctx.beginPath(); ctx.arc(sx, sy - 4, 3, 0, Math.PI * 2); ctx.fill();
        ctx.fillRect(sx - 2, sy, 4, 7);
    }

    // Road and van
    drawRoad(ctx, w, h, skyH);
    drawVan(ctx, w * 0.15, h * 0.62, 1.0);
}

function drawLandmarkScene(canvas, landmark) {
    if (landmark.scene === 'river') drawRiverScene(canvas);
    else if (landmark.scene === 'mountain') drawMountainScene(canvas);
    else if (landmark.scene === 'garden') drawGardenScene(canvas);
    else if (landmark.scene === 'stpaul') drawStPaulScene(canvas);
    else if (landmark.scene === 'statefair') drawStateFairScene(canvas);
    else if (landmark.scene === 'university') drawUniversityScene(canvas);
    else if (landmark.scene === 'prairie') {
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        const skyH = h * 0.5;
        ctx.clearRect(0, 0, w, h);
        drawSky(ctx, w, h, skyH);
        drawClouds(ctx, w, skyH);
        drawGround(ctx, w, h, skyH, '#88aa55');
        drawRoad(ctx, w, h, skyH);
        // Wildflowers
        const colors = ['#ff6b6b','#fbbf24','#a855f7','#38bdf8'];
        for (let i = 0; i < 30; i++) {
            ctx.fillStyle = colors[i % colors.length];
            ctx.beginPath();
            ctx.arc(Math.random() * w, skyH + 10 + Math.random() * (h - skyH - 40), 3, 0, Math.PI * 2);
            ctx.fill();
        }
        drawVan(ctx, w * 0.5, h * 0.62, 1.0);
    } else {
        drawTownScene(canvas);
    }
}

// --- TRAVEL ANIMATION ---
let travelAnim = null;

function playTravelAnimation(milesGained, onComplete) {
    const canvas = document.getElementById('scene-canvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const skyH = h * 0.45;

    document.getElementById('actions').innerHTML =
        '<p class="action-prompt">Driving... <span class="blink">_</span></p>';
    document.getElementById('event-text').innerHTML = '';

    const paceSpeed = { slow: 1.0, steady: 1.6, fast: 2.4 };
    const speed = paceSpeed[game.pace] || 1.6;
    const durationMs = Math.max(3000, Math.min(6000, 5000 / speed));
    const startTime = performance.now();

    const scenery = [];
    const region = getRegion(game.miles);
    const hasMountains = region.mountains;
    for (let i = 0; i < 12; i++) {
        const kind = Math.random();
        scenery.push({
            type: kind < 0.5 ? 'tree' : kind < 0.7 ? 'bush' : kind < 0.85 ? 'sign' : 'flower',
            xBase: Math.random() * w * 3,
            side: Math.random() < 0.5 ? -1 : 1,
            size: 15 + Math.random() * 25,
            layer: Math.random() < 0.3 ? 0 : 1,
        });
    }

    const clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * w * 2,
            y: 10 + Math.random() * (skyH * 0.5),
            rx: 30 + Math.random() * 50,
            ry: 8 + Math.random() * 12,
        });
    }

    const peaks = hasMountains ? [
        { x: 0, h: skyH * 0.55 }, { x: 150, h: skyH * 0.4 },
        { x: 320, h: skyH * 0.6 }, { x: 500, h: skyH * 0.35 },
        { x: 680, h: skyH * 0.5 }, { x: 850, h: skyH * 0.45 },
    ] : [];

    let milesShown = Math.floor(game.miles - milesGained);
    if (travelAnim) cancelAnimationFrame(travelAnim);

    function frame(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const scroll = progress * w * 2 * speed;

        ctx.clearRect(0, 0, w, h);

        // Sky (region-based)
        ctx.fillStyle = region.skyTop;
        ctx.fillRect(0, 0, w, skyH);
        ctx.fillStyle = region.skyBottom;
        ctx.fillRect(0, skyH * 0.7, w, skyH * 0.3);

        // Clouds
        ctx.fillStyle = '#fff';
        for (const c of clouds) {
            const cx = ((c.x + scroll * 0.15) % (w + c.rx * 4)) - c.rx * 2;
            ctx.beginPath(); ctx.ellipse(cx, c.y, c.rx, c.ry, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(cx + c.rx * 0.3, c.y - c.ry * 0.5, c.rx * 0.6, c.ry * 0.7, 0, 0, Math.PI * 2); ctx.fill();
        }

        // Mountains
        if (hasMountains) {
            for (const p of peaks) {
                const mx = ((p.x + scroll * 0.1) % (w + 200)) - 100;
                ctx.fillStyle = '#667788';
                ctx.beginPath(); ctx.moveTo(mx - 70, skyH); ctx.lineTo(mx, skyH - p.h); ctx.lineTo(mx + 70, skyH); ctx.closePath(); ctx.fill();
                ctx.fillStyle = '#ddeeff';
                ctx.beginPath(); ctx.moveTo(mx - 14, skyH - p.h + 16); ctx.lineTo(mx, skyH - p.h); ctx.lineTo(mx + 14, skyH - p.h + 16); ctx.closePath(); ctx.fill();
            }
        }

        // Ground (region-based)
        ctx.fillStyle = region.ground;
        ctx.fillRect(0, skyH, w, h - skyH);
        ctx.fillStyle = region.groundAccent;
        ctx.fillRect(0, skyH, w, 4);

        // Prairie wildflowers
        if (region.prairie) {
            const prairieColors = ['#fbbf24','#ff6b6b','#a855f7','#fff'];
            for (let i = 0; i < 15; i++) {
                const fx = ((i * 47 + scroll * 0.3) % w + w) % w;
                const fy = skyH + 8 + (i * 13) % (h - skyH - 45);
                ctx.fillStyle = prairieColors[i % prairieColors.length];
                ctx.beginPath(); ctx.arc(fx, fy, 2.5, 0, Math.PI * 2); ctx.fill();
            }
        }

        // Road
        const roadY = h * 0.74;
        const roadH = h * 0.1;
        ctx.fillStyle = '#666';
        ctx.fillRect(0, roadY, w, roadH);
        ctx.strokeStyle = '#ffcc00';
        ctx.setLineDash([20, 15]);
        ctx.lineWidth = 2;
        for (let lx = 0; lx < w; lx += 35) {
            const lineX = ((lx + scroll * 1.0) % w + w) % w;
            ctx.beginPath(); ctx.moveTo(lineX, roadY + roadH / 2); ctx.lineTo(lineX + 15, roadY + roadH / 2); ctx.stroke();
        }
        ctx.setLineDash([]);

        // Scenery
        for (const s of scenery) {
            const layerSpeed = s.layer === 0 ? 0.4 : 1.0;
            const sx = ((s.xBase + scroll * layerSpeed) % (w * 2) + w * 2) % (w * 2) - w * 0.3;
            const sy = s.side === 1 ? roadY + roadH + 5 + s.size * 0.2 : roadY - 5 - s.size * 0.2;
            if (sx < -50 || sx > w + 50) continue;
            ctx.globalAlpha = s.layer === 0 ? 0.6 : 1.0;
            if (s.type === 'tree' && region.trees) {
                drawTree(ctx, sx, sy, s.size * (s.layer === 0 ? 0.6 : 1));
            } else if (s.type === 'tree' && !region.trees) {
                // Skip trees in treeless regions — show a bush instead
                ctx.fillStyle = '#8a8a42';
                ctx.beginPath(); ctx.ellipse(sx, sy, s.size * 0.25, s.size * 0.15, 0, 0, Math.PI * 2); ctx.fill();
            } else if (s.type === 'bush') {
                ctx.fillStyle = '#2a7722';
                ctx.beginPath(); ctx.ellipse(sx, sy, s.size * 0.4, s.size * 0.25, 0, 0, Math.PI * 2); ctx.fill();
            } else if (s.type === 'sign') {
                ctx.fillStyle = '#5c3a1e';
                ctx.fillRect(sx - 2, sy - 15, 4, 20);
                ctx.fillStyle = '#34d399';
                ctx.fillRect(sx - 10, sy - 22, 20, 10);
            } else {
                const fc = ['#ff6b6b','#fbbf24','#a855f7'][Math.floor(sx) % 3];
                ctx.fillStyle = fc;
                ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
            }
            ctx.globalAlpha = 1;
        }

        // Van
        const vanX = w * 0.45;
        const vanY = roadY - 12;
        const bounce = Math.sin(elapsed * 0.008) * 1;
        drawAnimatedVan(ctx, vanX, vanY + bounce, 1.3, scroll, elapsed);

        // Weather effects during travel
        if (game.weather) drawWeatherOverlay(ctx, w, h, skyH, game.weather, elapsed);

        // Miles counter
        milesShown = Math.floor((game.miles - milesGained) + milesGained * progress);
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(w - 140, 6, 134, 22);
        ctx.fillStyle = '#fff';
        ctx.font = '10px "Press Start 2P", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${milesShown} miles`, w - 12, 22);
        document.getElementById('miles').textContent = milesShown;

        if (progress < 1) {
            travelAnim = requestAnimationFrame(frame);
        } else {
            travelAnim = null;
            onComplete();
        }
    }
    travelAnim = requestAnimationFrame(frame);
}

function drawAnimatedVan(ctx, x, y, scale, scroll, time) {
    const s = scale;
    // Body
    ctx.fillStyle = '#3388cc';
    ctx.fillRect(x - 22 * s, y - 5 * s, 44 * s, 22 * s);
    // Roof
    ctx.fillStyle = '#2277bb';
    ctx.fillRect(x - 18 * s, y - 14 * s, 36 * s, 10 * s);
    // Roof rack
    ctx.fillStyle = '#5c3a1e';
    ctx.fillRect(x - 14 * s, y - 17 * s, 28 * s, 3 * s);
    // Windshield
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(x - 20 * s, y - 12 * s, 10 * s, 8 * s);
    // Windows
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(x - 6 * s, y - 12 * s, 8 * s, 8 * s);
    ctx.fillRect(x + 6 * s, y - 12 * s, 8 * s, 8 * s);
    // Tail lights
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(x + 20 * s, y - 2 * s, 3 * s, 4 * s);
    ctx.fillRect(x + 20 * s, y + 10 * s, 3 * s, 4 * s);
    // Bumper sticker
    ctx.fillStyle = '#34d399';
    ctx.fillRect(x + 14 * s, y + 6 * s, 8 * s, 4 * s);
    // Mood
    if (game.party) drawVanMood(ctx, x, y, s);
    // Wheels (spinning)
    const wheelAngle = scroll * 0.05;
    const wheels = [
        { cx: x - 12 * s, cy: y + 17 * s, r: 6 * s },
        { cx: x + 12 * s, cy: y + 17 * s, r: 6 * s },
    ];
    for (const wh of wheels) {
        ctx.fillStyle = '#333';
        ctx.beginPath(); ctx.arc(wh.cx, wh.cy, wh.r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#888';
        ctx.beginPath(); ctx.arc(wh.cx, wh.cy, 2.5 * s, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        for (let sp = 0; sp < 4; sp++) {
            const angle = wheelAngle + (sp * Math.PI / 2);
            ctx.beginPath(); ctx.moveTo(wh.cx, wh.cy);
            ctx.lineTo(wh.cx + Math.cos(angle) * wh.r * 0.8, wh.cy + Math.sin(angle) * wh.r * 0.8);
            ctx.stroke();
        }
    }
}

// =====================
// GAME STATE
// =====================
let game = {};
let store = { money: 500, gas: 0, food: 0, supplies: 0 };
let hopeScore = { h: 0, o: 0, p: 0, e: 0 };
let challengeIndex = 0;

// =====================
// SCREEN MANAGEMENT
// =====================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function goBackToHOPE() {
    // Navigate to parent HOPE Framework if embedded, else just stay
    if (window.parent !== window) {
        window.parent.postMessage({ type: 'hope-trail-exit' }, '*');
    } else {
        window.location.href = '../index.html';
    }
}

// =====================
// MAIN MENU
// =====================
function menuChoice(n) {
    sfx_select();
    switch (n) {
        case 1: showScreen('name-screen'); break;
        case 2:
            document.getElementById('learn-text').innerText = HOPE_INFO;
            showScreen('learn-screen');
            break;
        case 3: toggleSound(); break;
    }
}

function toggleSound() {
    soundOn = !soundOn;
    document.getElementById('sound-toggle-label').textContent = soundOn ? 'off' : 'on';
    if (soundOn) sfx_select();
}

// =====================
// GUIDE INTRO & PACKING
// =====================
function goToGuide() {
    sfx_select();
    drawGuideScene(document.getElementById('guide-canvas'));
    showScreen('guide-screen');
}

function goToPack() {
    sfx_select();
    store = { money: 500, gas: 0, food: 0, supplies: 0 };
    updateStoreUI();
    showScreen('supply-screen');
}

function buySupply(type) {
    sfx_coin();
    const msg = document.getElementById('store-msg');
    if (type === 'gas' && store.money >= 50) {
        store.gas += 1; store.money -= 50;
        msg.textContent = 'Filled 1 gas tank for $50.';
    } else if (type === 'food' && store.money >= 20) {
        store.food += 10; store.money -= 20;
        msg.textContent = 'Bought 10 meals for $20.';
    } else if (type === 'supplies' && store.money >= 30) {
        store.supplies += 1; store.money -= 30;
        msg.textContent = 'Bought camping supplies for $30.';
    } else {
        sfx_bad();
        msg.textContent = "Can't afford that!";
    }
    updateStoreUI();
}

function updateStoreUI() {
    document.getElementById('store-money').textContent = '$' + store.money;
    document.getElementById('store-gas').textContent = store.gas;
    document.getElementById('store-food').textContent = store.food;
    document.getElementById('store-supplies').textContent = store.supplies;
}

function leaveStore() {
    sfx_select();
    if (store.gas < 1) {
        document.getElementById('store-msg').textContent = 'You need at least 1 tank of gas!';
        sfx_bad(); return;
    }
    if (store.food < 10) {
        document.getElementById('store-msg').textContent = 'Buy more food! (at least 10 meals)';
        sfx_bad(); return;
    }
    showScreen('depart-screen');
}

// =====================
// SEASON / DEPARTURE
// =====================
function setSeason(monthIndex) {
    sfx_select();

    const defaults = ['Alex', 'Jordan', 'Riley', 'Buddy'];
    const roles = ['Leader', 'Partner', 'Child', 'Pet'];
    const party = [];
    for (let i = 0; i < 4; i++) {
        const input = document.getElementById(`name-${i}`);
        const name = input.value.trim() || defaults[i];
        party.push({ name, status: 'healthy', role: roles[i] });
    }

    game = {
        miles: 0, day: 1, month: monthIndex, year: 2026,
        food: store.food, money: store.money,
        gas: store.gas, supplies: store.supplies,
        pace: 'steady', nextLandmark: 1,
        gameOver: false, party: party, weather: 'clear',
    };

    hopeScore = { h: 0, o: 0, p: 0, e: 0 };
    challengeIndex = 0;

    showScreen('route-screen');
}

function setRoute(route) {
    sfx_select();
    game.route = route;

    if (route === 'north') {
        LANDMARKS = LANDMARKS_NORTH;
        HOPE_CHALLENGES = HOPE_CHALLENGES_NORTH;
        MAP_ROUTE = MAP_ROUTE_NORTH;
        REGIONS = REGIONS_NORTH;
    } else {
        LANDMARKS = LANDMARKS_SOUTH;
        HOPE_CHALLENGES = HOPE_CHALLENGES_SOUTH;
        MAP_ROUTE = MAP_ROUTE_SOUTH;
        REGIONS = REGIONS_SOUTH;
    }

    drawTownScene(document.getElementById('town-canvas'));
    document.getElementById('town-label').textContent = 'Greenville';
    document.getElementById('town-date').textContent = `${MONTH_NAMES[game.month]} 1, 2026`;
    showScreen('town-screen');
}

function departTown() {
    sfx_select();
    showScreen('game-screen');
    updateUI();
    showEvent(
        'The journey begins!',
        `The ${game.party[0].name} family leaves Greenville heading for Hope Valley, Oregon. ` +
        `The road is 2,000 miles long. Look for HOPE along the way!`
    );
    showGameMenu();
}

// =====================
// UI UPDATES
// =====================
function updateUI() {
    document.getElementById('date').textContent =
        `${MONTH_NAMES[game.month]} ${game.day}, ${game.year}`;
    document.getElementById('miles').textContent = Math.floor(game.miles);
    document.getElementById('food').textContent = Math.floor(game.food);
    document.getElementById('money').textContent = Math.floor(game.money);
    document.getElementById('gas').textContent = game.gas;
    document.getElementById('supplies').textContent = game.supplies;
    document.getElementById('weather').textContent = game.weather;
    document.getElementById('pace-label').textContent = game.pace;

    const healthEl = document.getElementById('health');
    const level = getSpirits();
    healthEl.textContent = level;
    healthEl.className = '';
    if (level === 'Hopeful') healthEl.classList.add('spirits-hopeful');
    else if (level === 'Okay') healthEl.classList.add('spirits-okay');
    else if (level === 'Worried') healthEl.classList.add('spirits-worried');
    else healthEl.classList.add('spirits-despairing');

    const nextLm = LANDMARKS[game.nextLandmark];
    if (nextLm) {
        document.getElementById('next-lm').textContent =
            `${nextLm.mile - Math.floor(game.miles)}`;
    } else {
        document.getElementById('next-lm').textContent = '0';
    }

    const partyList = document.getElementById('party-list');
    partyList.innerHTML = '';
    for (const member of game.party) {
        const span = document.createElement('span');
        span.className = `party-member ${member.status}`;
        const icon = member.status === 'healthy' ? '♥' :
                     member.status === 'worried' ? '▼' : '✝';
        span.textContent = `${icon}${member.name} `;
        partyList.appendChild(span);
    }

    // HOPE scores
    document.getElementById('score-m').textContent = hopeScore.h;
    document.getElementById('score-o').textContent = hopeScore.o;
    document.getElementById('score-p').textContent = hopeScore.p;
    document.getElementById('score-e').textContent = hopeScore.e;

    // Location bar
    const prevLm = game.nextLandmark > 0 ? LANDMARKS[game.nextLandmark - 1] : LANDMARKS[0];
    const nextLm2 = LANDMARKS[game.nextLandmark];
    const region = getRegion(game.miles);
    document.getElementById('location-last').textContent = '← ' + prevLm.name;
    document.getElementById('location-current').textContent = '📍 ' + region.name;
    document.getElementById('location-next').textContent = (nextLm2 ? nextLm2.name : 'Hope Valley!') + ' →';

    const sceneCanvas = document.getElementById('scene-canvas');
    if (sceneCanvas) drawTrailScene(sceneCanvas);
}

function getSpirits() {
    const total = hopeScore.h + hopeScore.o + hopeScore.p + hopeScore.e;
    const worried = game.party.filter(m => m.status === 'worried').length;
    if (total >= 6 && worried === 0) return 'Hopeful';
    if (total >= 3) return 'Okay';
    if (worried >= 2) return 'Worried';
    if (game.food <= 0) return 'Despairing';
    return 'Okay';
}

// =====================
// EVENT DISPLAY
// =====================
function showEvent(title, text) {
    const area = document.getElementById('event-text');
    area.innerHTML = '';
    if (title) area.innerHTML += `<div class="event-title">${title}</div>`;
    area.innerHTML += `<p>${text}</p>`;
}
function appendEvent(text) {
    document.getElementById('event-text').innerHTML += `<p>${text}</p>`;
}

// =====================
// GAME MENU
// =====================
function showGameMenu() {
    if (game.gameOver) return;
    const container = document.getElementById('actions');
    container.innerHTML = `
        <ol class="menu-list">
            <li><span class="menu-option" onclick="doTravel()">Continue driving</span></li>
            <li><span class="menu-option" onclick="doStatus()">Check supplies</span></li>
            <li><span class="menu-option" onclick="changePace()">Change pace (${game.pace})</span></li>
            <li><span class="menu-option" onclick="doRest()">Stop and rest</span></li>
            <li><span class="menu-option" onclick="showMap()">View map</span></li>
        </ol>
        <p class="action-prompt">What is your choice? <span class="blink">_</span></p>
    `;
}

function showContinueToMenu() {
    document.getElementById('actions').innerHTML =
        '<p class="action-prompt"><span class="menu-option" onclick="resumeTrail()">Press ENTER to continue</span></p>';
}

function resumeTrail() {
    sfx_select();
    const nextLm = LANDMARKS[game.nextLandmark];
    showEvent('On the road',
        `You are ${Math.floor(game.miles)} miles from Greenville. ` +
        `Next stop: ${nextLm ? nextLm.name : 'Hope Valley!'}.`
    );
    showGameMenu();
}

// =====================
// PACE
// =====================
function changePace() {
    sfx_select();
    document.getElementById('actions').innerHTML = `
        <ol class="menu-list">
            <li><span class="menu-option" onclick="setPace('slow')">Leisurely drive</span></li>
            <li><span class="menu-option" onclick="setPace('steady')">Steady drive</span></li>
            <li><span class="menu-option" onclick="setPace('fast')">Push it fast</span></li>
        </ol>
        <p class="action-prompt">Choose your pace:</p>
    `;
}

function setPace(p) {
    sfx_select();
    game.pace = p;
    showEvent('Pace changed', `You are now driving at a ${p} pace.`);
    updateUI();
    showGameMenu();
}

// =====================
// TRAVEL
// =====================
function doTravel() {
    sfx_travel();

    const pace = PACE_CONFIG[game.pace];
    const baseMiles = pace.milesMin + Math.floor(Math.random() * (pace.milesMax - pace.milesMin));
    const worried = game.party.filter(m => m.status === 'worried').length;
    const milesGained = Math.max(10, baseMiles - worried * 5);

    game.miles += milesGained;

    const alive = game.party.filter(m => m.status !== 'left').length;
    game.food -= alive * pace.foodMult;
    if (game.food < 0) game.food = 0;

    // Gas consumption — roughly 1 tank every ~200 miles
    if (Math.random() < milesGained / 200) {
        if (game.gas > 0) {
            game.gas--;
        } else {
            // Out of gas — costs money or loses miles
            if (game.money >= 60) {
                game.money -= 60;
            } else {
                game.miles -= milesGained * 0.5;
                if (game.miles < 0) game.miles = 0;
            }
        }
    }

    // Fast pace stress
    if (Math.random() < pace.stressChance) {
        const healthy = game.party.filter(m => m.status === 'healthy');
        if (healthy.length > 0) {
            const victim = healthy[Math.floor(Math.random() * healthy.length)];
            if (victim.role !== 'Pet') victim.status = 'worried';
        }
    }

    game.weather = getRandomWeather();
    advanceDay();

    playTravelAnimation(milesGained, () => { finishTravel(milesGained); });
}

function finishTravel(milesGained) {
    // Landmark check
    if (game.nextLandmark < LANDMARKS.length &&
        game.miles >= LANDMARKS[game.nextLandmark].mile) {
        const lm = LANDMARKS[game.nextLandmark];
        game.nextLandmark++;

        if (lm.mile >= TOTAL_MILES) { winGame(); return; }

        const lmCanvas = document.getElementById('landmark-canvas');
        drawLandmarkScene(lmCanvas, lm);
        document.getElementById('landmark-name').textContent = lm.name;
        document.getElementById('landmark-date').textContent =
            `${MONTH_NAMES[game.month]} ${game.day}, ${game.year}`;

        const continueBtn = document.getElementById('landmark-continue');

        // Check if there's a HOPE challenge for this landmark
        const challenge = HOPE_CHALLENGES.find(c => c.location === lm.name);
        if (challenge) {
            continueBtn.textContent = 'Press SPACE BAR to explore';
            continueBtn.onclick = () => { showHopeChallenge(challenge, lm); };
        } else if (lm.center) {
            continueBtn.textContent = 'Press SPACE BAR to visit';
            continueBtn.onclick = () => { openCenter(lm.name); };
        } else {
            continueBtn.textContent = 'Press SPACE BAR to continue';
            continueBtn.onclick = () => {
                // Check if another landmark was also passed
                if (game.nextLandmark < LANDMARKS.length &&
                    game.miles >= LANDMARKS[game.nextLandmark].mile) {
                    finishTravel(0);
                } else {
                    showScreen('game-screen');
                    updateUI();
                    showEvent(lm.name, `You've reached ${lm.name}. ${Math.floor(game.miles)} miles traveled.`);
                    showGameMenu();
                }
            };
        }
        showScreen('landmark-screen');
        updateUI();
        return;
    }

    // Random event
    if (Math.random() < 0.4) { triggerRandomEvent(); return; }

    // Normal travel
    showEvent('Driving...',
        `Date: ${MONTH_NAMES[game.month]} ${game.day}, ${game.year}<br>` +
        `Weather: ${game.weather}<br>` +
        `Miles today: ${milesGained}<br>` +
        `Total miles: ${Math.floor(game.miles)}`
    );

    if (game.food <= 0) {
        appendEvent('Your family has no food! Everyone is hungry and discouraged.');
        stressRandomMember();
        sfx_bad();
    }

    updateUI();
    checkGameOver();
    if (!game.gameOver) showGameMenu();
}

// =====================
// REST
// =====================
function doRest() {
    sfx_select();
    advanceDay();
    const alive = game.party.filter(m => m.status !== 'left').length;
    game.food -= alive * 0.5;
    if (game.food < 0) game.food = 0;

    // Rest heals worry
    const worried = game.party.filter(m => m.status === 'worried');
    if (worried.length > 0 && Math.random() < 0.5) {
        worried[0].status = 'healthy';
        showEvent('Rest stop', `${worried[0].name} feels better after resting. The family talks and shares stories of hope.`);
        sfx_good();
    } else {
        showEvent('Rest stop', 'Your family takes a break. Everyone feels a little refreshed.');
    }

    updateUI();
    checkGameOver();
    if (!game.gameOver) showGameMenu();
}

// =====================
// STATUS
// =====================
function doStatus() {
    sfx_select();
    let text = `Date: ${MONTH_NAMES[game.month]} ${game.day}, ${game.year}<br>`;
    text += `Weather: ${game.weather}<br>`;
    text += `Miles traveled: ${Math.floor(game.miles)} / ${TOTAL_MILES}<br>`;
    text += `Food: ${Math.floor(game.food)} meals<br>`;
    text += `Gas: ${game.gas} tanks<br>`;
    text += `Money: $${Math.floor(game.money)}<br>`;
    text += `Supplies: ${game.supplies}<br>`;
    text += `Spirits: ${getSpirits()}<br><br>`;
    text += `HOPE Score: ❤️${hopeScore.h} 🌿${hopeScore.o} 🗺️${hopeScore.p} ⚡${hopeScore.e}<br><br>`;
    text += 'Family: ';
    for (const m of game.party) {
        const icon = m.status === 'healthy' ? '♥' : m.status === 'worried' ? '▼' : '✝';
        text += `${icon}${m.name}(${m.status}) `;
    }
    showEvent('Status', text);
    showGameMenu();
}

// =====================
// COMMUNITY CENTER (fort replacement)
// =====================
function openCenter(name) {
    sfx_coin();
    showScreen('center-screen');
    document.getElementById('center-title').textContent = name;
    document.getElementById('center-money').textContent = '$' + Math.floor(game.money);
    document.getElementById('center-msg').innerHTML = '&nbsp;';

    const hasWorried = game.party.some(m => m.status === 'worried');
    document.getElementById('center-items').innerHTML = `
        <li><span class="menu-option" onclick="centerBuy('food')">Meals (5) ......... $10</span></li>
        <li><span class="menu-option" onclick="centerBuy('bigfood')">Meals (15) ........ $25</span></li>
        ${hasWorried ? '<li><span class="menu-option" onclick="centerBuy(\'counsel\')">Counseling ........ $15</span></li>' : ''}
        <li><span class="menu-option" onclick="centerBuy('gas')">Gas tank .......... $50</span></li>
        <li><span class="menu-option" onclick="centerBuy('supplies')">Supplies .......... $30</span></li>
        <li><span class="menu-option" onclick="leaveCenter()">Leave</span></li>
    `;
}

function centerBuy(item) {
    const msg = document.getElementById('center-msg');
    const prices = { food: 10, bigfood: 25, counsel: 15, gas: 50, supplies: 30 };
    if (game.money < prices[item]) { msg.textContent = "Can't afford that!"; sfx_bad(); return; }

    sfx_coin();
    game.money -= prices[item];

    if (item === 'food')      { game.food += 5;  msg.textContent = 'Got 5 meals.'; }
    if (item === 'bigfood')   { game.food += 15; msg.textContent = 'Got 15 meals.'; }
    if (item === 'gas')       { game.gas += 1;   msg.textContent = 'Filled 1 gas tank.'; }
    if (item === 'supplies')  { game.supplies += 1; msg.textContent = 'Got camping supplies.'; }
    if (item === 'counsel') {
        const worried = game.party.find(m => m.status === 'worried');
        if (worried) {
            worried.status = 'healthy';
            msg.textContent = `${worried.name} talked with a counselor and feels hopeful again.`;
            sfx_good();
        }
    }

    document.getElementById('center-money').textContent = '$' + Math.floor(game.money);
    openCenter(document.getElementById('center-title').textContent);
}

function leaveCenter() {
    sfx_select();
    showScreen('game-screen');
    updateUI();
    showEvent('Back on the road', 'Your family continues the journey.');
    showGameMenu();
}

// =====================
// HOPE CHALLENGES
// =====================
function showHopeChallenge(challenge, landmark) {
    sfx_hope();
    showScreen('hope-challenge-screen');
    document.getElementById('challenge-title').textContent = '🌱 Hope Moment — ' + challenge.location;
    document.getElementById('challenge-story').textContent = challenge.story;
    document.getElementById('challenge-question').textContent = challenge.question;
    document.getElementById('challenge-feedback').innerHTML = '&nbsp;';

    const optionsList = document.getElementById('challenge-options');
    optionsList.innerHTML = '';
    const markers = ['h', 'o', 'p', 'e'];
    const icons = ['❤️', '🌿', '🗺️', '⚡'];

    challenge.options.forEach((opt, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="menu-option" onclick="answerChallenge(${i}, ${challenge.correct}, '${challenge.marker}')">${icons[i]} ${opt}</span>`;
        optionsList.appendChild(li);
    });

    // Store current challenge/landmark for after answer
    game._currentChallenge = challenge;
    game._currentLandmark = landmark;
}

function answerChallenge(chosen, correct, marker) {
    const feedback = document.getElementById('challenge-feedback');
    const challenge = game._currentChallenge;
    const landmark = game._currentLandmark;

    if (chosen === correct) {
        sfx_hope();
        hopeScore[marker] += 2;
        feedback.innerHTML = `<span style="color: var(--hope-green)">✓ Correct!</span> +2 HOPE points!<br>${challenge.explanation}<br><br><span class="menu-option" onclick="afterChallenge()">Continue journey</span>`;
    } else {
        sfx_bad();
        hopeScore[marker] += 1;
        feedback.innerHTML = `<span style="color: var(--hope-yellow)">Not quite.</span> +1 HOPE point for trying!<br>${challenge.explanation}<br><br><span class="menu-option" onclick="afterChallenge()">Continue journey</span>`;
    }
    // Disable options
    document.querySelectorAll('#challenge-options .menu-option').forEach(el => {
        el.style.pointerEvents = 'none';
        el.style.opacity = '0.5';
    });
}

function afterChallenge() {
    sfx_select();
    const landmark = game._currentLandmark;
    if (landmark && landmark.center) {
        openCenter(landmark.name);
    } else if (game.nextLandmark < LANDMARKS.length &&
               game.miles >= LANDMARKS[game.nextLandmark].mile) {
        // Another landmark was passed — show it
        finishTravel(0);
    } else {
        showScreen('game-screen');
        updateUI();
        showEvent(landmark.name, `You explored ${landmark.name} and found hope. ${Math.floor(game.miles)} miles traveled.`);
        showGameMenu();
    }
}

// =====================
// RANDOM EVENTS (eco-themed)
// =====================
function triggerRandomEvent() {
    const events = [
        eventFlatTire, eventBadWeather, eventBeautifulView,
        eventPollutedArea, eventCommunityCleanup, eventWildlife,
        eventFriendlyTravelers, eventGasShortage, eventFarmersMarket,
        eventForestFire, eventRecyclingCenter, eventSchoolVisit,
    ];
    events[Math.floor(Math.random() * events.length)]();
}

function eventFlatTire() {
    if (game.supplies > 0) {
        game.supplies--;
        showEvent('Flat tire!', 'You hit a pothole and got a flat. Luckily you had supplies to fix it.');
    } else {
        game.money -= 40;
        if (game.money < 0) game.money = 0;
        showEvent('Flat tire!', 'Flat tire with no supplies! A tow truck helped but it cost $40.');
        sfx_bad();
    }
    updateUI(); checkGameOver(); if (!game.gameOver) showGameMenu();
}

function eventBadWeather() {
    const types = ['Heavy rain slows your drive.', 'A thunderstorm forces you to pull over.', 'Fog reduces visibility to almost nothing.'];
    showEvent('Bad weather', types[Math.floor(Math.random() * types.length)] + ' You lose some time.');
    game.miles -= 15; if (game.miles < 0) game.miles = 0;
    updateUI(); showGameMenu();
}

function eventBeautifulView() {
    sfx_good();
    showEvent('🌄 Beautiful view!', 'Your family stops at a scenic overlook. The beauty of nature lifts everyone\'s spirits.');
    const worried = game.party.find(m => m.status === 'worried');
    if (worried) { worried.status = 'healthy'; appendEvent(`${worried.name} feels hopeful again.`); }
    updateUI(); showGameMenu();
}

function eventPollutedArea() {
    showEvent('Pollution', 'You drive through an area with heavy air pollution. A factory spews smoke into the sky. Your family feels sad about the damage.');
    sfx_bad();
    stressRandomMember();
    updateUI(); checkGameOver(); if (!game.gameOver) showGameMenu();
}

function eventCommunityCleanup() {
    sfx_hope();
    hopeScore.e += 1;
    showEvent('🌿 Community cleanup!', 'You pass a group of volunteers cleaning a beach! Your child waves and they wave back. Seeing people take action gives your family hope. (+1 Agency)');
    updateUI(); showGameMenu();
}

function eventWildlife() {
    sfx_good();
    showEvent('🦌 Wildlife sighting', 'A family of deer crosses the road ahead. Your family watches in wonder. Nature persists.');
    hopeScore.o += 1;
    appendEvent('+1 Belief — nature finds a way!');
    updateUI(); showGameMenu();
}

function eventFriendlyTravelers() {
    sfx_good();
    const share = Math.floor(Math.random() * 5) + 3;
    game.food += share;
    showEvent('Friendly travelers', `You meet another family at a rest stop. They share ${share} meals and stories about their journey.`);
    updateUI(); showGameMenu();
}

function eventGasShortage() {
    if (game.gas > 0) {
        game.gas--;
        showEvent('Long stretch', 'The drive between gas stations was longer than expected. You used an extra tank of gas.');
    } else {
        game.money -= 60;
        if (game.money < 0) game.money = 0;
        showEvent('Ran out of gas!', 'You ran out of gas! A kind stranger brought you some, but it cost $60.');
        sfx_bad();
    }
    updateUI(); checkGameOver(); if (!game.gameOver) showGameMenu();
}

function eventFarmersMarket() {
    sfx_coin();
    const meals = Math.floor(Math.random() * 5) + 5;
    game.food += meals;
    game.money -= 15;
    if (game.money < 0) game.money = 0;
    showEvent('🌽 Farmers market!', `You stop at a local farmers market and buy ${meals} fresh meals for $15. The farmer tells you about sustainable agriculture.`);
    hopeScore.p += 1;
    appendEvent('+1 Plans — sustainable farming is a path forward!');
    updateUI(); showGameMenu();
}

function eventForestFire() {
    showEvent('🔥 Forest fire detour', 'A wildfire forces a long detour. You see scorched land but also new green growth pushing through the ash.');
    game.miles -= 20; if (game.miles < 0) game.miles = 0;
    sfx_bad();
    hopeScore.o += 1;
    appendEvent('+1 Belief — new growth through the ash shows nature recovers.');
    updateUI(); showGameMenu();
}

function eventRecyclingCenter() {
    sfx_hope();
    hopeScore.h += 1;
    showEvent('♻️ Recycling center', 'You pass a massive recycling facility. A sign reads: "You can make a difference." Your child says they want to recycle more at home.');
    appendEvent('+1 Motivation — the desire to change!');
    updateUI(); showGameMenu();
}

function eventSchoolVisit() {
    sfx_hope();
    hopeScore.e += 1;
    showEvent('🏫 School visit', 'At a rest stop, you see a school group planting trees. The kids are laughing and covered in dirt. "We planted 50 today!" one shouts.');
    appendEvent('+1 Agency — kids taking real action!');
    updateUI(); showGameMenu();
}

// =====================
// UTILITY
// =====================
function advanceDay() {
    game.day += 2;
    if (game.day > 28) { game.day = 1; game.month++; if (game.month > 11) { game.month = 0; game.year++; } }
}

function stressRandomMember() {
    const healthy = game.party.filter(m => m.status === 'healthy' && m.role !== 'Pet');
    if (healthy.length > 0) {
        const victim = healthy[Math.floor(Math.random() * healthy.length)];
        victim.status = 'worried';
    }
}

function getRandomWeather() {
    const weathers = ['clear', 'cloudy', 'rainy', 'windy', 'sunny', 'foggy'];
    return weathers[Math.floor(Math.random() * weathers.length)];
}

function checkGameOver() {
    if (game.food <= 0 && game.money <= 0) {
        loseGame();
    }
}

function winGame() {
    sfx_win();
    game.gameOver = true;
    const total = hopeScore.h + hopeScore.o + hopeScore.p + hopeScore.e;

    let rating;
    if (total >= 20) rating = '🌟 HOPE Champion!';
    else if (total >= 14) rating = '🌿 Hope Builder';
    else if (total >= 8) rating = '🌱 Hope Seeker';
    else rating = '💚 Hope Beginner';

    document.getElementById('end-title').textContent = '🎉 You made it!';
    document.getElementById('end-message').innerHTML =
        `The ${game.party[0].name} family arrived at Hope Valley, Oregon!<br><br>` +
        `Along the way, you found hope in stories of change, recovery, plans, and action.<br><br>` +
        `Your HOPE rating: <strong>${rating}</strong>`;
    document.getElementById('end-hope-summary').innerHTML =
        `<p>❤️ Motivation: ${hopeScore.h} &nbsp; 🌿 Belief: ${hopeScore.o} &nbsp; 🗺️ Plans: ${hopeScore.p} &nbsp; ⚡ Agency: ${hopeScore.e}</p>` +
        `<p>Total HOPE: ${total}</p>`;
    showScreen('end-screen');
}

function loseGame() {
    game.gameOver = true;
    const total = hopeScore.h + hopeScore.o + hopeScore.p + hopeScore.e;

    document.getElementById('end-title').textContent = 'Journey paused...';
    document.getElementById('end-message').innerHTML =
        `The ${game.party[0].name} family ran out of resources at mile ${Math.floor(game.miles)}.<br><br>` +
        `But every journey toward hope has setbacks. The markers you found still matter.<br><br>` +
        `You collected ${total} HOPE points. Try again and find even more!`;
    document.getElementById('end-hope-summary').innerHTML =
        `<p>❤️ Motivation: ${hopeScore.h} &nbsp; 🌿 Belief: ${hopeScore.o} &nbsp; 🗺️ Plans: ${hopeScore.p} &nbsp; ⚡ Agency: ${hopeScore.e}</p>`;
    showScreen('end-screen');
}

// =====================
// JOURNEY MAP
// =====================
// Approximate pixel positions for landmarks on a simplified US map
// Canvas is 580 x 340
const MAP_ROUTE_SOUTH = [
    { name: 'Greenville, SC',              x: 460, y: 195 },
    { name: 'Blue Ridge Parkway',           x: 445, y: 175 },
    { name: 'Asheville Community Garden',   x: 430, y: 170 },
    { name: 'Great Smoky Mountains',        x: 415, y: 175 },
    { name: 'Nashville Green Hub',          x: 375, y: 175 },
    { name: 'Mississippi River',            x: 340, y: 185 },
    { name: 'Ozark Wilderness',             x: 310, y: 175 },
    { name: 'Kansas Prairie Restoration',   x: 265, y: 155 },
    { name: 'Colorado River Crossing',      x: 210, y: 150 },
    { name: 'Rocky Mountain Refuge',        x: 185, y: 130 },
    { name: 'Yellowstone Gateway',          x: 180, y: 100 },
    { name: 'Pacific Northwest Trail',      x: 120, y: 85  },
    { name: 'Hope Valley, OR',              x: 95,  y: 100 },
];

const MAP_ROUTE_NORTH = [
    { name: 'Greenville, SC',              x: 460, y: 195 },
    { name: 'Blue Ridge Parkway',           x: 445, y: 175 },
    { name: 'Asheville Community Garden',   x: 430, y: 170 },
    { name: 'Great Smoky Mountains',        x: 415, y: 175 },
    { name: 'Nashville Green Hub',          x: 375, y: 175 },
    { name: 'Mississippi River',            x: 340, y: 185 },
    { name: 'St. Paul, Minnesota',          x: 320, y: 95  },
    { name: 'Minnesota State Fair',         x: 318, y: 90  },
    { name: 'University of Minnesota',      x: 315, y: 85  },
    { name: 'North Dakota Prairie',         x: 255, y: 65  },
    { name: 'Montana Wilderness',           x: 195, y: 55  },
    { name: 'Glacier National Park',        x: 165, y: 50  },
    { name: 'Pacific Northwest Trail',      x: 115, y: 70  },
    { name: 'Hope Valley, OR',              x: 95,  y: 100 },
];

let MAP_ROUTE = MAP_ROUTE_SOUTH;

function drawMap(canvas) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background — dark map style
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, w, h);

    // Draw simplified US outline
    ctx.strokeStyle = '#2a4a2a';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#1a2a1a';
    ctx.beginPath();
    // Simplified continental US shape
    ctx.moveTo(85, 60);    // WA
    ctx.lineTo(80, 110);   // OR coast
    ctx.lineTo(75, 170);   // CA coast
    ctx.lineTo(90, 230);   // Southern CA
    ctx.lineTo(130, 250);  // AZ border
    ctx.lineTo(180, 260);  // NM
    ctx.lineTo(230, 270);  // TX west
    ctx.lineTo(280, 290);  // TX south
    ctx.lineTo(310, 280);  // TX coast
    ctx.lineTo(340, 260);  // LA
    ctx.lineTo(370, 250);  // MS/AL coast
    ctx.lineTo(430, 235);  // FL panhandle
    ctx.lineTo(470, 270);  // FL
    ctx.lineTo(490, 240);  // FL east
    ctx.lineTo(495, 210);  // GA coast
    ctx.lineTo(500, 180);  // SC coast
    ctx.lineTo(505, 150);  // NC coast
    ctx.lineTo(510, 120);  // VA coast
    ctx.lineTo(520, 100);  // MD/DE
    ctx.lineTo(515, 80);   // NJ
    ctx.lineTo(500, 60);   // NY/CT
    ctx.lineTo(510, 45);   // MA
    ctx.lineTo(505, 35);   // ME start
    ctx.lineTo(490, 20);   // ME top
    ctx.lineTo(470, 30);   // VT/NH
    ctx.lineTo(440, 50);   // NY
    ctx.lineTo(380, 55);   // Great Lakes
    ctx.lineTo(360, 45);   // MI
    ctx.lineTo(330, 60);   // WI
    ctx.lineTo(290, 50);   // MN
    ctx.lineTo(240, 45);   // ND
    ctx.lineTo(190, 40);   // MT
    ctx.lineTo(120, 35);   // WA/ID
    ctx.lineTo(85, 60);    // Back to WA
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw route line (full path, dimmed)
    ctx.strokeStyle = '#2a5a2a';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(MAP_ROUTE[0].x, MAP_ROUTE[0].y);
    for (let i = 1; i < MAP_ROUTE.length; i++) {
        ctx.lineTo(MAP_ROUTE[i].x, MAP_ROUTE[i].y);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw traveled route (bright)
    const progress = Math.min(game.miles / TOTAL_MILES, 1);
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(MAP_ROUTE[0].x, MAP_ROUTE[0].y);
    // Walk through landmarks, drawing up to current progress
    for (let i = 1; i < MAP_ROUTE.length; i++) {
        const lmMile = LANDMARKS[i].mile;
        if (game.miles >= lmMile) {
            ctx.lineTo(MAP_ROUTE[i].x, MAP_ROUTE[i].y);
        } else {
            // Partial segment
            const prevMile = LANDMARKS[i - 1].mile;
            const segProgress = (game.miles - prevMile) / (lmMile - prevMile);
            const px = MAP_ROUTE[i - 1].x + (MAP_ROUTE[i].x - MAP_ROUTE[i - 1].x) * segProgress;
            const py = MAP_ROUTE[i - 1].y + (MAP_ROUTE[i].y - MAP_ROUTE[i - 1].y) * segProgress;
            ctx.lineTo(px, py);
            break;
        }
    }
    ctx.stroke();

    // Draw landmark dots
    for (let i = 0; i < MAP_ROUTE.length; i++) {
        const lm = MAP_ROUTE[i];
        const visited = game.miles >= LANDMARKS[i].mile;

        // Dot
        ctx.beginPath();
        ctx.arc(lm.x, lm.y, visited ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = visited ? '#34d399' : '#555';
        ctx.fill();
        ctx.strokeStyle = visited ? '#6ee7b7' : '#333';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label (only show a few to avoid clutter)
        if (i === 0 || i === MAP_ROUTE.length - 1 || LANDMARKS[i].center || visited) {
            ctx.fillStyle = visited ? '#d4e8d4' : '#666';
            ctx.font = '7px "Press Start 2P", monospace';
            ctx.textAlign = 'center';
            // Short name
            const shortName = lm.name.split(',')[0].split(' ').slice(0, 2).join(' ');
            const labelY = lm.y < 100 ? lm.y + 14 : lm.y - 10;
            ctx.fillText(shortName, lm.x, labelY);
        }
    }

    // Draw car at current position
    let carX, carY;
    for (let i = 1; i < MAP_ROUTE.length; i++) {
        if (game.miles < LANDMARKS[i].mile) {
            const prevMile = LANDMARKS[i - 1].mile;
            const segProgress = (game.miles - prevMile) / (LANDMARKS[i].mile - prevMile);
            carX = MAP_ROUTE[i - 1].x + (MAP_ROUTE[i].x - MAP_ROUTE[i - 1].x) * segProgress;
            carY = MAP_ROUTE[i - 1].y + (MAP_ROUTE[i].y - MAP_ROUTE[i - 1].y) * segProgress;
            break;
        }
        if (i === MAP_ROUTE.length - 1) {
            carX = MAP_ROUTE[i].x;
            carY = MAP_ROUTE[i].y;
        }
    }
    if (carX === undefined) { carX = MAP_ROUTE[0].x; carY = MAP_ROUTE[0].y; }

    // Van icon on map
    ctx.fillStyle = '#3388cc';
    ctx.fillRect(carX - 8, carY - 5, 16, 10);
    ctx.fillStyle = '#aaddff';
    ctx.fillRect(carX - 6, carY - 4, 4, 4);
    ctx.fillStyle = '#333';
    ctx.beginPath(); ctx.arc(carX - 4, carY + 6, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(carX + 4, carY + 6, 3, 0, Math.PI * 2); ctx.fill();

    // Pulsing glow around car
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5 + 0.5 * Math.sin(Date.now() * 0.003);
    ctx.beginPath(); ctx.arc(carX, carY, 12, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;

    // Region label
    const region = getRegion(game.miles);
    ctx.fillStyle = '#34d399';
    ctx.font = '9px "Press Start 2P", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(region.name, 10, 20);

    // Miles info
    ctx.fillStyle = '#d4e8d4';
    ctx.font = '8px "Press Start 2P", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`${Math.floor(game.miles)} / ${TOTAL_MILES} miles`, w - 10, 20);

    // Map info panel
    const mapInfo = document.getElementById('map-info');
    const nextLm = LANDMARKS[game.nextLandmark];
    const milesLeft = nextLm ? nextLm.mile - Math.floor(game.miles) : 0;
    mapInfo.innerHTML = `<p>Next stop: <strong>${nextLm ? nextLm.name : 'Hope Valley!'}</strong> (${milesLeft} miles away)</p>`;
}

function showMap() {
    sfx_select();
    drawMap(document.getElementById('map-canvas'));
    showScreen('map-screen');
}

function closeMap() {
    sfx_select();
    showScreen('game-screen');
    updateUI();
    showGameMenu();
}
