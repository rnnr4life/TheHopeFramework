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
